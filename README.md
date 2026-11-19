# Wax Rally

A racing game where the track is a vinyl record. You drive a dune buggy with a diamond stylus under it, and everything you hear is that stylus's simulated motion in the groove.

Open `index.html` from any static server (or GitHub Pages from the repository root). No build step is needed to play: `game.js` and `worklet.js` are committed.

## Modes

- **Follow**: locked to the groove. Gas, brake and handbrake change the pitch, including backwards.
- **Free drive**: steer anywhere. The groove holds the buggy like a rut until you steer out; then you can climb walls, catch air (the needle lifts) and hop grooves.

Keys: `W/S` or arrows for gas and brake, `A/D` to steer, `Shift` nitro, `Space` handbrake, `M` mode, `C` camera, `R` back to the groove, `Esc` menu. Touch and gamepad also work. Drop an audio file on the page to cut your own record.

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
```

The three built-in tracks are synthesized by `tools/music.mjs`. All geometry and textures are procedural.
