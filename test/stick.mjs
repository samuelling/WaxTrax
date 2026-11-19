// Free drive at each track stickiness, from a fixed start (groove 5, 60 m/s, no throttle):
// hands-off holding, short steering taps, and how long full lock takes to break out each way.
import puppeteer from 'puppeteer-core';
import http from 'http'; import fs from 'fs'; import path from 'path';
const root = path.resolve('.'); const types = { '.html': 'text/html', '.js': 'text/javascript', '.mp3': 'audio/mpeg' };
const srv = http.createServer((req, res) => { const p = path.join(root, req.url === '/' ? '/index.html' : req.url.split('?')[0]); fs.readFile(p, (e, d) => { if (e) { res.writeHead(404); res.end(); } else { res.writeHead(200, { 'content-type': types[path.extname(p)] || 'application/octet-stream' }); res.end(d); } }); }).listen(8767);
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
const browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required', '--mute-audio'] });
const errs = [];
const where = `(() => { const w = window.__wax, L = w.S.L, b = w.b, r = Math.hypot(b.x, b.z); let phi = Math.atan2(-b.z, b.x); if (phi < 0) phi += 2 * Math.PI; const u = (L.R0 - r) / L.pitch - phi / (2 * Math.PI), n = Math.round(u), e = (u - n) * L.pitch; return { t: w.S.time, rev: n + phi / (2 * Math.PI), e, v: b.speed, A: w.tel.cA, B: w.tel.cB }; })()`;
const page = await browser.newPage(); await page.setViewport({ width: 320, height: 200 });
page.on('pageerror', e => errs.push(e.message));
await page.goto('http://localhost:8767/'); await page.waitForFunction(() => window.__wax && !window.__wax.S.loading, { timeout: 120000 });
await page.evaluate(() => { document.querySelector('[data-mode=free]').click(); document.getElementById('go').click(); });
await sleep(1500);
const place = () => page.evaluate(() => window.__wax.place(2.5, 60));
// game-time wait (swiftshader runs slower than real time)
const waitGame = async (secs, each) => { const t0 = (await page.evaluate(where)).t; for (;;) { await sleep(40); const s = await page.evaluate(where); if (each) each(s); if (s.t - t0 >= secs) return s; } };
for (const st of [0, 0.25, 0.5, 0.75, 1]) {
  await page.evaluate((v) => { const el = document.getElementById('stick'); el.value = String(v * 100); el.dispatchEvent(new Event('input')); }, st);
  const got = await page.evaluate(() => window.__wax.S.stick);
  // 1. hands off
  await place(); let r0 = (await page.evaluate(where)).rev, hops = 0, both = 0, n = 0;
  await waitGame(6, (s) => { if (Math.abs(s.rev - r0) > 0.5) hops++; r0 = s.rev; n++; if (s.A > 0.9 && s.B > 0.9) both++; });
  // 2. taps, each from a fresh start
  let tapHops = 0; for (const key of ['a', 'd', 'a', 'd']) { await place(); await waitGame(0.5); let p = (await page.evaluate(where)).rev, hopped = false; await page.keyboard.down(key); await sleep(150); await page.keyboard.up(key); await waitGame(1.5, (s) => { if (Math.abs(s.rev - p) > 0.5) hopped = true; p = s.rev; }); if (hopped) tapHops++; }
  // 3. full lock, each way
  const lock = async (key) => { await place(); await waitGame(0.5); const s0 = await page.evaluate(where); let p = s0.rev, out = 'held 4 s'; await page.keyboard.down(key); await waitGame(4, (s) => { if (out.startsWith('held') && Math.abs(s.rev - p) > 0.5) out = (s.t - s0.t).toFixed(2) + ' s'; p = s.rev; }); await page.keyboard.up(key); return out; };
  const inward = await lock('a'), outward = await lock('d');
  console.log(`stickiness ${Math.round(got * 100)}%: hands-off 6 s → ${hops} hops, stylus on both walls ${Math.round(100 * both / n)}% · short taps → ${tapHops}/4 hop · full lock breaks out: inward ${inward}, outward ${outward}`);
}
console.log(errs.length ? 'errors: ' + errs.join(' | ') : 'no page errors');
await browser.close(); srv.close();
