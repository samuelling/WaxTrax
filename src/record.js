import * as THREE from 'three';
import { TAU, DEPTH, R_END, R_LABEL, R_SPINDLE, LEAD_IN, taper, shapeF, warpH, warpAt } from './config.js';
import { VINYL_VERT, VINYL_FRAG } from './shaders.js';

function buildGeometry(L, K) {
  const pos = [], idx = [];
  const P = L.pitch, D = DEPTH;
  // disc (r, phi, height) → world, through the world's shape and warp
  const put = (r, phi, h) => { const f = shapeF(L, phi), rw = r * f; pos.push(rw * Math.cos(phi), h * f + warpH(L, r, phi), -rw * Math.sin(phi)); };
  // spiral strip: land | wall | crease | wall | land
  const nSeg = Math.ceil(L.totalRevs * K);
  const cs = [-P / 2, -D, 0, D, P / 2];
  for (let i = 0; i <= nSeg; i++) {
    const q = Math.min(L.totalRevs, i / K), phi = q * TAU, rc = L.R0 - q * P, tp = taper(L, q);
    for (let j = 0; j < 5; j++) put(rc - cs[j], phi, j === 2 ? -D * tp : 0);
    if (i < nSeg) { const a = i * 5; for (let j = 0; j < 4; j++) idx.push(a + j, a + j + 1, a + 5 + j, a + j + 1, a + 5 + j + 1, a + 5 + j); }
  }
  // flat ring outside the first revolution, out to the edge
  let base = pos.length / 3;
  for (let i = 0; i <= K; i++) {
    const fr = i / K, phi = fr * TAU, r0 = L.R0 + P / 2 - fr * P;
    put(L.R_EDGE, phi, 0); put(r0, phi, 0);
    if (i < K) { const a = base + i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
  }
  // disc inside the last revolution (run-out area and label), in rings so the warp can fade out
  base = pos.length / 3;
  const frEnd = L.totalRevs - Math.floor(L.totalRevs), eps = 1e-5, NR = 6;
  for (let i = 0; i <= K; i++) {
    const a01 = frEnd + eps + (i / K) * (1 - 2 * eps), fr = a01 - Math.floor(a01), phi = fr * TAU;
    const qLast = Math.floor(L.totalRevs - fr) + fr, r0 = L.R0 - qLast * P - P / 2;
    for (let k = 0; k < NR; k++) put(k === NR - 1 ? 0.5 : r0 + (R_LABEL + 6 - r0) * (k / (NR - 2)), phi, 0);
    if (i < K) { const a = base + i * NR; for (let k = 0; k < NR - 1; k++) idx.push(a + k, a + k + 1, a + NR + k, a + k + 1, a + NR + k + 1, a + NR + k); }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  // normals of the warped surface (the groove itself is shaded analytically)
  const nrm = new Float32Array(pos.length), flat = !L.waves.length && !L.bowl, d = 1.2;
  for (let i = 0; i < pos.length; i += 3) {
    if (flat) { nrm[i + 1] = 1; continue; }
    const x = pos[i], z = pos[i + 2];
    const gx = (warpAt(L, x + d, z) - warpAt(L, x - d, z)) / (2 * d), gz = (warpAt(L, x, z + d) - warpAt(L, x, z - d)) / (2 * d), il = 1 / Math.hypot(gx, 1, gz);
    nrm[i] = -gx * il; nrm[i + 1] = il; nrm[i + 2] = -gz * il;
  }
  g.setAttribute('normal', new THREE.BufferAttribute(nrm, 3));
  g.setIndex(idx);
  g.computeBoundingSphere();
  return g;
}
function buildEdge(L, bottom) {
  const N = 240, pos = [], idx = [];
  for (let i = 0; i <= N; i++) { const phi = i / N * TAU, f = shapeF(L, phi), rw = L.R_EDGE * f, x = rw * Math.cos(phi), z = -rw * Math.sin(phi); pos.push(x, warpH(L, L.R_EDGE, phi), z, x, bottom, z); if (i < N) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); } }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals(); return g;
}

