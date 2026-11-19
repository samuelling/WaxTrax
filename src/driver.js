// Drives the stylus simulation from game state. Used by the AudioWorklet and, as a
// fallback, by a ScriptProcessor on the main thread.
import { StylusSim } from './stylus-core.js';
import { GROOVE } from './cutter.js';

export class StylusDriver {
  constructor(fs, post) {
    this.fs = fs; this.post = post; this.sim = new StylusSim(fs);
    this.c = { t: 0, q: 0, qRate: 0, rho: 0, rhoRate: 0, hb: -GROOVE.D, g: 1, follow: true, sway: 0 };
    this.q = 0; this.rate = 0; this.yb = 0; this.hb = -GROOVE.D; this.g = 1;
    this.gain = 0; this.gainT = 1; this.ready = false; this.snap = true; this.telN = 0; this.haveCtl = false;
  }
  onMessage(m) {
    if (m.type === 'record') { this.sim.setRecord(m); this.ready = true; this.snap = true; this.haveCtl = false; }
    else if (m.type === 'layout') { const s = this.sim; s.spr = m.spr; s.totalRevs = m.totalRevs; s.leadIn = m.leadIn; s.P = m.pitchUm; this.snap = true; }
    else if (m.type === 'ctl') { this.c = m; this.haveCtl = true; if (m.snap) this.snap = true; }
    else if (m.type === 'set') { if (m.gain != null) this.gainT = m.gain; if (m.vtf != null) this.sim.VTF = m.vtf * 9806.65; if (m.noise != null) this.sim.noiseGain = m.noise; }
    else if (m.type === 'eject') { this.ready = false; this.sim.setRecord({ dA: null, dB: null, spr: this.sim.spr, leadIn: 1, totalRevs: 0, sens: 1 }); }
  }
  render(L, R, total, time) {
    if (!this.ready || !this.haveCtl) { L.fill(0); R.fill(0); return; }
    const fs = this.fs, sim = this.sim, P = sim.P;
    for (let o = 0; o < total; o += 128) {
      const n = Math.min(128, total - o), c = this.c;
      let dtc = time + o / fs - c.t; if (dtc > 0.3) dtc = 0.3; else if (dtc < -0.1) dtc = -0.1;
      const qT = c.q + c.qRate * dtc;
      const ybT = c.follow ? 0 : (c.rho + c.rhoRate * dtc) * P;
      if (this.snap || Math.abs(qT - this.q) > 0.02) {
        this.q = qT; this.rate = c.qRate; this.hb = c.hb; this.g = c.g;
        this.yb = c.follow ? (qT + c.sway) * P : ybT; sim.seat(this.yb, this.hb); this.snap = false;
      }
      // phase-locked loop: follow the game's position without zipper noise in the pitch
      const want = c.qRate + (qT - this.q) * 3;
      this.rate += (want - this.rate) * 0.25;
      const q1 = this.q + this.rate * n / fs;
      const yb1 = c.follow ? (q1 + c.sway) * P : this.yb + (ybT - this.yb) * 0.5;
      const hb1 = this.hb + (c.hb - this.hb) * 0.5;
      this.g += (c.g - this.g) * 0.5;
      this.gain += (this.gainT - this.gain) * 0.05;
      sim.process(o ? L.subarray(o, o + n) : (n === total ? L : L.subarray(0, n)), o ? R.subarray(o, o + n) : (n === total ? R : R.subarray(0, n)), n, this.q, q1, this.yb, yb1, this.hb, hb1, this.g < 0 ? 0 : this.g, this.gain);
      this.q = q1; this.yb = sim.ys === sim.ys ? yb1 : yb1; this.hb = hb1;
      this.telN += n;
      if (this.telN >= 768) {
        this.telN = 0; const t = sim.tel, sub = Math.max(1, t.sub);
        this.post({ type: 'tel', q: this.q, rate: this.rate, n: t.grooveN, e: t.e, ty: sim.ys - this.yb, tz: sim.zs, ay: sim.ya - this.yb, az: sim.za, cA: t.cA / sub, cB: t.cB / sub, cL: t.cL / sub, pk: t.pk, scope: sim.scope.slice(), scI: sim.scI });
        t.cA = t.cB = t.cL = t.sub = 0; t.pk = 0;
      }
    }
  }
}
