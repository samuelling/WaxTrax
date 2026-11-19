// Offline synth + sequencer that renders the three original default tracks for Wax Rally.
// Everything here is generated from code: no samples, no third-party material.
import fs from 'fs';
import { execFileSync } from 'child_process';

const SR = 44100;
let seed = 12345;
const rnd = () => { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296; };
const mtof = m => 440 * Math.pow(2, (m - 69) / 12);
const clamp = (x, a, b) => x < a ? a : x > b ? b : x;

class Song {
  constructor(bpm, bars, tail = 3) {
    this.bpm = bpm; this.spb = 60 / bpm; this.bar = 4 * this.spb; this.step = this.spb / 4;
    this.bars = bars; this.len = Math.ceil((bars * this.bar + tail) * SR);
    this.buses = {}; this.kicks = [];
  }
  bus(name) { return this.buses[name] ??= { L: new Float32Array(this.len), R: new Float32Array(this.len) }; }
  t(bar, step = 0) { return bar * this.bar + step * this.step; }
}

function pan2(p) { const a = (clamp(p, -1, 1) + 1) * Math.PI / 4; return [Math.cos(a), Math.sin(a)]; }
function polyblep(t, dt) {
  if (t < dt) { t /= dt; return t + t - t * t - 1; }
  if (t > 1 - dt) { t = (t - 1) / dt; return t * t + t + t + 1; }
  return 0;
}
class SVF {
  constructor() { this.a = 0; this.b = 0; this.g = 0; this.k = 1; this.a1 = 0; this.a2 = 0; this.a3 = 0; this.lp = 0; this.bp = 0; this.hp = 0; }
  set(fc, q) {
    this.g = Math.tan(Math.PI * clamp(fc, 20, SR * 0.45) / SR); this.k = 1 / q;
    this.a1 = 1 / (1 + this.g * (this.g + this.k)); this.a2 = this.g * this.a1; this.a3 = this.g * this.a2;
  }
  run(x) {
    const v3 = x - this.b, v1 = this.a1 * this.a + this.a2 * v3, v2 = this.b + this.a2 * this.a + this.a3 * v3;
    this.a = 2 * v1 - this.a; this.b = 2 * v2 - this.b;
    this.lp = v2; this.bp = v1; this.hp = x - this.k * v1 - v2; return v2;
  }
}

// General subtractive voice.
function synth(song, b, t0, dur, freq, o = {}) {
  const { wave = 'saw', voices = 1, det = 0, cutoff = 2000, res = 0.2, envAmt = 0, fDec = 0.2, a = 0.004, d = 0.12, s = 0.7, r = 0.08,
    vel = 0.5, pan = 0, glide = 0, from = freq, drive = 0, sub = 0, vib = 0, vibRate = 5.5, spread = 0.7, pw = 0.5,
    lfoRate = 0, lfoAmt = 0, mode = 'lp', q2 = false } = o;
  const n0 = Math.floor(t0 * SR), n = Math.floor((dur + r) * SR) + 1;
  const ph = [], dt = [], gl = [], gr = [];
  for (let v = 0; v < voices; v++) {
    ph.push(rnd()); const x = voices > 1 ? (v / (voices - 1)) * 2 - 1 : 0;
    dt.push(Math.pow(2, det * x / 12)); const [l, rr] = pan2(pan + x * spread); gl.push(l); gr.push(rr);
  }
  const fl = new SVF(), fr = new SVF(), fl2 = new SVF(), fr2 = new SVF();
  let sph = 0; const norm = vel / Math.sqrt(voices);
  const Q = 0.55 + res * 9;
  for (let i = 0; i < n; i++) {
    const idx = n0 + i; if (idx >= song.len) break; if (idx < 0) continue;
    const t = i / SR;
    let f = glide > 0 ? freq + (from - freq) * Math.exp(-t / glide) : freq;
    if (vib) f *= 1 + vib * Math.sin(2 * Math.PI * vibRate * t) * Math.min(1, t / 0.25);
    let L = 0, R = 0;
    for (let v = 0; v < voices; v++) {
      const inc = f * dt[v] / SR; let p = ph[v] + inc; if (p >= 1) p -= 1; ph[v] = p;
      let x;
      if (wave === 'saw') x = 2 * p - 1 - polyblep(p, inc);
      else if (wave === 'sq') { x = (p < pw ? 1 : -1) + polyblep(p, inc) - polyblep((p + 1 - pw) % 1, inc); }
      else if (wave === 'tri') x = 4 * Math.abs(p - 0.5) - 1;
      else x = Math.sin(2 * Math.PI * p);
      L += gl[v] * x; R += gr[v] * x;
    }
    if (sub) { sph += f * 0.5 / SR; const sx = Math.sin(2 * Math.PI * sph) * sub * 1.4; L += sx; R += sx; }
    let env;
    if (t < a) env = t / a; else if (t < a + d) env = 1 - (1 - s) * (t - a) / d; else env = s;
    if (t > dur) env *= Math.max(0, 1 - (t - dur) / r);
    if ((i & 15) === 0) {
      let fc = cutoff * (1 + envAmt * Math.exp(-t / fDec));
      if (lfoAmt) fc *= Math.pow(2, lfoAmt * Math.sin(2 * Math.PI * lfoRate * (t0 + t)));
      fl.set(fc, Q); fr.set(fc, Q); if (q2) { fl2.set(fc, 0.7); fr2.set(fc, 0.7); }
    }
    fl.run(L); fr.run(R);
    L = mode === 'lp' ? fl.lp : mode === 'bp' ? fl.bp : fl.hp; R = mode === 'lp' ? fr.lp : mode === 'bp' ? fr.bp : fr.hp;
    if (q2) { L = fl2.run(L); R = fr2.run(R); }
    if (drive) { L = Math.tanh(L * (1 + drive)) / (1 + drive * 0.5); R = Math.tanh(R * (1 + drive)) / (1 + drive * 0.5); }
    b.L[idx] += L * env * norm; b.R[idx] += R * env * norm;
  }
}

