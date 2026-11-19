// World scale. Across the groove, one micrometre of real record is UM metres of game world,
// so the 110 µm groove pitch becomes a 10 m lane and the 32 µm deep groove a 2.9 m canyon.
//
// A record need not be round or flat. All groove maths happens in "disc space" (a round,
// flat record); a world maps disc space to the ground by stretching each radius by a shape
// factor f(φ) and lifting it by a warp height. Everything below converts between the two.
export const TAU = Math.PI * 2;
export const T_REV = 10;            // seconds of music per revolution of the game record
export const PITCH = 10;            // m between neighbouring grooves (disc space)
export const UM = PITCH / 110;      // m per µm
export const DEPTH = 32 * UM;       // m, groove depth (= half its width: 45° walls)
export const R_END = 92;            // m, radius where the spiral stops
export const R_LABEL = 58;          // m, paper label
export const R_SPINDLE = 5;
export const LEAD_IN = 1;           // silent revolutions before the music
export const LEAD_OUT = 0.75;       // silent revolutions after it
export const MAX_SECONDS = 420;

const V = (r, g, b) => [r, g, b];
export const WORLDS = [
  {
    id: 'night', name: 'Neon Night', blurb: 'Black 12-inch. Round and flat.',
    shape: { a: [0, 0, 0, 0], p: [0, 0, 0, 0] }, waves: [], bowl: 0,
    theme: { zen: V(0.006, 0.004, 0.03), mid: V(0.07, 0.012, 0.16), hor: V(0.55, 0.09, 0.3), sunA: V(1, 0.12, 0.55), sunB: V(1, 0.8, 0.15), sunEl: 0.2, sunSize: 0.25, moon: V(0.35, 0.8, 1), aurora: 1, stars: 1,
      fog: V(0.2, 0.03, 0.13), vinyl: V(0.010, 0.009, 0.013), amb: V(0.25, 0.12, 0.3), hueL: 0.93, hueR: 0.53, hueSpread: 0.023, sunLight: V(2.4, 1.2, 1.1), hemi: [0xff7ab0, 0x1a0630] },
  },
  {
    id: 'dunes', name: 'Amber Dunes', blurb: 'Oval amber pressing, badly warped. The dunes are jumps.',
    shape: { a: [0, 0.2, 0, 0], p: [0, 0, 0, 0] }, waves: [{ A: 7, k: 3, p: 0.6, tw: 0.012 }, { A: 2.2, k: 7, p: 2, tw: -0.02 }], bowl: 0,
    theme: { zen: V(0.035, 0.012, 0.07), mid: V(0.45, 0.1, 0.13), hor: V(1.0, 0.5, 0.16), sunA: V(1, 0.3, 0.08), sunB: V(1, 0.9, 0.5), sunEl: 0.11, sunSize: 0.36, moon: V(0.5, 0.35, 0.3), aurora: 0, stars: 0.35,
      fog: V(0.5, 0.2, 0.08), vinyl: V(0.15, 0.045, 0.005), amb: V(1.0, 0.6, 0.35), hueL: 0.13, hueR: 0.97, hueSpread: 0.006, sunLight: V(3.4, 2.2, 1.2), hemi: [0xffb060, 0x401008] },
  },
  {
    id: 'flexi', name: 'Blue Flexi', blurb: 'Squared-off flexi disc, dished like a bowl under an aurora.',
    shape: { a: [0, 0, 0, 0.055], p: [0, 0, 0, Math.PI] }, waves: [{ A: 2.6, k: 4, p: 0.4, tw: 0 }], bowl: 16,
    theme: { zen: V(0.0, 0.012, 0.05), mid: V(0.015, 0.11, 0.2), hor: V(0.3, 0.7, 0.8), sunA: V(0.6, 0.9, 1), sunB: V(1, 1, 1), sunEl: 0.4, sunSize: 0.15, moon: V(1, 0.6, 0.9), aurora: 2.4, stars: 1.5,
      fog: V(0.08, 0.28, 0.38), vinyl: V(0.004, 0.035, 0.09), amb: V(0.3, 0.7, 1.0), hueL: 0.47, hueR: 0.8, hueSpread: 0.012, sunLight: V(1.8, 2.4, 2.8), hemi: [0x80e0ff, 0x061830] },
  },
];
export const worldById = (id) => WORLDS.find(w => w.id === id) || WORLDS[0];

