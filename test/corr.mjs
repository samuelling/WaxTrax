import fs from 'fs';
import { cutRecord, GROOVE } from '../src/cutter.js';
import { StylusSim } from '../src/stylus-core.js';
const b = fs.readFileSync('/tmp/needle-drop.wav'); const sr = b.readUInt32LE(24); const a0 = 40 * sr, nn = 12 * sr;
const L = new Float32Array(nn), R = new Float32Array(nn);
for (let i = 0; i < nn; i++) { L[i] = b.readInt16LE(44 + (a0 + i) * 4) / 32768; R[i] = b.readInt16LE(46 + (a0 + i) * 4) / 32768; }
const rec = cutRecord(L, R, sr); const spr = sr * 10;
for (const [rf, noise] of [[1, 0], [0, 0], [0.5, 1]]) {
  const sim = new StylusSim(sr); sim.noiseGain = noise; sim.setRecord({ dA: rec.dA, dB: rec.dB, spr, leadIn: 0, totalRevs: 3, sens: rec.sens }); sim.realOut = sim.realIn = 0.06 + 0.0866 * rf;
  const N = 10 * sr, oL = new Float32Array(N), oR = new Float32Array(N); let q = 0.0002; sim.seat(q * GROOVE.P, -GROOVE.D);
  for (let i = 0; i < N; i += 128) { const n = Math.min(128, N - i), q1 = q + n / spr; sim.process(oL.subarray(i, i + n), oR.subarray(i, i + n), n, q, q1, q * GROOVE.P, q1 * GROOVE.P, -GROOVE.D, -GROOVE.D, 1, 1); q = q1; }
  const off = Math.round(0.0002 * spr);
  const hp = (x, fc) => { const y = new Float32Array(x.length); const a = Math.exp(-2 * Math.PI * fc / sr); let lp = 0, lp2 = 0; for (let i = 0; i < x.length; i++) { lp = x[i] + (lp - x[i]) * a; const h = x[i] - lp; lp2 = h + (lp2 - h) * a; y[i] = h - lp2; } return y; };
  for (const [nm, src, out] of [['L', L, oL], ['R', R, oR]]) {
    const x = hp(src.subarray(off, off + N), 400), y = hp(out, 400); let best = -2, bl = 0;
    for (let lag = -6; lag <= 6; lag++) { let c = 0, e1 = 0, e2 = 0; for (let i = sr; i < N - sr; i += 2) { const u = x[i + lag], v = y[i]; c += u * v; e1 += u * u; e2 += v * v; } const r = c / Math.sqrt(e1 * e2); if (r > best) { best = r; bl = lag; } }
    let gy = 0, gx = 0; for (let i = sr; i < N - sr; i++) { gy += x[i + bl] * rec.stats.loud * y[i]; gx += y[i] * y[i]; }
    console.log(`radius ${rf} noise ${noise} ch ${nm}: >400 Hz corr ${best.toFixed(4)} lag ${bl} level ${(-20 * Math.log10(gy / gx)).toFixed(2)} dB`);
  }
}