// 2-operator FM electric piano / bell.
function fm(song, b, t0, dur, freq, o = {}) {
  const { ratio = 1, index = 2.2, idxDec = 0.35, a = 0.003, dec = 1.2, r = 0.15, vel = 0.4, pan = 0, tine = 0.25, trem = 0 } = o;
  const n0 = Math.floor(t0 * SR), n = Math.floor((dur + r) * SR) + 1; const [gl, gr] = pan2(pan);
  let pc = 0, pm = 0, pt = 0;
  for (let i = 0; i < n; i++) {
    const idx = n0 + i; if (idx >= song.len) break; const t = i / SR;
    pm += freq * ratio / SR; pt += freq * 14 / SR;
    const m = Math.sin(2 * Math.PI * pm) * index * Math.exp(-t / idxDec);
    pc += freq / SR;
    let x = Math.sin(2 * Math.PI * pc + m) + tine * Math.exp(-t / 0.06) * Math.sin(2 * Math.PI * pt);
    let env = Math.min(1, t / a) * Math.exp(-t / dec); if (t > dur) env *= Math.max(0, 1 - (t - dur) / r);
    const tr = trem ? 1 + trem * Math.sin(2 * Math.PI * 4.3 * (t0 + t)) : 0;
    const l = trem ? gl * (1 + trem * Math.sin(2 * Math.PI * 4.3 * (t0 + t))) : gl, rr = trem ? gr * (1 - trem * Math.sin(2 * Math.PI * 4.3 * (t0 + t))) : gr;
    b.L[idx] += x * env * vel * l; b.R[idx] += x * env * vel * rr;
  }
}

function kick(song, b, t0, o = {}) {
  const { vel = 0.95, f0 = 46, sweep = 170, sDec = 0.028, dec = 0.3, click = 0.5 } = o;
  const n0 = Math.floor(t0 * SR), n = Math.floor((dec * 5) * SR); let ph = 0;
  for (let i = 0; i < n; i++) {
    const idx = n0 + i; if (idx >= song.len) break; const t = i / SR;
    const f = f0 + sweep * Math.exp(-t / sDec) + 40 * Math.exp(-t / 0.12); ph += f / SR;
    let x = Math.sin(2 * Math.PI * ph) * Math.exp(-t / dec) + click * (rnd() * 2 - 1) * Math.exp(-t / 0.002);
    x = Math.tanh(x * 1.6) * vel; b.L[idx] += x; b.R[idx] += x;
  }
  song.kicks.push(t0);
}
function noiseHit(song, b, t0, o = {}) {
  const { vel = 0.5, dec = 0.12, fc = 3000, q = 0.8, mode = 'bp', pan = 0, a = 0.0005, tone = 0, toneF = 185, toneDec = 0.07, bursts = 0, fc2 = 0, sweep = 0 } = o;
  const n0 = Math.floor(t0 * SR), n = Math.floor((dec * 6 + 0.05) * SR); const [gl, gr] = pan2(pan);
  const f = new SVF(), f2 = new SVF(); f.set(fc, q); if (fc2) f2.set(fc2, 0.7); let ph = 0;
  for (let i = 0; i < n; i++) {
    const idx = n0 + i; if (idx >= song.len) break; const t = i / SR;
    if (sweep && (i & 31) === 0) f.set(fc * Math.pow(2, sweep * t), q);
    f.run(rnd() * 2 - 1); let x = mode === 'bp' ? f.bp : mode === 'hp' ? f.hp : f.lp;
    if (fc2) { f2.run(x); x = f2.hp; }
    let env = Math.min(1, t / a) * Math.exp(-t / dec);
    if (bursts) { const bt = t % 0.011; if (t < 0.011 * bursts) env = Math.exp(-bt / 0.004); else env = Math.exp(-(t - 0.011 * bursts) / dec); }
    if (tone) { ph += (toneF * (1 + 0.5 * Math.exp(-t / 0.02))) / SR; x = x * env + tone * Math.sin(2 * Math.PI * ph) * Math.exp(-t / toneDec); }
    else x *= env;
    b.L[idx] += x * vel * gl; b.R[idx] += x * vel * gr;
  }
}
const snare = (song, b, t, vel = 0.6, o = {}) => noiseHit(song, b, t, { vel, dec: 0.13, fc: 2400, q: 0.6, tone: 0.9, toneF: 190, ...o });
const clap = (song, b, t, vel = 0.5, o = {}) => noiseHit(song, b, t, { vel, dec: 0.16, fc: 1500, q: 1.2, bursts: 3, ...o });
const hat = (song, b, t, vel = 0.25, open = false, pan = 0.2) => noiseHit(song, b, t, { vel, dec: open ? 0.16 : 0.028, fc: 9000, q: 0.7, mode: 'hp', pan });
const crash = (song, b, t, vel = 0.4) => noiseHit(song, b, t, { vel, dec: 1.1, fc: 6500, q: 0.5, mode: 'hp', pan: -0.2 });
function tom(song, b, t0, freq, vel = 0.6, pan = 0) {
  const n0 = Math.floor(t0 * SR), n = Math.floor(0.6 * SR); let ph = 0; const [gl, gr] = pan2(pan);
  for (let i = 0; i < n; i++) { const idx = n0 + i; if (idx >= song.len) break; const t = i / SR; ph += freq * (1 + 0.6 * Math.exp(-t / 0.03)) / SR;
    const x = Math.tanh(Math.sin(2 * Math.PI * ph) * 1.5) * Math.exp(-t / 0.16) * vel + (rnd() * 2 - 1) * 0.2 * vel * Math.exp(-t / 0.01); b.L[idx] += x * gl; b.R[idx] += x * gr; }
}
function riser(song, b, t0, dur, vel = 0.3, down = false) {
  const n0 = Math.floor(t0 * SR), n = Math.floor(dur * SR); const f = new SVF(), g = new SVF();
  for (let i = 0; i < n; i++) { const idx = n0 + i; if (idx >= song.len) break; let x = i / n; if (down) x = 1 - x;
    if ((i & 31) === 0) { f.set(300 * Math.pow(40, x), 2.5); g.set(300 * Math.pow(40, x) * 1.01, 2.5); }
    f.run(rnd() * 2 - 1); g.run(rnd() * 2 - 1); const e = vel * (down ? x * x : x * x);
    b.L[idx] += f.bp * e; b.R[idx] += g.bp * e; }
}