export function makeLayout(duration, world = WORLDS[0]) {
  const musicRevs = duration / T_REV, totalRevs = LEAD_IN + musicRevs + LEAD_OUT;
  const R0 = R_END + PITCH / 2 + totalRevs * PITCH;
  const a = world.shape.a, amp = Math.abs(a[0]) + Math.abs(a[1]) + Math.abs(a[2]) + Math.abs(a[3]);
  let wMin = 0; for (const w of world.waves) wMin -= Math.abs(w.A);
  return { duration, musicRevs, totalRevs, R0, R_EDGE: R0 + PITCH / 2 + 10, world, sa: a, sp: world.shape.p, fMax: 1 + amp, fMin: 1 - amp, waves: world.waves, bowl: world.bowl, warpMin: wMin };
}
const sstep = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
export function taper(L, rev) { return sstep(0, 0.04, rev) * sstep(L.totalRevs, L.totalRevs - 0.04, rev); }

export function shapeF(L, phi) { const a = L.sa, p = L.sp; return 1 + a[0] * Math.cos(phi + p[0]) + a[1] * Math.cos(2 * phi + p[1]) + a[2] * Math.cos(3 * phi + p[2]) + a[3] * Math.cos(4 * phi + p[3]); }
// Height of the warped record surface at disc radius r, angle phi.
export function warpH(L, r, phi) {
  if (!L.waves.length && !L.bowl) return 0;
  const s = sstep(R_LABEL + 6, R_END + 26, r); if (s <= 0) return 0;
  let h = 0; for (const w of L.waves) h += w.A * Math.sin(w.k * phi + w.p + w.tw * r);
  if (L.bowl) { const t = (r - R_END) / (L.R0 - R_END); h += L.bowl * t * t; }
  return h * s;
}

// Which groove is under world point (x, z), and how far off its centre line in disc metres
// (e > 0 = toward the spindle). out.r is the disc radius, out.f the local stretch.
export function grooveAt(L, x, z, out) {
  const rw = Math.hypot(x, z); let phi = Math.atan2(-z, x); if (phi < 0) phi += TAU;
  const f = shapeF(L, phi), r = rw / f;
  const fr = phi / TAU, rho = (L.R0 - r) / PITCH, u = rho - fr, n = Math.round(u);
  out.rw = rw; out.f = f; out.r = r; out.phi = phi; out.fr = fr; out.rho = rho; out.n = n; out.e = (u - n) * PITCH; out.rev = n + fr;
  out.inGroove = out.rev >= 0 && out.rev < L.totalRevs;
  return out;
}
const _g = {};
// Groove cross-section in disc metres (land = 0), slightly rounded so the buggy rides it smoothly.
export function profile(L, x, z) {
  grooveAt(L, x, z, _g);
  if (!_g.inGroove) return 0;
  const D = DEPTH * taper(L, _g.rev), e = _g.e;
  const h = Math.min(0, Math.sqrt(e * e + 0.09) - 0.3 - D);
  return -Math.sqrt(h * h + 0.0625) + 0.25;
}
// Terrain height in the world.
export function terrain(L, x, z) { const p = profile(L, x, z); return p * _g.f + warpH(L, _g.r, _g.phi); }
export function warpAt(L, x, z) { grooveAt(L, x, z, _g); return warpH(L, _g.r, _g.phi); }
// Centre line of the spiral at q revolutions from its start; lateral is in disc metres toward the spindle.
export function spiralPoint(L, q, out, lateral = 0) {
  const phi = q * TAU, r = L.R0 - q * PITCH - lateral, f = shapeF(L, phi), rw = r * f;
  out.x = rw * Math.cos(phi); out.z = -rw * Math.sin(phi); out.r = r; out.phi = phi; out.f = f; return out;
}
const _a = {}, _b = {};
// Position, heading and metres travelled per revolution at q.
export function spiralFrame(L, q, lateral, out) {
  const d = 2e-4; spiralPoint(L, q - d, _a, lateral); spiralPoint(L, q + d, _b, lateral); spiralPoint(L, q, out, lateral);
  const dx = _b.x - _a.x, dz = _b.z - _a.z; out.yaw = Math.atan2(-dz, dx); out.mPerRev = Math.hypot(dx, dz) / (2 * d); return out;
}
