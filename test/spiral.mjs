// Each spiral setting: layout, follow-mode playback, platter pinning, and the fly-over.
import puppeteer from 'puppeteer-core';
import http from 'http'; import fs from 'fs'; import path from 'path';
const root = path.resolve('.'); const types = { '.html': 'text/html', '.js': 'text/javascript', '.mp3': 'audio/mpeg' };
const srv = http.createServer((req, res) => { const p = path.join(root, decodeURIComponent(req.url === '/' ? '/index.html' : req.url.split('?')[0])); fs.readFile(p, (e, d) => { if (e) { res.writeHead(404); res.end(); } else { res.writeHead(200, { 'content-type': types[path.extname(p)] || 'application/octet-stream' }); res.end(d); } }); }).listen(8770);
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
const W = +(process.env.W || 640), H = +(process.env.H || 400);
const browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required', '--mute-audio', `--window-size=${W},${H}`] });
const page = await browser.newPage(); await page.setViewport({ width: W, height: H });
const errs = []; page.on('pageerror', e => errs.push(e.message)); page.on('console', m => { if (m.type() === 'error' && !m.text().includes('GL Driver')) errs.push(m.text()); });
await page.goto('http://localhost:8770/'); await page.waitForFunction(() => window.__wax && !window.__wax.S.loading, { timeout: 120000 });
const st = () => page.evaluate(() => { const w = window.__wax, b = w.b, L = w.S.L; let phi = Math.atan2(-b.z, b.x); return { t: +w.S.time.toFixed(2), intro: !!w.S.intro, q: +b.q.toFixed(3), rate: +b.rate.toFixed(2), v: Math.round(b.speed * 3.6), worldAng: +(((phi + w.S.theta) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI)).toFixed(3), theta: +w.S.theta.toFixed(3), A: +w.tel.cA.toFixed(2), B: +w.tel.cB.toFixed(2), sweep: +w.record.uniforms.uSweepAmt.value.toFixed(2) }; });
for (const id of (process.env.SP || 'lp,tight,cork').split(',')) {
  await page.evaluate((id) => document.querySelector(`#spirals [data-spiral="${id}"]`).click(), id);
  const L = await page.evaluate(() => { const L = window.__wax.S.L; return { laps: +L.musicRevs.toFixed(1), R0: Math.round(L.R0), pitch: +L.pitch.toFixed(1), tRev: L.tRev, vOuter: Math.round(2 * Math.PI * L.R0 / L.tRev * 3.6), vInner: Math.round(2 * Math.PI * 100 / L.tRev * 3.6) }; });
  await page.evaluate(() => { document.querySelector('[data-mode=follow]').click(); document.getElementById('go').click(); });
  const shots = id === (process.env.SHOT || 'tight');
  const s0 = await st(); await sleep(1800); const s1 = await st(); if (shots) await page.screenshot({ path: `/tmp/shot-intro-a.png` });
  await sleep(1800); if (shots) await page.screenshot({ path: `/tmp/shot-intro-b.png` }); const s2 = await st();
  // wait for the intro to end, then ride
  await page.waitForFunction(() => !window.__wax.S.intro, { timeout: 60000 }); const s3 = await st();
  await sleep(6000); const s4 = await st(); await sleep(2000); const s5 = await st(); if (shots) await page.screenshot({ path: `/tmp/shot-spin-chase.png` });
  console.log(`${id}: ${JSON.stringify(L)}`);
  console.log(`   intro: start ${JSON.stringify(s0)}\n          mid   rate ${s1.rate} sweep ${s1.sweep} → ${s2.sweep}\n          end   ${JSON.stringify(s3)}`);
  console.log(`   riding: ${JSON.stringify(s4)}\n           ${JSON.stringify(s5)}  (world angle drift over 2 s: ${(s5.worldAng - s4.worldAng).toFixed(3)} rad; record turned ${(s5.theta - s4.theta).toFixed(3)} rad)`);
  await page.evaluate(() => document.getElementById('bMenu').click()); await sleep(500);
}
// platter still: the buggy should go round instead
await page.evaluate(() => { window.__wax.setPlatter(false); document.querySelector('#spirals [data-spiral="tight"]').click(); document.querySelector('[data-mode=follow]').click(); document.getElementById('go').click(); });
await page.waitForFunction(() => window.__wax.S.intro, { timeout: 20000 }); await page.keyboard.press('x'); await page.waitForFunction(() => !window.__wax.S.intro, { timeout: 20000 }); await sleep(5000); const a = await st(); await sleep(2000); const c = await st();
console.log(`platter still: world angle drift over 2 s ${(c.worldAng - a.worldAng).toFixed(3)} rad, record turned ${(c.theta - a.theta).toFixed(3)} rad`);
console.log(errs.length ? 'errors: ' + errs.slice(0, 5).join(' | ') : 'no page errors');
await browser.close(); srv.close();