function freeverb(inp, len, room = 0.84, damp = 0.25, wet = 1) {
  const out = { L: new Float32Array(len), R: new Float32Array(len) };
  const combs = [1116, 1188, 1277, 1356, 1422, 1491, 1557, 1617], aps = [556, 441, 341, 225];
  for (const [ch, spread] of [['L', 0], ['R', 23]]) {
    const cb = combs.map(n => ({ buf: new Float32Array(n + spread), i: 0, lp: 0 })), ab = aps.map(n => ({ buf: new Float32Array(n + spread), i: 0 }));
    const o = out[ch], L = inp.L, R = inp.R;
    for (let n = 0; n < len; n++) {
      const x = (L[n] + R[n]) * 0.015 + (ch === 'L' ? L[n] : R[n]) * 0.01; let y = 0;
      for (const c of cb) { const v = c.buf[c.i]; c.lp = v * (1 - damp) + c.lp * damp; c.buf[c.i] = x + c.lp * room; if (++c.i >= c.buf.length) c.i = 0; y += v; }
      for (const a of ab) { const v = a.buf[a.i]; const z = -y + v; a.buf[a.i] = y + v * 0.5; if (++a.i >= a.buf.length) a.i = 0; y = z; }
      o[n] = y * wet;
    }
  }
  return out;
}
function pingpong(inp, len, dtSec, fb = 0.45, tone = 0.45) {
  const out = { L: new Float32Array(len), R: new Float32Array(len) }; const d = Math.round(dtSec * SR);
  const bl = new Float32Array(d), br = new Float32Array(d); let i = 0, lpl = 0, lpr = 0;
  for (let n = 0; n < len; n++) {
    const l = bl[i], r = br[i]; lpl += (l - lpl) * tone; lpr += (r - lpr) * tone;
    bl[i] = (inp.L[n] + inp.R[n]) * 0.5 + lpr * fb; br[i] = lpl * fb; if (++i >= d) i = 0;
    out.L[n] = l; out.R[n] = r;
  }
  return out;
}
function sidechain(song, b, depth = 0.6, rel = 0.22) {
  const g = new Float32Array(song.len).fill(1); const nr = Math.floor(rel * SR);
  for (const tk of song.kicks) { const n0 = Math.floor(tk * SR); for (let i = 0; i < nr && n0 + i < song.len; i++) { const x = i / nr; const v = 1 - depth * (1 - x) * (1 - x); if (v < g[n0 + i]) g[n0 + i] = v; } }
  for (let i = 0; i < song.len; i++) { b.L[i] *= g[i]; b.R[i] *= g[i]; }
}
function addTo(dst, src, gain) { for (let i = 0; i < dst.L.length; i++) { dst.L[i] += src.L[i] * gain; dst.R[i] += src.R[i] * gain; } }
function fadeBus(song, b, t0, t1, g0, g1) { const a = Math.floor(t0 * SR), z = Math.min(song.len, Math.floor(t1 * SR)); for (let i = a; i < z; i++) { const g = g0 + (g1 - g0) * (i - a) / (z - a); b.L[i] *= g; b.R[i] *= g; } }
function lowpassBus(song, b, t0, t1, f0, f1) {
  const a = Math.floor(t0 * SR), z = Math.min(song.len, Math.floor(t1 * SR)); const fl = new SVF(), fr = new SVF();
  for (let i = a; i < z; i++) { if (((i - a) & 63) === 0) { const f = f0 * Math.pow(f1 / f0, (i - a) / (z - a)); fl.set(f, 0.9); fr.set(f, 0.9); } b.L[i] = fl.run(b.L[i]); b.R[i] = fr.run(b.R[i]); }
}

