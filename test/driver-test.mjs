// How much wow/flutter does the game → audio hand-off add? Drive a 1 kHz record through the
// driver with jittery 60 Hz control messages and measure the pitch of what comes out.
import { cutRecord, GROOVE } from '../src/cutter.js';
import { StylusDriver } from '../src/driver.js';
const fs = 48000, secs = 8, N = fs * secs, f = 1000;
const L = new Float32Array(N), R = new Float32Array(N); for (let i = 0; i < N; i++) L[i] = R[i] = 0.3 * Math.sin(2 * Math.PI * f * i / fs);
const rec = cutRecord(L, R, fs);
let sd = 7; const rnd = () => { sd = (Math.imul(sd, 1664525) + 1013904223) >>> 0; return sd / 4294967296; };
function run(label, jitterMs, dropProb, quantMs) {
  const d = new StylusDriver(fs, () => {}); d.sim.noiseGain = 0;
  d.onMessage({ type: 'record', dA: rec.dA, dB: rec.dB, spr: fs * 10, leadIn: 0, totalRevs: 3, sens: rec.sens });
  const M = fs * 6, oL = new Float32Array(M), oR = new Float32Array(M);
  let tNext = 0, q0 = 0.001;
  for (let i = 0; i < M; i += 128) {
    const t = i / fs;
    while (t >= tNext) {
      // a frame happens at tNext (+jitter); the game reports the position it integrated to
      const tf = tNext + (rnd() - 0.5) * jitterMs / 1000;
      const tq = quantMs ? Math.floor(tf * 1000 / quantMs) * quantMs / 1000 : tf;   // physics quantised to fixed steps
      d.onMessage({ type: 'ctl', t: tf, q: q0 + tq / 10, qRate: 0.1, rho: 0, rhoRate: 0, hb: -GROOVE.D, g: 1, follow: true, sway: 0 });
      tNext += (rnd() < dropProb ? 2 : 1) / 60;
    }
    d.render(oL.subarray(i, i + 128), oR.subarray(i, i + 128), 128, t);
  }
  // instantaneous frequency from rising zero crossings, after the first 2 s
  const zc = []; for (let i = 2 * fs; i < M - 1; i++) if (oL[i] <= 0 && oL[i + 1] > 0) zc.push(i + oL[i] / (oL[i] - oL[i + 1]));
  const per = []; for (let i = 20; i < zc.length; i += 20) per.push((zc[i] - zc[i - 20]) / 20);
  const mean = per.reduce((a, b) => a + b, 0) / per.length; let v = 0, mx = 0; for (const p of per) { v += (p - mean) ** 2; mx = Math.max(mx, Math.abs(p - mean)); }
  console.log(`${label}: mean ${(fs / mean).toFixed(2)} Hz, flutter rms ${(100 * Math.sqrt(v / per.length) / mean).toFixed(3)}%, peak ${(100 * mx / mean).toFixed(3)}%`);
}
run('ideal 60 Hz frames', 0, 0, 0);
run('±2 ms frame jitter', 4, 0, 0);
run('±2 ms jitter + 10% dropped frames', 4, 0.1, 0);
run('same, position quantised to 8.3 ms steps (no extrapolation)', 4, 0.1, 1000 / 120);
