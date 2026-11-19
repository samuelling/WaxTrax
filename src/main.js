import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { TAU, UM, DEPTH, SPIRALS, spiralById, R_SPINDLE, R_LABEL, LEAD_IN, MAX_SECONDS, WORLDS, worldById, makeLayout, grooveAt, terrain, profile, warpAt, spiralPoint, spiralFrame } from './config.js';
import { AudioEngine } from './audio.js';
import { Record, drawLabel } from './record.js';
import { World } from './world.js';
import { buildBuggy, span } from './buggy.js';
import { POST_FRAG } from './shaders.js';
import { Race, ITEMS, COLORS, botRoster } from './race.js';
import { Net } from './net.js';

const $ = (id) => document.getElementById(id);
const clamp = (x, a, b) => x < a ? a : x > b ? b : x;
const sstep = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
const lerp = (a, b, t) => a + (b - a) * t;
const wrapPi = (a) => { a = (a + Math.PI) % TAU; if (a < 0) a += TAU; return a - Math.PI; };
const damp = (dt, rate) => 1 - Math.exp(-dt * rate);

const TRACKS = [
  { id: 'needle-drop', title: 'Needle Drop', sub: 'Electro-funk · 116 BPM', file: 'music/needle-drop.mp3', hue: 325, world: 'night' },
  { id: 'dune-runner', title: 'Dune Runner', sub: 'Synthwave · 104 BPM', file: 'music/dune-runner.mp3', hue: 28, world: 'dunes' },
  { id: 'wow-and-flutter', title: 'Wow & Flutter', sub: 'Drum & bass · 172 BPM', file: 'music/wow-and-flutter.mp3', hue: 188, world: 'flexi' },
  { id: 'spindle-spin', title: 'Spindle Spin', sub: 'Filter house · 124 BPM', file: 'music/spindle-spin.mp3', hue: 275, world: 'night' },
  { id: 'crate-digger', title: 'Crate Digger', sub: 'Lo-fi boom bap · 86 BPM', file: 'music/crate-digger.mp3', hue: 38, world: 'dunes' },
  { id: '8-bit-platter', title: '8-Bit Platter', sub: 'Chiptune · 150 BPM', file: 'music/8-bit-platter.mp3', hue: 140, world: 'flexi' },
  { id: 'dub-plate', title: 'Dub Plate', sub: 'Dub reggae · 74 BPM', file: 'music/dub-plate.mp3', hue: 2, world: 'night' },
  { id: 'turbo-tonearm', title: 'Turbo Tonearm', sub: 'Acid big beat · 132 BPM', file: 'music/turbo-tonearm.mp3', hue: 55, world: 'dunes' },
];

