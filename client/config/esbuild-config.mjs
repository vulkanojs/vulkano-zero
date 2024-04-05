/* eslint-disable prefer-const */
import * as esbuild from 'esbuild';
import { sassPlugin } from 'esbuild-sass-plugin';
import eslint from 'esbuild-plugin-eslint';
import esbuildPluginTsc from 'esbuild-plugin-tsc';

// client/main.js
let main_js = await esbuild.context({
  entryPoints: ['client/main.js'],
  bundle: true,
  outfile: 'public/js/main.js',
  logLevel: 'warning',
  sourcemap: true,
  plugins: [
    eslint({ fix: true, })
  ]
});
await main_js.watch();

// client/components/vulkano-webcomponent/main.js
let vulkano_webcomponent = await esbuild.context({
  entryPoints: ['client/components/vulkano-webcomponent/main.js'],
  bundle: true,
  outfile: 'public/js/vulkano-webcomponent.js',
  logLevel: 'warning',
  sourcemap: true,
  plugins: [
    eslint({ fix: true, })
  ]
});
await vulkano_webcomponent.watch();

// client/components/simple-greeting/main.ts
let ts_component = await esbuild.context({
  entryPoints: ['client/components/simple-greeting/main.ts'],
  bundle: true,
  outfile: 'public/js/simple-greeting.js',
  logLevel: 'warning',
  sourcemap: true,
  plugins: [
    esbuildPluginTsc({ force: true })
  ]
});
await ts_component.watch();

// client/style.scss
let style = await esbuild.context({
  entryPoints: ['client/style.scss'],
  bundle: false,
  outfile: 'public/css/style.css',
  logLevel: 'warning',
  sourcemap: true,
  plugins: [sassPlugin({
    loadPaths: ['node_modules/foundation-sites/scss'],
    embedded: true
  })]
});
await style.watch();

console.log('[esbuild] Watching for changes...');
