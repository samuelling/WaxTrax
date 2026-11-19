import puppeteer from 'puppeteer-core';
import http from 'http'; import fs from 'fs'; import path from 'path';
const root = path.resolve('.'); const types = { '.html': 'text/html', '.js': 'text/javascript', '.mp3': 'audio/mpeg' };
const srv = http.createServer((req, res) => { const p = path.join(root, req.url === '/' ? '/index.html' : req.url.split('?')[0]); fs.readFile(p, (e, d) => { if (e) { res.writeHead(404); res.end(); } else { res.writeHead(200, { 'content-type': types[path.extname(p)] || 'application/octet-stream' }); res.end(d); } }); }).listen(8766);
const browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--autoplay-policy=no-user-gesture-required', '--mute-audio'] });
const page = await browser.newPage(); await page.setViewport({ width: 960, height: 540 });
const logs = []; page.on('console', m => { if (!m.text().includes('GL Driver')) logs.push(`[${m.type()}] ${m.text()}`); }); page.on('pageerror', e => logs.push('[pageerror] ' + e.message));
await page.goto('http://localhost:8766/'); await page.waitForFunction(() => window.__wax && !window.__wax.S.loading, { timeout: 120000 });
const st = () => page.evaluate(() => { const w = window.__wax; return { status: document.getElementById('status').textContent, title: w.S.song?.title, revs: w.S.L?.totalRevs.toFixed(2), R0: w.S.L?.R0.toFixed(0), loading: w.S.loading, level: +w.audio.level.toFixed(3), q: +w.b.q.toFixed(3), sr: w.audio.ctx.sampleRate }; });
const input = await page.$('#file'); await input.uploadFile(process.argv[2]);
await page.waitForFunction(() => !window.__wax.S.loading, { timeout: 120000 }); logs.push(JSON.stringify(await st()));
await page.evaluate(() => document.getElementById('go').click()); await new Promise(r => setTimeout(r, 9000)); logs.push(JSON.stringify(await st()));
// top-down look at the label
await page.evaluate(() => { window.__cam = { pos: [0, 150, 60], look: [0, 0, 0] }; }); await new Promise(r => setTimeout(r, 2500)); await page.screenshot({ path: '/tmp/shot-label.png' });
// a bad file
await page.evaluate(() => { window.__cam = null; });
fs.writeFileSync('/tmp/notaudio.mp3', 'this is not audio'); await input.uploadFile('/tmp/notaudio.mp3'); await new Promise(r => setTimeout(r, 2500)); logs.push(JSON.stringify(await st()));
console.log(logs.join('\n')); await browser.close(); srv.close();
