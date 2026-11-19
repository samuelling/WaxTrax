# Wax Rally

A racing game where the track is a vinyl record. You drive a dune buggy with a diamond stylus under it, and everything you hear is that stylus's simulated motion in the groove.

Open `index.html` from any static server (or GitHub Pages from the repository root). No build step is needed to play: `game.js` and `worklet.js` are committed.

## Modes

- **Follow**: locked to the groove. Gas, brake and handbrake change the pitch, including backwards.
- **Free drive**: steer anywhere. The groove holds the buggy like a rut until you steer out; then you can climb walls, catch air (the needle lifts) and hop grooves.

Keys: `W/S` or arrows for gas and brake, `A/D` to steer, `Shift` nitro, `Space` handbrake, `M` mode, `C` camera, `R` back to the groove, `Esc` menu. Touch and gamepad also work. Drop an audio file on the page to cut your own record.

- **Race**: six buggies on one groove, from the lead-in to the end of the song. The groove has three lanes. Normal pitch is the natural top speed, so driving well keeps the song in tune; boosts push it sharp and hits drag it flat. Versus bots on any track, or online in rooms of up to eight on the built-in tracks.

In a race: `A/D` change lane, `Shift` uses your item (or does a trick in the air off a ramp, for a boost on landing), `Space` brakes.

| On the track | What it does |
| --- | --- |
| Chevron pad | Boost |
| Ramp | Jump; the needle leaves the groove and the music cuts out until you land |
| `?` box | Random item: Nitro, Static Zap, Gum, Sleeve, 45 RPM |
| Gold rings | Each of the first ten adds a little top speed |
| Dust bunny, sweeper, gum | Spin-out |
| Grease | Slides you sideways |

## Worlds

A record does not have to be round or flat. All groove maths happens on a round, flat disc; a world stretches each radius by a shape factor and lifts the surface by a warp height (`src/config.js`). Neon Night is the plain 12-inch, Amber Dunes is an oval with rolling warps you can catch air on, and Blue Flexi is a squared-off disc dished like a bowl.

## Online racing

`worker/index.js` is a Cloudflare Worker with one Durable Object per room. It keeps the lobby, starts races on a shared clock and relays positions about twelve times a second. The same Worker serves the game's files, so the page and its server share one address.

To deploy without a terminal: in the Cloudflare dashboard go to Workers & Pages, create a Worker by importing this repository, and accept the defaults (`wrangler.toml` supplies the rest). From a terminal it is `npm install && npm run deploy`. Open the `workers.dev` address it gives you, choose Race, Online room, and share the room code.

A copy hosted somewhere else (GitHub Pages, say) can still race online: put the Worker's address in the `wax-server` meta tag in `index.html`, or type it into the Race server box.

## How the sound is made

1. **Cutting** (`src/cutter.js`): the song is loudness-normalised, its bass is summed to mono below 140 Hz, it goes through the RIAA recording curve, and the result is integrated into the displacement of the two 45° groove walls. Left is the inner wall, right is the outer wall. Excursion is limited to ±21 µm sideways and ±12 µm vertically.
2. **Stylus** (`src/stylus-core.js`): a 0.6 mg tip on a 12 µm/mN cantilever, an 18 g arm, 2.5 g of tracking force, and Hertzian contact with each wall that can only push. The tip is dilated along the groove by its scanning radius, so tracing distortion grows toward the label. It can lose a wall, climb out, ride the land and drop into the next groove. Integrated at 4× the audio rate.
3. **Playback**: output is the tip's velocity against the cartridge body, resolved along the two wall normals, then RIAA playback EQ and a rumble filter.
4. **Clocking** (`src/driver.js`): the game reports its position around the spindle each frame; a phase-locked loop in the audio thread follows it, so speed, reverse and scratching come straight from how the buggy moves.

## Scale

Across the groove, 1 µm of real record is about 9 cm of world, so the 110 µm pitch is a 10 m lane. Along the groove, one lap is 10 seconds of music, and the RPM readout is relative to normal pitch. The glowing trace on each wall is that channel's waveform, drawn from a mip pyramid of means and variances so distant grooves show a loudness band instead of aliasing.

## Development

```
npm install
npm run build        # bundles src/ into game.js and worklet.js
npm run music        # re-renders the three built-in tracks (needs ffmpeg)
npm run test:stylus  # tone response and clocking checks for the stylus model
npm run dev          # the game and race server on localhost, through wrangler
npm run test:online  # two headless browsers race each other through the local Worker
```

The three built-in tracks are synthesized by `tools/music.mjs`. All geometry and textures are procedural.
