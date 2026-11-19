// Stylus / cantilever / tonearm simulation, in real record units (µm, kg, s; forces in µN).
//
// The model, per axis pair (y = across the record, + toward the spindle; z = up):
//
//   buggy ──(pivot stops, damping)── arm mass ──(cantilever compliance, damping, stops)── tip mass
//                                                                                          │
//                                             tracking force ↓                 Hertzian contact, one-sided,
//                                                                              with each 45° groove wall or the land
//
// The groove walls move with the recorded programme (cutter.js). The tip is a sphere, so
// the wall it "sees" is the recorded wall dilated by the tip radius along the groove
// (tracing distortion, worse where the groove runs slowly near the label). Contact can only
// push, so the tip can lose a wall (mistracking), climb out, ride the land and drop into the
// neighbouring groove. The generator output is the velocity of the tip relative to the
// cartridge body, resolved along the two wall normals, followed by RIAA playback EQ.

import { GROOVE, riaa } from './cutter.js';

const S2 = Math.SQRT2, IS2 = Math.SQRT1_2;

export class StylusSim {
  constructor(fs) {
    this.fs = fs; this.NS = 4; this.dt = 1 / (fs * this.NS);
    // cartridge + arm
    this.mt = 0.6e-6;        // kg  effective tip mass (0.6 mg)
    this.Ma = 0.018;         // kg  effective arm mass
    this.kc = 83;            // N/m cantilever suspension (12 µm/mN compliance) → 10.8 Hz with the arm
    this.cc = 0.05;          // N·s/m suspension damping
    this.cArm = 0.35;        // N·s/m arm damping against the chassis
    this.VTF = 25000;        // µN  tracking force (2.5 g)
    this.rTip = 8;           // µm  scanning radius of the tip (0.3 × 0.7 mil elliptical)
    // cantilever stops
    this.dSide = 24; this.dUp = 22; this.dHang = 15; this.kStop = 6000;
    // arm travel relative to the buggy
    this.Lf = 6; this.Tdown = 5; this.Tup = 14; this.rest = 5; this.kLim = 6000; this.cLim = 2;
    // vinyl contact: Hertz, F = κ·δ^1.5, tuned so the tip-mass/vinyl resonance sits at 17 kHz under load
    const F0 = this.VTF * IS2, kv = this.mt * Math.pow(2 * Math.PI * 17000, 2);
    this.d0 = 1.5 * F0 / kv; this.kappa = F0 / Math.pow(this.d0, 1.5);
    this.kMax = this.mt * Math.pow(2 * Math.PI * 30000, 2);
    this.dMax = Math.pow(this.kMax / (1.5 * this.kappa), 2); this.FdMax = this.kappa * Math.pow(this.dMax, 1.5);
    this.cv = 0.021;         // N·s/m vinyl loss
    this.mu = 0.04;          // sideways friction on the land
    // surface noise: a fixed texture on the vinyl, so the same spot always sounds the same
    this.NMASK = (1 << 18) - 1; this.noise = new Float32Array(this.NMASK + 1);
    let sd = 99991, br = 0; const rnd = () => { sd = (Math.imul(sd, 1664525) + 1013904223) >>> 0; return sd / 2147483648 - 1; };
    for (let i = 0; i <= this.NMASK; i++) { const w = rnd(); br = br * 0.996 + w; this.noise[i] = br * 0.00055 + w * 0.0004; }
    for (let i = 0; i < 4096; i++) { const f = i / 4096; this.noise[i] = this.noise[i] * f + this.noise[(this.NMASK + 1 - 4096 + i)] * 0; } // soft start of loop
    this.noiseGain = 1;
    // record
    this.dA = null; this.dB = null; this.len = 0; this.spr = fs * 10; this.leadIn = 1; this.totalRevs = 0; this.sens = 1;
    // state
    this.ys = 0; this.zs = -GROOVE.D; this.vys = 0; this.vzs = 0;
    this.ya = 0; this.za = -GROOVE.D; this.vya = 0; this.vza = 0;
    this.pPrevA = 0; this.pPrevB = 0; this.pPrevL = 0;
    // preamp
    const R = riaa(fs); this.rz = R.z2; this.ra1 = R.p1 + R.p3; this.ra2 = -R.p1 * R.p3; this.rg = R.gPlay;
    this.eq = new Float64Array(8);
    const K = Math.tan(Math.PI * 18 / fs), Q = 0.707, n = 1 / (1 + K / Q + K * K);
    this.hb0 = n; this.hb1 = -2 * n; this.hb2 = n; this.ha1 = 2 * (K * K - 1) * n; this.ha2 = (1 - K / Q + K * K) * n;
    this.hp = new Float64Array(8);
    // telemetry
    this.tel = { cA: 0, cB: 0, cL: 0, n: 0, sub: 0, e: 0, grooveN: 0, pos: 0, pk: 0 };
    this.wA = new Float64Array(10); this.wB = new Float64Array(10);
    this.scope = new Float32Array(256); this.scI = 0; this.scN = 0;
    this.tickBlock = -1; this.tickPos = -1; this.tickAmpA = 0; this.tickAmpB = 0;
  }

