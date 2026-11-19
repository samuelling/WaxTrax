// Cutting lathe: turns a stereo recording into the geometry of a 45/45 stereo groove.
//
//   audio → elliptical EQ (bass to mono) → RIAA recording pre-emphasis → cutter velocity
//         → integrate → displacement of each groove wall along its own normal (µm)
//
// Wall B (the inner wall, nearer the spindle) carries the left channel with inverted sign
// and wall A (the outer wall) carries the right channel, so that L = R (mono) moves the
// groove purely side to side and L = −R moves it purely up and down.

export const GROOVE = {
  P: 110,   // µm, groove pitch (centre to centre)
  D: 32,    // µm, depth of the stylus-centre locus below the land
  // 45° walls, so the groove top is 2·D = 64 µm wide and the land is 46 µm wide
  LAT_MAX: 21,   // µm, largest lateral excursion the lathe allows (keeps land between grooves)
  VERT_MAX: 12,  // µm, largest vertical excursion (keeps the groove from vanishing)
  V0: 0.28,      // m/s of wall velocity per digital full scale at 1 kHz, before level trims
};

// RIAA time constants, realised with matched poles/zeros so that the recording and
// playback filters are exact inverses of each other in the digital domain.
export function riaa(fs) {
  const p1 = Math.exp(-1 / (3180e-6 * fs)), z2 = Math.exp(-1 / (318e-6 * fs)), p3 = Math.exp(-1 / (75e-6 * fs));
  const w = 2 * Math.PI * 1000 / fs, c = Math.cos(w), s = Math.sin(w);
  const mag = (r) => Math.hypot(1 - r * c, r * s);
  const gPlay = mag(p1) * mag(p3) / mag(z2); // makes playback gain 1 at 1 kHz
  return { p1, z2, p3, gPlay };
}

export function cutRecord(chL, chR, fs) {
  const N = chL.length;
  // programme loudness → cutting level
  let ss = 0, cnt = 0;
  for (let i = 0; i < N; i += 3) { const a = chL[i], b = chR[i]; const e = a * a + b * b; if (e > 1e-6) { ss += e; cnt += 2; } }
  const rms = Math.sqrt(ss / Math.max(1, cnt));
  const loud = Math.min(6, Math.max(0.2, 0.126 / Math.max(1e-5, rms)));

  const { p1, z2, p3, gPlay } = riaa(fs);
  const b1 = -(p1 + p3), b2 = p1 * p3, gRec = 1 / gPlay;
  // 2-pole low-pass at 16 kHz (the lathe's bandwidth)
  const fcl = Math.min(16000, fs * 0.42), K = Math.tan(Math.PI * fcl / fs), Q = Math.SQRT1_2, nrm = 1 / (1 + K / Q + K * K);
  const l0 = K * K * nrm, l1 = 2 * l0, l2 = l0, m1 = 2 * (K * K - 1) * nrm, m2 = (1 - K / Q + K * K) * nrm;
  const aS = Math.exp(-2 * Math.PI * 140 / fs);     // elliptical EQ corner
  const leak = Math.exp(-2 * Math.PI * 6 / fs), aDC = Math.exp(-2 * Math.PI * 4 / fs);
  const V0 = GROOVE.V0 * loud, vmax = 0.32;

  const dA = new Float32Array(N), dB = new Float32Array(N);
  let sLP = 0;
  // per-channel state: lowpass (x1,x2,y1,y2), riaa (x1,x2,y1), integrator, dc
  const st = [new Float64Array(10), new Float64Array(10)];
  let pkV = 0;
  for (let i = 0; i < N; i++) {
    const l = chL[i], r = chR[i];
    const M = 0.5 * (l + r), S = 0.5 * (l - r);
    sLP = S + (sLP - S) * aS; const Sh = S - sLP;
    for (let ch = 0; ch < 2; ch++) {
      const s = st[ch]; const x = ch === 0 ? M + Sh : M - Sh;
      const y = l0 * x + l1 * s[0] + l2 * s[1] - m1 * s[2] - m2 * s[3]; s[1] = s[0]; s[0] = x; s[3] = s[2]; s[2] = y;
      let v = gRec * (y + b1 * s[4] + b2 * s[5]) + z2 * s[6]; s[5] = s[4]; s[4] = y; s[6] = v;
      v = vmax * Math.tanh(v * V0 / vmax);                         // acceleration/velocity limiter, m/s
      const av = v < 0 ? -v : v; if (av > pkV) pkV = av;
      const d = s[7] * leak + v / fs; s[7] = d;                    // metres
      const dc = s[8] = d + (s[8] - d) * aDC;
      const out = (d - dc) * 1e6;                                  // µm
      if (ch === 0) dB[i] = -out; else dA[i] = out;
    }
  }
  // keep the groove inside its lane
  let latMax = 0, vertMax = 0;
  for (let i = 0; i < N; i++) { const a = dA[i], b = -dB[i]; const lat = Math.abs(a + b) * Math.SQRT1_2, ver = Math.abs(a - b) * Math.SQRT1_2; if (lat > latMax) latMax = lat; if (ver > vertMax) vertMax = ver; }
  const scale = Math.min(1, GROOVE.LAT_MAX / Math.max(1e-9, latMax), GROOVE.VERT_MAX / Math.max(1e-9, vertMax));
  if (scale < 1) for (let i = 0; i < N; i++) { dA[i] *= scale; dB[i] *= scale; }
  return {
    dA, dB,
    sens: 1 / (GROOVE.V0 * scale),          // preamp gain: m/s → loudness-normalised full scale
    stats: { loud, scale, cutDb: 20 * Math.log10(scale), latMax: latMax * scale, vertMax: vertMax * scale, peakVel: pkV * scale, rms },
  };
}