// ───────────────────────────────────────── renderer
const canvas = $('gl');
const touchDevice = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
const quality = { mobile: touchDevice || Math.min(innerWidth, innerHeight) < 560, scale: 1 };
if (touchDevice) document.body.classList.add('touch');
let renderer;
try { renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' }); }
catch (e) { $('status').textContent = 'This needs WebGL 2, which this browser or device did not provide.'; $('status').className = 'err'; throw e; }
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 0.95;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(64, 1, 0.4, 9000);
const record = new Record(scene, quality);
const world = new World(scene, renderer, record.uniforms);
const B = buildBuggy();
const spin = new THREE.Group(); scene.add(spin); spin.add(B.root);
const audio = new AudioEngine();

let composer, bloom, post;
function setupComposer() {
  if (composer) { try { composer.dispose(); } catch (e) { /* older three */ } }
  const dpr = Math.min(window.devicePixelRatio || 1, quality.mobile ? 1.5 : 1.75) * quality.scale;
  renderer.setPixelRatio(dpr); renderer.setSize(innerWidth, innerHeight, false);
  const w = Math.floor(innerWidth * dpr), h = Math.floor(innerHeight * dpr);
  const rt = new THREE.WebGLRenderTarget(w, h, { type: THREE.HalfFloatType, samples: quality.mobile ? 0 : 4 });
  composer = new EffectComposer(renderer, rt);
  composer.addPass(new RenderPass(scene, camera));
  bloom = new UnrealBloomPass(new THREE.Vector2(w / 2, h / 2), 0.5, 0.55, 1.0); composer.addPass(bloom);
  post = new ShaderPass({ uniforms: { tDiffuse: { value: null }, uSpeed: { value: 0 }, uTime: { value: 0 }, uFlash: { value: 0 }, uAspect: { value: w / h } }, vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }', fragmentShader: POST_FRAG });
  composer.addPass(post); composer.addPass(new OutputPass());
  camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
  world.sparks.mat.uniforms.uScale.value = h * 0.9;
}
setupComposer();
addEventListener('resize', setupComposer);

// ───────────────────────────────────────── state
const S = { phase: 'menu', mode: 'follow', choice: 'follow', L: null, song: null, cam: 0, time: 0, score: 0, rot: 0, selected: 0, flash: 0, shake: 0, pressed: null, started: false, loading: true, world: WORLDS[0], stick: 0.5, spiral: spiralById('tight'), platter: true, theta: 0, spinW: 0, intro: null };
try { S.spiral = spiralById(localStorage.getItem('wax.spiral') || 'tight'); S.platter = localStorage.getItem('wax.platter') !== 'still'; } catch (e) { /* storage unavailable */ }
try { const v = parseFloat(localStorage.getItem('wax.stick')); if (v >= 0 && v <= 1) S.stick = v; } catch (e) { /* storage unavailable */ }
const STICK_NAMES = [[0.12, 'Ice'], [0.38, 'Loose'], [0.62, 'Rut'], [0.87, 'Glue'], [1.01, 'Magnet']];
const stickName = (v) => STICK_NAMES.find(([t]) => v < t)[1];
function setStick(v, announce) {
  S.stick = clamp(Math.round(v * 20) / 20, 0, 1); try { localStorage.setItem('wax.stick', String(S.stick)); } catch (e) { /* storage unavailable */ }
  const el = document.getElementById('stick'); if (el) el.value = String(Math.round(S.stick * 100));
  const o = document.getElementById('stickOut'); if (o) o.textContent = `${stickName(S.stick)} · ${Math.round(S.stick * 100)}%`;
  if (document.getElementById('modeBadge')) updateModeUI();
  if (announce) toast(`${stickName(S.stick).toUpperCase()}`, `track stickiness ${Math.round(S.stick * 100)}%`);
}
const b = { x: 0, z: 0, y: 0, vy: 0, vx: 0, vz: 0, yaw: 0, q: 0.75, rate: 1, sway: 0, grounded: true, air: 0, gload: 1, prevHc: 0, phiU: 0, pitch: 0, roll: 0, speed: 0, qRate: 0.1, rhoRate: 0, wheelSpin: 0, steerVis: 0, airTime: 0, blend: new THREE.Vector3(), throttleVis: 0, lastN: 0, hops: 0, hopT: 0, lastSign: 1, scr: 0, scrT: 0, pocket: 0, donut: 0, boostVis: 0, finished: false };
const g0 = {}, g1 = {}, sp = {};
const onRail = () => (S.mode === 'follow' || S.mode === 'race') && !b.finished;
const inp = { throttle: 0, steer: 0, hand: false, boost: false };
const keys = new Set();
const tel = { ty: 0, tz: -37, ay: 0, az: -37, cA: 1, cB: 1, cL: 0, pk: 0, scope: null, scI: 0, fresh: 0 };
audio.onTel = (m) => { tel.ty = m.ty; tel.tz = m.tz; tel.ay = m.ay; tel.az = m.az; tel.cA = m.cA; tel.cB = m.cB; tel.cL = m.cL; tel.pk = Math.max(tel.pk * 0.9, m.pk); tel.scope = m.scope; tel.scI = m.scI; tel.fresh = performance.now(); };

// ───────────────────────────────────────── songs
function setStatus(t, err) { const s = $('status'); s.textContent = t; s.className = err ? 'err' : ''; }
const nextFrame = () => new Promise(r => requestAnimationFrame(() => r()));
let loadToken = 0;
async function loadSong(src) {
  const token = ++loadToken; S.loading = true; $('go').disabled = true;
  try {
    await audio.init();
    setStatus(src.file instanceof File ? 'Reading your file…' : 'Fetching the master tape…');
    const ab = src.file instanceof File ? await src.file.arrayBuffer() : await (await fetch(src.file)).arrayBuffer();
    if (token !== loadToken) return;
    setStatus('Decoding…'); const buf = await audio.decode(ab);
    if (token !== loadToken) return;
    setStatus('Cutting the lacquer…'); await nextFrame(); await nextFrame();
    const maxS = quality.mobile ? 240 : MAX_SECONDS; const pressed = audio.press(buf, quality.mobile ? 420000 : 1100000, maxS);
    S.pressed = pressed; S.song = src; S.started = false; S.mode = 'follow'; b.finished = false; if (S.phase !== 'menu') showMenu();
    if (src.world) S.world = worldById(src.world);
    applyWorld(S.world);
    $('trk').textContent = src.title; $('go').textContent = 'Drop the needle';
    const st = pressed.stats;
    setStatus(`${fmt(pressed.duration)} of groove · ${S.L.musicRevs.toFixed(1)} turns · cut at ${st.cutDb.toFixed(1)} dB, peak ${(st.peakVel * 100).toFixed(1)} cm/s, ±${st.latMax.toFixed(0)} µm sideways${pressed.truncated ? ` · trimmed to the first ${maxS / 60} min` : ''}`);
    S.loading = false; updateGo(); if (S.onLoaded) S.onLoaded();
  } catch (e) {
    console.error(e); if (token !== loadToken) return;
    setStatus(src.file instanceof File ? 'That file could not be decoded as audio. Try an MP3, WAV, M4A or OGG.' : 'Could not load that track. Check your connection and try again.', true);
    S.loading = false; $('go').disabled = !S.L;
  }
}
// Lay the current pressing out on a world: its shape, its hills and its look.
function applyWorld(w) {
  S.world = w; const src = S.song, pressed = S.pressed; if (!pressed) return;
  S.L = makeLayout(pressed.duration, w, S.spiral); audio.setLayout(S.L);
  record.setSong(S.L, pressed.tex, src.title, src.sub, src.hue); world.setSong(S.L, record.platterTop); drawMiniBase();
  spin.add(record.mesh); S.theta = 0; S.spinW = 0;
  S.started = false; S.mode = 'follow'; b.finished = false; resetRun(false); updateWorldUI();
}
const fmt = (s) => { s = Math.max(0, s); return Math.floor(s / 60) + ':' + String(Math.floor(s % 60)).padStart(2, '0'); };

function resetRun(snapAudio = true) {
  b.q = 0.72; b.rate = S.phase === 'play' ? 0 : 1; b.sway = 0; b.vy = 0; b.vx = 0; b.vz = 0; b.qRate = 0; b.lastSign = 1; b.airTime = 0; b.air = 0; b.grounded = true; b.finished = false; b.pocket = 0; b.hops = 0; b.scr = 0; b.donut = 0;
  placeOnSpiral(); b.y = wheelAvg(b.x, b.z, b.yaw); b.prevHc = b.y; b.blend.set(0, 0, 0);
  S.score = 0; $('score').textContent = '000000'; $('combo').textContent = '';
  camSnap = true; if (snapAudio) sendCtl(true);
}
function placeOnSpiral() {
  spiralFrame(S.L, b.q, b.sway, sp); b.x = sp.x; b.z = sp.z; b.yaw = sp.yaw; b.phiU = b.q * TAU;
}

// ───────────────────────────────────────── physics
const WB = 1.22, TRK = 1.12, G = 30;
function wheelAvg(x, z, yaw) {
  const c = Math.cos(yaw), s = Math.sin(yaw), fx = c, fz = -s, rx = s, rz = c, L = S.L; let sum = 0;
  for (let i = 0; i < 4; i++) { const a = i < 2 ? WB : -WB, w = i % 2 ? TRK : -TRK; const h = terrain(L, x + fx * a + rx * w, z + fz * a + rz * w); wh[i] = h; sum += h; }
  return sum / 4;
}
const wh = [0, 0, 0, 0];

function stepFollow(dt) {
  const L = S.L;
  let target = 1, tau = 0.35;
  if (S.intro) { target = 0; tau = 0.15; }
  else if (inp.hand) { target = 0; tau = 0.14; }
  else if (inp.throttle > 0.05) { target = 1 + inp.throttle * (inp.boost ? 2 : 1); tau = 0.5; }
  else if (inp.throttle < -0.05) { target = 1 + inp.throttle * 2.5; tau = 0.4; }
  else if (inp.boost) { target = 2; tau = 0.4; }
  if (S.phase !== 'play') { target = 1; tau = 0.3; }
  b.rate += (target - b.rate) * damp(dt, 1 / tau);
  b.q += b.rate * dt / S.L.tRev;
  if (b.q < 0.03) { b.q = 0.03; if (b.rate < 0) b.rate *= -0.3; }
  if (b.q >= L.totalRevs - 0.035) { if (S.phase === 'play') finish(); else b.q = 0.72; }
  b.sway += (inp.steer * 1.5 - b.sway) * damp(dt, 6);
  placeOnSpiral();
  b.yaw += clamp((inp.steer * 1.5 - b.sway) * 0.12, -0.25, 0.25);
  const Hc = wheelAvg(b.x, b.z, b.yaw);
  b.y += (Hc - b.y) * damp(dt, 18); b.vy = 0; b.air = 0; b.grounded = true; b.gload = 1; b.prevHc = Hc;
  b.speed = b.rate / S.L.tRev * sp.mPerRev;
  b.vx = Math.cos(sp.yaw) * b.speed; b.vz = -Math.sin(sp.yaw) * b.speed;
  b.qRate = b.rate / S.L.tRev; b.rhoRate = b.qRate;
}

function stepFree(dt) {
  const L = S.L;
  let cy = Math.cos(b.yaw), sy = Math.sin(b.yaw);
  let vf = b.vx * cy - b.vz * sy, vr = b.vx * sy + b.vz * cy;
  let thr = inp.throttle, steer = inp.steer, hand = inp.hand, boost = inp.boost;
  if (b.finished) { thr = vf < 20 ? 0.5 : -0.25; steer = 1; hand = false; boost = false; }
  if (b.grounded) {
    const top = boost ? 240 : 170;
    if (thr > 0) vf += thr * (boost ? 100 : 62) * Math.max(0, 1 - vf / top) * dt;
    else if (thr < 0) vf += thr * (vf > 2 ? 120 : 48) * dt;
    else if (boost) vf += 100 * Math.max(0, 1 - vf / top) * dt;
    vf -= vf * 0.1 * dt + Math.sign(vf) * Math.min(Math.abs(vf), 2 * dt);
    if (vf < -80) vf = -80;
    vr *= Math.exp(-(hand ? 1.1 : 7) * dt);
    if (hand) vf -= vf * 0.8 * dt;
  }
  let yawRate = steer * vf / (7 + vf * vf / 100);
  if (hand && b.grounded) yawRate *= 1.8;
  if (!b.grounded) yawRate *= 0.4;
  // The groove pulls a rolling buggy into line, the way a rut does, and steering out breaks it.
  // Track stickiness (S.stick, 0 = ice … 1 = magnet) sets how hard it pulls, how far from the
  // centre line it reaches, and how much steering it takes to escape.
  grooveAt(L, b.x, b.z, g0);
  const stk = S.stick, reach = DEPTH * 0.95 + Math.max(0, (stk - 0.6) / 0.4) * (L.pitch / 2 - DEPTH * 0.95);
  let lock = 0, gnx = 0, gnz = 0;
  if (Math.abs(steer) < 0.2) b.strain = Math.max(0, (b.strain || 0) - 2 * dt);
  if (stk > 0.01 && b.grounded && g0.inGroove && Math.abs(g0.e) < reach && Math.abs(vf) > 4 && !b.finished) {
    const th = 0.6 * stk * stk; let w = 1 - sstep(th, th + 0.35, Math.abs(steer));
    // above the middle setting the groove holds on for a moment against full lock before letting go
    const T = Math.max(0, (stk - 0.5) / 0.5) * 1.1;
    if (w < 1) b.strain = (b.strain || 0) + dt * (1 - w); else b.strain = Math.max(0, (b.strain || 0) - 2 * dt);
    if (T > 0) w += (1 - w) * (1 - clamp((b.strain || 0) / T, 0, 1));
    spiralFrame(L, g0.rev, g0.e, sp); const tx = Math.cos(sp.yaw), tz = -Math.sin(sp.yaw), vt = b.vx * tx + b.vz * tz, dir = vt >= 0 ? 1 : -1;
    // the groove's outward normal, for the centring spring below
    gnx = -tz; gnz = tx; if (gnx * b.x + gnz * b.z < 0) { gnx = -gnx; gnz = -gnz; }
    // heading that runs along the groove (either way round) and eases back to its centre line
    let yT = sp.yaw - dir * clamp(g0.e * 0.06, -0.2, 0.2);
    let d = wrapPi(yT - b.yaw); if (Math.abs(d) > Math.PI / 2) d = wrapPi(d + Math.PI + dir * 2 * clamp(g0.e * 0.06, -0.2, 0.2));
    if (Math.abs(d) < 0.8 + 0.6 * stk) {
      lock = w;
      // the rut turns the buggy with its curve for as long as the wheels are in it; steering only breaks the pull back to centre
      b.yaw += (vt / sp.mPerRev * TAU) * dt * Math.min(1, stk * 2) + d * damp(dt, 25 * Math.pow(stk, 1.5) * w);
    }
  }
  b.yaw += yawRate * dt;
  cy = Math.cos(b.yaw); sy = Math.sin(b.yaw);
  b.vx = vf * cy + vr * sy; b.vz = -vf * sy + vr * cy;
  if (b.grounded) {
    const d = 0.7, gx = (terrain(L, b.x + d, b.z) - terrain(L, b.x - d, b.z)) / (2 * d), gz = (terrain(L, b.x, b.z + d) - terrain(L, b.x, b.z - d)) / (2 * d);
    b.vx -= 24 * gx * dt; b.vz -= 24 * gz * dt;
  }
  // above the middle setting, a spring toward the groove's centre line (e > 0 is toward the spindle)
  if (lock > 0 && stk > 0.5) {
    const k = (stk - 0.5) / 0.5, vOut = b.vx * gnx + b.vz * gnz;
    const a = clamp((50 * g0.e * g0.f - 12 * vOut) * k * lock, -140, 140);
    b.vx += a * gnx * dt; b.vz += a * gnz * dt;
  }
  const px = b.x, pz = b.z, pr = g0.r;
  b.x += b.vx * dt; b.z += b.vz * dt;
  // stay on the record (r is the disc radius)
  grooveAt(L, b.x, b.z, g0); let r = g0.r;
  const rMax = L.R_EDGE - 3, rMin = R_SPINDLE + 2.6;
  if (r > rMax || r < rMin) {
    const nx = b.x / g0.rw, nz = b.z / g0.rw, vn = b.vx * nx + b.vz * nz, out = r > rMax;
    if ((out && vn > 0) || (!out && vn < 0)) { b.vx -= 1.5 * vn * nx; b.vz -= 1.5 * vn * nz; burst(b.x, b.y + 0.5, b.z, 30, 1, 0.5, 0.9, 18); S.shake = Math.max(S.shake, 0.6); }
    const rr = out ? rMax : rMin; b.x = nx * rr * g0.f; b.z = nz * rr * g0.f; r = rr;
  }
  // vertical: wheels on terrain through a one-sided spring
  const Hc = wheelAvg(b.x, b.z, b.yaw), pen = Hc - b.y, dH = clamp((Hc - b.prevHc) / dt, -60, 15); b.prevHc = Hc;
  let acc = -G;
  if (pen > -0.02) { let f = 900 * pen - 52 * (b.vy - dH); if (f < 0) f = 0; if (f > 400) f = 400; acc += f; b.gload = f / G; } else b.gload = 0;
  b.vy += acc * dt; b.y += b.vy * dt;
  if (b.y < Hc - 0.45) { b.y = Hc - 0.45; if (b.vy < 0) b.vy = 0; }
  const wasG = b.grounded; b.grounded = pen > -0.12; b.air = Math.max(0, b.y - Hc);
  if (!b.grounded) b.airTime += dt;
  else if (!wasG) { if (b.airTime > 0.45 && S.phase === 'play') { const pts = Math.round(b.airTime * 400); toast(b.airTime > 1.1 ? 'MASSIVE AIR' : 'BIG AIR', `+${pts} · needle off the wax ${b.airTime.toFixed(1)} s`); addScore(pts); burst(b.x, b.y, b.z, 40, 1, 0.8, 0.3, 14); S.shake = Math.max(S.shake, 0.8); } b.airTime = 0; }
  // angular motion around the spindle is what plays the record
  const phi = Math.atan2(-b.z, b.x), pphi = Math.atan2(-pz, px), dphi = wrapPi(phi - pphi);
  b.phiU += dphi; b.qRate += (dphi / dt / TAU - b.qRate) * 0.5; b.rhoRate = -(r - pr) / dt / L.pitch;
  b.rate = b.qRate * L.tRev; b.speed = vf;
  // donuts on the label
  if (r < R_LABEL && Math.abs(yawRate) > 1 && b.grounded) { b.donut += Math.abs(yawRate) * dt; if (b.donut > TAU * 1.5 && S.phase === 'play') { b.donut = 0; toast('LABEL DONUT', '+300'); addScore(300); } }
}

// The platter turns on the physics clock so it stays locked to the buggy: pinned under you on the
// rails, a steady 33⅓ (one lap per tRev) in free drive, still when switched off.
function platterStep(h) {
  const pinned = S.mode === 'race' || (S.mode === 'follow' && !b.finished);
  const target = !S.platter || S.intro ? 0 : pinned ? -TAU * b.qRate : -TAU / S.L.tRev;
  S.spinW += (target - S.spinW) * damp(h, pinned && S.platter ? 25 : 1.2); S.theta = (S.theta + S.spinW * h) % TAU;
}
function sendCtl(snap, lead = 0, nowMs) {
  if (!audio.ctx || audio.ctx.state !== 'running' || !S.L) return;
  const L = S.L;
  if (onRail()) {
    const racing = S.mode === 'race'; let hb = profile(L, b.x, b.z) / UM; if (racing) { grooveAt(L, b.x, b.z, g1); hb += b.air / g1.f / UM; }
    audio.ctl({ q: b.q + b.qRate * lead, qRate: b.qRate, rho: b.q, rhoRate: b.qRate, hb, g: racing ? clamp(b.gload, 0, 4) : 1, follow: true, sway: b.sway / L.pitch, snap: !!snap }, nowMs);
  } else {
    const pf = profile(L, b.x, b.z); grooveAt(L, b.x, b.z, g1); const r = g1.r;
    audio.ctl({ q: b.phiU / TAU + b.qRate * lead, qRate: b.qRate, rho: (L.R0 - r) / L.pitch + b.rhoRate * lead, rhoRate: b.rhoRate, hb: (pf + b.air / g1.f) / UM, g: clamp(b.gload, 0, 4), follow: false, sway: 0, snap: !!snap }, nowMs);
  }
}

function setMode(m, announce = true) {
  if (!S.L || m === S.mode && !b.finished) { S.mode = m; updateModeUI(); return; }
  const L = S.L; const old = new THREE.Vector3(b.x, b.y, b.z);
  if (m === 'follow') {
    grooveAt(L, b.x, b.z, g0);
    b.q = clamp(g0.rev, 0.05, L.totalRevs - 0.2); b.sway = 0; b.rate = clamp(b.rate, -1.5, 3); b.finished = false;
    S.mode = m; placeOnSpiral(); b.blend.copy(old).sub(new THREE.Vector3(b.x, b.y, b.z)); b.vy = 0;
    if (announce && S.phase === 'play') { toast('NEEDLE DROP', 'locked into the groove'); burst(b.x, b.y, b.z, 30, 0.4, 1, 1, 12); }
  } else {
    S.mode = m; b.phiU = b.q * TAU; b.prevHc = wheelAvg(b.x, b.z, b.yaw);
    if (announce && S.phase === 'play') toast('FREE DRIVE', 'the whole side is yours');
  }
  updateModeUI(); sendCtl(true);
}
function toggleMode() { if (S.phase !== 'play' || S.mode === 'race') return; S.choice = S.mode === 'follow' ? 'free' : 'follow'; setMode(S.choice); }
function updateModeUI() {
  const mb = $('modeBadge'); mb.textContent = S.mode === 'race' ? 'RACE' : S.mode === 'follow' ? 'FOLLOW' : `FREE · ${stickName(S.stick).toUpperCase()}`;
  $('freePanel').hidden = S.choice !== 'free'; $('bStick').hidden = S.mode !== 'free'; mb.className = S.mode === 'free' ? 'free' : '';
  $('racePanel').hidden = S.choice !== 'race'; $('bMode').hidden = S.mode === 'race'; $('raceHud').hidden = S.mode !== 'race'; $('board').hidden = S.mode !== 'race'; $('tBoost').textContent = S.mode === 'race' ? 'ITEM' : 'NOS'; $('tGas').style.opacity = S.mode === 'race' ? '0.35' : ''; document.body.classList.toggle('racing', S.mode === 'race');
  document.querySelectorAll('#modes button').forEach(x => x.setAttribute('aria-pressed', String(x.dataset.mode === S.choice)));
}

function finish() {
  b.finished = true; S.phase = 'done';
  S.mode = 'free'; b.phiU = b.q * TAU; b.prevHc = wheelAvg(b.x, b.z, b.yaw); updateModeUI();
  toast('SIDE COMPLETE', `${Math.round(S.score).toLocaleString()} points`);
  for (let i = 0; i < 5; i++) setTimeout(() => confetti(), i * 260);
  setTimeout(() => { if (S.phase === 'done') showMenu(`Side complete · ${Math.round(S.score).toLocaleString()} points`); }, 4200);
}

// ───────────────────────────────────────── juice
function addScore(n) { S.score += n; $('score').textContent = String(Math.round(S.score)).padStart(6, '0'); }
function toast(big, small) {
  const t = document.createElement('div'); t.className = 'toast'; t.textContent = big;
  if (small) { const s = document.createElement('small'); s.textContent = small; t.appendChild(s); }
  const box = $('toasts'); box.appendChild(t); while (box.children.length > 2) box.firstChild.remove();
  setTimeout(() => t.remove(), 1500);
}
function burst(x, y, z, n, r, g, bl, v) {
  for (let i = 0; i < n; i++) { const a = Math.random() * TAU, u = Math.random(); world.sparks.emit(x, y + 0.2, z, Math.cos(a) * v * u + b.vx * 0.3, 4 + Math.random() * v, Math.sin(a) * v * u + b.vz * 0.3, r * 3, g * 3, bl * 3, 0.5 + Math.random() * 0.7, 0.5 + Math.random() * 0.5); }
}
function confetti() {
  const c = new THREE.Color();
  for (let i = 0; i < 120; i++) { c.setHSL(Math.random(), 1, 0.55); const a = Math.random() * TAU, v = 6 + Math.random() * 16; world.sparks.emit(b.x, b.y + 2, b.z, Math.cos(a) * v, 14 + Math.random() * 16, Math.sin(a) * v, c.r * 3, c.g * 3, c.b * 3, 1.6 + Math.random() * 1.4, 0.7 + Math.random() * 0.6, 14); }
  S.flash = 0.25;
}

function scoring(dt) {
  if (S.phase !== 'play' || S.mode === 'race') return;
  const both = tel.cA > 0.9 && tel.cB > 0.9;
  if (S.mode === 'follow') {
    if (Math.abs(b.rate - 1) < 0.04 && both) { b.pocket += dt; const mult = 1 + Math.min(7, Math.floor(b.pocket / 8)); addScore(12 * mult * dt); $('combo').textContent = `IN THE POCKET ×${mult}`; if (b.pocket > 8 && Math.floor(b.pocket / 8) !== Math.floor((b.pocket - dt) / 8) && mult <= 8) toast(`POCKET ×${mult}`, 'dead on 33⅓'); }
    else { if (b.pocket > 1) $('combo').textContent = ''; b.pocket = 0; }
  } else {
    $('combo').textContent = b.hops > 1 && S.time - b.hopT < 2 ? `GROOVE HOPS ×${b.hops}` : '';
    if (g0.inGroove && g0.n !== b.lastN && b.grounded) { if (S.time - b.hopT > 2) b.hops = 0; b.hops++; b.hopT = S.time; b.lastN = g0.n; addScore(40 * b.hops); if (b.hops % 5 === 0) toast(`${b.hops} GROOVE HOPS`, `+${40 * b.hops}`); }
  }
  // scratches: reversing the record under the needle
  const sgn = b.rate > 0.35 ? 1 : b.rate < -0.35 ? -1 : 0;
  if (sgn && sgn !== b.lastSign) {
    b.lastSign = sgn; if (S.time - b.scrT > 1.6) b.scr = 0; b.scr++; b.scrT = S.time;
    const names = ['BABY SCRATCH', 'CHIRP', 'TRANSFORMER', 'FLARE', 'CRAB', 'ORBIT'], nm = names[Math.min(names.length - 1, b.scr - 1)];
    addScore(120 * b.scr); if (b.scr >= 2) toast(nm, `+${120 * b.scr}`); S.shake = Math.max(S.shake, 0.35);
  }
}

// ───────────────────────────────────────── input
addEventListener('keydown', (e) => {
  if (e.target && e.target.tagName === 'INPUT') return;
  const k = e.key.length === 1 ? e.key.toLowerCase() : e.key; keys.add(k);
  if (S.intro && S.phase === 'play' && k !== 'Escape') { S.intro.t = S.intro.dur; return; }
  if (S.mode === 'race' && S.phase === 'play' && (k === 'Shift' || k === 'e' || k === 'x' || k === 'Enter') && !e.repeat) S.useQueued = true;
  if (S.phase === 'play' || S.phase === 'done') {
    if (k === 'm' || k === 'Tab') { e.preventDefault(); toggleMode(); }
    else if (k === 'c') nextCam();
    else if ((k === '[' || k === ']') && S.mode === 'free') setStick(S.stick + (k === ']' ? 0.1 : -0.1), true);
    else if (k === 't') setPlatter(!S.platter, true);
    else if (k === 'r') { if (S.mode === 'free' && S.phase === 'play') { S.choice = 'follow'; setMode('follow'); } }
    else if (k === 'Escape' || k === 'p') showMenu();
  } else if (S.phase === 'menu' && (k === 'Enter') && !S.loading) start();
  if ([' ', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(k) && S.phase === 'play') e.preventDefault();
});
addEventListener('keyup', (e) => { keys.delete(e.key.length === 1 ? e.key.toLowerCase() : e.key); });
addEventListener('blur', () => keys.clear());
const tch = { steer: 0, gas: false, brake: false, boost: false };
function bindPad(id, on, off) { const el = $(id); const dn = (e) => { e.preventDefault(); el.setPointerCapture?.(e.pointerId); el.classList.add('on'); on(e); }; const up = (e) => { el.classList.remove('on'); off(e); }; el.addEventListener('pointerdown', dn); el.addEventListener('pointerup', up); el.addEventListener('pointercancel', up); return el; }
bindPad('tGas', () => tch.gas = true, () => tch.gas = false);
bindPad('tBrake', () => tch.brake = true, () => tch.brake = false);
bindPad('tBoost', () => tch.boost = true, () => tch.boost = false);
{
  const el = $('tSteer'), knob = el.querySelector('i');
  const mv = (e) => { const r = el.getBoundingClientRect(); const x = clamp((e.clientX - (r.left + r.width / 2)) / (r.width / 2), -1, 1); tch.steer = -x; knob.style.setProperty('--x', (x * r.width * 0.3) + 'px'); };
  el.addEventListener('pointerdown', (e) => { e.preventDefault(); el.setPointerCapture?.(e.pointerId); mv(e); });
  el.addEventListener('pointermove', (e) => { if (e.buttons || e.pointerType === 'touch') mv(e); });
  const end = () => { tch.steer = 0; knob.style.setProperty('--x', '0px'); }; el.addEventListener('pointerup', end); el.addEventListener('pointercancel', end);
}
function readInput(dt) {
  let thr = 0, st = 0;
  if (keys.has('w') || keys.has('ArrowUp')) thr += 1; if (keys.has('s') || keys.has('ArrowDown')) thr -= 1;
  if (keys.has('a') || keys.has('ArrowLeft')) st += 1; if (keys.has('d') || keys.has('ArrowRight')) st -= 1;
  let hand = keys.has(' '), boost = keys.has('Shift');
  if (tch.gas) thr += 1; if (tch.brake) thr -= 1; if (tch.boost) boost = true; st += tch.steer;
  if (S.mode === 'race') { if (keys.has('e') || keys.has('x') || keys.has('Enter') || S.useQueued) boost = true; S.useQueued = false; if (touchDevice && !tch.brake) thr = 1; }
  let pads = []; try { pads = navigator.getGamepads ? navigator.getGamepads() : []; } catch (e) { pads = []; }
  for (const p of pads) { if (!p || !p.connected) continue; const ax = Math.abs(p.axes[0]) > 0.12 ? p.axes[0] : 0; st -= ax; thr += (p.buttons[7]?.value || 0) - (p.buttons[6]?.value || 0); if (p.buttons[0]?.pressed) boost = true; if (p.buttons[1]?.pressed || p.buttons[2]?.pressed) hand = true; break; }
  inp.throttle = clamp(thr, -1, 1); inp.steer += (clamp(st, -1, 1) - inp.steer) * damp(dt, touchDevice ? 20 : 9); inp.hand = hand; inp.boost = boost;
  if (S.phase !== 'play' || S.intro) { inp.throttle = 0; inp.steer = 0; inp.hand = false; inp.boost = false; }
}

// ───────────────────────────────────────── menu
const tracksEl = $('tracks');
TRACKS.forEach((t, i) => { const bt = document.createElement('button'); bt.type = 'button'; bt.innerHTML = `<b></b><small></small>`; bt.querySelector('b').textContent = t.title; bt.querySelector('small').textContent = t.sub; bt.setAttribute('aria-pressed', String(i === 0)); bt.addEventListener('click', () => pick(i)); tracksEl.appendChild(bt); });
const worldsEl = $('worlds');
WORLDS.forEach((w) => { const bt = document.createElement('button'); bt.type = 'button'; bt.innerHTML = '<b></b><small></small>'; bt.querySelector('b').textContent = w.name; bt.querySelector('small').textContent = w.blurb; bt.dataset.world = w.id; bt.addEventListener('click', () => { if (S.locked || !S.pressed) return; if (S.mode === 'race' && S.started) endRace(); applyWorld(w); sendCfg(); }); worldsEl.appendChild(bt); });
function updateWorldUI() {
  [...worldsEl.children].forEach(c => c.setAttribute('aria-pressed', String(c.dataset.world === S.world.id)));
  [...spiralsEl.children].forEach(c => c.setAttribute('aria-pressed', String(c.dataset.spiral === S.spiral.id)));
  document.querySelectorAll('#platter button').forEach(c => c.setAttribute('aria-pressed', String((c.dataset.p === 'spin') === S.platter)));
}
const spiralsEl = $('spirals');
SPIRALS.forEach((sp_) => { const bt = document.createElement('button'); bt.type = 'button'; bt.innerHTML = '<b></b><small></small>'; bt.querySelector('b').textContent = sp_.name; bt.querySelector('small').textContent = sp_.blurb; bt.dataset.spiral = sp_.id; bt.addEventListener('click', () => { if (S.locked || !S.pressed) return; if (S.mode === 'race' && S.started) endRace(); S.spiral = sp_; try { localStorage.setItem('wax.spiral', sp_.id); } catch (e) { /* storage unavailable */ } applyWorld(S.world); sendCfg(); }); spiralsEl.appendChild(bt); });
function setPlatter(on, announce) { S.platter = on; try { localStorage.setItem('wax.platter', on ? 'spin' : 'still'); } catch (e) { /* storage unavailable */ } updateWorldUI(); if (announce) toast(on ? 'PLATTER SPINNING' : 'PLATTER STILL', on ? 'the record turns under you' : 'you drive a still record'); }
document.querySelectorAll('#platter button').forEach(x => x.addEventListener('click', () => setPlatter(x.dataset.p === 'spin', false)));
function pick(i) { if (S.locked) return; S.selected = i; [...tracksEl.children].forEach((c, j) => c.setAttribute('aria-pressed', String(i === j))); $('uploadLabel').classList.remove('sel'); loadSong(TRACKS[i]).then(sendCfg); }
function useFile(f) {
  if (!f) return; if (net) { setStatus('Online races use the built-in tracks, so everyone has the same groove.', true); return; } [...tracksEl.children].forEach(c => c.setAttribute('aria-pressed', 'false')); $('uploadLabel').classList.add('sel');
  const title = f.name.replace(/\.[^.]+$/, '').replace(/[_]+/g, ' ').slice(0, 60); $('uploadHint').textContent = f.name;
  let h = 0; for (const ch of title) h = (h * 31 + ch.charCodeAt(0)) % 360;
  loadSong({ file: f, title, sub: 'Your pressing', hue: h });
}
$('file').addEventListener('change', (e) => useFile(e.target.files[0]));
addEventListener('dragover', (e) => { e.preventDefault(); });
addEventListener('drop', (e) => { e.preventDefault(); const f = e.dataTransfer?.files?.[0]; if (f) { if (S.phase !== 'menu') showMenu(); useFile(f); } });
document.querySelectorAll('#modes button').forEach(x => x.addEventListener('click', () => { if (S.mode === 'race' && S.started) endRace(); S.choice = x.dataset.mode; if (S.started && S.phase === 'menu' && S.choice !== 'race') setMode(S.choice, false); updateModeUI(); updateGo(); }));
// On phones, playing a silent media element inside the tap lets Web Audio sound even with the ringer switch off.
let silentEl = null;
function unlockMedia() {
  if (silentEl || !touchDevice) return;
  try {
    const n = 800, buf = new ArrayBuffer(44 + n), v = new DataView(buf); const w = (o, t) => { for (let i = 0; i < t.length; i++) v.setUint8(o + i, t.charCodeAt(i)); };
    w(0, 'RIFF'); v.setUint32(4, 36 + n, true); w(8, 'WAVEfmt '); v.setUint32(16, 16, true); v.setUint16(20, 1, true); v.setUint16(22, 1, true); v.setUint32(24, 8000, true); v.setUint32(28, 8000, true); v.setUint16(32, 1, true); v.setUint16(34, 8, true); w(36, 'data'); v.setUint32(40, n, true); for (let i = 0; i < n; i++) v.setUint8(44 + i, 128);
    silentEl = new Audio(URL.createObjectURL(new Blob([buf], { type: 'audio/wav' }))); silentEl.loop = true; silentEl.playsInline = true; const p = silentEl.play(); if (p && p.catch) p.catch(() => {});
  } catch (e) { /* not essential */ }
}
$('go').addEventListener('click', () => { if (audio.ctx) { try { audio.ctx.resume(); } catch (e) { /* retried in start */ } } unlockMedia(); start(); });
$('bFull').addEventListener('click', () => { try { if (document.fullscreenElement) document.exitFullscreen(); else { const p = document.documentElement.requestFullscreen?.(); if (p && p.catch) p.catch(() => {}); } } catch (e) { /* not allowed here */ } });
$('bMode').addEventListener('click', () => toggleMode());
$('bCam').addEventListener('click', () => nextCam());
$('bStick').addEventListener('click', () => { const presets = [0, 0.25, 0.5, 0.75, 1]; const i = presets.findIndex(p => p > S.stick + 0.01); setStick(presets[i < 0 ? 0 : i], true); });
$('stick').addEventListener('input', (e) => setStick(+e.target.value / 100, false));
$('bMenu').addEventListener('click', () => showMenu());
function showMenu(result) {
  if (S.mode === 'race' && S.started && net && S.phase === 'play') { endRace(); result = 'You left the race.'; }
  if (S.phase === 'play') S.pauseAt = performance.now();
  S.phase = 'menu'; $('menu').hidden = false; $('hud').hidden = true; audio.suspend();
  const r = $('results'); if (result) { r.hidden = false; r.textContent = ''; if (typeof result === 'string') r.textContent = result; else r.appendChild(result); S.started = false; } else r.hidden = true;
  updateGo();
}
function updateGo() {
  const go = $('go');
  if (S.choice === 'race' && net) { go.textContent = net.isHost() ? 'Start the race' : 'Waiting for the host'; go.disabled = !net.isHost() || S.loading; }
  else { go.textContent = S.started ? 'Resume' : S.choice === 'race' ? 'Start the race' : 'Drop the needle'; go.disabled = S.loading || !S.L; }
}
async function start() {
  if (S.loading || !S.L) return;
  try { await audio.init(); } catch (e) { /* visuals still run */ }
  await audio.resume();
  const want = S.choice, fresh = !S.started;
  if (want === 'race' && fresh) {
    if (net) { if (net.isHost()) net.send({ t: 'start' }); return; }
    beginRace((Math.random() * 0x7fffffff) | 0, botRoster(5, playerName()), performance.now() + (INTRO + 3.6) * 1000, null); return;
  }
  $('menu').hidden = true; $('hud').hidden = false;
  if (fresh) { S.phase = 'play'; S.mode = 'follow'; b.finished = false; resetRun(false); if (want === 'free') setMode('free', false); else updateModeUI(); S.started = true; S.cam = 0; }
  else if (S.mode === 'race' && S.pauseAt && race.goAt != null) race.goAt += performance.now() - S.pauseAt;
  S.phase = 'play'; camSnap = true; sendCtl(true);
  if (fresh) { toast(S.song.title.toUpperCase(), want === 'follow' ? 'follow mode · ride the groove' : 'free drive · go anywhere'); startIntro(INTRO); }
}
const INTRO = 5.5;
function startIntro(dur) { if (dur < 0.8) return; S.intro = { t: 0, dur }; document.body.classList.add('intro'); }
function endIntro() { if (!S.intro) return; S.intro = null; document.body.classList.remove('intro'); record.uniforms.uSweepAmt.value = 0; }

// ───────────────────────────────────────── racing
const ordinal = (n) => n + (['th', 'st', 'nd', 'rd'][n % 100 > 10 && n % 100 < 14 ? 0 : n % 10] || 'th');
function beep(go) {
  try { const c = audio.ctx; if (!c || c.state !== 'running') return; const o = c.createOscillator(), g = c.createGain(); o.type = 'square'; o.frequency.value = go ? 880 : 440; g.gain.setValueAtTime(0.0001, c.currentTime); g.gain.exponentialRampToValueAtTime(0.16, c.currentTime + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + (go ? 0.6 : 0.18)); o.connect(g); g.connect(audio.master); o.start(); o.stop(c.currentTime + 0.7); } catch (e) { /* cosmetic */ }
}
const fx = {
  toast, burst, beep, shake: (a) => { S.shake = Math.max(S.shake, a); }, flash: (a) => { S.flash = Math.max(S.flash, a); },
  note: () => {}, item: (k) => toast(ITEMS[k].name, ITEMS[k].hint),
  finish: (place) => { toast(`${ordinal(place).toUpperCase()} PLACE`, place === 1 ? 'you beat the record' : 'side complete'); if (place <= 3) for (let i = 0; i < 4; i++) setTimeout(confetti, i * 250); },
};
const race = new Race(scene, fx); spin.add(race.group);
spin.add(record.edge, record.platter, record.strobe, world.sparks.points);
let net = null, netSendT = 0;
function playerName() { const v = ($('pname').value || '').trim().slice(0, 14); return v || 'You'; }
function syncFromRace() {
  const m = race.me; if (!m) return;
  b.q = m.q; b.sway = m.lat; b.rate = m.rate; b.x = m.x; b.z = m.z; b.yaw = m.yaw; b.y = m.ya; b.vy = m.vy; b.air = m.air; b.grounded = m.grounded; b.gload = m.gload; b.spinVis = m.spinA;
  b.qRate = m.rate / S.L.tRev; b.speed = b.qRate * m.mPerRev; b.vx = Math.cos(m.yaw) * b.speed; b.vz = -Math.sin(m.yaw) * b.speed; b.phiU = m.q * TAU; wheelAvg(b.x, b.z, b.yaw);
}
function beginRace(seed, roster, goAt, useNet) {
  $('menu').hidden = true; $('hud').hidden = false; $('results').hidden = true;
  S.phase = 'play'; S.mode = 'race'; S.started = true; S.cam = 0; b.finished = false; b.blend.set(0, 0, 0); S.score = 0; S.raceShown = false;
  race.setup(S.L, seed, roster, useNet); race.startAt(goAt); syncFromRace(); b.prevHc = b.y;
  updateModeUI(); camSnap = true; sendCtl(true);
  toast(S.song.title.toUpperCase(), `${roster.length} racers · ${race.laps} laps to the label`);
  startIntro(Math.min(INTRO, (goAt - performance.now()) / 1000 - 3.4));
}
function endRace() { endIntro(); race.stop(); S.mode = 'follow'; S.started = false; b.finished = false; resetRun(false); updateModeUI(); }
function raceResults() {
  const box = document.createElement('div'), ol = document.createElement('ol'); ol.className = 'standings';
  const me = race.me; box.textContent = `${ordinal(me.place)} of ${race.racers.length}`;
  for (const r of race.rank()) { const li = document.createElement('li'); li.textContent = `${r.name}${r.fin != null ? ' · ' + fmt(r.fin) + '.' + String(Math.floor((r.fin % 1) * 10)) : ''}`; if (r === me) li.className = 'me'; ol.appendChild(li); }
  box.appendChild(ol); return box;
}
function updateRaceHUD() {
  const me = race.me; if (!me) return; const order = race.rank();
  $('score').textContent = `${ordinal(me.place)}/${order.length}`;
  $('combo').textContent = `LAP ${clamp(Math.floor(me.q - LEAD_IN) + 1, 1, race.laps)}/${race.laps} · ${Math.min(10, me.notes)} NOTES`;
  const it = $('item'), k = me.rollT > 0 ? Object.keys(ITEMS)[Math.floor(performance.now() / 70) % 5] : me.item;
  it.textContent = k ? ITEMS[k].name : 'NO ITEM'; it.style.setProperty('--c', k ? ITEMS[k].color : 'rgba(184,166,214,.5)'); it.classList.toggle('has', !!me.item);
  $('status2').textContent = me.rpmT > 0 ? '45 RPM' : me.shield ? 'SLEEVE ON' : me.boostT > 0 ? 'BOOST' : me.draft > 0.4 ? 'SLIPSTREAM' : '';
  const bd = $('board'); if (bd.children.length !== Math.min(8, order.length)) { bd.textContent = ''; for (let i = 0; i < Math.min(8, order.length); i++) bd.appendChild(document.createElement('li')); }
  order.slice(0, 8).forEach((r, i) => { const li = bd.children[i]; const tx = r.name; if (li.textContent !== tx) li.textContent = tx; li.className = r === me ? 'me' : ''; li.style.setProperty('--c', '#' + r.color.toString(16).padStart(6, '0')); });
}

// ── online rooms
function lobbyRender() {
  const el = $('lobby'); el.textContent = '';
  $('bLeave').hidden = !net; $('bCreate').hidden = !!net; $('bJoin').hidden = !!net; $('room').disabled = !!net;
  S.locked = !!net && !net.isHost(); document.body.classList.toggle('locked', S.locked);
  if (net) {
    const h = document.createElement('div'); h.className = 'code'; h.textContent = `Room ${net.room}`; el.appendChild(h);
    const ul = document.createElement('ul'); for (const p of net.players) { const li = document.createElement('li'); li.textContent = p.name + (p.id === net.host ? ' · host' : '') + (p.id === net.id ? ' · you' : ''); li.style.setProperty('--c', '#' + (p.color >>> 0).toString(16).padStart(6, '0')); ul.appendChild(li); } el.appendChild(ul);
    const n = document.createElement('small'); n.textContent = net.isHost() ? 'Share the room code. Pick the track and world, then start.' : 'The host picks the track and starts the race.'; el.appendChild(n);
  }
  updateGo();
}
function sendCfg() { if (net && net.isHost() && S.song && S.song.id) net.send({ t: 'cfg', song: S.song.id, world: S.world.id, spiral: S.spiral.id }); }
async function matchCfg(cfg) {
  const i = TRACKS.findIndex(t => t.id === cfg.song); if (i < 0) return;
  if (cfg.spiral) S.spiral = spiralById(cfg.spiral);
  if (!S.song || S.song.id !== cfg.song) { S.selected = i; [...tracksEl.children].forEach((c, j) => c.setAttribute('aria-pressed', String(i === j))); await loadSong({ ...TRACKS[i], world: cfg.world }); }
  else if (S.world.id !== cfg.world || !S.L || S.L.spiral.id !== S.spiral.id) { if (S.mode === 'race' && S.started) race.stop(); applyWorld(worldById(cfg.world)); }
}
async function joinRoom(code) {
  if (net) return;
  const sv = $('server').value.trim(); if (sv) Net.save(sv);
  if (!Net.base()) { setStatus('Online racing needs the game served from its Cloudflare Worker, or a race server address entered below.', true); $('srvRow').hidden = false; return; }
  try { await audio.init(); audio.ctx.resume(); } catch (e) { /* sound starts with the race */ } unlockMedia();
  const n = new Net(); setStatus('Connecting…');
  try {
    const w = await n.connect(code, playerName(), COLORS[Math.floor(Math.random() * COLORS.length)]);
    net = n; $('room').value = code; setStatus(`Connected to room ${code}.`);
    n.on.join = lobbyRender; n.on.leave = (m) => { race.drop(m.id); lobbyRender(); sendCfg(); };
    n.on.cfg = (m) => { if (!n.isHost()) matchCfg(m.cfg); };
    n.on.close = () => { net = null; if (S.mode === 'race' && S.started) { endRace(); showMenu('Lost the connection to the race server.'); } lobbyRender(); setStatus('Disconnected from the room.', true); };
    n.on.snap = (m) => race.onSnapshot(m.s, performance.now());
    n.on.ev = (m) => race.onEvent(m.from, m.e);
    n.on.go = async (m) => {
      await matchCfg(m.cfg); if (S.loading) await new Promise(r => { S.onLoaded = () => { S.onLoaded = null; r(); }; });
      await audio.resume();
      const roster = m.grid.map(id => { const p = n.players.find(x => x.id === id) || { name: 'Racer', color: 0xffffff }; return { id, name: p.name, color: p.color, kind: id === n.id ? 'me' : 'remote' }; });
      if (!roster.some(r => r.kind === 'me')) return;
      beginRace(m.seed, roster, n.toPerf(m.at), n);
    };
    n.on.over = () => { if (S.mode === 'race' && S.started && !S.raceShown) { S.raceShown = true; const res = raceResults(); endRace(); showMenu(res); } lobbyRender(); };
    if (n.isHost()) sendCfg(); else await matchCfg(w.cfg);
    lobbyRender();
  } catch (e) {
    setStatus(e.message === 'no-server' ? 'No race server address set.' : e.message && e.message.includes('full') ? e.message : 'Could not reach the race server. Check the address, or that the Worker is deployed.', true); $('srvRow').hidden = false;
  }
}
$('bCreate').addEventListener('click', () => { const A = 'ABCDEFGHJKLMNPQRSTUVWXYZ'; let c = ''; for (let i = 0; i < 4; i++) c += A[Math.floor(Math.random() * A.length)]; joinRoom(c); });
$('bJoin').addEventListener('click', () => { const c = $('room').value.trim().toUpperCase(); if (!/^[A-Z0-9]{3,8}$/.test(c)) { setStatus('Enter the 4-letter room code your host shared.', true); return; } joinRoom(c); });
$('bLeave').addEventListener('click', () => { if (net) { const n = net; net = null; n.close(); } if (S.mode === 'race' && S.started) endRace(); lobbyRender(); setStatus('Left the room.'); });
document.querySelectorAll('#raceKind button').forEach(x => x.addEventListener('click', () => { document.querySelectorAll('#raceKind button').forEach(y => y.setAttribute('aria-pressed', String(y === x))); $('online').hidden = x.dataset.kind !== 'online'; if (x.dataset.kind !== 'online' && net) $('bLeave').click(); }));
try { $('pname').value = localStorage.getItem('wax.name') || ''; $('pname').addEventListener('change', () => { try { localStorage.setItem('wax.name', $('pname').value); } catch (e) { /* storage unavailable */ } }); } catch (e) { /* storage unavailable */ }
$('srvRow').hidden = !!Net.base() && !/github\.io$/.test(location.hostname);

// ───────────────────────────────────────── camera
let camSnap = true; const camPos = new THREE.Vector3(), camLook = new THREE.Vector3(), tmp = new THREE.Vector3(), tmp2 = new THREE.Vector3(); let camYaw = 0, orbitA = 0;
const CAMS = ['CHASE', 'NEEDLE CAM', 'ORBIT', 'TOP DOWN'];
function nextCam() { S.cam = (S.cam + 1) % CAMS.length; camSnap = true; toast(CAMS[S.cam]); }
function updateCamera(dt, pos, tipW, yawW) {
  const mode = S.phase === 'menu' && !S.started ? 2 : S.cam;
  const sN = clamp(Math.abs(b.speed) / 200, 0, 1.3);
  camYaw += wrapPi(yawW - camYaw) * (camSnap ? 1 : damp(dt, 6));
  const fx = Math.cos(camYaw), fz = -Math.sin(camYaw);
  let fov = 62;
  // offsets are kept relative to the buggy, so the camera never falls behind at speed
  if (mode === 0) {
    const pr = camera.aspect < 1 ? 1.55 : 1, back = (7.4 + sN * 1.8) * pr; tmp.set(-fx * back, (3.6 + sN * 0.5) * (pr > 1 ? 1.5 : 1), -fz * back); tmp2.set(fx * 8, pr > 1 ? -2.6 : 0.9, fz * 8); fov = 60 + sN * 16;
  } else if (mode === 1) {
    const cx = Math.cos(yawW), cz = -Math.sin(yawW);
    tmp.set(tipW.x - pos.x - cx * 3.9, tipW.y - pos.y + 0.62, tipW.z - pos.z - cz * 3.9); tmp2.set(tipW.x - pos.x + cx * 6, tipW.y - pos.y + 0.75, tipW.z - pos.z + cz * 6); fov = 74 + sN * 8;
  } else if (mode === 2) {
    orbitA += dt * 0.22; const d = window.__orbitD || 13; tmp.set(Math.cos(orbitA) * d, 5.5 + Math.sin(orbitA * 0.7) * 2.2, Math.sin(orbitA) * d); tmp2.set(0, 0.8, 0); fov = 58;
  } else {
    tmp.set(-fx * 8, 95, -fz * 8); tmp2.set(fx * 10, 0, fz * 10); fov = 55;
  }
  if (S.intro && S.phase === 'play') {
    // fly-over: start high over the label and spiral down onto the buggy while a light runs the groove
    const it = S.intro; it.t += dt; const uu = clamp(it.t / it.dur, 0, 1), e = uu * uu * uu * (uu * (uu * 6 - 15) + 10);
    if (S.cam !== 0) { const p0 = (camera.aspect < 1 ? 1.55 : 1); tmp.set(-fx * 7.4 * p0, 3.6 * (p0 > 1 ? 1.5 : 1), -fz * 7.4 * p0); tmp2.set(fx * 8, p0 > 1 ? -2.6 : 0.9, fz * 8); }
    const ex = pos.x + tmp.x, ey = pos.y + tmp.y, ez = pos.z + tmp.z, azE = Math.atan2(ez, ex), RE = Math.hypot(ex, ez), H0 = S.L.R_EDGE * S.L.fMax * 1.3 + 40;
    const az = azE + (1 - e) * 1.3 * Math.PI, rad = RE * (0.08 + 0.92 * Math.pow(e, 1.3)), h = ey + (H0 - ey) * Math.pow(1 - e, 1.5), le = e * e;
    camera.position.set(Math.cos(az) * rad, h, Math.sin(az) * rad); camera.up.set(0, 1, 0);
    camera.lookAt(tmp2.x * le + pos.x * le, (pos.y + tmp2.y) * le, tmp2.z * le + pos.z * le);
    camera.fov = 48 + (fov - 48) * e; camera.updateProjectionMatrix();
    camPos.copy(camera.position).sub(pos); camLook.set(tmp2.x * le + pos.x * le - pos.x, (pos.y + tmp2.y) * le - pos.y, tmp2.z * le + pos.z * le - pos.z);
    const ru = record.uniforms; ru.uSweep.value = S.L.totalRevs * clamp((uu - 0.06) / 0.72, 0, 1); ru.uSweepAmt.value = clamp(uu / 0.1, 0, 1) * (1 - clamp((uu - 0.78) / 0.17, 0, 1));
    if (uu >= 1) endIntro();
    return;
  }
  const kp = camSnap ? 1 : damp(dt, mode === 1 ? 12 : 5), kl = camSnap ? 1 : damp(dt, 8);
  camPos.lerp(tmp, kp); camLook.lerp(tmp2, kl); camSnap = false;
  camera.position.copy(pos).add(camPos);
  camRec.copy(camera.position).applyAxisAngle(Y_AXIS, -S.theta);
  const floor = terrain(S.L, camRec.x, camRec.z) + (mode === 1 ? 0.35 : 1.2); if (camera.position.y < floor) camera.position.y = floor;
  if (S.shake > 0.01) { camera.position.x += (Math.random() - 0.5) * S.shake * 0.5; camera.position.y += (Math.random() - 0.5) * S.shake * 0.5; camera.position.z += (Math.random() - 0.5) * S.shake * 0.5; }
  camera.up.set(0, 1, 0); if (mode === 3) camera.up.set(fx, 0, fz);
  camera.lookAt(tmp.copy(pos).add(camLook));
  if (window.__cam) { camera.position.set(...window.__cam.pos); camera.up.set(0, 1, 0); camera.lookAt(...window.__cam.look); }
  if (Math.abs(camera.fov - fov) > 0.05) { camera.fov += (fov - camera.fov) * damp(dt, 4); camera.updateProjectionMatrix(); }
}

// ───────────────────────────────────────── HUD drawing
const mini = $('mini'), mctx = mini.getContext('2d'); const miniBase = document.createElement('canvas'); miniBase.width = miniBase.height = 192;
function drawMiniBase() {
  const L = S.L, c = miniBase.getContext('2d'), W = 192, sc = (W / 2 - 3) / (L.R_EDGE * L.fMax), env = S.pressed.tex.env; let peak = 1e-6; for (const v of env) peak = Math.max(peak, v);
  c.clearRect(0, 0, W, W); c.fillStyle = '#07040d'; c.beginPath(); c.arc(W / 2, W / 2, W / 2 - 2, 0, TAU); c.fill();
  c.lineWidth = Math.max(0.6, L.pitch * sc * 0.55);
  const stepQ = 0.004;
  for (let q = 0; q < L.totalRevs; q += stepQ) {
    const m = (q - LEAD_IN) / L.musicRevs; const e = m >= 0 && m < 1 ? env[Math.floor(m * env.length)] / peak : 0;
    spiralPoint(L, q, sp); const x0 = W / 2 + sp.x * sc, y0 = W / 2 + sp.z * sc; spiralPoint(L, q + stepQ * 1.3, sp);
    c.strokeStyle = `hsl(${(330 + q * 9) % 360} 95% ${10 + e * 55}%)`; c.beginPath(); c.moveTo(x0, y0); c.lineTo(W / 2 + sp.x * sc, W / 2 + sp.z * sc); c.stroke();
  }
  c.fillStyle = `hsl(${S.song.hue} 90% 55%)`; c.beginPath(); c.arc(W / 2, W / 2, R_LABEL * sc, 0, TAU); c.fill();
  c.fillStyle = '#07040d'; c.beginPath(); c.arc(W / 2, W / 2, R_SPINDLE * sc + 1, 0, TAU); c.fill();
  c.strokeStyle = '#ff2a7f'; c.lineWidth = 2; c.beginPath(); c.arc(W / 2, W / 2, W / 2 - 2, 0, TAU); c.stroke();
}
function drawMini() {
  const W = 192, sc = (W / 2 - 3) / (S.L.R_EDGE * S.L.fMax); mctx.clearRect(0, 0, W, W); mctx.drawImage(miniBase, 0, 0);
  const x = W / 2 + b.x * sc, y = W / 2 + b.z * sc; mctx.fillStyle = '#fff'; mctx.shadowColor = '#19e3ff'; mctx.shadowBlur = 12; mctx.beginPath(); mctx.arc(x, y, 5, 0, TAU); mctx.fill(); mctx.shadowBlur = 0;
  if (S.mode === 'race') for (const r of race.racers) { if (r === race.me) continue; mctx.fillStyle = '#' + r.color.toString(16).padStart(6, '0'); mctx.beginPath(); mctx.arc(W / 2 + r.x * sc, W / 2 + r.z * sc, 4, 0, TAU); mctx.fill(); }
  mctx.strokeStyle = '#19e3ff'; mctx.lineWidth = 2.5; mctx.beginPath(); mctx.moveTo(x, y); mctx.lineTo(x + Math.cos(b.yaw) * 12, y - Math.sin(b.yaw) * 12); mctx.stroke();
}
const scopeC = $('scope'), sctx = scopeC.getContext('2d');
function drawScope() {
  const W = 224, c = sctx, k = 3.0, cx = W / 2, cy = W * 0.6;
  c.fillStyle = 'rgba(5,3,10,0.35)'; c.fillRect(0, 0, W, W);
  c.strokeStyle = 'rgba(184,166,214,.5)'; c.lineWidth = 2; c.beginPath(); c.moveTo(cx - 34 * k, cy - 34 * k + 8 * k); c.lineTo(cx, cy + 8 * k); c.lineTo(cx + 34 * k, cy - 34 * k + 8 * k); c.stroke();
  if (!tel.scope || performance.now() - tel.fresh > 300) return;
  const sc = tel.scope, n = sc.length / 2; c.lineWidth = 2; c.lineJoin = 'round';
  c.strokeStyle = '#19e3ff'; c.shadowColor = '#19e3ff'; c.shadowBlur = 8; c.beginPath();
  for (let i = 0; i < n; i++) { const j = ((tel.scI / 2 + i) % n) * 2; const x = cx - clamp(sc[j], -40, 40) * k, y = cy - clamp(sc[j + 1], -40, 40) * k; if (i) c.lineTo(x, y); else c.moveTo(x, y); }
  c.stroke(); c.shadowBlur = 0;
  const j = ((tel.scI / 2 + n - 1) % n) * 2; c.fillStyle = '#fff'; c.beginPath(); c.arc(cx - clamp(sc[j], -40, 40) * k, cy - clamp(sc[j + 1], -40, 40) * k, 5, 0, TAU); c.fill();
}
const vuC = $('vu'), vctx = vuC.getContext('2d'); const vuL = { l: 0, r: 0, pl: 0, pr: 0 }; const tdata = new Float32Array(1024);
function drawVU() {
  const c = vctx, W = 300, H = 224; c.clearRect(0, 0, W, H);
  // spectrum
  const sp_ = audio.spec, nb = 30; for (let i = 0; i < nb; i++) { const a = Math.floor(Math.pow(i / nb, 2) * 300) + 1, z = Math.floor(Math.pow((i + 1) / nb, 2) * 300) + 2; let v = 0; for (let k = a; k < z; k++) v = Math.max(v, sp_[k]); v /= 255; const h = v * v * 118; c.fillStyle = `hsl(${320 - i * 6} 95% ${45 + v * 25}%)`; c.fillRect(6 + i * 9.7, 124 - h, 7.5, h); }
  // level bars with peak hold
  const lv = clamp(Math.sqrt(audio.level) * 1.5, 0, 1), pk = clamp(tel.pk * 1.4, 0, 1);
  vuL.l += (lv - vuL.l) * 0.4; vuL.pl = Math.max(vuL.pl - 0.01, pk);
  const bar = (y, v, p, label) => { c.fillStyle = 'rgba(184,166,214,.18)'; c.fillRect(34, y, 258, 22); const gr = c.createLinearGradient(34, 0, 292, 0); gr.addColorStop(0, '#19e3ff'); gr.addColorStop(0.7, '#ffd23a'); gr.addColorStop(1, '#ff2a7f'); c.fillStyle = gr; c.fillRect(34, y, 258 * v, 22); c.fillStyle = '#fff'; c.fillRect(34 + 258 * p - 3, y, 3, 22); c.fillStyle = '#b8a6d6'; c.font = '700 20px "Chakra Petch", sans-serif'; c.fillText(label, 4, y + 18); };
  bar(142, vuL.l, vuL.pl, 'VU'); const trk = clamp(Math.min(tel.cA, tel.cB), 0, 1); bar(180, trk, trk, 'TRK');
}
const stC = $('strobe'), stx = stC.getContext('2d'); let stPhase = 0;
function drawStrobe(dt) {
  const c = stx, W = 640, H = 28; stPhase += (b.rate - 1) * dt * 220; c.clearRect(0, 0, W, H);
  const on = Math.abs(b.rate - 1) < 0.04; c.fillStyle = on ? '#ffd23a' : '#ff2a7f';
  for (let x = -40 + ((stPhase % 40) + 40) % 40; x < W + 40; x += 40) { c.beginPath(); c.arc(x, H / 2, 8, 0, TAU); c.fill(); }
}
function updateHUD(dt) {
  const L = S.L, musicPos = clamp((onRail() ? b.q : g0.rev) - LEAD_IN, 0, L.musicRevs) * L.tRev;
  $('time').textContent = `${fmt(musicPos)} / ${fmt(L.duration)}`;
  const rpm = 33.333 * b.rate; const el = $('rpm'); el.textContent = (Math.abs(rpm) < 99.95 ? Math.abs(rpm).toFixed(1) : Math.abs(rpm).toFixed(0)); el.className = b.rate < -0.02 ? 'rev' : '';
  $('pitch').textContent = b.rate < -0.02 ? 'REVERSE' : `${b.rate >= 1 ? '+' : '−'}${Math.abs((b.rate - 1) * 100).toFixed(b.rate > 3 ? 0 : 1)}%`;
  $('spd').textContent = `${Math.round(Math.abs(b.speed) * 3.6)} km/h`;
  const live = audio.ctx && audio.ctx.state === 'running' && performance.now() - tel.fresh < 400;
  $('lampL').className = live && tel.cB > 0.5 ? 'on' : ''; $('lampR').className = live && tel.cA > 0.5 ? 'on' : ''; $('lampLand').className = live && tel.cL > 0.3 ? 'on' : ''; $('lampAir').className = live && tel.cA + tel.cB + tel.cL < 0.2 ? 'on' : '';
  drawMini(); drawScope(); drawVU(); drawStrobe(dt);
}

// ───────────────────────────────────────── frame
const tipW = new THREE.Vector3(), bodyPos = new THREE.Vector3(), v3 = new THREE.Vector3(), v3b = new THREE.Vector3(), v3c = new THREE.Vector3(), v3d = new THREE.Vector3(), v3e = new THREE.Vector3(); const col = new THREE.Color();
let fontsReady = false;
const bodyW = new THREE.Vector3(), tipWW = new THREE.Vector3(), Y_AXIS = new THREE.Vector3(0, 1, 0), camRec = new THREE.Vector3();
let last = performance.now(), acc = 0, frameAvg = 16, slowT = 0, tipLat = 0, tipY = -3, armLat = 0, armY = -3, emitAcc = 0;
function frame(now) {
  requestAnimationFrame(frame);
  let dt = (now - last) / 1000; last = now; if (dt > 0.1) dt = 0.1; if (dt <= 0) return;
  if (!S.L) { renderer.setRenderTarget(null); renderer.clear(); return; }
  S.time += dt;
  readInput(dt);
  // physics at a fixed step
  acc += dt; const h = 1 / 120; let n = 0;
  const paused = S.phase === 'menu' && S.started; if (paused) acc = 0;
  while (acc >= h && n < 8) { platterStep(h); if (S.mode === 'race') { race.step(h, inp); syncFromRace(); } else if (S.mode === 'follow' && !b.finished) stepFollow(h); else stepFree(h); acc -= h; n++; }
  if (n === 8) acc = 0;
  grooveAt(S.L, b.x, b.z, g0);
  scoring(dt); sendCtl(false, paused ? 0 : acc, now);
  audio.analyse();
  // sky / platter turn
  S.rot += dt * 0.11;
  const spec = record.uniforms.uSpec.value; for (let i = 0; i < 32; i++) { const a = Math.floor(Math.pow(i / 32, 1.8) * 300) + 1; const v = audio.spec[a] / 255; spec[i] += (v - spec[i]) * (v > spec[i] ? 0.6 : 0.15); }
  if (S.phase === 'menu' && audio.ctx?.state !== 'running') for (let i = 0; i < 32; i++) spec[i] = 0.35 + 0.3 * Math.sin(S.time * 2 + i * 0.7) * Math.sin(S.time * 0.9 + i * 0.23);
  world.update(dt, S.time, S.rot, audio.bass, audio.level);

  // buggy pose
  b.blend.multiplyScalar(Math.exp(-dt * 7));
  bodyPos.set(b.x + b.blend.x, b.y + b.blend.y, b.z + b.blend.z);
  const hF = (wh[0] + wh[1]) / 2, hR = (wh[2] + wh[3]) / 2, hRt = (wh[1] + wh[3]) / 2, hLt = (wh[0] + wh[2]) / 2;
  let pT = Math.atan2(hF - hR, 2 * WB), rT = Math.atan2(hRt - hLt, 2 * TRK);
  if (!b.grounded) { pT = b.pitch - dt * 0.25 * Math.sign(b.vy) * 0 + clamp(b.vy * 0.015, -0.35, 0.35) * 0.05; rT = b.roll * 0.98; }
  b.pitch += (pT - b.pitch) * damp(dt, 12); b.roll += (rT - b.roll) * damp(dt, 12);
  B.root.position.copy(bodyPos); B.root.rotation.set(0, 0, 0); B.root.rotation.order = 'YZX'; B.root.rotation.y = b.yaw + (S.mode === 'race' ? b.spinVis || 0 : 0); B.root.rotation.z = b.pitch; B.root.rotation.x = -b.roll;
  // body leans and squats on its springs
  const acl = clamp((b.gload - 1) * 0.06, -0.12, 0.2); B.body.position.y = -acl; B.body.rotation.x = clamp(-inp.steer * Math.abs(b.speed) * 0.0016, -0.2, 0.2); B.body.rotation.z = clamp(inp.throttle * 0.04 + (inp.boost ? 0.04 : 0), -0.08, 0.1);
  // wheels: spin, steer, camber to the wall they are standing on
  const cyw = Math.cos(b.yaw), syw = Math.sin(b.yaw);
  b.wheelSpin -= b.speed * dt; b.steerVis += (inp.steer * 0.42 - b.steerVis) * damp(dt, 12);
  for (let i = 0; i < 4; i++) {
    const w = B.wheels[i], sgn = Math.sign(w.z), half = 0.3;
    const wx = b.x + cyw * w.x + syw * w.z, wz = b.z - syw * w.x + cyw * w.z;
    const hi = terrain(S.L, wx - syw * sgn * half, wz - cyw * sgn * half), ho = terrain(S.L, wx + syw * sgn * half, wz + cyw * sgn * half), hc = terrain(S.L, wx, wz);
    let camber = Math.atan2(ho - hi, 2 * half) - sgn * b.roll; camber = clamp(camber, -0.8, 0.8); if (!b.grounded) camber = 0.1;
    w.cam = (w.cam || 0) + (camber - (w.cam || 0)) * damp(dt, 14);
    const plane = b.y + (w.x > 0 ? 1 : -1) * (hF - hR) / 2 + (sgn > 0 ? 1 : -1) * (hRt - hLt) / 2;
    const resid = b.grounded ? clamp(hc - plane, -0.5, 0.5) : -0.3;
    w.y += ((w.R * Math.cos(w.cam) + resid + Math.abs(Math.sin(w.cam)) * 0.12) - w.y) * damp(dt, 16);
    w.pivot.position.y = w.y; w.pivot.rotation.set(-sgn * w.cam, w.front ? b.steerVis : 0, 0); w.spin.rotation.z = b.wheelSpin / w.R;
    v3.set(w.x, w.y, w.z - sgn * 0.3); span(w.arm1, w.inner, v3); v3.y += 0.1; span(w.arm2, v3b.set(w.x - 0.4, w.inner.y, w.inner.z), v3); span(w.shock, w.top, v3);
  }
  // stylus: where the simulation says the tip and the arm are
  const liveTel = audio.ctx && audio.ctx.state === 'running' && performance.now() - tel.fresh < 300;
  const hbHere = profile(S.L, b.x, b.z); grooveAt(S.L, b.x, b.z, g1); const fHere = g1.f;
  const tLat = liveTel ? tel.ay * UM : 0, tY = liveTel ? (tel.az + 5.5) * UM : hbHere;
  armLat += (tLat - armLat) * damp(dt, 25); armY += (tY - armY) * damp(dt, 30);
  const vibY = liveTel ? clamp((tel.ty - tel.ay) * UM * 0.3, -0.7, 0.7) : 0, vibZ = liveTel ? clamp((tel.tz - tel.az) * UM * 0.3, -0.5, 0.5) : 0;
  const rr = Math.hypot(b.x, b.z) || 1, inx = -b.x / rr, inz = -b.z / rr;
  const tlx = b.x + inx * armLat * fHere, tlz = b.z + inz * armLat * fHere;
  tipW.set(bodyPos.x + inx * (armLat + vibY) * fHere, Math.max(warpAt(S.L, tlx, tlz) + (armY + vibZ) * fHere, terrain(S.L, tlx, tlz) - 0.25) + (b.air > 2.2 ? b.air - 2.2 : 0), bodyPos.z + inz * (armLat + vibY) * fHere);
  B.root.updateMatrixWorld(true);
  spin.updateMatrixWorld(true); v3.copy(tipW); spin.localToWorld(v3); B.root.worldToLocal(v3); B.cart.position.copy(v3); B.cart.rotation.set(0, 0, 0);
  v3b.set(-1.05, 0.98 - vibZ, 0); // cartridge body rides on the arm; tip moves against it
  B.cartBody.position.copy(v3b); span(B.cantilever, v3c.set(0, 0.16, 0), v3d.copy(v3b).add(v3e.set(0.32, -0.1, 0)));
  B.diamond.rotation.y += dt * 3;
  v3.copy(B.cart.position).add(v3b.set(-1.05, 1.08, 0)); span(B.stem, B.stemAnchor, v3);
  const mis = liveTel ? clamp(1 - Math.min(tel.cA, tel.cB), 0, 1) : 0;
  B.tipGlow.scale.setScalar(1.3 + audio.bass * 2 + mis * 2.5);
  // sparks from the tip: a trickle of swarf always, a shower when it loses a wall or rides the land
  if (liveTel) {
    emitAcc += dt * (Math.abs(b.rate) * 26 + mis * 240 + tel.cL * 160 + Math.max(0, b.gload - 1.6) * 200);
    const fx = Math.cos(b.yaw), fz = -Math.sin(b.yaw), sg = Math.sign(b.speed) || 1;
    while (emitAcc > 1) { emitAcc -= 1; const hot = mis + tel.cL > 0.15; const a = Math.random() * TAU, sv = hot ? 9 : 3;
      if (hot) world.sparks.emit(tipW.x, tipW.y + 0.1, tipW.z, -fx * sg * 6 + Math.cos(a) * sv, 3 + Math.random() * 9, -fz * sg * 6 + Math.sin(a) * sv, 3.5, 2.2, 0.6, 0.35 + Math.random() * 0.5, 0.35 + Math.random() * 0.3);
      else world.sparks.emit(tipW.x, tipW.y + 0.1, tipW.z, -fx * sg * 9 + Math.cos(a) * sv, 2 + Math.random() * 4, -fz * sg * 9 + Math.sin(a) * sv, 0.5, 2.2, 2.6, 0.25 + Math.random() * 0.3, 0.22); }
  }
  world.sparks.update(dt, (x, z) => terrain(S.L, x, z));
  if (S.mode === 'race') {
    race.frame(dt, S.time, camRec.copy(camera.position).applyAxisAngle(Y_AXIS, -S.theta));
    if (net && race.active && now - netSendT > 80) { netSendT = now; net.send({ t: 's', d: race.netState() }); }
    if (race.over && !S.raceShown && !net) { S.raceShown = true; const res = raceResults(); endRace(); showMenu(res); }
  }
  // lights, flames, antenna
  B.barMats.forEach((m, i) => { col.setHSL((S.time * 0.6 + i / 6) % 1, 1, 0.5); m.color.copy(col).multiplyScalar(2 + audio.bass * 6); });
  col.setHSL((S.time * 0.08) % 1, 1, 0.5); B.mats.rimGlow.color.copy(col).multiplyScalar(2 + audio.bass * 3); record.uniforms.uGlowCol.value.set(col.r, col.g, col.b).multiplyScalar(0.6 + audio.bass * 2.2);
  b.throttleVis += ((S.mode !== 'free' ? clamp(Math.abs(b.rate), 0, 3) / 2 : Math.abs(inp.throttle) * 0.6 + 0.2) - b.throttleVis) * damp(dt, 8); b.boostVis += (((S.mode === 'race' ? race.me && (race.me.boostT > 0 || race.me.rpmT > 0) : inp.boost) ? 1 : 0) - b.boostVis) * damp(dt, 8);
  B.flames.forEach((f, i) => { const k = 0.5 + b.throttleVis * 1.4 + b.boostVis * 3 + Math.random() * 0.35; f.scale.set(k * 1.6, 0.5 + k * 0.25, 1); f.material.color.setRGB(1, 0.45 + b.boostVis * 0.3, 0.15 + b.boostVis * 0.9); f.material.opacity = 0.75; });
  B.whip.rotation.z = clamp(-b.speed * 0.0022 - inp.throttle * 0.08, -0.5, 0.4) + Math.sin(S.time * 17) * 0.02 * Math.min(1, Math.abs(b.speed) / 40); B.whip.rotation.x = clamp(inp.steer * 0.25, -0.3, 0.3);
  B.head.rotation.y = inp.steer * 0.5; B.steer.rotation.x = -inp.steer * 1.2;
  // uniforms for the vinyl
  // the platter: pinned under you on the rails, a steady 33⅓ in free drive, still when switched off
  spin.rotation.y = S.theta; record.uniforms.uRot.value = S.theta;
  bodyW.copy(bodyPos).applyAxisAngle(Y_AXIS, S.theta); tipWW.copy(tipW).applyAxisAngle(Y_AXIS, S.theta);
  const yawW = b.yaw + S.theta;
  const u = record.uniforms; u.uBuggy.value.copy(bodyW); u.uBuggyFwd.value.set(Math.cos(yawW), 0, -Math.sin(yawW)); u.uTip.value.copy(tipWW); u.uTip.value.y += 0.2;
  u.uProg.value = onRail() ? b.q : g0.rev; u.uBlur.value = Math.abs(b.speed) * 0.006; u.uTipGlow.value = 0.35 + audio.bass * 1.2 + mis * 2; u.uPulse.value = audio.bass;
  record.strobeMat.uniforms.uTime.value = S.time; record.strobeMat.uniforms.uRate.value = b.rate;

  S.shake = Math.max(0, S.shake - dt * 2.2); if (b.boostVis > 0.5) S.shake = Math.max(S.shake, 0.12);
  S.flash = Math.max(0, S.flash - dt * 1.5);
  updateCamera(dt, bodyW, tipWW, yawW);
  post.uniforms.uSpeed.value = clamp(Math.abs(b.speed) / 190, 0, 1.4) * [1, 0.7, 0.2, 0.12][S.phase === 'menu' && !S.started ? 2 : S.cam]; post.uniforms.uTime.value = S.time; post.uniforms.uFlash.value = S.flash;
  bloom.strength = 0.42 + audio.bass * 0.3;
  composer.render();
  if (S.phase !== 'menu') { updateHUD(dt); if (S.mode === 'race') updateRaceHUD(); }
  // drop resolution if the frame rate cannot keep up
  frameAvg += (dt * 1000 - frameAvg) * 0.05; if (frameAvg > 30 && S.time > 4) { slowT += dt; if (slowT > 2.5 && quality.scale > 0.55) { quality.scale *= 0.8; slowT = 0; frameAvg = 16; setupComposer(); } } else slowT = 0;
}

canvas.addEventListener('pointerdown', () => { if (S.intro && S.phase === 'play') S.intro.t = S.intro.dur; });
$('skip').addEventListener('click', () => { if (S.intro) S.intro.t = S.intro.dur; });
document.addEventListener('visibilitychange', () => { if (document.hidden && S.phase === 'play' && !(S.mode === 'race' && net)) showMenu(); });
setStick(S.stick, false);
updateModeUI(); updateWorldUI();
if (touchDevice) $('keys').hidden = true;
const relabel = () => { if (S.song && S.L) { drawLabel(record.labelCanvas, S.song.title, S.song.sub, S.song.hue); record.labelTex.needsUpdate = true; } };
(document.fonts?.ready || Promise.resolve()).then(() => { fontsReady = true; relabel(); });
loadSong(TRACKS[0]);
requestAnimationFrame(frame);
window.__wax = { S, b, tel, audio, inp, keys, setMode, start, nextCam, record, world, applyWorld, WORLDS, race, getNet: () => net, setPlatter, SPIRALS, camera, bodyW, spin };
// test hook: put the buggy in groove q, lined up and rolling at v m/s
window.__wax.place = (q, v) => { b.q = q; b.sway = 0; placeOnSpiral(); b.vx = Math.cos(b.yaw) * v; b.vz = -Math.sin(b.yaw) * v; b.y = wheelAvg(b.x, b.z, b.yaw); b.vy = 0; b.prevHc = b.y; b.strain = 0; b.grounded = true; b.blend.set(0, 0, 0); camSnap = true; };
