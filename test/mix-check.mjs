import fs from 'fs';
for (const name of ['needle-drop', 'dune-runner', 'wow-and-flutter']) {
  const b = fs.readFileSync(`/tmp/${name}.wav`), sr = b.readUInt32LE(24), n = (b.length - 44) / 4;
  const L = new Float32Array(n), R = new Float32Array(n); for (let i = 0; i < n; i++) { L[i] = b.readInt16LE(44 + i * 4) / 32768; R[i] = b.readInt16LE(46 + i * 4) / 32768; }
  const band = (x, lo, hi) => { // crude 2-pole band energy via one-pole pairs
    const aL = Math.exp(-2 * Math.PI * lo / sr), aH = Math.exp(-2 * Math.PI * hi / sr); let l1 = 0, l2 = 0, h1 = 0, h2 = 0, e = 0;
    for (let i = 0; i < x.length; i++) { l1 = x[i] + (l1 - x[i]) * aH; l2 = l1 + (l2 - l1) * aH; let y = l2; if (lo > 0) { h1 = y + (h1 - y) * aL; h2 = h1 + (h2 - h1) * aL; y = y - h2; } e += y * y; } return 10 * Math.log10(e / x.length + 1e-12); };
  let ss = 0, pk = 0, dc = 0, corr = 0, sl = 0, sr2 = 0, clip = 0; for (let i = 0; i < n; i++) { ss += L[i] * L[i] + R[i] * R[i]; pk = Math.max(pk, Math.abs(L[i]), Math.abs(R[i])); dc += L[i]; corr += L[i] * R[i]; sl += L[i] * L[i]; sr2 += R[i] * R[i]; if (Math.abs(L[i]) > 0.98) clip++; }
  const secs = []; const W = Math.floor(sr * 8); for (let s = 0; s + W <= n; s += W) { let e = 0; for (let i = s; i < s + W; i++) e += L[i] * L[i]; secs.push((10 * Math.log10(e / W + 1e-12)).toFixed(0)); }
  console.log(name, `rms ${(10 * Math.log10(ss / (2 * n))).toFixed(1)} dB, peak ${pk.toFixed(2)}, crest ${(20 * Math.log10(pk) - 10 * Math.log10(ss / (2 * n))).toFixed(1)} dB, L/R corr ${(corr / Math.sqrt(sl * sr2)).toFixed(2)}, >0.98: ${(100 * clip / n).toFixed(3)}%`);
  console.log('   bands dB  <120:', band(L, 0, 120).toFixed(1), ' 120-500:', band(L, 120, 500).toFixed(1), ' 500-2k:', band(L, 500, 2000).toFixed(1), ' 2k-6k:', band(L, 2000, 6000).toFixed(1), ' 6k+:', band(L, 6000, 20000).toFixed(1));
  console.log('   8-s section levels:', secs.join(' '));
}
