import { build } from 'esbuild';
await build({ entryPoints: ['src/main.js'], bundle: true, format: 'esm', minify: true, outfile: 'game.js', target: 'es2020', logLevel: 'info' });
await build({ entryPoints: ['src/worklet.js'], bundle: true, format: 'iife', minify: true, outfile: 'worklet.js', target: 'es2020', logLevel: 'info' });