// Mip pyramid of the wall displacements for the renderer: for each level, the mean and the
// variance of each wall inside every texel, so distant grooves show the envelope of the
// waveform instead of aliasing. Returns Float32 RGBA rows packed into a TW-wide texture.
export function buildGrooveTexture(dA, dB, texelsWanted, TW = 2048) {
  const N = dA.length;
  const dec = Math.max(1, Math.ceil(N / texelsWanted));
  const n0 = Math.ceil(N / dec);
  const levels = []; let n = n0, total = 0;
  while (n >= 32 && levels.length < 16) { levels.push({ n, off: total }); total += n; n = n >> 1; }
  const rows = Math.ceil(total / TW);
  const data = new Float32Array(rows * TW * 4);
  let peak = 1e-6;
  for (let i = 0; i < N; i++) { const a = Math.abs(dA[i]), b = Math.abs(dB[i]); if (a > peak) peak = a; if (b > peak) peak = b; }
  const inv = 1 / peak;
  for (let j = 0; j < n0; j++) {
    const s = j * dec, e = Math.min(N, s + dec); let ma = 0, mb = 0, qa = 0, qb = 0;
    for (let i = s; i < e; i++) { const a = -dB[i] * inv, b = dA[i] * inv; ma += a; mb += b; qa += a * a; qb += b * b; }
    const c = 1 / (e - s); ma *= c; mb *= c;
    const o = j * 4; data[o] = ma; data[o + 1] = mb; data[o + 2] = Math.max(0, qa * c - ma * ma); data[o + 3] = Math.max(0, qb * c - mb * mb);
  }
  for (let l = 1; l < levels.length; l++) {
    const src = levels[l - 1], dst = levels[l];
    for (let j = 0; j < dst.n; j++) {
      const a = (src.off + 2 * j) * 4, b = (src.off + Math.min(src.n - 1, 2 * j + 1)) * 4, o = (dst.off + j) * 4;
      const ma = 0.5 * (data[a] + data[b]), mb = 0.5 * (data[a + 1] + data[b + 1]);
      data[o] = ma; data[o + 1] = mb;
      data[o + 2] = Math.max(0, 0.5 * (data[a + 2] + data[a] * data[a] + data[b + 2] + data[b] * data[b]) - ma * ma);
      data[o + 3] = Math.max(0, 0.5 * (data[a + 3] + data[a + 1] * data[a + 1] + data[b + 3] + data[b + 1] * data[b + 1]) - mb * mb);
    }
  }
  // coarse loudness envelope per 1/256 of the record, for the minimap and gameplay
  const envN = 1024, env = new Float32Array(envN);
  const top = levels[levels.length - 1];
  for (let k = 0; k < envN; k++) {
    let l = 0; while (l < levels.length - 1 && levels[l].n > envN * 2) l++;
    const j = Math.min(levels[l].n - 1, Math.floor(k / envN * levels[l].n)), o = (levels[l].off + j) * 4;
    env[k] = Math.sqrt(data[o + 2] + data[o + 3] + data[o] * data[o] + data[o + 1] * data[o + 1]);
  }
  return { data, TW, rows, levels, dec, n0, peak, env };
}
