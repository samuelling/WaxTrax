// Two browsers race each other through a local copy of the Worker (npx wrangler dev).
import fs from 'fs';
import puppeteer from 'puppeteer-core';
import { spawn } from 'child_process';
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
const wrLog = fs.openSync('/tmp/wr-online.log', 'w'); const wr = spawn('npx', ['wrangler', 'dev', '--port', '8788', '--ip', '127.0.0.1'], { stdio: ['ignore', wrLog, wrLog], detached: true });
for (let i = 0; i < 60; i++) { try { const r = await fetch('http://127.0.0.1:8788/api/health'); if (r.ok) break; } catch (e) { /* not up yet */ } await sleep(1000); }
const launch = () => puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--autoplay-policy=no-user-gesture-required', '--mute-audio'] });
const browsers = [await launch(), await launch()]; let bi = 0;
const logs = { push: (x) => console.log(String(x).slice(0, 700)), join: () => '' };
async function open(name) {
  const page = await browsers[bi++].newPage(); await page.setViewport({ width: 320, height: 200 });
  page.on('console', m => { if (m.type() === 'error' && !m.text().includes('GL Driver')) logs.push(`[${name}] ${m.text()}`); }); page.on('pageerror', e => logs.push(`[${name} pageerror] ${e.message}`));
  await page.goto('http://127.0.0.1:8788/'); await page.waitForFunction(() => window.__wax && !window.__wax.S.loading, { timeout: 120000 });
  await page.evaluate((n) => { document.querySelector('[data-mode=race]').click(); document.querySelector('[data-kind=online]').click(); document.getElementById('pname').value = n; }, name);
  return page;
}
const st = (p) => p.evaluate(() => { const w = window.__wax, r = w.race, n = w.getNet(); return { status: document.getElementById('status').textContent.slice(0, 60), go: document.getElementById('go').textContent + (document.getElementById('go').disabled ? ' (disabled)' : ''), net: n ? { id: n.id, host: n.host, players: n.players.map(x => x.name), room: n.room, off: Math.round(n.offset) } : null, song: w.S.song?.id, world: w.S.world.id, spiral: w.S.spiral.id, laps: w.S.L ? +w.S.L.musicRevs.toFixed(1) : null, intro: !!w.S.intro, mode: w.S.mode, phase: w.S.phase, race: r.active ? { phase: r.phase, clock: +r.clock.toFixed(1), racers: r.racers.map(x => `${x.name}/${x.kind}:${x.q.toFixed(3)}@${x.lat.toFixed(1)}${x.fin != null ? ' fin ' + x.fin.toFixed(1) : ''}`), gums: r.gums.length } : null, results: document.getElementById('results').textContent.slice(0, 80) }; });
const A = await open('Ada'), B = await open('Bo');
await A.evaluate(() => document.getElementById('bCreate').click()); await sleep(1500);
const code = await A.evaluate(() => document.getElementById('room').value); logs.push('room ' + code);
await B.evaluate((c) => { document.getElementById('room').value = c; document.getElementById('bJoin').click(); }, code); await sleep(2000);
logs.push('A lobby ' + JSON.stringify(await st(A))); logs.push('B lobby ' + JSON.stringify(await st(B)));
// host changes track and world; guest should follow
await A.evaluate(() => document.querySelectorAll('#tracks button')[1].click()); await sleep(9000);
await A.evaluate(() => document.querySelector('#spirals [data-spiral="cork"]').click()); await sleep(2500);
logs.push('B after cfg ' + JSON.stringify(await st(B)));
await A.evaluate(() => document.getElementById('go').click()); await sleep(2500); logs.push('A intro ' + JSON.stringify((await st(A)).intro) + ' B intro ' + JSON.stringify((await st(B)).intro)); await sleep(6500);
// headless tabs in the background are throttled, so drive each in turn
for (const p of [A, B]) await p.keyboard.down('w'); await sleep(14000);
await A.evaluate(() => { const r = window.__wax.race; r.me.item = 'gum'; r.useItem(); r.me.item = 'zap'; r.useItem(); }); await sleep(1500);
logs.push('A racing ' + JSON.stringify(await st(A))); logs.push('B racing ' + JSON.stringify(await st(B)));
// jump both to the finish
for (const p of [A, B]) { await p.evaluate(() => { const r = window.__wax.race; r.me.q = r.qFin - 0.01; }); await sleep(3500); }
await sleep(2500); logs.push('A end ' + JSON.stringify(await st(A))); logs.push('B end ' + JSON.stringify(await st(B)));
await B.evaluate(() => document.getElementById('bLeave').click()); await sleep(1500); logs.push('A after B left ' + JSON.stringify((await st(A)).net));
console.log(logs.join('\n'));
for (const b of browsers) await b.close(); try { process.kill(-wr.pid); } catch (e) { /* already gone */ }
