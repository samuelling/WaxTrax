import puppeteer from 'puppeteer-core';
import http from 'http'; import fs from 'fs'; import path from 'path';
const root = path.resolve('.'); const types = { '.html': 'text/html', '.js': 'text/javascript', '.mp3': 'audio/mpeg' };
const srv = http.createServer((req, res) => { const p = path.join(root, decodeURIComponent(req.url === '/' ? '/index.html' : req.url.split('?')[0])); fs.readFile(p, (e, d) => { if (e) { res.writeHead(404); res.end(); } else { res.writeHead(200, { 'content-type': types[path.extname(p)] || 'application/octet-stream' }); res.end(d); } }); }).listen(8769);
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
const browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required', '--mute-audio'] });
const page = await browser.newPage(); await page.setViewport({ width: 480, height: 300 });
const errs = []; page.on('pageerror', e => errs.push(e.message)); page.on('response', r => { if (r.status() >= 400) errs.push(r.status() + ' ' + r.url()); });
await page.goto('http://localhost:8769/'); await page.waitForFunction(() => window.__wax && !window.__wax.S.loading, { timeout: 120000 });
const n = await page.evaluate(() => document.querySelectorAll('#tracks button').length); console.log('tracks in menu:', n);
for (let i = 3; i < n; i++) {
  await page.evaluate((i) => document.querySelectorAll('#tracks button')[i].click(), i);
  await page.waitForFunction(() => !window.__wax.S.loading, { timeout: 120000 });
  const info = await page.evaluate(() => ({ title: window.__wax.S.song.title, world: window.__wax.S.world.id, status: document.getElementById('status').textContent }));
  await page.evaluate(() => { document.querySelector('[data-mode=follow]').click(); document.getElementById('go').click(); });
  await sleep(1200); await page.evaluate(() => { window.__wax.b.q = 1.6; }); await sleep(5000);
  const t = await page.evaluate(() => ({ A: +window.__wax.tel.cA.toFixed(2), B: +window.__wax.tel.cB.toFixed(2), pk: +window.__wax.tel.pk.toFixed(2), level: +window.__wax.audio.level.toFixed(3) }));
  await page.screenshot({ path: `/tmp/shot-track${i}.png` });
  console.log(`${info.title} [${info.world}]: ${info.status} | stylus walls ${t.A}/${t.B}, output peak ${t.pk}, level ${t.level}`);
  await page.evaluate(() => document.getElementById('bMenu').click()); await sleep(400);
}
console.log(errs.length ? 'errors: ' + errs.join(' | ') : 'no page errors');
await browser.close(); srv.close();
