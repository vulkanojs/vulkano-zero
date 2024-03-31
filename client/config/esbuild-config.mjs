/* eslint-disable prefer-const */
import * as esbuild from 'esbuild';
import { sassPlugin } from 'esbuild-sass-plugin';

// client/main.js
let main_js = await esbuild.context({
  entryPoints: ['client/main.js'],
  bundle: true,
  outfile: 'public/js/main.js',
});
await main_js.watch();

// client/components/vulkano-webcomponent/main.js
let vulkano_webcomponent = await esbuild.context({
  entryPoints: ['client/components/vulkano-webcomponent/main.js'],
  bundle: true,
  outfile: 'public/js/vulkano-webcomponent.js',
});
await vulkano_webcomponent.watch();

// client/style.scss
let style = await esbuild.context({
  entryPoints: ['client/style.scss'],
  bundle: false,
  outfile: 'public/css/style.css',
  plugins: [sassPlugin({
    loadPaths: ['node_modules/foundation-sites/scss']
  })]
});
await style.watch();

console.log('[esbuild] Watching for changes...');
