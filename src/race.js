// Race mode: everyone rides the same groove from the lead-in to the end of the song.
// The groove has three lanes (outer wall, crease, inner wall). Speed tops out at normal
// pitch, so racing well keeps the song in tune; boosts push it sharp, hits drag it flat.
import * as THREE from 'three';
import { TAU, T_REV, LEAD_IN, terrain, spiralFrame } from './config.js';
import { buildBuggy } from './buggy.js';

export const ITEMS = {
  nitro: { name: 'NITRO', hint: 'burst of speed', color: '#ffd23a' },
  zap: { name: 'STATIC ZAP', hint: 'spins out the racer ahead', color: '#19e3ff' },
  gum: { name: 'GUM', hint: 'drop it behind you', color: '#ff5fb0' },
  sleeve: { name: 'SLEEVE', hint: 'blocks one hit', color: '#9dff6a' },
  rpm45: { name: '45 RPM', hint: 'six seconds at 45, untouchable', color: '#ff2a7f' },
};
export const COLORS = [0xff2a7f, 0x19e3ff, 0xffd23a, 0x9dff6a, 0xb86bff, 0xff8a2a, 0xffffff, 0x3a6bff];
const BOT_NAMES = ['Lathe', 'Rumble', 'Flutter', 'Shellac', 'Dubplate', 'Acetate', 'Matrix'];
const LANES = [-1.6, 0, 1.6];
const G = 30, WB = 1.22, TRK = 1.12;
const clamp = (x, a, b) => x < a ? a : x > b ? b : x;
const damp = (dt, r) => 1 - Math.exp(-dt * r);
function rng(seed) { let s = (seed >>> 0) || 1; return () => { s = (Math.imul(s, 1664525) + 1013904223) >>> 0; return s / 4294967296; }; }

export function buildCourse(L, seed) {
  const R = rng(seed), objs = []; let id = 0;
  const add = (type, q, lane, extra) => objs.push({ id: id++, type, q, lane, lat: LANES[lane], hideUntil: -1, taken: false, ...extra });
  const qEnd = LEAD_IN + L.musicRevs - 0.14;
  let q = LEAD_IN + 0.16, sinceBox = 3, last = '';
  while (q < qEnd) {
    const r = R(); sinceBox++;
    let kind = sinceBox >= 7 ? 'boxes' : r < 0.2 ? 'notes' : r < 0.36 ? 'pad' : r < 0.5 ? 'ramp' : r < 0.68 ? 'dust' : r < 0.8 ? 'grease' : r < 0.9 ? 'sweeper' : 'notes';
    if (kind === last && kind !== 'notes') kind = 'notes';
    const lane = Math.floor(R() * 3);
    if (kind === 'boxes') { for (let l = 0; l < 3; l++) add('box', q, l); sinceBox = 0; }
    else if (kind === 'notes') for (let i = 0; i < 5; i++) add('note', q + i * 0.006, lane);
    else if (kind === 'pad') add('pad', q, lane);
    else if (kind === 'ramp') { for (let l = 0; l < 3; l++) add('ramp', q, l); for (let i = 0; i < 4; i++) add('note', q + 0.014 + i * 0.007, 1, { high: true }); q += 0.03; }
    else if (kind === 'dust') { add('dust', q, lane); if (R() < 0.45) add('dust', q + 0.004, (lane + 1 + Math.floor(R() * 2)) % 3); }
    else if (kind === 'grease') add('grease', q, lane);
    else if (kind === 'sweeper') add('sweeper', q, 1, { phase: R() * TAU, speed: 1.1 + R() });
    last = kind; q += 0.075 + R() * 0.05;
  }
  objs.sort((a, b) => a.q - b.q);
  return objs;
}

function chevronTexture() {
  const c = document.createElement('canvas'); c.width = 64; c.height = 128; const x = c.getContext('2d');
  x.fillStyle = '#000'; x.fillRect(0, 0, 64, 128); x.strokeStyle = '#fff'; x.lineWidth = 12; x.lineJoin = 'miter';
  for (let i = -1; i < 4; i++) { x.beginPath(); x.moveTo(4, 40 + i * 44); x.lineTo(32, 12 + i * 44); x.lineTo(60, 40 + i * 44); x.stroke(); }
  const t = new THREE.CanvasTexture(c); t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; return t;
}
function boxTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 128; const x = c.getContext('2d');
  x.fillStyle = '#1a0d2b'; x.fillRect(0, 0, 128, 128); x.strokeStyle = '#fff'; x.lineWidth = 10; x.strokeRect(8, 8, 112, 112);
  x.fillStyle = '#fff'; x.font = '900 92px "Arial Black", Impact, sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('?', 64, 70);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