function master(song, mix, name) {
  const out = { L: new Float32Array(song.len), R: new Float32Array(song.len) };
  const rev = { L: new Float32Array(song.len), R: new Float32Array(song.len) }, dly = { L: new Float32Array(song.len), R: new Float32Array(song.len) };
  for (const [bn, o] of Object.entries(mix.buses)) { const b = song.buses[bn]; if (!b) continue; if (o.duck) sidechain(song, b, o.duck, o.rel ?? 0.22); addTo(out, b, o.gain ?? 1); if (o.rev) addTo(rev, b, o.rev); if (o.dly) addTo(dly, b, o.dly); }
  const d = pingpong(dly, song.len, song.step * (mix.dlySteps ?? 3), mix.dlyFb ?? 0.45); addTo(out, d, 1); addTo(rev, d, 0.3);
  addTo(out, freeverb(rev, song.len, mix.room ?? 0.84, 0.3), 1);
  // high-pass at 28 Hz, glue saturation, normalize
  const hl = new SVF(), hr = new SVF(); hl.set(28, 0.7); hr.set(28, 0.7); let pk = 0;
  let pre = 0, prePk = 0;
  for (let i = 0; i < song.len; i++) { out.L[i] = hl.run(out.L[i]) * 0 + hl.hp; out.R[i] = hr.run(out.R[i]) * 0 + hr.hp; pre += out.L[i] * out.L[i] + out.R[i] * out.R[i]; prePk = Math.max(prePk, Math.abs(out.L[i]), Math.abs(out.R[i])); }
  pre = Math.sqrt(pre / (2 * song.len)); const drive = (mix.target ?? 0.21) / pre;
  console.log(name, 'pre-master rms', pre.toFixed(3), 'peak', prePk.toFixed(2), 'drive', drive.toFixed(2));
  for (let i = 0; i < song.len; i++) { out.L[i] = Math.tanh(out.L[i] * drive); out.R[i] = Math.tanh(out.R[i] * drive); pk = Math.max(pk, Math.abs(out.L[i]), Math.abs(out.R[i])); }
  // end fade
  const fN = Math.floor(0.4 * SR); for (let i = 0; i < fN; i++) { const g = i / fN; out.L[song.len - 1 - i] *= g; out.R[song.len - 1 - i] *= g; }
  const g = 0.97 / pk; let ss = 0; for (let i = 0; i < song.len; i++) { out.L[i] *= g; out.R[i] *= g; ss += out.L[i] * out.L[i] + out.R[i] * out.R[i]; }
  console.log(name, 'len', (song.len / SR).toFixed(1) + 's', 'rms dBFS', (10 * Math.log10(ss / (2 * song.len))).toFixed(1));
  const buf = Buffer.alloc(44 + song.len * 4);
  buf.write('RIFF', 0); buf.writeUInt32LE(36 + song.len * 4, 4); buf.write('WAVEfmt ', 8); buf.writeUInt32LE(16, 16); buf.writeUInt16LE(1, 20); buf.writeUInt16LE(2, 22);
  buf.writeUInt32LE(SR, 24); buf.writeUInt32LE(SR * 4, 28); buf.writeUInt16LE(4, 32); buf.writeUInt16LE(16, 34); buf.write('data', 36); buf.writeUInt32LE(song.len * 4, 40);
  for (let i = 0; i < song.len; i++) { buf.writeInt16LE(Math.round(clamp(out.L[i], -1, 1) * 32767), 44 + i * 4); buf.writeInt16LE(Math.round(clamp(out.R[i], -1, 1) * 32767), 46 + i * 4); }
  fs.writeFileSync(`/tmp/${name}.wav`, buf);
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-i', `/tmp/${name}.wav`, '-codec:a', 'libmp3lame', '-b:a', '160k', `music/${name}.mp3`]);
}

