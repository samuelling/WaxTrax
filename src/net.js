// Client for the race server (worker/index.js).
export class Net {
  constructor() { this.ws = null; this.id = null; this.host = null; this.players = []; this.offset = 0; this.on = {}; this.room = null; this.open = false; this.rtt = 0; }
  // Where the race server lives: the same host when the Worker serves the page, otherwise a saved address.
  static base() {
    let saved = ''; try { saved = localStorage.getItem('wax.server') || ''; } catch (e) { /* storage unavailable */ }
    const meta = document.querySelector('meta[name="wax-server"]')?.content || '';
    const h = location.hostname;
    const sameHost = location.protocol.startsWith('http') && !/github\.io$|claude|anthropic|^$/.test(h);
    const pick = saved || meta || (sameHost ? location.host : '');
    if (!pick) return '';
    const host = pick.replace(/^\w+:\/\//, '').replace(/\/+$/, '');
    const secure = !/^(localhost|127\.|\[::1\])/.test(host);
    return (secure ? 'wss://' : 'ws://') + host;
  }
  static save(v) { try { if (v) localStorage.setItem('wax.server', v); else localStorage.removeItem('wax.server'); } catch (e) { /* storage unavailable */ } }
  connect(room, name, color) {
    return new Promise((resolve, reject) => {
      const base = Net.base(); if (!base) return reject(new Error('no-server'));
      let ws; try { ws = new WebSocket(`${base}/ws/${room}`); } catch (e) { return reject(e); }
      this.ws = ws; this.room = room; let done = false;
      const fail = (e) => { if (!done) { done = true; reject(e instanceof Error ? e : new Error('connect')); } };
      const to = setTimeout(() => { fail(new Error('timeout')); try { ws.close(); } catch (e) { /* already closed */ } }, 8000);
      ws.onopen = () => { this.open = true; ws.send(JSON.stringify({ t: 'hello', name, color })); this.ping(); };
      ws.onerror = () => fail(new Error('connect'));
      ws.onclose = () => { clearTimeout(to); const was = this.open; this.open = false; clearInterval(this.pinger); fail(new Error('closed')); if (was && this.on.close) this.on.close(); };
      ws.onmessage = (ev) => {
        let m; try { m = JSON.parse(ev.data); } catch (e) { return; }
        if (m.t === 'welcome') { clearTimeout(to); this.id = m.id; this.host = m.host; this.players = m.players; this.offset = m.now - Date.now(); done = true; this.pinger = setInterval(() => this.ping(), 4000); resolve(m); }
        else if (m.t === 'err') { fail(new Error(m.msg)); }
        else if (m.t === 'pong') { const rtt = performance.now() - m.c; this.rtt = rtt; this.offset = m.now + rtt / 2 - Date.now(); }
        else if (m.t === 'join') { this.players = this.players.filter(p => p.id !== m.p.id).concat(m.p); }
        else if (m.t === 'leave') { this.players = this.players.filter(p => p.id !== m.id); this.host = m.host; }
        if (this.on[m.t]) this.on[m.t](m);
      };
    });
  }
  ping() { this.send({ t: 'ping', c: performance.now() }); }
  send(m) { if (this.ws && this.ws.readyState === 1) this.ws.send(JSON.stringify(m)); }
  ev(e) { this.send({ t: 'ev', e }); }
  isHost() { return this.id && this.id === this.host; }
  // server clock → this device's performance.now() timeline
  toPerf(serverMs) { return performance.now() + (serverMs - (Date.now() + this.offset)); }
  close() { this.on = {}; try { this.ws && this.ws.close(); } catch (e) { /* already closed */ } this.open = false; clearInterval(this.pinger); }
}
