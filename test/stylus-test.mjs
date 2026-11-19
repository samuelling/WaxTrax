// Offline check of the cutter + stylus simulation against the source audio.
import fs from 'fs';
import { cutRecord, GROOVE } from '../src/cutter.js';
import { StylusSim } from '../src/stylus-core.js';

function readWav(p) {
  const b = fs.readFileSync(p); const sr = b.readUInt32LE(24); const n = (b.length - 44) / 4;
  const L = new Float32Array(n), R = new Float32Array(n);
  for (let i = 0; i < n; i++) { L[i] = b.readInt16LE(44 + i * 4) / 32768; R[i] = b.readInt16LE(46 + i * 4) / 32768; }
  return { sr, L, R };
}
function writeWav(p, L, R, sr) {
  const n = L.length, buf = Buffer.alloc(44 + n * 4);
  buf.write('RIFF', 0); buf.writeUInt32LE(36 + n * 4, 4); buf.write('WAVEfmt ', 8); buf.writeUInt32LE(16, 16); buf.writeUInt16LE(1, 20); buf.writeUInt16LE(2, 22);
  buf.writeUInt32LE(sr, 24); buf.writeUInt32LE(sr * 4, 28); buf.writeUInt16LE(4, 32); buf.writeUInt16LE(16, 34); buf.write('data', 36); buf.writeUInt32LE(n * 4, 40);
  for (let i = 0; i < n; i++) { buf.writeInt16LE(Math.max(-32768, Math.min(32767, Math.round(L[i] * 32767))), 44 + i * 4); buf.writeInt16LE(Math.max(-32768, Math.min(32767, Math.round(R[i] * 32767))), 46 + i * 4); }
  fs.writeFileSync(p, buf);
}
const src = process.argv[2] || '/tmp/needle-drop.wav';
const w = readWav(src); const fsr = w.sr;
// take 30 s from the loud part
const a0 = Math.floor(40 * fsr), nn = Math.floor(30 * fsr);
const L = w.L.subarray(a0, a0 + nn), R = w.R.subarray(a0, a0 + nn);
let t0 = Date.now();
const rec = cutRecord(L, R, fsr);
console.log('cut ms', Date.now() - t0, rec.stats);

const T_REV = 10, spr = fsr * T_REV, leadIn = 1, totalRevs = leadIn + nn / spr + 1;
function run(label, { rate = 1, lateral = null, air = null, radiusFrac = null, secs = 10, startRev = leadIn, g = 1, noise = 1 }) {
  const sim = new StylusSim(fsr); sim.noiseGain = noise;
  sim.setRecord({ dA: rec.dA, dB: rec.dB, spr, leadIn, totalRevs: radiusFrac != null ? totalRevs : totalRevs, sens: rec.sens });
  if (radiusFrac != null) { sim.realOut = sim.realIn = 0.060 + (0.1466 - 0.060) * radiusFrac; }
  const N = Math.floor(secs * fsr), oL = new Float32Array(N), oR = new Float32Array(N);
  let q = startRev; const dq = rate / spr; const B = 128;
  sim.seat(q * GROOVE.P, -GROOVE.D);
  t0 = Date.now();
  let yOff = 0, hb = -GROOVE.D;
  for (let i = 0; i < N; i += B) {
    const n = Math.min(B, N - i), tt = i / fsr;
    const q1 = q + dq * n;
    const y0 = q * GROOVE.P + yOff; const nOff = lateral ? lateral(tt) : 0; const y1 = q1 * GROOVE.P + nOff; yOff = nOff;
    const h1 = -GROOVE.D + (air ? air(tt) : 0) + (lateral ? Math.min(GROOVE.D, Math.abs(((nOff / GROOVE.P) % 1 + 1.5) % 1 - 0.5) * GROOVE.P) : 0);
    sim.process(oL.subarray(i, i + n), oR.subarray(i, i + n), n, q, q1, y0, y1, hb, h1, g, 1);
    hb = h1; q = q1;
  }
  const ms = Date.now() - t0;
  // compare with loudness-normalised source at rate 1
  let res = '';
  if (rate === 1 && !lateral && !air) {
    const off = Math.round((startRev - leadIn) * spr); let best = -1, bestLag = 0;
    const seg0 = Math.floor(2 * fsr), segN = Math.floor(4 * fsr);
    for (let lag = -40; lag <= 40; lag++) { let c = 0, e1 = 0, e2 = 0; for (let i = seg0; i < seg0 + segN; i += 3) { const x = L[off + i + lag] * rec.stats.loud, y = oL[i]; c += x * y; e1 += x * x; e2 += y * y; } const r = c / Math.sqrt(e1 * e2); if (r > best) { best = r; bestLag = lag; } }
    let en = 0, es = 0, gy = 0, gx = 0; for (let i = seg0; i < seg0 + segN; i++) { const x = L[off + i + bestLag] * rec.stats.loud, y = oL[i]; gy += x * y; gx += y * y; }
    const gfit = gy / gx; for (let i = seg0; i < seg0 + segN; i++) { const x = L[off + i + bestLag] * rec.stats.loud, y = oL[i] * gfit; en += (x - y) * (x - y); es += x * x; }
    res = ` corr ${best.toFixed(4)} lag ${bestLag} gainfit ${gfit.toFixed(3)} SNR(dB) ${(10 * Math.log10(es / en)).toFixed(1)}`;
  }
  let ss = 0, pk = 0; for (let i = 0; i < N; i++) { ss += oL[i] * oL[i] + oR[i] * oR[i]; pk = Math.max(pk, Math.abs(oL[i]), Math.abs(oR[i])); }
  const tel = sim.tel;
  console.log(`${label}: rt ${(ms / 1000 / secs * 100).toFixed(1)}% cpu, rms ${(10 * Math.log10(ss / (2 * N) + 1e-20)).toFixed(1)} dB pk ${pk.toFixed(2)} contactA ${(tel.cA / tel.sub).toFixed(3)} B ${(tel.cB / tel.sub).toFixed(3)} land ${(tel.cL / tel.sub).toFixed(3)} groove ${tel.grooveN} e ${tel.e.toFixed(1)}${res}`);
  return { oL, oR };
}
run('outer groove, rate 1', { radiusFrac: 1, noise: 0 });
run('inner groove, rate 1', { radiusFrac: 0, noise: 0 });
run('outer, with surface noise', { radiusFrac: 1 });
run('silent lead-in (noise floor)', { startRev: 0.02, secs: 4 });
run('rate 2', { rate: 2 });
run('rate -1', { rate: -1, startRev: 2.5 });
run('rate 0.02 (near stop)', { rate: 0.02 });
const sweep = run('lateral sweep across 3 grooves', { lateral: t => Math.min(1, Math.max(0, (t - 2) / 6)) * 3 * GROOVE.P, secs: 10 });
writeWav('/tmp/sweep.wav', sweep.oL, sweep.oR, fsr);
run('jump at 3 s (air 40 µm for 0.5 s)', { air: t => (t > 3 && t < 3.5) ? 40 : 0, secs: 6 });
run('light tracking force g=0.3', { g: 0.3, radiusFrac: 0, noise: 0 });