// ───────────────────────── Track 1: NEEDLE DROP — electro-funk, 116 BPM, A minor
function needleDrop() {
  seed = 101; const S = new Song(116, 48, 3.2);
  const dr = S.bus('drums'), kk = S.bus('kick'), bs = S.bus('bass'), ep = S.bus('ep'), ld = S.bus('lead'), fx = S.bus('fx'), pd = S.bus('pad'), pc = S.bus('perc');
  const roots = [45, 45, 41, 43, 45, 45, 38, 40], color = [10, 10, 9, 9, 10, 10, 10, 10];
  const chords = [[57, 60, 64, 67], [57, 60, 64, 67], [53, 57, 60, 64], [55, 59, 62, 64], [57, 60, 64, 67], [57, 60, 64, 67], [57, 60, 62, 65], [56, 59, 62, 67]];
  const bassPat = [[0, 0, 1.6, 1], [3, 0, 0.7, .7], [6, 12, 0.7, .9], [7, 0, 0.7, .6], [10, 'c', 0.8, .8], [11, 12, 1.1, .9], [14, 7, 0.7, .7], [15, 'c', 0.7, .8]];
  const bassPat2 = [[0, 0, 1.6, 1], [2, 12, 0.6, .7], [3, 0, 0.7, .7], [6, 12, 0.7, .9], [8, 0, 1.2, .8], [10, 7, 0.8, .8], [11, 'c', 0.8, .8], [13, 12, 0.6, .9], [14, 'c', 0.7, .7], [15, 12, 0.7, .8]];
  const lead = [
    [[0, 76, 3], [4, 79, 2], [6, 81, 4], [12, 79, 2], [14, 76, 2]], [[0, 74, 3], [4, 76, 6], [12, 72, 2], [14, 74, 2]],
    [[0, 72, 3], [4, 69, 2], [6, 72, 4], [12, 77, 4]], [[0, 74, 6], [8, 71, 4], [12, 67, 4]],
    [[0, 76, 3], [4, 79, 2], [6, 81, 4], [12, 84, 2], [14, 81, 2]], [[0, 79, 3], [4, 76, 6], [12, 74, 2], [14, 76, 2]],
    [[0, 77, 3], [4, 74, 2], [6, 77, 4], [12, 81, 4]], [[0, 80, 6], [8, 83, 4], [12, 76, 4]]];
  for (let bar = 0; bar < 48; bar++) {
    const c = bar % 8, intro = bar < 8, brk = bar >= 24 && bar < 32, full = (bar >= 8 && bar < 24) || bar >= 32, B = bar >= 32;
    // drums
    if (!brk) for (let s = 0; s < 16; s += 4) kick(S, kk, S.t(bar, s), { vel: intro && bar < 4 ? 0.75 : 0.95 });
    if (full && c === 7) kick(S, kk, S.t(bar, 14), { vel: 0.7 });
    if (bar >= 4 && !brk) {
      for (let s = 0; s < 16; s++) { const off = s % 4 === 2; hat(S, dr, S.t(bar, s) + (s % 2 ? 0.012 : 0), off ? 0.3 : (s % 2 ? 0.1 : 0.17), off && full, s % 2 ? 0.35 : -0.25); }
    }
    if (full || (intro && bar >= 6)) { clap(S, dr, S.t(bar, 4), 0.5); clap(S, dr, S.t(bar, 12), 0.5); snare(S, dr, S.t(bar, 4), 0.35); snare(S, dr, S.t(bar, 12), 0.35); }
    if (full && c % 2 === 1) snare(S, dr, S.t(bar, 15), 0.22);
    if (B) for (const s of [3, 6, 9, 11, 14]) noiseHit(S, pc, S.t(bar, s), { vel: 0.16, dec: 0.02, fc: 5200, q: 4, pan: s % 2 ? 0.6 : -0.6 });
    if (B) for (const s of [2, 7, 10, 15]) tom(S, pc, S.t(bar, s), s % 3 ? 330 : 247, 0.16, s % 2 ? -0.5 : 0.5);
    if (brk && bar >= 30) for (let s = 0; s < 16; s += (bar === 31 ? 1 : 2)) snare(S, dr, S.t(bar, s), 0.15 + 0.4 * ((bar - 30) * 16 + s) / 32);
    if (bar === 8 || bar === 32 || bar === 16) crash(S, fx, S.t(bar, 0), 0.4);
    // bass
    if (bar >= 4 && !brk) {
      const pat = (c % 4 === 3 || B && c % 2 === 1) ? bassPat2 : bassPat;
      for (const [s, iv, len, v] of pat) { const m = roots[c] - 12 + (iv === 'c' ? color[c] : iv);
        synth(S, bs, S.t(bar, s), len * S.step * 0.92, mtof(m), { wave: 'saw', voices: 2, det: 0.08, spread: 0.15, cutoff: intro ? 260 + (bar - 4) * 90 : 420, envAmt: intro ? 2 : 5.5, fDec: 0.09, res: 0.45, vel: 0.5 * v, sub: 0.5, d: 0.1, s: 0.6, r: 0.03, drive: 0.6 }); }
    }
    if (brk) synth(S, bs, S.t(bar, 0), S.bar * 0.98, mtof(roots[c] - 12), { wave: 'sine', vel: 0.5, a: 0.05, r: 0.1, cutoff: 800 });
    // EP stabs
    if (bar >= 8) {
      const steps = brk ? [0, 6, 11] : [3, 6, 11, 14];
      steps.forEach((s, k) => chords[c].forEach((m, j) => fm(S, ep, S.t(bar, s) + j * 0.004, (brk ? 3 : 1.1) * S.step, mtof(m), { vel: 0.13, pan: (k % 2 ? 0.45 : -0.45) + (j - 1.5) * 0.1, dec: brk ? 1.4 : 0.5, index: 2.6, trem: 0.3 })));
    }
    // pad in break + B
    if (brk || B) chords[c].forEach((m, j) => synth(S, pd, S.t(bar, 0), S.bar * 0.98, mtof(m + (brk ? 0 : 12)), { wave: 'saw', voices: 5, det: 0.22, cutoff: brk ? 700 + (bar - 24) * 320 : 2600, res: 0.1, a: 0.25, r: 0.4, s: 0.9, vel: brk ? 0.11 : 0.06, pan: (j - 1.5) * 0.3, spread: 0.9 }));
    // lead
    if ((bar >= 16 && bar < 24) || B) for (const [s, m, len] of lead[c]) {
      synth(S, ld, S.t(bar, s), len * S.step * 0.9, mtof(m), { wave: 'sq', pw: 0.32, voices: 3, det: 0.12, cutoff: 2400, envAmt: 1.6, fDec: 0.25, res: 0.3, vel: 0.2, vib: 0.006, glide: 0.03, from: mtof(m - 2), r: 0.12, spread: 0.4 });
      if (B) synth(S, ld, S.t(bar, s), len * S.step * 0.9, mtof(m + 12), { wave: 'saw', cutoff: 4000, vel: 0.06, vib: 0.006, r: 0.12, pan: 0.3 });
    }
    if (bar === 7 || bar === 31 || bar === 23) riser(S, fx, S.t(bar, 0), S.bar, 0.3);
    if (bar === 24) riser(S, fx, S.t(bar, 0), S.bar * 1.5, 0.3, true);
  }
  kick(S, kk, S.t(48, 0)); crash(S, fx, S.t(48, 0), 0.5); chords[0].forEach((m, j) => fm(S, ep, S.t(48, 0), 2.5, mtof(m), { vel: 0.2, dec: 1.8, pan: (j - 1.5) * 0.3 }));
  synth(S, bs, S.t(48, 0), 1.2, mtof(33), { wave: 'saw', cutoff: 500, envAmt: 3, vel: 0.5, sub: 0.5, r: 0.5 });
  lowpassBus(S, dr, 0, S.t(8), 900, 14000); lowpassBus(S, kk, 0, S.t(4), 300, 6000);
  master(S, { buses: { kick: { gain: 1 }, drums: { gain: 0.9, rev: 0.25 }, bass: { gain: 1, duck: 0.55 }, ep: { gain: 1, rev: 0.5, dly: 0.25, duck: 0.25 }, lead: { gain: 1, rev: 0.5, dly: 0.5 }, pad: { gain: 1, rev: 0.6, duck: 0.5 }, fx: { gain: 1, rev: 0.6 }, perc: { gain: 1, rev: 0.3, dly: 0.2 } }, dlySteps: 3, room: 0.8 }, 'needle-drop');
}

