import puppeteer from 'puppeteer-core';
import http from 'http'; import fs from 'fs'; import path from 'path';
const root = path.resolve('.');
const types = { '.html': 'text/html', '.js': 'text/javascript', '.mp3': 'audio/mpeg' };
const srv = http.createServer((req, res) => { const p = path.join(root, decodeURIComponent(req.url.split('?')[0] === '/' ? '/index.html' : req.url.split('?')[0])); fs.readFile(p, (e, d) => { if (e) { res.writeHead(404); res.end(); } else { res.writeHead(200, { 'content-type': types[path.extname(p)] || 'application/octet-stream' }); res.end(d); } }); }).listen(8765);
const W = +(process.env.W || 960), H = +(process.env.H || 540);
const browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--autoplay-policy=no-user-gesture-required', `--window-size=${W},${H}`, '--mute-audio'] });
const page = await browser.newPage(); await page.setViewport({ width: W, height: H, deviceScaleFactor: 1, isMobile: !!process.env.MOBILE, hasTouch: !!process.env.MOBILE });
const logs = []; page.on('console', m => logs.push(`[${m.type()}] ${m.text()}`)); page.on('pageerror', e => logs.push('[pageerror] ' + e.message)); page.on('requestfailed', r => logs.push('[reqfail] ' + r.url())); page.on('response', r => { if (r.status() >= 400) logs.push('[http ' + r.status() + '] ' + r.url()); });
await page.goto('http://localhost:8765/', { waitUntil: 'load' });
const steps = process.argv.slice(2).flatMap(a => a.startsWith('eval:') ? [a] : a.split(','));
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
await page.waitForFunction(() => window.__wax && !window.__wax.S.loading, { timeout: 120000 }).catch(e => logs.push('load timeout'));
for (const st of steps) {
  const ci = st.indexOf(':'); const cmd = ci < 0 ? st : st.slice(0, ci), arg = ci < 0 ? undefined : st.slice(ci + 1);
  if (cmd === 'menu') { await sleep(1500); }
  else if (cmd === 'go') { await page.evaluate(() => document.getElementById('go').click()); }
  else if (cmd === 'wait') await sleep(+arg);
  else if (cmd === 'down') await page.keyboard.down(arg === 'space' ? ' ' : arg);
  else if (cmd === 'up') await page.keyboard.up(arg === 'space' ? ' ' : arg);
  else if (cmd === 'press') await page.keyboard.press(arg);
  else if (cmd === 'free') await page.evaluate(() => document.querySelector('[data-mode=free]').click());
  else if (cmd === 'eval') logs.push('eval: ' + JSON.stringify(await page.evaluate(arg)));
  else if (cmd === 'state') logs.push('state: ' + JSON.stringify(await page.evaluate(() => { const w = window.__wax; return { phase: w.S.phase, mode: w.S.mode, q: +w.b.q.toFixed(3), rate: +w.b.rate.toFixed(3), speed: +w.b.speed.toFixed(1), y: +w.b.y.toFixed(2), air: +w.b.air.toFixed(2), ctx: w.audio.ctx?.state, amode: w.audio.mode, level: +w.audio.level.toFixed(4), bass: +w.audio.bass.toFixed(3), tel: { ty: +w.tel.ty.toFixed(1), tz: +w.tel.tz.toFixed(1), cA: +w.tel.cA.toFixed(2), cB: +w.tel.cB.toFixed(2), cL: +w.tel.cL.toFixed(2), pk: +w.tel.pk.toFixed(3), age: Math.round(performance.now() - w.tel.fresh) }, score: Math.round(w.S.score), t: +w.S.time.toFixed(1) }; })));
  else if (cmd === 'shot') { await page.screenshot({ path: `/tmp/shot-${arg}.png` }); }
}
console.log(logs.join('\n'));
await browser.close(); srv.close();