function arcText(ctx, text, cx, cy, radius, centerAngle, font, fill, spacing = 1, inward = false) {
  ctx.save(); ctx.font = font; ctx.fillStyle = fill; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  const widths = [...text].map(ch => ctx.measureText(ch).width * spacing), total = widths.reduce((a, b) => a + b, 0);
  let ang = centerAngle - (inward ? -1 : 1) * total / radius / 2;
  [...text].forEach((ch, i) => {
    const w = widths[i], a = ang + (inward ? -1 : 1) * w / radius / 2;
    ctx.save(); ctx.translate(cx + Math.cos(a) * radius, cy + Math.sin(a) * radius); ctx.rotate(a + (inward ? -Math.PI / 2 : Math.PI / 2)); ctx.fillText(ch, 0, 0); ctx.restore();
    ang += (inward ? -1 : 1) * w / radius;
  });
  ctx.restore();
}

export function drawLabel(canvas, title, sub, hue) {
  const S = canvas.width, c = S / 2, ctx = canvas.getContext('2d');
  const col = (h, s, l) => `hsl(${(h % 360 + 360) % 360} ${s}% ${l}%)`;
  ctx.clearRect(0, 0, S, S);
  const g = ctx.createRadialGradient(c, c, S * 0.05, c, c, c);
  g.addColorStop(0, col(hue + 40, 95, 62)); g.addColorStop(0.55, col(hue, 92, 52)); g.addColorStop(1, col(hue - 50, 90, 34));
  ctx.fillStyle = g; ctx.beginPath(); ctx.arc(c, c, c, 0, TAU); ctx.fill();
  // sunburst
  ctx.save(); ctx.translate(c, c);
  for (let i = 0; i < 36; i++) { ctx.rotate(TAU / 36); ctx.fillStyle = i % 2 ? col(hue + 150, 95, 60) : col(hue + 185, 95, 55); ctx.globalAlpha = 0.22; ctx.beginPath(); ctx.moveTo(0, 0); ctx.arc(0, 0, c, 0, TAU / 72); ctx.fill(); }
  ctx.restore(); ctx.globalAlpha = 1;
  // rings
  ctx.lineWidth = S * 0.012; ctx.strokeStyle = '#0a0612'; ctx.beginPath(); ctx.arc(c, c, c * 0.965, 0, TAU); ctx.stroke();
  ctx.lineWidth = S * 0.006; ctx.strokeStyle = '#fff6d8'; ctx.beginPath(); ctx.arc(c, c, c * 0.93, 0, TAU); ctx.stroke();
  ctx.beginPath(); ctx.arc(c, c, c * 0.33, 0, TAU); ctx.stroke();
  const disp = '"Bungee", "Arial Black", Impact, sans-serif', mono = '"Chakra Petch", "Trebuchet MS", sans-serif';
  arcText(ctx, 'WAX RALLY RECORDS', c, c, c * 0.8, -Math.PI / 2, `${S * 0.085}px ${disp}`, '#0a0612', 1.06);
  arcText(ctx, '★ 33⅓ RPM ★ STEREO ★ CUT IN REAL TIME ★', c, c, c * 0.82, Math.PI / 2, `600 ${S * 0.04}px ${mono}`, '#0a0612', 1.1, true);
  // title block
  ctx.textAlign = 'center'; ctx.fillStyle = '#fff6d8'; ctx.strokeStyle = '#0a0612'; ctx.lineJoin = 'round';
  let t = (title || 'UNTITLED').toUpperCase(); let fs = S * 0.1; ctx.font = `${fs}px ${disp}`;
  while (ctx.measureText(t).width > S * 0.72 && fs > S * 0.035) { fs *= 0.94; ctx.font = `${fs}px ${disp}`; }
  if (ctx.measureText(t).width > S * 0.72) { while (t.length > 4 && ctx.measureText(t + '…').width > S * 0.72) t = t.slice(0, -1); t += '…'; }
  ctx.lineWidth = fs * 0.22; ctx.strokeText(t, c, c - S * 0.2); ctx.fillText(t, c, c - S * 0.2);
  ctx.font = `600 ${S * 0.036}px ${mono}`; ctx.fillStyle = '#0a0612'; ctx.fillText(sub || '', c, c - S * 0.2 + fs * 0.85);
  ctx.font = `${S * 0.05}px ${disp}`; ctx.fillText('SIDE A', c - S * 0.28, c + S * 0.02); ctx.fillText('45°/45°', c + S * 0.28, c + S * 0.02);
  ctx.font = `600 ${S * 0.03}px ${mono}`; ctx.fillText('LEFT = INNER WALL · RIGHT = OUTER WALL', c, c + S * 0.24);
  ctx.fillText('KEEP NEEDLE CLEAN · DRIVE LOUD', c, c + S * 0.285);
}