// ───────────────────────── Track 2: DUNE RUNNER — synthwave, 104 BPM, D minor
function duneRunner() {
  seed = 202; const S = new Song(104, 44, 3.5);
  const dr = S.bus('drums'), kk = S.bus('kick'), sn = S.bus('snare'), bs = S.bus('bass'), ar = S.bus('arp'), ld = S.bus('lead'), fx = S.bus('fx'), pd = S.bus('pad');
  const roots = [38, 34, 41, 36], arpT = [[62, 65, 69, 74], [58, 62, 65, 70], [60, 65, 69, 72], [60, 64, 67, 72]];
  const pads = [[50, 57, 62, 65, 69], [46, 53, 58, 62, 65], [53, 57, 60, 65, 69], [48, 55, 60, 64, 67]];
  const lead = [[[0, 69, 6], [6, 74, 6], [12, 77, 4]], [[0, 76, 6], [6, 74, 6], [12, 72, 4]], [[0, 74, 6], [6, 77, 6], [12, 79, 4]], [[0, 77, 12], [12, 74, 4]],
    [[0, 72, 6], [6, 77, 6], [12, 81, 4]], [[0, 79, 6], [6, 77, 6], [12, 76, 4]], [[0, 76, 6], [6, 79, 6], [12, 84, 4]], [[0, 79, 8], [8, 76, 8]]];
  const arpPat = [0, 1, 2, 3, 2, 1, 0, 1, 2, 3, 2, 1, 0, 2, 3, 2];
  let prev = 69;
  for (let bar = 0; bar < 44; bar++) {
    const c = (bar >> 1) % 4, c8 = bar % 8, intro = bar < 4, build = bar >= 4 && bar < 12, A = bar >= 12 && bar < 28, brk = bar >= 28 && bar < 32, B = bar >= 32;
    const drums = build || A || B;
    if (drums) {
      kick(S, kk, S.t(bar, 0), { dec: 0.34, f0: 44 }); kick(S, kk, S.t(bar, 8), { dec: 0.34, f0: 44 });
      if (c8 % 2 === 1) kick(S, kk, S.t(bar, 10), { vel: 0.8, f0: 44 }); if (c8 === 7) kick(S, kk, S.t(bar, 14), { vel: 0.8, f0: 44 });
      for (const s of [4, 12]) { noiseHit(S, sn, S.t(bar, s), { vel: 0.75, dec: 0.2, fc: 1900, q: 0.5, tone: 0.9, toneF: 170, toneDec: 0.1 }); clap(S, sn, S.t(bar, s), 0.3); }
      for (let s = 0; s < 16; s += (A || B ? 1 : 2)) hat(S, dr, S.t(bar, s), s % 4 === 2 ? 0.26 : s % 2 ? 0.08 : 0.15, s === 14 && c8 % 2 === 1, s % 2 ? 0.4 : -0.3);
      if (c8 === 7) [8, 10, 12, 13, 14, 15].forEach((s, k) => tom(S, dr, S.t(bar, s), [220, 196, 165, 147, 131, 110][k], 0.5, -0.6 + k * 0.24));
    }
    if (brk && bar === 31) [0, 3, 6, 8, 10, 12, 13, 14, 15].forEach((s, k) => tom(S, dr, S.t(bar, s), [247, 220, 196, 220, 196, 165, 147, 131, 110][k], 0.55, -0.7 + k * 0.17));
    if (bar === 12 || bar === 32 || bar === 4 || bar === 20) crash(S, fx, S.t(bar, 0), 0.4);
    // bass: pumping 16ths
    if (!intro && !brk) for (let s = 0; s < 16; s++) { const oct = (s % 4 === 2) ? 12 : 0; const m = roots[c] + oct;
      synth(S, bs, S.t(bar, s), S.step * 0.8, mtof(m), { wave: 'saw', voices: 2, det: 0.1, spread: 0.1, cutoff: build ? 300 + (bar - 4) * 40 : 520, envAmt: 3.5, fDec: 0.07, res: 0.35, vel: 0.4 * (s % 4 === 0 ? 1 : 0.8), sub: 0.45, d: 0.08, s: 0.5, r: 0.02, drive: 0.4 }); }
    if (brk || intro) synth(S, bs, S.t(bar, 0), S.bar * 0.99, mtof(roots[c]), { wave: 'sine', vel: 0.42, a: 0.08, r: 0.1, cutoff: 600 });
    // arp
    for (let s = 0; s < 16; s++) { const m = arpT[c][arpPat[s]] + (B ? 12 : 0);
      synth(S, ar, S.t(bar, s), S.step * 0.7, mtof(m), { wave: 'sq', pw: 0.25, cutoff: intro ? 500 + bar * 350 + s * 20 : brk ? 1400 : 3200, envAmt: 2, fDec: 0.06, res: 0.25, vel: (intro || brk ? 0.2 : 0.13) * (s % 2 ? 0.7 : 1), pan: s % 2 ? 0.55 : -0.55, r: 0.05, d: 0.06, s: 0.4 }); }
    // pad
    if (bar % 2 === 0) pads[c].forEach((m, j) => synth(S, pd, S.t(bar, 0), S.bar * 1.98, mtof(m), { wave: 'saw', voices: 7, det: 0.28, cutoff: intro ? 500 + bar * 250 : brk ? 1200 : 2200, res: 0.1, a: 0.3, r: 0.6, s: 0.9, vel: 0.085, pan: (j - 2) * 0.25, spread: 1, lfoRate: 0.13, lfoAmt: 0.25 }));
    // lead
    if (A || B) for (const [s, m0, len] of lead[c8]) { const m = m0 + (B && bar >= 36 ? 12 : 0);
      synth(S, ld, S.t(bar, s), len * S.step * 0.94, mtof(m), { wave: 'saw', voices: 3, det: 0.14, cutoff: 3000, envAmt: 1.2, fDec: 0.3, res: 0.25, vel: 0.2, vib: 0.007, glide: 0.05, from: mtof(prev + (B && bar >= 36 ? 12 : 0)), r: 0.15, spread: 0.35, sub: 0.15 }); prev = m0; }
    if (bar === 3 || bar === 11 || bar === 31) riser(S, fx, S.t(bar, 0), S.bar, 0.3);
    if (bar === 28) riser(S, fx, S.t(bar, 0), S.bar * 2, 0.3, true);
  }
  kick(S, kk, S.t(44, 0)); crash(S, fx, S.t(44, 0), 0.5); pads[0].forEach((m, j) => synth(S, pd, S.t(44, 0), 2.2, mtof(m), { wave: 'saw', voices: 7, det: 0.28, cutoff: 2400, a: 0.01, r: 1.2, vel: 0.12, pan: (j - 2) * 0.25, spread: 1 }));
  synth(S, bs, S.t(44, 0), 1.6, mtof(26), { wave: 'saw', cutoff: 500, envAmt: 3, vel: 0.5, sub: 0.5, r: 0.6 });
  master(S, { buses: { kick: { gain: 1 }, snare: { gain: 1, rev: 0.9 }, drums: { gain: 0.9, rev: 0.25 }, bass: { gain: 1, duck: 0.5 }, arp: { gain: 1, rev: 0.4, dly: 0.5, duck: 0.2 }, lead: { gain: 1, rev: 0.55, dly: 0.55 }, pad: { gain: 1, rev: 0.6, duck: 0.45 }, fx: { gain: 1, rev: 0.6 } }, dlySteps: 3, dlyFb: 0.5, room: 0.88 }, 'dune-runner');
}

