import { cutRecord, GROOVE } from '../src/cutter.js';
import { StylusSim } from '../src/stylus-core.js';
const fs = 48000, secs = 3, N = fs * secs;
function tone(f, amp, mode, radiusFrac, g = 1) {
  const L = new Float32Array(N), R = new Float32Array(N);
  for (let i = 0; i < N; i++) { const x = amp * Math.sin(2 * Math.PI * f * i / fs); L[i] = x; R[i] = mode === 'mono' ? x : mode === 'L' ? 0 : -x; }
  // add a quiet pilot so loudness normalisation is the same for every case
  const rec = cutRecord(L, R, fs);
  const sim = new StylusSim(fs); sim.noiseGain = 0; const spr = fs * 10;
  sim.setRecord({ dA: rec.dA, dB: rec.dB, spr, leadIn: 0, totalRevs: 5, sens: rec.sens });
  sim.realOut = sim.realIn = 0.060 + 0.0866 * radiusFrac;
  const oL = new Float32Array(N), oR = new Float32Array(N); let q = 0.0002; sim.seat(q * GROOVE.P, -GROOVE.D);
  const q00 = q;
  for (let i = 0; i < N; i += 128) { const q1 = q + 128 / spr; sim.process(oL.subarray(i, i + 128), oR.subarray(i, i + 128), 128, q, q1, q * GROOVE.P, q1 * GROOVE.P, -GROOVE.D, -GROOVE.D, g, 1); q = q1; }
  // analyse the last second: projection on fundamental + residual; reference is input*loud delayed by q00*spr samples
  const a = fs * 1, M = fs; const proj = (o, ff) => { let c = 0, s = 0; for (let i = 0; i < M; i++) { const ph = 2 * Math.PI * ff * (a + i) / fs; c += o[a + i] * Math.cos(ph); s += o[a + i] * Math.sin(ph); } return 2 * Math.hypot(c, s) / M; };
  const f1 = proj(oL, f), r1 = proj(oR, f); let h = 0; for (let k = 2; k <= 5; k++) if (k * f < fs / 2) h += proj(oL, k * f) ** 2;
  const expct = amp * rec.stats.loud;
  const tel = sim.tel;
  return `f=${f} ${mode} amp=${amp} r=${radiusFrac} g=${g}: cut ${rec.stats.cutDb.toFixed(1)} dB, peakVel ${(rec.stats.peakVel * 100).toFixed(1)} cm/s, gain ${(20 * Math.log10(f1 / expct)).toFixed(2)} dB, R/L ${(20 * Math.log10(r1 / f1 + 1e-9)).toFixed(1)} dB, THD ${(100 * Math.sqrt(h) / f1).toFixed(2)}%, contact A ${(tel.cA / tel.sub).toFixed(3)} B ${(tel.cB / tel.sub).toFixed(3)}`;
}
for (const f of [30, 60, 120, 400, 1000, 3000, 6000, 10000, 14000]) console.log(tone(f, 0.25, 'L', 1));
console.log('--- inner vs outer, hot treble');
for (const f of [3000, 6000, 10000]) for (const r of [1, 0]) console.log(tone(f, 0.5, 'L', r));
console.log('--- vertical (L=-R) and light tracking');
console.log(tone(1000, 0.5, 'vert', 0)); console.log(tone(6000, 0.5, 'mono', 0, 0.25)); console.log(tone(6000, 0.5, 'mono', 0, 1));
