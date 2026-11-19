import * as THREE from 'three';

const hdr = (r, g, b, k = 1) => { const m = new THREE.MeshBasicMaterial(); m.color.setRGB(r * k, g * k, b * k); m.toneMapped = false; return m; };

function tube(pts, radius, mat, closed = false) {
  const curve = new THREE.CatmullRomCurve3(pts.map(p => new THREE.Vector3(...p)), closed, 'catmullrom', 0.12);
  return new THREE.Mesh(new THREE.TubeGeometry(curve, Math.max(8, pts.length * 8), radius, 8, closed), mat);
}
class Helix extends THREE.Curve {
  constructor(r, h, turns) { super(); this.r = r; this.h = h; this.turns = turns; }
  getPoint(t, o = new THREE.Vector3()) { const a = t * this.turns * Math.PI * 2; return o.set(Math.cos(a) * this.r, t * this.h, Math.sin(a) * this.r); }
}
// A unit-length bar along +Y that can be stretched between two points.
function strut(radius, mat) { const g = new THREE.CylinderGeometry(radius, radius, 1, 8); g.translate(0, 0.5, 0); return new THREE.Mesh(g, mat); }
const _a = new THREE.Vector3(), _b = new THREE.Vector3(), _up = new THREE.Vector3(0, 1, 0);
export function span(mesh, a, b) {
  _a.copy(b).sub(a); const len = _a.length() || 1e-3; mesh.position.copy(a); mesh.scale.set(1, len, 1);
  mesh.quaternion.setFromUnitVectors(_up, _a.divideScalar(len));
}

function glowTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 128; const x = c.getContext('2d');
  const g = x.createRadialGradient(64, 64, 0, 64, 64, 64); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.2, 'rgba(255,255,255,0.55)'); g.addColorStop(0.5, 'rgba(255,255,255,0.12)'); g.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = g; x.fillRect(0, 0, 128, 128); const t = new THREE.CanvasTexture(c); return t;
}

function makeWheel(R, W, mats, paddles, spokes = 5) {
  const spin = new THREE.Group();
  const prof = [[R * 0.6, -W / 2], [R * 0.86, -W / 2], [R * 0.98, -W * 0.36], [R, -W * 0.2], [R, W * 0.2], [R * 0.98, W * 0.36], [R * 0.86, W / 2], [R * 0.6, W / 2]].map(p => new THREE.Vector2(p[0], p[1]));
  const tire = new THREE.Mesh(new THREE.LatheGeometry(prof, 28), mats.rubber); tire.rotation.x = Math.PI / 2; spin.add(tire);
  const pg = new THREE.BoxGeometry(R * 0.2, 0.09, W * 0.92), inst = new THREE.InstancedMesh(pg, mats.rubber, paddles), m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(1, 1, 1), p = new THREE.Vector3();
  for (let i = 0; i < paddles; i++) { const a = i / paddles * Math.PI * 2; p.set(Math.cos(a) * (R + 0.02), Math.sin(a) * (R + 0.02), 0); q.setFromAxisAngle(new THREE.Vector3(0, 0, 1), a + 0.25); m.compose(p, q, s); inst.setMatrixAt(i, m); }
  spin.add(inst);
  const rim = new THREE.Mesh(new THREE.CylinderGeometry(R * 0.62, R * 0.62, W * 0.72, 20), mats.chrome); rim.rotation.x = Math.PI / 2; spin.add(rim);
  for (let i = 0; i < spokes; i++) { const sp = new THREE.Mesh(new THREE.BoxGeometry(R * 1.1, 0.07, W * 0.78), mats.dark); sp.rotation.z = i / spokes * Math.PI; spin.add(sp); }
  for (const z of [-W * 0.38, W * 0.38]) { const ring = new THREE.Mesh(new THREE.TorusGeometry(R * 0.66, 0.028, 6, 36), mats.rimGlow); ring.position.z = z; spin.add(ring); }
  return spin;
}