export class Record {
  constructor(scene, quality) {
    this.scene = scene; this.quality = quality; this.mesh = null; this.layout = null;
    this.labelCanvas = document.createElement('canvas'); this.labelCanvas.width = this.labelCanvas.height = quality.mobile ? 512 : 1024;
    this.labelTex = new THREE.CanvasTexture(this.labelCanvas); this.labelTex.colorSpace = THREE.SRGBColorSpace; this.labelTex.anisotropy = 4;
    const dummy = new THREE.DataTexture(new Float32Array(4 * 4), 2, 2, THREE.RGBAFormat, THREE.FloatType); dummy.needsUpdate = true;
    this.grooveTex = dummy;
    this.uniforms = {
      uTime: { value: 0 }, uSkyRot: { value: 0 }, uSpec: { value: new Float32Array(32) }, uBass: { value: 0 },
      uGroove: { value: dummy }, uTW: { value: 2048 }, uLevOff: { value: new Float32Array(16) }, uLevN: { value: new Float32Array(16).fill(1) }, uNumLev: { value: 1 },
      uR0: { value: 300 }, uPitch: { value: 10 }, uRot: { value: 0 }, uSweep: { value: -10 }, uSweepAmt: { value: 0 }, uDepth: { value: DEPTH }, uTotalRevs: { value: 0 }, uLeadIn: { value: LEAD_IN }, uTexPerRev: { value: 1000 },
      uTraceGain: { value: 1 }, uREdge: { value: 320 }, uRLabel: { value: R_LABEL }, uREnd: { value: R_END },
      uProg: { value: 0 }, uBlur: { value: 0 }, uHead: { value: 1 }, uTipGlow: { value: 0.5 }, uPulse: { value: 0 },
      uBuggy: { value: new THREE.Vector3() }, uBuggyFwd: { value: new THREE.Vector3(1, 0, 0) }, uTip: { value: new THREE.Vector3() },
      uGlowCol: { value: new THREE.Vector3(0.2, 1, 0.9) }, uSunDir: { value: new THREE.Vector3(1, 0.2, 0).normalize() },
      uLd: { value: [new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 1, 0)] },
      uLc: { value: [new THREE.Vector3(2, 0.3, 1.6), new THREE.Vector3(0.2, 1.6, 2), new THREE.Vector3(1.8, 1.5, 0.2)] },
      uLabel: { value: this.labelTex },
      uShA: { value: new THREE.Vector4() }, uShP: { value: new THREE.Vector4() }, uRLabelW: { value: R_LABEL },
      uZen: { value: new THREE.Vector3() }, uMid: { value: new THREE.Vector3() }, uHor: { value: new THREE.Vector3() }, uSunA: { value: new THREE.Vector3() }, uSunB: { value: new THREE.Vector3() }, uMoon: { value: new THREE.Vector3() }, uFog: { value: new THREE.Vector3() },
      uSunEl: { value: 0.2 }, uSunSize: { value: 0.25 }, uAurora: { value: 1 }, uStars: { value: 1 },
      uVinyl: { value: new THREE.Vector3(0.01, 0.009, 0.013) }, uAmb: { value: new THREE.Vector3(0.25, 0.12, 0.3) }, uSunLight: { value: new THREE.Vector3(2.4, 1.2, 1.1) }, uHueL: { value: 0.93 }, uHueR: { value: 0.53 }, uHueSpread: { value: 0.023 },
    };
    this.material = new THREE.ShaderMaterial({ uniforms: this.uniforms, vertexShader: VINYL_VERT, fragmentShader: VINYL_FRAG, side: THREE.DoubleSide });
    // edge of the disc and the platter under it
    this.edge = new THREE.Mesh(new THREE.BufferGeometry(), new THREE.MeshStandardMaterial({ color: 0x050507, roughness: 0.25, metalness: 0.2, side: THREE.DoubleSide }));
    this.edge.frustumCulled = false; scene.add(this.edge); this.platterTop = -3;
    this.platter = new THREE.Mesh(new THREE.CylinderGeometry(1.02, 1.02, 10, 160, 1, false), new THREE.MeshStandardMaterial({ color: 0x8a8f9c, roughness: 0.32, metalness: 1 }));
    this.platter.position.y = -8.01; scene.add(this.platter);
    // strobe dots around the platter rim
    this.strobeMat = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 }, uRate: { value: 1 } },
      vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }',
      fragmentShader: 'precision highp float; uniform float uTime, uRate; varying vec2 vUv; void main(){ float row = floor(vUv.y*4.); float n = 180. + row*6.; float d = fract(vUv.x*n + uTime*(row-1.5)*.6); float dot_ = smoothstep(.2,.3,d)*smoothstep(.8,.7,d)*smoothstep(.1,.25,fract(vUv.y*4.))*smoothstep(.9,.75,fract(vUv.y*4.)); gl_FragColor = vec4(mix(vec3(.02), vec3(1.,.35,.2)*3.5, dot_), 1.); }',
    });
    this.strobe = new THREE.Mesh(new THREE.CylinderGeometry(1.021, 1.021, 6, 160, 1, true), this.strobeMat);
    this.strobe.position.y = -8; scene.add(this.strobe);
  }
  setSong(L, tex, title, sub, hue) {
    this.layout = L;
    if (this.mesh) { this.mesh.removeFromParent(); this.mesh.geometry.dispose(); }
    const K = this.quality.mobile ? 360 : 600;
    this.mesh = new THREE.Mesh(buildGeometry(L, K), this.material); this.mesh.frustumCulled = false; this.scene.add(this.mesh);
    if (this.grooveTex) this.grooveTex.dispose();
    const t = new THREE.DataTexture(tex.data, tex.TW, tex.rows, THREE.RGBAFormat, THREE.FloatType);
    t.minFilter = t.magFilter = THREE.NearestFilter; t.generateMipmaps = false; t.needsUpdate = true; this.grooveTex = t;
    const u = this.uniforms;
    u.uGroove.value = t; u.uTW.value = tex.TW; u.uNumLev.value = tex.levels.length;
    for (let i = 0; i < 16; i++) { const l = tex.levels[Math.min(i, tex.levels.length - 1)]; u.uLevOff.value[i] = l.off; u.uLevN.value[i] = l.n; }
    u.uR0.value = L.R0; u.uTotalRevs.value = L.totalRevs; u.uTexPerRev.value = tex.fs * L.tRev / tex.dec; u.uPitch.value = L.pitch; u.uREdge.value = L.R_EDGE;
    // scale the traces so a typical loud passage swings most of the way across its wall
    let ss = 0; for (let i = 0; i < tex.env.length; i++) ss += tex.env[i] * tex.env[i];
    const rms = Math.sqrt(ss / tex.env.length) || 0.3;
    u.uTraceGain.value = Math.min(4, Math.max(1, 0.55 / rms));
    const top = this.platterTop = L.warpMin - 3, pr = L.R_EDGE * L.fMax + 34;
    this.edge.geometry.dispose(); this.edge.geometry = buildEdge(L, top);
    this.platter.scale.set(pr, 1, pr); this.platter.position.y = top - 5.01; this.strobe.scale.set(pr, 1, pr); this.strobe.position.y = top - 5;
    u.uShA.value.fromArray(L.sa); u.uShP.value.fromArray(L.sp); u.uRLabelW.value = R_LABEL * L.fMin * 0.985;
    this.setTheme(L.world.theme);
    drawLabel(this.labelCanvas, title, sub, hue); this.labelTex.needsUpdate = true;
  }
  setTheme(t) {
    const u = this.uniforms;
    for (const [k, v] of [['uZen', t.zen], ['uMid', t.mid], ['uHor', t.hor], ['uSunA', t.sunA], ['uSunB', t.sunB], ['uMoon', t.moon], ['uFog', t.fog], ['uVinyl', t.vinyl], ['uAmb', t.amb], ['uSunLight', t.sunLight]]) u[k].value.fromArray(v);
    u.uSunEl.value = t.sunEl; u.uSunSize.value = t.sunSize; u.uAurora.value = t.aurora; u.uStars.value = t.stars; u.uHueL.value = t.hueL; u.uHueR.value = t.hueR; u.uHueSpread.value = t.hueSpread;
  }
}