// ───────────────────────── Track 3: WOW & FLUTTER — drum & bass, 172 BPM, E minor
function wowFlutter() {
  seed = 303; const S = new Song(172, 72, 3.5);
  const dr = S.bus('drums'), kk = S.bus('kick'), bs = S.bus('bass'), sb = S.bus('sub'), pl = S.bus('pluck'), fx = S.bus('fx'), pd = S.bus('pad'), st = S.bus('stab');
  const roots = [28, 28, 36, 36, 33, 33, 35, 38];
  const pads = [[52, 55, 59, 62, 66], [52, 55, 59, 62, 66], [48, 55, 59, 64], [48, 55, 59, 64], [57, 60, 64, 67], [57, 60, 64, 67], [59, 62, 66, 69], [50, 57, 62, 66]];
  const mel = [[71, 76, 78, 79, 78, 74], [71, 76, 78, 79, 78, 74], [67, 72, 76, 79, 76, 74], [67, 72, 76, 79, 76, 74], [69, 72, 76, 81, 79, 76], [69, 72, 76, 81, 79, 76], [66, 71, 74, 78, 76, 74], [69, 74, 78, 81, 78, 76]];
  const melSteps = [0, 3, 6, 8, 11, 14];
  for (let bar = 0; bar < 72; bar++) {
    const c = bar % 8, intro = bar < 8, A = bar >= 8 && bar < 24, brk = bar >= 24 && bar < 32, B = bar >= 32 && bar < 64, outro = bar >= 64;
    const drop = A || B, v4 = bar % 4 === 3;
    if (drop || outro || (intro && bar >= 4)) {
      const kv = intro ? 0.7 : 0.95;
      kick(S, kk, S.t(bar, 0), { vel: kv, f0: 50, dec: 0.2, sweep: 200 }); kick(S, kk, S.t(bar, 10), { vel: kv, f0: 50, dec: 0.2, sweep: 200 });
      if (v4 && drop) kick(S, kk, S.t(bar, 6), { vel: 0.6, f0: 50, dec: 0.16 });
      for (const s of [4, 12]) { noiseHit(S, dr, S.t(bar, s), { vel: intro ? 0.45 : 0.72, dec: 0.11, fc: 2800, q: 0.5, tone: 1, toneF: 215, toneDec: 0.06 }); }
      if (drop) { snare(S, dr, S.t(bar, 7), 0.16, { dec: 0.05 }); snare(S, dr, S.t(bar, 9), 0.12, { dec: 0.05 }); if (v4) { snare(S, dr, S.t(bar, 14), 0.5); snare(S, dr, S.t(bar, 15), 0.3); } else if (c % 2) snare(S, dr, S.t(bar, 15), 0.2, { dec: 0.05 }); }
    }
    if (!brk) for (let s = 0; s < 16; s++) { if (outro && bar >= 68 && s % 2) continue; const v = s % 2 === 0 ? 0.2 : 0.09; hat(S, dr, S.t(bar, s) + (s % 2 ? 0.006 : 0), v * (intro ? 0.7 : 1), s === 2 && drop && c % 2 === 0, s % 2 ? 0.45 : -0.35); }
    if (drop && bar % 2 === 0) noiseHit(S, dr, S.t(bar, 8), { vel: 0.1, dec: 0.25, fc: 5000, q: 0.6, mode: 'hp', pan: 0.5 });
    if (bar === 8 || bar === 32 || bar === 48 || bar === 16) crash(S, fx, S.t(bar, 0), 0.45);
    if (brk && bar >= 30) for (let s = 0; s < 16; s += (bar === 31 ? 1 : 2)) snare(S, dr, S.t(bar, s), 0.12 + 0.45 * ((bar - 30) * 16 + s) / 32);
    // reese + sub
    if (drop) {
      const r = roots[c]; const hits = B && bar >= 48 ? [[0, 0, 5], [6, 0, 2], [10, 0, 3], [14, 12, 2]] : [[0, 0, 6], [10, 0, 4], [14, c % 2 ? 7 : 12, 2]];
      for (const [s, iv, len] of hits) {
        synth(S, bs, S.t(bar, s), len * S.step * 0.95, mtof(r + 12 + iv), { wave: 'saw', voices: 3, det: 0.32, spread: 0.5, cutoff: 600, res: 0.35, vel: 0.33, lfoRate: 172 / 60 / (c % 2 ? 1 : 2), lfoAmt: 1.3, a: 0.01, r: 0.04, s: 1, drive: 1.2, q2: true });
        synth(S, sb, S.t(bar, s), len * S.step * 0.95, mtof(r + (iv === 7 ? 7 : 0)), { wave: 'sine', vel: 0.5, a: 0.008, r: 0.04, s: 1, cutoff: 900 });
      }
    }
    if (brk || intro || outro) synth(S, sb, S.t(bar, 0), S.bar * 0.99, mtof(roots[c] >= 33 ? roots[c] : roots[c] + 12), { wave: 'sine', vel: 0.32, a: 0.05, r: 0.1, cutoff: 700 });
    // pad
    pads[c].forEach((m, j) => synth(S, pd, S.t(bar, 0), S.bar * 0.99, mtof(m), { wave: 'saw', voices: 5, det: 0.25, cutoff: intro ? 400 + bar * 220 : brk ? 2600 : 1700, res: 0.1, a: 0.2, r: 0.5, s: 0.9, vel: brk || intro ? 0.1 : 0.06, pan: (j - 2) * 0.28, spread: 1, lfoRate: 0.2, lfoAmt: 0.3 }));
    // pluck melody
    if (brk || B || (intro && bar >= 4) || outro) melSteps.forEach((s, k) => { const m = mel[c][k] + (B && bar >= 48 ? 12 : 0);
      fm(S, pl, S.t(bar, s), S.step * 2.2, mtof(m), { vel: 0.17, index: 3.2, idxDec: 0.12, dec: 0.4, ratio: 2, pan: k % 2 ? 0.5 : -0.5, tine: 0.4 }); });
    // chord stabs in drop
    if (drop && (c % 2 === 0)) for (const s of [6, 14]) pads[c].forEach((m, j) => synth(S, st, S.t(bar, s), S.step * 1.3, mtof(m + 12), { wave: 'saw', voices: 3, det: 0.2, cutoff: 1800, envAmt: 2.5, fDec: 0.08, res: 0.2, vel: 0.075, pan: (j - 2) * 0.3, r: 0.1, spread: 0.6 }));
    if (bar === 7 || bar === 31 || bar === 47) riser(S, fx, S.t(bar - 1, 0), S.bar * 2, 0.3);
    if (bar === 24 || bar === 64) riser(S, fx, S.t(bar, 0), S.bar * 2, 0.3, true);
  }
  kick(S, kk, S.t(72, 0), { f0: 50 }); crash(S, fx, S.t(72, 0), 0.5); pads[0].forEach((m, j) => synth(S, pd, S.t(72, 0), 2.4, mtof(m), { wave: 'saw', voices: 5, det: 0.25, cutoff: 2000, a: 0.01, r: 1.3, vel: 0.12, pan: (j - 2) * 0.28, spread: 1 }));
  synth(S, sb, S.t(72, 0), 2, mtof(28), { wave: 'sine', vel: 0.5, r: 0.8, cutoff: 900 });
  master(S, { buses: { kick: { gain: 1 }, drums: { gain: 0.95, rev: 0.22 }, bass: { gain: 1, duck: 0.4, rel: 0.12 }, sub: { gain: 1, duck: 0.5, rel: 0.12 }, pluck: { gain: 1, rev: 0.5, dly: 0.6 }, pad: { gain: 1, rev: 0.6, duck: 0.35, rel: 0.15 }, stab: { gain: 1, rev: 0.5, dly: 0.4 }, fx: { gain: 1, rev: 0.6 } }, dlySteps: 3, dlyFb: 0.5, room: 0.86 }, 'wow-and-flutter');
}

const which = process.argv[2];
if (!which || which === '1') needleDrop();
if (!which || which === '2') duneRunner();
if (!which || which === '3') wowFlutter();
