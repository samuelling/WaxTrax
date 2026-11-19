import { cutRecord, buildGrooveTexture } from './cutter.js';
import { StylusDriver } from './driver.js';
import { T_REV, LEAD_IN, MAX_SECONDS, makeLayout } from './config.js';

export class AudioEngine {
  constructor() {
    this.ctx = null; this.node = null; this.tel = null; this.onTel = null; this.mode = 'none';
    this.clockOff = null; this.spec = new Uint8Array(512); this.wave = new Float32Array(1024); this.level = 0; this.bass = 0;
  }
  async init() {
    if (this.ctx) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    this.ctx = new AC({ latencyHint: 'interactive' });
    const ctx = this.ctx;
    this.master = ctx.createGain(); this.master.gain.value = 0.9;
    this.limiter = ctx.createDynamicsCompressor();
    this.limiter.threshold.value = -4; this.limiter.knee.value = 4; this.limiter.ratio.value = 12; this.limiter.attack.value = 0.002; this.limiter.release.value = 0.12;
    this.analyser = ctx.createAnalyser(); this.analyser.fftSize = 1024; this.analyser.smoothingTimeConstant = 0.72;
    this.master.connect(this.limiter); this.limiter.connect(this.analyser); this.analyser.connect(ctx.destination);
    const handle = (m) => { if (m.type === 'tel') { this.tel = m; if (this.onTel) this.onTel(m); } };
    try {
      if (!ctx.audioWorklet) throw new Error('no AudioWorklet');
      try { await ctx.audioWorklet.addModule('worklet.js'); }
      catch (e) { const txt = await (await fetch('worklet.js')).text(); await ctx.audioWorklet.addModule(URL.createObjectURL(new Blob([txt], { type: 'application/javascript' }))); }
      this.node = new AudioWorkletNode(ctx, 'stylus', { numberOfInputs: 0, numberOfOutputs: 1, outputChannelCount: [2] });
      this.node.port.onmessage = (e) => handle(e.data);
      this.post = (m, tr) => this.node.port.postMessage(m, tr || []);
      this.mode = 'worklet';
    } catch (err) {
      // Fallback: run the same simulation on the main thread.
      console.warn('AudioWorklet unavailable, using main-thread audio:', err);
      const drv = new StylusDriver(ctx.sampleRate, handle);
      this.node = ctx.createScriptProcessor(1024, 0, 2);
      this.node.onaudioprocess = (e) => { const ob = e.outputBuffer; drv.render(ob.getChannelData(0), ob.getChannelData(1), ob.length, e.playbackTime); };
      this.post = (m) => drv.onMessage(m);
      this.mode = 'main-thread';
    }
    this.node.connect(this.master);
  }
  async resume() { if (this.ctx && this.ctx.state !== 'running') { try { await this.ctx.resume(); } catch (e) { /* needs a gesture */ } } }
  suspend() { if (this.ctx && this.ctx.state === 'running') this.ctx.suspend(); }
  decode(arrayBuffer) {
    return new Promise((res, rej) => { const p = this.ctx.decodeAudioData(arrayBuffer, res, rej); if (p && p.catch) p.catch(rej); });
  }
  // Cut a record from a decoded buffer and hand the groove to the stylus.
  press(ab, texels, maxSeconds = MAX_SECONDS) {
    const fs = ab.sampleRate, n = Math.min(ab.length, Math.floor(maxSeconds * fs));
    const L = ab.getChannelData(0).subarray(0, n), R = (ab.numberOfChannels > 1 ? ab.getChannelData(1) : ab.getChannelData(0)).subarray(0, n);
    const rec = cutRecord(L, R, fs);
    const duration = n / fs, layout = makeLayout(duration);
    const tex = buildGrooveTexture(rec.dA, rec.dB, Math.min(texels, Math.ceil(duration * 4000)));
    const spr = fs * T_REV;
    tex.texPerRev = spr / tex.dec;
    this.post({ type: 'record', dA: rec.dA, dB: rec.dB, spr, leadIn: LEAD_IN, totalRevs: layout.totalRevs, sens: rec.sens }, this.mode === 'worklet' ? [rec.dA.buffer, rec.dB.buffer] : undefined);
    return { layout, tex, stats: rec.stats, duration, truncated: ab.length > n };
  }
  // Audio-clock time now, smooth (the context clock itself advances in steps).
  now(ms) {
    const p = (ms ?? performance.now()) / 1000; let d = this.ctx.currentTime - performance.now() / 1000;
    // the output timestamp pairs the two clocks more precisely where the browser provides it
    try { const ts = this.ctx.getOutputTimestamp && this.ctx.getOutputTimestamp(); if (ts && ts.contextTime > 0 && ts.performanceTime > 0) d = ts.contextTime - ts.performanceTime / 1000; } catch (e) { /* fall back to currentTime */ }
    if (this.clockOff === null || Math.abs(d - this.clockOff) > 0.3) this.clockOff = d; else this.clockOff += (d - this.clockOff) * 0.012;
    return p + this.clockOff;
  }
  ctl(m, ms) { m.type = 'ctl'; m.t = this.now(ms); this.post(m); }
  set(m) { m.type = 'set'; this.post(m); }
  analyse() {
    if (!this.analyser) return;
    this.analyser.getByteFrequencyData(this.spec);
    let b = 0; for (let i = 1; i < 6; i++) b += this.spec[i]; b /= 5 * 255;
    let a = 0; for (let i = 1; i < 200; i++) a += this.spec[i]; a /= 199 * 255;
    this.bass += (b - this.bass) * (b > this.bass ? 0.6 : 0.12); this.level += (a - this.level) * 0.3;
  }
}