export function buildBuggy(opts = {}) {
  const lite = !!opts.lite;
  const root = new THREE.Group(), body = new THREE.Group(); root.add(body);
  const mats = {
    paint: new THREE.MeshPhysicalMaterial({ color: opts.color ?? 0xff2a7f, metalness: 0.75, roughness: 0.26, clearcoat: 1, clearcoatRoughness: 0.06, iridescence: 1, iridescenceIOR: 1.8, iridescenceThicknessRange: [200, 700] }),
    cage: new THREE.MeshPhysicalMaterial({ color: opts.cage ?? 0x18e0ff, metalness: 0.9, roughness: 0.2, clearcoat: 1 }),
    chrome: new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 1, roughness: 0.07 }),
    gold: new THREE.MeshStandardMaterial({ color: 0xffc23a, metalness: 1, roughness: 0.16 }),
    dark: new THREE.MeshStandardMaterial({ color: 0x15151c, metalness: 0.5, roughness: 0.5 }),
    rubber: new THREE.MeshStandardMaterial({ color: 0x09090b, roughness: 0.82 }),
    seat: new THREE.MeshStandardMaterial({ color: 0x2b0b3f, roughness: 0.6 }),
    helmet: new THREE.MeshPhysicalMaterial({ color: 0xffe14a, metalness: 0.2, roughness: 0.15, clearcoat: 1 }),
    rimGlow: hdr(0.2, 1, 0.9, 3), head: hdr(1, 0.95, 0.8, 7), tail: hdr(1, 0.05, 0.1, 5), visor: hdr(0.2, 0.9, 1, 2.2), diamond: hdr(0.8, 1, 1, 5), spring: hdr(1, 0.85, 0.1, 1.6),
  };
  // hull
  const sh = new THREE.Shape();
  [[-1.55, 0.36], [1.3, 0.36], [1.95, 0.5], [1.8, 0.74], [0.95, 0.9], [0.58, 0.84], [0.5, 0.62], [-0.62, 0.62], [-0.72, 0.98], [-1.55, 0.98]].forEach(([x, y], i) => i ? sh.lineTo(x, y) : sh.moveTo(x, y));
  const hull = new THREE.Mesh(new THREE.ExtrudeGeometry(sh, { depth: 1.16, bevelEnabled: true, bevelThickness: 0.06, bevelSize: 0.06, bevelSegments: 3 }), mats.paint);
  hull.position.z = -0.58; body.add(hull);
  const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.02, 0.3), mats.rimGlow); stripe.position.set(1.32, 0.86, 0); stripe.rotation.z = -0.175; body.add(stripe);
  // roll cage
  const r = 0.05;
  body.add(tube([[-0.55, 0.62, -0.64], [-0.55, 1.5, -0.56], [-0.55, 1.86, -0.3], [-0.55, 1.9, 0], [-0.55, 1.86, 0.3], [-0.55, 1.5, 0.56], [-0.55, 0.62, 0.64]], r, mats.cage));
  body.add(tube([[0.58, 0.82, -0.62], [0.5, 1.35, -0.54], [0.46, 1.62, -0.3], [0.45, 1.66, 0], [0.46, 1.62, 0.3], [0.5, 1.35, 0.54], [0.58, 0.82, 0.62]], r, mats.cage));
  for (const z of [-1, 1]) {
    body.add(tube([[0.47, 1.6, 0.36 * z], [-0.05, 1.8, 0.38 * z], [-0.55, 1.86, 0.36 * z]], r, mats.cage));
    body.add(tube([[-0.55, 1.8, 0.4 * z], [-1.1, 1.45, 0.46 * z], [-1.62, 0.98, 0.5 * z]], r, mats.cage));
    body.add(tube([[0.58, 0.82, 0.62 * z], [1.3, 0.7, 0.5 * z], [1.98, 0.5, 0.36 * z]], r * 0.9, mats.cage));
    body.add(tube([[0.58, 0.66, 0.64 * z], [0.0, 0.46, 0.9 * z], [-0.55, 0.62, 0.66 * z]], r * 0.9, mats.chrome));
  }
  body.add(tube([[2.0, 0.5, -0.5], [2.06, 0.5, 0], [2.0, 0.5, 0.5]], r, mats.chrome));
  // seats and driver
  for (const z of [-0.3, 0.3]) {
    const s1 = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.12, 0.46), mats.seat); s1.position.set(-0.22, 0.7, z); body.add(s1);
    const s2 = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.72, 0.46), mats.seat); s2.position.set(-0.47, 1.05, z); s2.rotation.z = 0.14; body.add(s2);
  }
  const driver = new THREE.Group(); driver.position.set(-0.26, 0, -0.3); body.add(driver);
  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.19, 0.36, 4, 10), mats.dark); torso.position.set(0, 1.12, 0); torso.rotation.z = 0.1; driver.add(torso);
  const head = new THREE.Group(); head.position.set(0.03, 1.62, 0); driver.add(head);
  head.add(new THREE.Mesh(new THREE.SphereGeometry(0.21, 20, 14), mats.helmet));
  const visor = new THREE.Mesh(new THREE.SphereGeometry(0.215, 16, 8, -0.9 + Math.PI / 2, 1.8, 1.15, 0.5), mats.visor); visor.rotation.y = -Math.PI / 2; head.add(visor);
  const wheel = new THREE.Mesh(new THREE.TorusGeometry(0.17, 0.03, 6, 18), mats.chrome); wheel.position.set(0.48, 1.12, 0); wheel.rotation.y = Math.PI / 2; wheel.rotation.x = 0.0; driver.add(wheel);
  if (!lite) for (const z of [-0.16, 0.16]) driver.add(tube([[0.02, 1.36, z * 1.3], [0.25, 1.2, z * 1.2], [0.46, 1.14, z]], 0.05, mats.dark));
  // engine, intake and exhaust
  const block = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.42, 0.78), mats.dark); block.position.set(-1.12, 1.18, 0); body.add(block);
  const blower = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.26, 0.4), mats.chrome); blower.position.set(-1.12, 1.52, 0); body.add(blower);
  const scoop = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.26, 0.3, 14), mats.gold); scoop.position.set(-1.05, 1.76, 0); scoop.rotation.z = -1.2; body.add(scoop);
  const exhaustTips = [];
  for (const z of [-1, 1]) {
    for (let i = 0; i < (lite ? 1 : 3); i++) body.add(tube([[-0.92 - i * 0.2, 1.22, 0.4 * z], [-0.95 - i * 0.2, 1.3, 0.6 * z], [-1.3 - i * 0.12, 1.2 + i * 0.07, 0.74 * z], [-2.0, 1.16 + i * 0.1, 0.72 * z]], 0.05, mats.chrome));
    const tip = new THREE.Object3D(); tip.position.set(-2.02, 1.26, 0.72 * z); body.add(tip); exhaustTips.push(tip);
  }
  // lights
  const lamps = [];
  for (const z of [-0.42, 0.42]) {
    const can = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.11, 0.2, 14), mats.chrome); can.rotation.z = Math.PI / 2; can.position.set(1.84, 0.82, z); body.add(can);
    const lens = new THREE.Mesh(new THREE.CircleGeometry(0.135, 16), mats.head); lens.rotation.y = Math.PI / 2; lens.position.set(1.945, 0.82, z); body.add(lens); lamps.push(lens);
    const tl = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.12, 0.3), mats.tail); tl.position.set(-1.62, 0.86, z); body.add(tl);
  }
  const barMats = [];
  const bar = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, 1.0), mats.dark); bar.position.set(0.47, 1.76, 0); body.add(bar);
  for (let i = 0; i < 6; i++) { const m = hdr(1, 1, 1, 4); barMats.push(m); const l = new THREE.Mesh(new THREE.CircleGeometry(0.07, 12), m); l.rotation.y = Math.PI / 2; l.position.set(0.535, 1.76, -0.4 + i * 0.16); body.add(l); }
  const glowTex = glowTexture();
  const flares = [];
  for (const z of [-0.42, 0.42]) { const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: 0xfff0c8, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.9 })); s.position.set(2.0, 0.82, z); s.scale.setScalar(1.8); body.add(s); flares.push(s); }
  // wheels on short swing arms
  const wheels = [];
  const defs = [[1.25, 0.54, 0.42, 1.08, true], [1.25, 0.54, 0.42, -1.08, true], [-1.2, 0.7, 0.66, 1.16, false], [-1.2, 0.7, 0.66, -1.16, false]];
  for (const [x, R, W, z, front] of defs) {
    const pivot = new THREE.Group(); pivot.position.set(x, R, z); root.add(pivot);
    const spin = makeWheel(R, W, mats, front ? 12 : 16, lite ? 2 : 5); pivot.add(spin);
    const arm1 = strut(0.04, mats.chrome), arm2 = strut(0.04, mats.chrome), shock = strut(0.07, mats.spring); if (!lite) body.add(arm1, arm2, shock);
    wheels.push({ pivot, spin, R, front, x, z, arm1, arm2, shock, inner: new THREE.Vector3(x, 0.5, Math.sign(z) * 0.5), top: new THREE.Vector3(x, 1.0, Math.sign(z) * 0.56), y: R });
  }
  // whip antenna with a flag
  const whip = new THREE.Group(); whip.position.set(-1.5, 0.98, -0.5); body.add(whip);
  whip.add(tube([[0, 0, 0], [0, 1.2, 0], [0, 2.4, 0]], 0.015, mats.chrome));
  const ball = new THREE.Mesh(new THREE.SphereGeometry(0.08, 10, 8), hdr(1, 0.3, 0.8, 5)); ball.position.y = 2.4; whip.add(ball);
  const fg = new THREE.BufferGeometry(); fg.setAttribute('position', new THREE.Float32BufferAttribute([0, 2.3, 0, 0, 1.9, 0, -0.7, 2.1, 0], 3)); fg.computeVertexNormals();
  const flag = new THREE.Mesh(fg, new THREE.MeshBasicMaterial({ color: 0xffe14a, side: THREE.DoubleSide })); whip.add(flag);

  // the pickup: cartridge body, cantilever and diamond. Its origin is the stylus tip.
  const cart = new THREE.Group(); if (!lite) root.add(cart);
  const diamond = new THREE.Mesh(new THREE.OctahedronGeometry(0.22, 0), mats.diamond); diamond.scale.set(0.8, 1.5, 0.8); diamond.position.y = 0.24; cart.add(diamond);
  const cantilever = strut(0.045, mats.chrome); cart.add(cantilever);
  const cartBody = new THREE.Group(); cart.add(cartBody);
  const cb = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.24, 0.42), mats.gold); cartBody.add(cb);
  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.4, 4), mats.gold); nose.rotation.z = -Math.PI / 2; nose.rotation.x = Math.PI / 4; nose.position.x = 0.5; cartBody.add(nose);
  const magnet = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.26, 0.44), mats.dark); magnet.position.x = 0.12; cartBody.add(magnet);
  const stem = strut(0.06, mats.chrome); if (!lite) root.add(stem);
  const tipGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: 0xbff8ff, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true })); tipGlow.scale.setScalar(1.6); tipGlow.position.y = 0.2; cart.add(tipGlow);

  // exhaust flames
  const flames = exhaustTips.map(tip => { const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: 0xff8a2a, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true })); s.center.set(0.85, 0.5); tip.add(s); return s; });

  return { root, body, wheels, mats, barMats, flares, lamps, whip, flag, cart, diamond, cantilever, cartBody, stem, tipGlow, flames, head, driver, steer: wheel, glowTex, stemAnchor: new THREE.Vector3(-0.5, 0.42, 0) };
}
