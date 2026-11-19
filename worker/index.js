// Wax Rally race server: one Durable Object per room. It keeps the lobby, starts races on a
// shared clock, and relays each player's position to the others in batches.
//
//   GET /ws/<ROOM>   WebSocket for a room (3-8 letters or digits)
//   anything else    the game's static files
const MAX_PLAYERS = 8, TICK_MS = 80, RACE_GRACE_MS = 25000;
const SONGS = ['needle-drop', 'dune-runner', 'wow-and-flutter', 'spindle-spin', 'crate-digger', '8-bit-platter', 'dub-plate', 'turbo-tonearm'], WORLDS = ['night', 'dunes', 'flexi'];

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const m = url.pathname.match(/^\/ws\/([A-Za-z0-9]{3,8})$/);
    if (m) return env.ROOMS.get(env.ROOMS.idFromName(m[1].toUpperCase())).fetch(request);
    if (url.pathname === '/api/health') return Response.json({ ok: true, service: 'waxtrax' }, { headers: { 'access-control-allow-origin': '*' } });
    if (env.ASSETS) return env.ASSETS.fetch(request);
    return new Response('Wax Rally race server', { status: 200 });
  },
};

export class Room {
  constructor(state, env) {
    this.state = state; this.players = new Map(); this.nextId = 1; this.host = null;
    this.cfg = { song: SONGS[0], world: WORLDS[0] }; this.phase = 'lobby'; this.timer = null; this.raceEnd = null; this.results = [];
  }
  async fetch(request) {
    if (request.headers.get('Upgrade') !== 'websocket') return new Response('Expected a WebSocket', { status: 426 });
    const pair = new WebSocketPair(), client = pair[0], server = pair[1];
    server.accept();
    if (this.players.size >= MAX_PLAYERS) { server.send(JSON.stringify({ t: 'err', msg: 'That room is full.' })); server.close(1008, 'full'); return new Response(null, { status: 101, webSocket: client }); }
    const p = { id: 'p' + this.nextId++, ws: server, name: 'Racer', color: 0, s: null, fin: null, ready: false, last: Date.now() };
    server.addEventListener('message', (ev) => { try { this.onMessage(p, JSON.parse(ev.data)); } catch (e) { /* ignore malformed messages */ } });
    const bye = () => this.drop(p);
    server.addEventListener('close', bye); server.addEventListener('error', bye);
    this.players.set(p.id, p);
    return new Response(null, { status: 101, webSocket: client });
  }
  roster() { return [...this.players.values()].filter(p => p.ready).map(p => ({ id: p.id, name: p.name, color: p.color })); }
  send(p, m) { try { p.ws.send(JSON.stringify(m)); } catch (e) { /* socket gone */ } }
  all(m, except) { const s = JSON.stringify(m); for (const p of this.players.values()) if (p !== except && p.ready) { try { p.ws.send(s); } catch (e) { /* socket gone */ } } }
  drop(p) {
    if (!this.players.has(p.id)) return; this.players.delete(p.id);
    if (this.host === p.id) this.host = this.players.size ? this.players.keys().next().value : null;
    this.all({ t: 'leave', id: p.id, host: this.host });
    if (!this.players.size) { this.stopTick(); this.phase = 'lobby'; this.host = null; }
    else if (this.phase === 'race') this.checkOver();
  }
  onMessage(p, m) {
    p.last = Date.now();
    switch (m.t) {
      case 'hello': {
        p.name = String(m.name || 'Racer').replace(/[^\w .\-!?']/g, '').slice(0, 14) || 'Racer'; p.color = (m.color | 0) & 0xffffff; p.ready = true;
        if (!this.host) this.host = p.id;
        this.send(p, { t: 'welcome', id: p.id, host: this.host, now: Date.now(), cfg: this.cfg, phase: this.phase, players: this.roster() });
        this.all({ t: 'join', p: { id: p.id, name: p.name, color: p.color } }, p);
        break;
      }
      case 'ping': this.send(p, { t: 'pong', c: m.c, now: Date.now() }); break;
      case 'cfg':
        if (p.id === this.host && this.phase === 'lobby' && SONGS.includes(m.song) && WORLDS.includes(m.world)) { this.cfg = { song: m.song, world: m.world }; this.all({ t: 'cfg', cfg: this.cfg }); }
        break;
      case 'start':
        if (p.id === this.host && this.phase === 'lobby') {
          this.phase = 'race'; this.results = []; this.raceEnd = null;
          const ids = []; for (const q of this.players.values()) { q.s = null; q.fin = null; q.racing = q.ready; if (q.ready) ids.push(q.id); }
          this.all({ t: 'go', at: Date.now() + 5000, now: Date.now(), seed: (Math.random() * 0x7fffffff) | 0, cfg: this.cfg, grid: ids });
          this.startTick();
        }
        break;
      case 's': if (this.phase === 'race' && Array.isArray(m.d) && m.d.length <= 6) p.s = m.d; break;
      case 'ev':
        if (this.phase !== 'race' || !m.e || typeof m.e !== 'object') break;
        if (m.e.k === 'fin' && p.fin == null) { p.fin = +m.e.time || 0; this.results.push({ id: p.id, name: p.name, time: p.fin }); if (!this.raceEnd) this.raceEnd = Date.now() + RACE_GRACE_MS; }
        this.all({ t: 'ev', from: p.id, e: m.e }, p); this.checkOver();
        break;
    }
  }
  checkOver() {
    if (this.phase !== 'race') return;
    const racing = [...this.players.values()].filter(p => p.racing);
    if (racing.every(p => p.fin != null) || (this.raceEnd && Date.now() > this.raceEnd)) {
      this.phase = 'lobby'; this.stopTick(); this.all({ t: 'over', results: this.results });
    }
  }
  startTick() { if (this.timer) return; this.timer = setInterval(() => this.tick(), TICK_MS); }
  stopTick() { if (this.timer) { clearInterval(this.timer); this.timer = null; } }
  tick() {
    const s = {}; let n = 0; for (const p of this.players.values()) if (p.s) { s[p.id] = p.s; n++; }
    if (n) this.all({ t: 'snap', s });
    this.checkOver();
  }
}