function nameTag(text, color) {
  const c = document.createElement('canvas'); c.width = 256; c.height = 64; const x = c.getContext('2d');
  x.font = '700 34px "Chakra Petch", "Trebuchet MS", sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle';
  x.lineWidth = 8; x.strokeStyle = 'rgba(10,6,18,.9)'; x.strokeText(text, 128, 34); x.fillStyle = '#' + new THREE.Color(color).getHexString(); x.fillText(text, 128, 34);
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), transparent: true, depthWrite: false })); s.scale.set(5, 1.25, 1); return s;
}
const hdr = (r, g, b, k = 1) => { const m = new THREE.MeshBasicMaterial(); m.color.setRGB(r * k, g * k, b * k); m.toneMapped = false; return m; };

const F = {}, dummy = new THREE.Object3D(), ZERO = new THREE.Matrix4().makeScale(0, 0, 0);

export class Race {
  constructor(scene, fx) {
    this.scene = scene; this.fx = fx; this.group = new THREE.Group(); this.group.visible = false; scene.add(this.group);
    this.active = false; this.racers = []; this.objs = []; this.gums = []; this.me = null; this.net = null; this.phase = 'idle'; this.clock = 0; this.over = false;
    const chev = this.chev = chevronTexture();
    const inst = (geo, mat, n) => { const m = new THREE.InstancedMesh(geo, mat, n); m.frustumCulled = false; m.count = 0; this.group.add(m); return m; };
    // boost pad
    const padG = new THREE.PlaneGeometry(2.5, 4.4); padG.rotateX(-Math.PI / 2); padG.rotateY(-Math.PI / 2);
    const padM = new THREE.MeshBasicMaterial({ map: chev, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false }); padM.color.setRGB(0.4, 3, 2.6);
    // ramp: a wedge rising toward +X
    const rg = new THREE.BufferGeometry(); const w = 1.25, l = 5, h = 1.5;
    rg.setAttribute('position', new THREE.Float32BufferAttribute([-l / 2, 0, -w, -l / 2, 0, w, l / 2, h, w, l / 2, h, -w, l / 2, 0, -w, l / 2, 0, w], 3));
    rg.setAttribute('uv', new THREE.Float32BufferAttribute([0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1], 2));
    rg.setIndex([0, 1, 2, 0, 2, 3, 3, 2, 5, 3, 5, 4, 0, 3, 4, 1, 5, 2]); rg.computeVertexNormals();
    const rampM = new THREE.MeshStandardMaterial({ color: 0x1b1030, roughness: 0.4, metalness: 0.5, emissive: new THREE.Color(3, 1.2, 0.1), emissiveMap: chev, side: THREE.DoubleSide });
    const boxM = new THREE.MeshBasicMaterial({ map: boxTexture(), toneMapped: false }); this.boxM = boxM;
    const noteM = hdr(1, 0.8, 0.15, 3);
    const dg = new THREE.IcosahedronGeometry(1.05, 2); { const p = dg.attributes.position; for (let i = 0; i < p.count; i++) { const x = p.getX(i), y = p.getY(i), z = p.getZ(i), k = 1 + 0.16 * Math.sin(x * 7 + y * 5) * Math.cos(z * 6 + x * 3); p.setXYZ(i, x * k, y * k * 0.85, z * k); } dg.computeVertexNormals(); }
    const dustM = new THREE.MeshStandardMaterial({ color: 0xa89a88, roughness: 1, emissive: 0x2a2018, flatShading: true });
    const slickG = new THREE.CircleGeometry(1.25, 20); slickG.rotateX(-Math.PI / 2); slickG.scale(2.6, 1, 1);
    const slickM = new THREE.MeshPhysicalMaterial({ color: 0x0a0a14, metalness: 1, roughness: 0.04, iridescence: 1, iridescenceIOR: 2.1, emissive: 0x100818 });
    const swG = new THREE.CylinderGeometry(0.8, 0.8, 2.6, 16); swG.rotateZ(Math.PI / 2);
    const swM = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5, emissive: new THREE.Color(2.2, 0.2, 0.9), emissiveMap: chev });
    this.im = {
      pad: inst(padG, padM, 140), ramp: inst(rg, rampM, 260), box: inst(new THREE.BoxGeometry(1.5, 1.5, 1.5), boxM, 260), note: inst(new THREE.TorusGeometry(0.5, 0.17, 8, 18), noteM, 1500),
      dust: inst(dg, dustM, 260), eye: inst(new THREE.SphereGeometry(0.26, 10, 8), new THREE.MeshBasicMaterial({ color: 0xffffff }), 520), pupil: inst(new THREE.SphereGeometry(0.12, 8, 6), new THREE.MeshBasicMaterial({ color: 0x050505 }), 520),
      grease: inst(slickG, slickM, 120), sweeper: inst(swG, swM, 90),
    };
    this.gumMeshes = []; const gg = new THREE.SphereGeometry(0.85, 14, 10); gg.scale(1, 0.55, 1); const gm = new THREE.MeshStandardMaterial({ color: 0xff5fb0, roughness: 0.3, emissive: 0x70103a });
    for (let i = 0; i < 16; i++) { const m = new THREE.Mesh(gg, gm); m.visible = false; this.group.add(m); this.gumMeshes.push(m); }
    const bg = new THREE.BufferGeometry(); bg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(14 * 3), 3));
    this.bolt = new THREE.Line(bg, new THREE.LineBasicMaterial({ color: new THREE.Color(1, 4, 5), toneMapped: false })); this.bolt.visible = false; this.bolt.frustumCulled = false; this.group.add(this.bolt); this.boltT = 0;
    this.models = [];
  }

  // roster: [{ id, name, kind: 'me' | 'bot' | 'remote', color }]
  setup(L, seed, roster, net) {
    this.L = L; this.net = net || null; this.seed = seed; this.objs = buildCourse(L, seed); this.gums = []; this.over = false; this.phase = 'count'; this.clock = -3.5; this.goAt = null; this.said = 4; this.gumN = 0;
    this.qFin = LEAD_IN + L.musicRevs - 0.02; this.laps = Math.max(1, Math.ceil(L.musicRevs));
    const R = rng(seed ^ 0x5bd1e995);
    for (const m of this.models) { this.group.remove(m.root); if (m.tag) this.group.remove(m.tag); } this.models = [];
    this.racers = roster.map((p, i) => {
      const r = { id: p.id, name: p.name, kind: p.kind, color: p.color ?? COLORS[i % COLORS.length], grid: i, q: LEAD_IN - 0.1 - i * 0.007, lat: (i % 2 ? 1 : -1) * 1.0, rate: 0, vy: 0, ya: 0, pH: 0, air: 0, airT: 0, grounded: true, gload: 1,
        spinT: 0, spinA: 0, boostT: 0, rpmT: 0, slipT: 0, slipDir: 1, shield: false, item: null, rollT: 0, useT: 0, notes: 0, draft: 0, trick: false, fin: null, place: i + 1, oi: 0, x: 0, z: 0, yaw: 0, mPerRev: 1000, skill: 0.955 + R() * 0.05, laneT: 0, tLane: 1, thinkT: R() * 0.2, net: null, wheel: 0, botUse: 0 };
      this._frame(r); r.ya = this._ground(r); r.pH = r.ya;
      if (p.kind !== 'me') { const B = buildBuggy({ lite: true, color: r.color, cage: 0xffffff }); B.tag = nameTag(p.name, r.color); this.group.add(B.root); this.group.add(B.tag); this.models.push(B); r.model = B; }
      return r;
    });
    this.me = this.racers.find(r => r.kind === 'me');
    // lay the course objects out once
    const counts = {}; for (const k in this.im) counts[k] = 0;
    for (const o of this.objs) { this._place(o, o.q, o.lat); o.slot = counts[o.type]++; if (o.type === 'dust') counts.eye += 2, counts.pupil += 2; }
    for (const k in this.im) this.im[k].count = Math.min(this.im[k].instanceMatrix.count, counts[k]);
    this.active = true; this.group.visible = true; this._instances(0, true);
  }
  // countdown ends (and the race starts) at performance time goAt
  startAt(goAt) { this.goAt = goAt; }
  stop() { this.active = false; this.group.visible = false; this.phase = 'idle'; }
  drop(id) { const i = this.racers.findIndex(r => r.id === id && r.kind === 'remote'); if (i < 0) return; const r = this.racers[i]; if (r.model) { r.model.root.visible = false; r.model.tag.visible = false; } this.racers.splice(i, 1); }

  _frame(r) { spiralFrame(this.L, r.q, r.lat, F); r.x = F.x; r.z = F.z; r.yaw = F.yaw; r.mPerRev = F.mPerRev; }
  _ground(r) {
    const c = Math.cos(r.yaw), s = Math.sin(r.yaw), L = this.L; let sum = 0;
    for (let i = 0; i < 4; i++) { const a = i < 2 ? WB : -WB, w = i % 2 ? TRK : -TRK; sum += terrain(L, r.x + c * a + s * w, r.z - s * a + c * w); }
    return sum / 4;
  }
  _place(o, q, lat) {
    const L = this.L; spiralFrame(L, q, lat, F); const c = Math.cos(F.yaw), s = Math.sin(F.yaw), d = 0.8;
    const h = terrain(L, F.x, F.z), hr = terrain(L, F.x + s * d, F.z + c * d), hl = terrain(L, F.x - s * d, F.z - c * d), hf = terrain(L, F.x + c * 2, F.z - s * 2), hb = terrain(L, F.x - c * 2, F.z + s * 2);
    o.x = F.x; o.z = F.z; o.y = h; o.yaw = F.yaw; o.roll = Math.atan2(hr - hl, 2 * d); o.pitch = Math.atan2(hf - hb, 4);
  }
  rank() {
    const a = this.racers.slice().sort((x, y) => (x.fin != null && y.fin != null) ? x.fin - y.fin : x.fin != null ? -1 : y.fin != null ? 1 : y.q - x.q);
    a.forEach((r, i) => r.place = i + 1); return a;
  }

  _hit(r, why) {
    if (r.rpmT > 0) return false;
    if (r.shield) { r.shield = false; if (r === this.me) this.fx.toast('SLEEVE POPPED', 'that one was free'); return false; }
    r.spinT = 1.25; r.rate *= 0.55; r.boostT = 0;
    if (r === this.me) { this.fx.toast(why || 'SKIPPED!', 'needle knocked'); this.fx.shake(0.9); this.fx.flash(0.2); }
    this.fx.burst(r.x, r.ya + 0.6, r.z, 26, 1, 0.9, 0.5, 13);
    return true;
  }
  _touch(r, o) {
    const me = r === this.me, t = this.clock;
    switch (o.type) {
      case 'pad': r.boostT = Math.max(r.boostT, 2.2); if (me) { this.fx.toast('BOOST'); this.fx.shake(0.3); } break;
      case 'ramp': if (r.grounded) { r.vy = 12 + 2.5 * r.rate; r.ya += 0.25; r.trick = false; } break;
      case 'box': if (!r.item && r.rollT <= 0 && (!me || t > o.hideUntil)) { r.rollT = 1.0; if (me) { o.hideUntil = t + 3.5; this.fx.burst(o.x, o.y + 1.5, o.z, 18, 1, 0.3, 1, 9); } } break;
      case 'note': if (!me || !o.taken) { r.notes++; if (me) { o.taken = true; this.fx.note(r.notes); } } break;
      case 'grease': if (r.rpmT <= 0) { r.slipT = 1.5; r.slipDir = r.lat >= 0 ? -1 : 1; if (me) this.fx.toast('GREASY', 'fingerprints on the wax'); } break;
      case 'dust': case 'sweeper': this._hit(r, o.type === 'dust' ? 'DUST BUNNY' : 'SWEPT'); break;
    }
  }
  _item(r) {
    const n = this.racers.length, f = n > 1 ? (r.place - 1) / (n - 1) : 0.5, x = Math.random();
    const tbl = f < 0.25 ? [['gum', 0.42], ['sleeve', 0.3], ['nitro', 0.22], ['zap', 0.06]] : f < 0.75 ? [['nitro', 0.3], ['zap', 0.3], ['gum', 0.2], ['sleeve', 0.14], ['rpm45', 0.06]] : [['nitro', 0.3], ['zap', 0.28], ['rpm45', 0.3], ['sleeve', 0.12]];
    let acc = 0; for (const [k, p] of tbl) { acc += p; if (x < acc) return k; } return 'nitro';
  }
  useItem(r = this.me) {
    if (!r || !r.item || this.phase !== 'race' || r.spinT > 0 || r.fin != null) return;
    const it = r.item, me = r === this.me; r.item = null;
    if (it === 'nitro') { r.boostT = Math.max(r.boostT, 2.6); if (me) this.fx.shake(0.4); }
    else if (it === 'rpm45') { r.rpmT = 6; r.spinT = 0; if (me) { this.fx.toast('45 RPM', 'wrong speed, right idea'); this.fx.flash(0.25); } }
    else if (it === 'sleeve') r.shield = true;
    else if (it === 'gum') { const g = { id: `${r.id}:${this.gumN++}`, q: r.q - 0.0045, lat: r.lat, owner: r.id, born: this.clock }; this._addGum(g); if (this.net) this.net.ev({ k: 'gum', id: g.id, q: g.q, lat: g.lat }); }
    else if (it === 'zap') {
      let best = null; for (const o of this.racers) { const d = o.q - r.q; if (o !== r && o.fin == null && d > 0 && d < 0.12 && (!best || d < best.q - r.q)) best = o; }
      this._bolt(r, best);
      if (best) { if (best.kind === 'remote') { if (this.net) this.net.ev({ k: 'zap', to: best.id }); } else this._hit(best, 'ZAPPED'); }
      else if (this.net) this.net.ev({ k: 'zap', to: null });
      if (me && !best) this.fx.toast('FIZZ', 'nobody in range');
    }
  }
  _addGum(g) { this._place(g, g.q, g.lat); this.gums.push(g); if (this.gums.length > 16) this.gums.shift(); }
  _bolt(from, to) {
    const p = this.bolt.geometry.attributes.position, n = p.count, tx = to ? to.x : from.x + Math.cos(from.yaw) * 60, tz = to ? to.z : from.z - Math.sin(from.yaw) * 60, ty = to ? to.ya : from.ya;
    for (let i = 0; i < n; i++) { const t = i / (n - 1), j = i === 0 || i === n - 1 ? 0 : 2.5; p.setXYZ(i, from.x + (tx - from.x) * t + (Math.random() - 0.5) * j, from.ya + 1.2 + (ty - from.ya) * t + (Math.random() - 0.5) * j, from.z + (tz - from.z) * t + (Math.random() - 0.5) * j); }
    p.needsUpdate = true; this.bolt.visible = true; this.boltT = 0.28;
  }
  // events from other players
  onEvent(from, e) {
    const src = this.racers.find(r => r.id === from);
    if (e.k === 'gum') this._addGum({ id: e.id, q: e.q, lat: e.lat, owner: from, born: this.clock });
    else if (e.k === 'rm') this.gums = this.gums.filter(g => g.id !== e.id);
    else if (e.k === 'zap') { const to = this.racers.find(r => r.id === e.to); if (src) this._bolt(src, to || null); if (to && to === this.me) this._hit(to, 'ZAPPED'); }
    else if (e.k === 'fin' && src) { src.fin = e.time; }
  }
  onSnapshot(states, now) {
    for (const r of this.racers) { if (r.kind !== 'remote') continue; const s = states[r.id]; if (!s) continue; r.net = { q: s[0], lat: s[1], rate: s[2], air: s[3], fl: s[4], t: now }; if (r.q === undefined || Math.abs(r.q - s[0]) > 0.05) r.q = s[0]; }
  }
  netState() { const m = this.me; return [+m.q.toFixed(5), +m.lat.toFixed(2), +m.rate.toFixed(3), +m.air.toFixed(2), (m.spinT > 0 ? 1 : 0) | (m.boostT > 0 ? 2 : 0) | (m.rpmT > 0 ? 4 : 0) | (m.shield ? 8 : 0) | (m.fin != null ? 16 : 0)]; }

  _bot(r, dt) {
    const c = { thr: 1, steer: 0, brake: false };
    r.thinkT -= dt;
    if (r.thinkT <= 0) {
      r.thinkT = 0.12 + Math.random() * 0.08;
      const score = [0, 0, 0]; const careless = Math.random() < 0.12;
      for (let i = r.oi; i < this.objs.length; i++) {
        const o = this.objs[i], d = o.q - r.q; if (d > 0.04) break; if (d < 0.003) continue;
        const near = 1 - d / 0.04;
        if (o.type === 'sweeper') { const lt = this._sweepLat(o, this.clock + d * T_REV / Math.max(0.3, r.rate)); for (let l = 0; l < 3; l++) if (Math.abs(LANES[l] - lt) < 1.5) score[l] -= 8 * near; continue; }
        const l = o.lane;
        if (o.type === 'dust') score[l] -= (careless || r.rpmT > 0 ? 0 : 10) * near; else if (o.type === 'grease') score[l] -= 4 * near;
        else if (o.type === 'pad') score[l] += 3; else if (o.type === 'box') score[l] += r.item ? 0 : 1.5; else if (o.type === 'note' && !o.high) score[l] += 0.5;
      }
      for (const g of this.gums) { const d = g.q - r.q; if (d > 0.003 && d < 0.04) for (let l = 0; l < 3; l++) if (Math.abs(LANES[l] - g.lat) < 1.2) score[l] -= 9; }
      let best = r.tLane, bs = -1e9; for (let l = 0; l < 3; l++) { const sc = score[l] - Math.abs(LANES[l] - r.lat) * 0.35 + (l === r.tLane ? 0.3 : 0); if (sc > bs) { bs = sc; best = l; } }
      r.tLane = best;
    }
    c.steer = clamp((LANES[r.tLane] - r.lat) * 1.6, -1, 1);
    if (r.item) {
      r.botUse += dt; const it = r.item; let go = r.botUse > 5;
      if (it === 'sleeve' || it === 'rpm45') go = r.botUse > 0.6; else if (it === 'nitro') go = r.botUse > 1.2;
      else if (it === 'zap') go = go || (r.botUse > 0.8 && this.racers.some(o => o !== r && o.q - r.q > 0.004 && o.q - r.q < 0.1));
      else if (it === 'gum') go = go || (r.botUse > 0.8 && this.racers.some(o => o !== r && r.q - o.q > 0.004 && r.q - o.q < 0.04));
      if (go) { r.botUse = 0; this.useItem(r); }
    } else r.botUse = 0;
    return c;
  }
  _sweepLat(o, t) { return 1.75 * Math.sin(t * o.speed + o.phase); }

  _step(r, c, dt) {
    const racing = this.phase === 'race';
    // speed: normal pitch is the natural top; notes add a little, boosts a lot
    let top = 1 + 0.006 * Math.min(10, r.notes);
    if (r.rpmT > 0) top = Math.max(top, 1.35);
    if (r.boostT > 0) top += 0.42;
    if (r.draft > 0.4) top += 0.05;
    if (Math.abs(r.lat) > 1.8) top *= 0.94;
    if (r.kind === 'bot') { const d = this.me ? r.q - this.me.q : 0; top *= r.skill * (d > 0.3 ? 0.965 : d < -0.3 ? 1.045 : 1); }
    if (!racing) r.rate = 0;
    else if (r.spinT > 0) { r.rate += (0.22 - r.rate) * damp(dt, 5); r.spinT -= dt; r.spinA += dt * 14; if (r.spinT <= 0) r.spinA = 0; }
    else if (r.fin != null) r.rate += (0.75 - r.rate) * damp(dt, 0.8);
    else if (c.brake) r.rate = Math.max(0, r.rate - 1.3 * dt);
    else if (c.thr > 0.05) r.rate += (top * c.thr - r.rate) * damp(dt, r.rate > top ? 1.4 : 1.15);
    else r.rate = Math.max(0, r.rate - 0.24 * dt);
    if (r.boostT > 0) r.boostT -= dt; if (r.rpmT > 0) r.rpmT -= dt;
    // lanes
    let st = r.spinT > 0 ? 0 : c.steer; if (!r.grounded) st *= 0.5;
    if (r.slipT > 0) { r.slipT -= dt; st = st * 0.3 + r.slipDir * 0.55; }
    r.lat = clamp(r.lat + st * 5.8 * dt, -2.05, 2.05);
    const q0 = r.q; r.q += r.rate * dt / T_REV;
    this._frame(r);
    // vertical: wheels on the terrain through a one-sided spring, so crests and ramps throw you
    const H = this._ground(r), pen = H - r.ya, dH = clamp((H - r.pH) / dt, -60, 16); r.pH = H;
    let acc = -G; if (pen > -0.02) { const f = clamp(900 * pen - 52 * (r.vy - dH), 0, 400); acc += f; r.gload = f / G; } else r.gload = 0;
    r.vy += acc * dt; r.ya += r.vy * dt; if (r.ya < H - 0.45) { r.ya = H - 0.45; if (r.vy < 0) r.vy = 0; }
    const wasG = r.grounded; r.grounded = pen > -0.12; r.air = Math.max(0, r.ya - H);
    if (!r.grounded) r.airT += dt; else { if (!wasG && r.airT > 0.3 && r.trick) { r.boostT = Math.max(r.boostT, 0.9); if (r === this.me) this.fx.toast('TRICK BOOST'); } if (r.airT > 0) { r.airT = 0; r.trick = false; } }
    // course objects crossed this step
    const objs = this.objs;
    while (r.oi < objs.length && objs[r.oi].q <= r.q) {
      const o = objs[r.oi++]; if (o.q < q0 - 0.002) continue;
      const lat = o.type === 'sweeper' ? this._sweepLat(o, this.clock) : o.lat;
      const wdt = o.type === 'ramp' ? 1.0 : o.type === 'pad' || o.type === 'sweeper' ? 1.35 : 1.15;
      if (Math.abs(lat - r.lat) > wdt) continue;
      if (o.high ? r.air < 1.0 : (r.air > 0.9 && o.type !== 'ramp')) continue;
      this._touch(r, o);
    }
    for (let i = this.gums.length - 1; i >= 0; i--) {
      const g = this.gums[i]; if (g.q > q0 && g.q <= r.q && Math.abs(g.lat - r.lat) < 1.15 && r.air < 0.9 && !(g.owner === r.id && this.clock - g.born < 0.6)) {
        this.gums.splice(i, 1); if (this.net) this.net.ev({ k: 'rm', id: g.id }); this._hit(r, 'GUMMED UP');
      }
    }
    if (r.rollT > 0) { r.rollT -= dt; if (r.rollT <= 0) { r.item = this._item(r); if (r === this.me) this.fx.item(r.item); } }
    if (racing && r.fin == null && r.q >= this.qFin) {
      r.fin = this.clock; this.rank();
      if (r === this.me) { this.fx.finish(r.place); if (this.net) this.net.ev({ k: 'fin', time: r.fin }); }
    }
  }
  _remote(r, dt) {
    const n = r.net; if (!n) return;
    const age = (performance.now() - n.t) / 1000, tq = n.q + n.rate * Math.min(age, 0.5) / T_REV;
    r.rate = n.rate; r.q += n.rate * dt / T_REV; r.q += (tq - r.q) * damp(dt, 8); r.lat += (n.lat - r.lat) * damp(dt, 10);
    this._frame(r); const H = this._ground(r); r.air += (n.air - r.air) * damp(dt, 12); r.ya = H + r.air; r.grounded = r.air < 0.3;
    r.spinT = n.fl & 1 ? 1 : 0; if (r.spinT) r.spinA += dt * 14; else r.spinA = 0; r.boostT = n.fl & 2 ? 1 : 0; r.rpmT = n.fl & 4 ? 1 : 0; r.shield = !!(n.fl & 8);
  }

  // one fixed physics step; inp is the local player's input
  step(dt, inp) {
    if (!this.active) return;
    this.clock = this.goAt != null ? (performance.now() - this.goAt) / 1000 : this.clock;
    if (this.phase === 'count') {
      const left = Math.ceil(-this.clock);
      if (this.goAt != null && left < this.said && left > 0 && left <= 3) { this.said = left; this.fx.toast(String(left)); this.fx.beep(false); }
      if (this.goAt != null && this.clock >= 0) { this.phase = 'race'; this.fx.toast('GO!', 'first to the label wins'); this.fx.beep(true); this.fx.flash(0.2); }
    }
    const me = this.me;
    for (const r of this.racers) {
      if (r.kind === 'me') this._step(r, { thr: inp.throttle > 0 ? inp.throttle : inp.throttle < 0 ? 0 : 0, brake: inp.hand || inp.throttle < -0.3, steer: inp.steer }, dt);
      else if (r.kind === 'bot') this._step(r, this._bot(r, dt), dt);
      else this._remote(r, dt);
    }
    if (me) {
      // trading paint: you cannot drive through the car in front, and tucking in behind it pays
      let draft = false;
      for (const o of this.racers) {
        if (o === me) continue; const dm = (o.q - me.q) * me.mPerRev, dl = o.lat - me.lat;
        if (Math.abs(dm) < 3.6 && Math.abs(dl) < 1.5 && me.air < 0.8 && o.air < 0.8) { me.lat = clamp(me.lat - Math.sign(dl || 1) * 4 * dt, -2.05, 2.05); if (dm > 0 && me.rate > o.rate) me.rate += (o.rate - me.rate) * damp(dt, 6); if (o.kind === 'bot') o.lat = clamp(o.lat + Math.sign(dl || 1) * 3 * dt, -2.05, 2.05); }
        if (dm > 4 && dm < 26 && Math.abs(dl) < 1.2) draft = true;
      }
      me.draft = clamp(me.draft + (draft ? dt : -2 * dt), 0, 1);
      if (inp.boost && !this._bp) { if (!me.grounded && me.airT > 0.12 && !me.trick) { me.trick = true; this.fx.toast('TRICK!'); } else this.useItem(me); }
      this._bp = inp.boost;
      if (me.fin != null && !this.over) { const all = this.racers.every(r => r.fin != null); if (all || this.clock > me.fin + 6) { this.over = true; this.rank(); } }
    }
  }

  _instances(dt, all) {
    const im = this.im, t = this.clock, meQ = this.me ? this.me.q : 0;
    this.chev.offset.y = -(performance.now() / 1000 * 1.6) % 1;
    for (const o of this.objs) {
      const stat = o.type === 'pad' || o.type === 'ramp' || o.type === 'grease';
      if (stat && !all) continue;
      if (!all && Math.abs(o.q - meQ) > 0.6) continue;     // only animate what is near
      const m = im[o.type]; if (o.slot >= m.instanceMatrix.count) continue;
      let hidden = false, lift = 0, spin = 0, bob = 0;
      if (o.type === 'note') { hidden = o.taken; lift = o.high ? 3.4 : 1.0; spin = t * 3 + o.q * 400; }
      else if (o.type === 'box') { hidden = t < o.hideUntil; lift = 1.7; spin = t * 1.4 + o.id; bob = Math.sin(t * 2.4 + o.id) * 0.25; }
      else if (o.type === 'dust') { lift = 0.75; bob = Math.abs(Math.sin(t * 3 + o.id)) * 0.25; }
      else if (o.type === 'sweeper') { this._place(o, o.q, this._sweepLat(o, t)); lift = 0.8; }
      else if (o.type === 'pad') lift = 0.07; else if (o.type === 'grease') lift = 0.05;
      if (hidden) { m.setMatrixAt(o.slot, ZERO); m.instanceMatrix.needsUpdate = true; continue; }
      dummy.rotation.order = 'YZX'; dummy.rotation.set(o.type === 'note' || o.type === 'box' ? 0 : -o.roll, o.yaw + spin, o.type === 'note' || o.type === 'box' ? 0 : o.pitch);
      dummy.position.set(o.x, o.y + lift + bob, o.z); dummy.scale.setScalar(1); dummy.updateMatrix(); m.setMatrixAt(o.slot, dummy.matrix); m.instanceMatrix.needsUpdate = true;
      if (o.type === 'dust' && all !== 'skipEyes') {
        const c = Math.cos(o.yaw), s = Math.sin(o.yaw), k = o.slot * 2;
        for (let e = 0; e < 2; e++) { const sd = e ? 0.38 : -0.38, ex = o.x - c * 0.86 + s * sd, ez = o.z + s * 0.86 + c * sd, ey = o.y + lift + bob + 0.3;
          dummy.rotation.set(0, 0, 0); dummy.position.set(ex, ey, ez); dummy.updateMatrix(); im.eye.setMatrixAt(k + e, dummy.matrix);
          dummy.position.set(ex - c * 0.2, ey, ez + s * 0.2); dummy.updateMatrix(); im.pupil.setMatrixAt(k + e, dummy.matrix); }
        im.eye.instanceMatrix.needsUpdate = true; im.pupil.instanceMatrix.needsUpdate = true;
      }
    }
  }

  // per-frame visuals
  frame(dt, time) {
    if (!this.active) return;
    this._instances(dt, false);
    const hue = (time * 0.25) % 1; this.boxM.color.setHSL(hue, 1, 0.6).multiplyScalar(2.4);
    this.gumMeshes.forEach((m, i) => { const g = this.gums[i]; m.visible = !!g; if (g) m.position.set(g.x, g.y + 0.35, g.z); });
    if (this.boltT > 0) { this.boltT -= dt; if (this.boltT <= 0) this.bolt.visible = false; }
    const L = this.L;
    for (const r of this.racers) {
      const B = r.model; if (!B) continue;
      const c = Math.cos(r.yaw), s = Math.sin(r.yaw);
      const hr = terrain(L, r.x + s * TRK, r.z + c * TRK), hl = terrain(L, r.x - s * TRK, r.z - c * TRK), hf = terrain(L, r.x + c * WB, r.z - s * WB), hb = terrain(L, r.x - c * WB, r.z + s * WB);
      const roll = r.grounded ? Math.atan2(hr - hl, 2 * TRK) : 0, pitch = r.grounded ? Math.atan2(hf - hb, 2 * WB) : clamp(r.vy * 0.01, -0.2, 0.25);
      r.vroll = (r.vroll || 0) + (roll - (r.vroll || 0)) * damp(dt, 12); r.vpitch = (r.vpitch || 0) + (pitch - (r.vpitch || 0)) * damp(dt, 12);
      B.root.position.set(r.x, r.ya, r.z); B.root.rotation.order = 'YZX'; B.root.rotation.set(-r.vroll, r.yaw + r.spinA, r.vpitch);
      r.wheel -= r.rate / T_REV * r.mPerRev * dt;
      for (const w of B.wheels) {
        const sg = Math.sign(w.z), wx = r.x + c * w.x + s * w.z, wz = r.z - s * w.x + c * w.z;
        const cam = r.grounded ? clamp(Math.atan2(terrain(L, wx + s * sg * 0.3, wz + c * sg * 0.3) - terrain(L, wx - s * sg * 0.3, wz - c * sg * 0.3), 0.6) - sg * r.vroll, -0.8, 0.8) : 0.1;
        w.pivot.rotation.set(-sg * cam, 0, 0); w.pivot.position.y = w.R * Math.cos(cam) + Math.abs(Math.sin(cam)) * 0.12; w.spin.rotation.z = r.wheel / w.R;
      }
      const hot = r.boostT > 0 || r.rpmT > 0; B.flames.forEach(f => { const k = 0.5 + r.rate + (hot ? 2.6 : 0) + Math.random() * 0.3; f.scale.set(k * 1.5, 0.5 + k * 0.2, 1); f.material.opacity = 0.75; });
      if (r.rpmT > 0) B.mats.paint.emissive.setHSL((time * 2) % 1, 1, 0.35); else B.mats.paint.emissive.setRGB(r.shield ? 0.1 : 0, r.shield ? 0.35 : 0, r.shield ? 0.1 : 0);
      B.tag.position.set(r.x, r.ya + 3.4, r.z);
    }
  }
}
export const botRoster = (n, myName) => [{ id: 'me', name: myName || 'You', kind: 'me', color: COLORS[0] }, ...BOT_NAMES.slice(0, n).map((nm, i) => ({ id: 'bot' + i, name: nm, kind: 'bot', color: COLORS[i + 1] }))];
