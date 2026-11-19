import { StylusDriver } from './driver.js';
class StylusProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this.d = new StylusDriver(sampleRate, (m) => this.port.postMessage(m));
    this.port.onmessage = (e) => this.d.onMessage(e.data);
    this.tmp = new Float32Array(128);
  }
  process(inputs, outputs) {
    const out = outputs[0]; if (!out || !out[0]) return true;
    const L = out[0], R = out[1] || this.tmp;
    this.d.render(L, R, L.length, currentTime);
    return true;
  }
}
registerProcessor('stylus', StylusProcessor);
