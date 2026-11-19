// World scale. Across the groove, one micrometre of real record is UM metres of game world,
// so the 110 µm groove pitch becomes a 10 m lane and the 32 µm deep groove a 2.9 m canyon.
export const TAU = Math.PI * 2;
export const T_REV = 10;            // seconds of music per revolution of the game record
export const PITCH = 10;            // m between neighbouring grooves
export const UM = PITCH / 110;      // m per µm
export const DEPTH = 32 * UM;       // m, groove depth (= half its width: 45° walls)
export const R_END = 92;            // m, radius where the spiral stops
export const R_LABEL = 58;          // m, paper label
export const R_SPINDLE = 5;
export const LEAD_IN = 1;           // silent revolutions before the music
export const LEAD_OUT = 0.75;       // silent revolutions after it
export const MAX_SECONDS = 420;

export function makeLayout(duration) {
  const musicRevs = duration / T_REV, totalRevs = LEAD_IN + musicRevs + LEAD_OUT;
  const R0 = R_END + PITCH / 2 + totalRevs * PITCH;
  return { duration, musicRevs, totalRevs, R0, R_EDGE: R0 + PITCH / 2 + 10 };
}
const sstep = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
export function taper(L, rev) { return sstep(0, 0.04, rev) * sstep(L.totalRevs, L.totalRevs - 0.04, rev); }

// Which groove is under world point (x, z), and how far off its centre line (e > 0 = toward the spindle).
export function grooveAt(L, x, z, out) {
  const r = Math.hypot(x, z); let phi = Math.atan2(-z, x); if (phi < 0) phi += TAU;
  const fr = phi / TAU, rho = (L.R0 - r) / PITCH, u = rho - fr, n = Math.round(u);
  out.r = r; out.phi = phi; out.fr = fr; out.rho = rho; out.n = n; out.e = (u - n) * PITCH; out.rev = n + fr;
  out.inGroove = out.rev >= 0 && out.rev < L.totalRevs;
  return out;
}
const _g = {};
// Terrain height (land = 0), slightly rounded so the buggy rides it smoothly.
export function terrain(L, x, z) {
  grooveAt(L, x, z, _g);
  if (!_g.inGroove) return 0;
  const D = DEPTH * taper(L, _g.rev), e = _g.e;
  const h = Math.min(0, Math.sqrt(e * e + 0.09) - 0.3 - D);
  return -Math.sqrt(h * h + 0.0625) + 0.25;
}
// Centre line of the spiral at q revolutions from its start.
export function spiralPoint(L, q, out, lateral = 0) {
  const r = L.R0 - q * PITCH - lateral, phi = q * TAU;
  out.x = r * Math.cos(phi); out.z = -r * Math.sin(phi); out.r = r; out.phi = phi; return out;
}