  setRecord(r) {
    this.dA = r.dA; this.dB = r.dB; this.len = r.dA ? r.dA.length : 0; this.spr = r.spr; this.leadIn = r.leadIn;
    this.totalRevs = r.totalRevs; this.sens = r.sens; this.realIn = r.realIn ?? 0.060; this.realOut = r.realOut ?? 0.1466;
  }

  // Put the stylus down at lateral position yb (µm), chassis height hb (µm).
  seat(yb, hb) {
    this.ys = this.ya = yb; this.zs = this.za = Math.min(0, hb) - 5; this.vys = this.vzs = this.vya = this.vza = 0;
    this.pPrevA = this.pPrevB = this.pPrevL = 0;
  }

  // Render n samples. q: position along the spiral in revolutions (q0 → q1 across the block),
  // yb: buggy lateral position in µm, hb: buggy ride height above the land in µm, g: load factor on the tracking force.
  process(outL, outR, n, q0, q1, yb0, yb1, hb0, hb1, g, gain) {
    const { NS, dt, mt, Ma, kc, cc, cArm, dSide, dUp, dHang, kStop, Lf, Tdown, Tup, rest, kLim, cLim, kappa, dMax, kMax, FdMax, cv, mu } = this;
    const P = GROOVE.P, D = GROOVE.D, fs = this.fs;
    const dA = this.dA, dB = this.dB, len = this.len, spr = this.spr, leadIn = this.leadIn, totalRevs = this.totalRevs;
    const noise = this.noise, NMASK = this.NMASK, wA = this.wA, wB = this.wB, ng = this.noiseGain;
    const invN = 1 / n, invNS = 1 / NS, VTF = this.VTF * g;
    const vyb = (yb1 - yb0) * invN * fs, vzb = (hb1 - hb0) * invN * fs;
    const sens = this.sens * 1e-6, eq = this.eq, hp = this.hp, tel = this.tel;
    const rz = this.rz, ra1 = this.ra1, ra2 = this.ra2, rg = this.rg;
    let ys = this.ys, zs = this.zs, vys = this.vys, vzs = this.vzs, ya = this.ya, za = this.za, vya = this.vya, vza = this.vza;
    let pPrevA = this.pPrevA, pPrevB = this.pPrevB, pPrevL = this.pPrevL;
    const invDt = 1 / dt, r2 = 1 / (2 * this.rTip);
    let cA = 0, cB = 0, cL = 0, pk = tel.pk;
    const havePts = !!dA;

    for (let s = 0; s < n; s++) {
      const fa = s * invN, yb = yb0 + (yb1 - yb0) * fa, hb = hb0 + (hb1 - hb0) * fa;
      const qa = q0 + (q1 - q0) * fa, dq = (q1 - q0) * invN * invNS;
      let accA = 0, accB = 0;
      for (let k = 0; k < NS; k++) {
        const q = qa + dq * (k + 1);
        const fr = q - Math.floor(q);
        const u = ys / P - fr, gn = Math.round(u), e = (u - gn) * P, rev = gn + fr;
        let FA = 0, FB = 0, FL = 0;
        const pL = -zs;
        if (rev >= 0 && rev < totalRevs) {
          // wall positions under the tip, with tracing (dilation by the tip sphere)
          let aE = 0, bE = 0;
          const pos = (rev - leadIn) * spr, i0 = Math.floor(pos), t = pos - i0;
          // metres of groove per sample at this radius on a real 33⅓ LP, in µm
          const rr = this.realOut - (rev / totalRevs) * (this.realOut - this.realIn);
          const dx = 3.4907 * rr / fs * 1e6;
          if (havePts && i0 >= 4 && i0 < len - 6) {
            for (let j = 0; j < 10; j++) { const ii = i0 - 4 + j; wA[j] = dA[ii] + noise[ii & NMASK] * ng; wB[j] = dB[ii] + noise[(ii + 91733) & NMASK] * ng; }
          } else {
            for (let j = 0; j < 10; j++) { const ii = i0 - 4 + j; wA[j] = noise[ii & NMASK] * ng; wB[j] = noise[(ii + 91733) & NMASK] * ng; }
          }
          // dust and scratches: sparse, fixed in place on the record
          const blk = i0 >> 12;
          if (blk !== this.tickBlock) {
            this.tickBlock = blk; let h = Math.imul(blk ^ 0x9e3779b9, 0x85ebca6b); h ^= h >>> 13; h = Math.imul(h, 0xc2b2ae35); h ^= h >>> 16;
            if ((h & 255) < 9 * ng) { this.tickPos = (blk << 12) + ((h >>> 8) & 4095); this.tickAmpA = (((h >>> 20) & 15) / 15 - 0.4) * 1.4; this.tickAmpB = (((h >>> 24) & 15) / 15 - 0.6) * 1.4; }
            else this.tickPos = -1e9;
          }
          const td = this.tickPos - i0;
          if (td > -5 && td < 6) { wA[td + 4] += this.tickAmpA; wB[td + 4] += this.tickAmpB; if (td + 5 < 10) { wA[td + 5] -= this.tickAmpA * 0.5; wB[td + 5] -= this.tickAmpB * 0.5; } }
          const t2 = t * t, t3 = t2 * t;
          const c0 = -0.5 * t3 + t2 - 0.5 * t, c1 = 1.5 * t3 - 2.5 * t2 + 1, c2 = -1.5 * t3 + 2 * t2 + 0.5 * t, c3 = 0.5 * t3 - 0.5 * t2;
          aE = -1e9; bE = -1e9;
          for (let j = -3; j <= 3; j++) {
            const o = j + 3, pen = (j * dx) * (j * dx) * r2;
            const va = c0 * wA[o] + c1 * wA[o + 1] + c2 * wA[o + 2] + c3 * wA[o + 3] - pen; if (va > aE) aE = va;
            const vb = c0 * wB[o] + c1 * wB[o + 1] + c2 * wB[o + 2] + c3 * wB[o + 3] - pen; if (vb > bE) bE = vb;
          }
          const pA = (-e - D + S2 * aE - zs) * IS2, pB = (e - D + S2 * bE - zs) * IS2;
          // inner ridge: wall A or the land, whichever face is nearer
          let dLand = 0;
          if (pA > 0 && pL > 0) {
            if (pA < pL) {
              const d = pA; let F = d < dMax ? kappa * d * Math.sqrt(d) : FdMax + kMax * (d - dMax);
              if (pPrevA > 0) F += cv * (d - pPrevA) * invDt; if (F > 0) FA = F; pPrevA = d;
            } else { dLand = pL; pPrevA = 0; }
          } else pPrevA = 0;
          // outer ridge: wall B or the land
          if (pB > 0 && pL > 0) {
            if (pB < pL) {
              const d = pB; let F = d < dMax ? kappa * d * Math.sqrt(d) : FdMax + kMax * (d - dMax);
              if (pPrevB > 0) F += cv * (d - pPrevB) * invDt; if (F > 0) FB = F; pPrevB = d;
            } else { dLand = pL; pPrevB = 0; }
          } else pPrevB = 0;
          if (dLand > 0) {
            const d = dLand; let F = d < dMax ? kappa * d * Math.sqrt(d) : FdMax + kMax * (d - dMax);
            if (pPrevL > 0) F += cv * (d - pPrevL) * invDt; if (F > 0) FL = F; pPrevL = d;
          } else pPrevL = 0;
        } else if (pL > 0) {
          // uncut vinyl: flat
          const d = pL; let F = d < dMax ? kappa * d * Math.sqrt(d) : FdMax + kMax * (d - dMax);
          if (pPrevL > 0) F += cv * (d - pPrevL) * invDt; if (F > 0) FL = F; pPrevL = d; pPrevA = pPrevB = 0;
        } else { pPrevL = pPrevA = pPrevB = 0; }
        if (FA > 0) cA++; if (FB > 0) cB++; if (FL > 0) cL++;

        let Fy = (FA - FB) * IS2, Fz = (FA + FB) * IS2 + FL;
        if (FL > 0) { const x = vys * 0.02; Fy -= mu * FL * (x > 1 ? 1 : x < -1 ? -1 : x); }
        // cantilever suspension, with stops
        const dy = ya - ys, dz = za - zs;
        let Fsy = kc * dy + cc * (vya - vys), Fsz = kc * dz + cc * (vza - vzs);
        if (dy > dSide) Fsy += kStop * (dy - dSide); else if (dy < -dSide) Fsy += kStop * (dy + dSide);
        if (dz > dHang) Fsz += kStop * (dz - dHang); else if (dz < -dUp) Fsz += kStop * (dz + dUp);
        // arm against the chassis
        let Fay = -Fsy - cArm * (vya - vyb), Faz = -Fsz - cArm * (vza - vzb);
        const da = ya - yb;
        if (da > Lf) Fay -= kLim * (da - Lf) + cLim * (vya - vyb); else if (da < -Lf) Fay -= kLim * (da + Lf) + cLim * (vya - vyb);
        const lo = hb - rest - Tdown, hi = hb - rest + Tup;
        if (za < lo) Faz += kLim * (lo - za) - cLim * (vza - vzb); else if (za > hi) Faz -= kLim * (za - hi) + cLim * (vza - vzb);
        // integrate (semi-implicit Euler)
        vys += (Fy + Fsy) / mt * dt; vzs += (Fz + Fsz - VTF) / mt * dt;
        vya += Fay / Ma * dt; vza += Faz / Ma * dt;
        ys += vys * dt; zs += vzs * dt; ya += vya * dt; za += vza * dt;
        const ry = vys - vya, rz2 = vzs - vza;
        accA += (ry + rz2) * IS2; accB += (-ry + rz2) * IS2;
        if (k === NS - 1) { tel.e = e; tel.grooveN = gn; tel.pos = rev; }
      }
      if ((this.scN++ & 7) === 0) { const si = this.scI; this.scope[si] = ys - ya; this.scope[si + 1] = zs - za; this.scI = (si + 2) & 255; }
      // generator → RIAA playback → rumble filter → output stage
      let xl = -accB * invNS * sens, xr = accA * invNS * sens;
      let yl = rg * (xl - rz * eq[0]) + ra1 * eq[1] + ra2 * eq[2]; eq[0] = xl; eq[2] = eq[1]; eq[1] = yl;
      let yr = rg * (xr - rz * eq[4]) + ra1 * eq[5] + ra2 * eq[6]; eq[4] = xr; eq[6] = eq[5]; eq[5] = yr;
      let ol = this.hb0 * yl + this.hb1 * hp[0] + this.hb2 * hp[1] - this.ha1 * hp[2] - this.ha2 * hp[3]; hp[1] = hp[0]; hp[0] = yl; hp[3] = hp[2]; hp[2] = ol;
      let or = this.hb0 * yr + this.hb1 * hp[4] + this.hb2 * hp[5] - this.ha1 * hp[6] - this.ha2 * hp[7]; hp[5] = hp[4]; hp[4] = yr; hp[7] = hp[6]; hp[6] = or;
      ol *= gain; or *= gain;
      const al = ol < 0 ? -ol : ol, ar = or < 0 ? -or : or; if (al > pk) pk = al; if (ar > pk) pk = ar;
      // output stage clips softly, like an overdriven phono preamp
      outL[s] = al < 0.6 ? ol : Math.sign(ol) * (0.6 + 0.38 * Math.tanh((al - 0.6) / 0.38));
      outR[s] = ar < 0.6 ? or : Math.sign(or) * (0.6 + 0.38 * Math.tanh((ar - 0.6) / 0.38));
    }
    // guard against a blow-up ever reaching the speakers
    if (!(ys === ys) || !(zs === zs) || Math.abs(zs) > 1e5 || Math.abs(ys - yb1) > 1e5) {
      this.seat(yb1, hb1); this.eq.fill(0); this.hp.fill(0); for (let s = 0; s < n; s++) { outL[s] = 0; outR[s] = 0; }
      return;
    }
    this.ys = ys; this.zs = zs; this.vys = vys; this.vzs = vzs; this.ya = ya; this.za = za; this.vya = vya; this.vza = vza;
    this.pPrevA = pPrevA; this.pPrevB = pPrevB; this.pPrevL = pPrevL;
    tel.cA += cA; tel.cB += cB; tel.cL += cL; tel.sub += n * NS; tel.pk = pk;
  }
}
