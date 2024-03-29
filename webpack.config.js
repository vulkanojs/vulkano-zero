const path = require('path');
const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const pk = require('./package.json');

const env = String(process.env.NODE_ENV || 'development').toLowerCase();
const version = String(pk.version) || '0.0.1';

const babelLoader = {
  test: /\.js$/,
  exclude: /(node_modules)/,
  use: {
    loader: 'babel-loader',
    options: {
      plugins: [
        '@babel/plugin-syntax-jsx',
        '@babel/plugin-syntax-dynamic-import'
      ],
      presets: [
        '@babel/preset-env',
        '@babel/preset-react'
      ]
    }
  }
};

const styleLoader = {
  test: /\.(s(a|c)ss)$/,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: { url: false }
    },
    'sass-loader'
  ]
};

const pluginEnvironment = new webpack.EnvironmentPlugin({
  NODE_ENV: env,
  VERSION: version
});

const pluginDefineESLint = new ESLintPlugin({
  failOnWarning: false,
  failOnError: false
});

const pluginBrowserSync = new BrowserSyncPlugin({
  host: 'localhost',
  port: 3000,
  proxy: 'localhost:8082'
});

const pluginMiniCssExtract = new MiniCssExtractPlugin({
  filename: 'css/[name].css'
});

const config = {
  mode: env,
  stats: {
    colors: true,
    env: true,
    errorDetails: true
  },
  module: {
    rules: [
      babelLoader,
      styleLoader
    ]
  },
  entry: {
    app: ['./client/index.js', './client/app.scss'],
    vulkano_web_component: './client/components/vulkano-webcomponent/index.js',
  },
  output: {
    path: path.resolve(process.cwd(), './public/'),
    filename: 'js/[name].js'
  },
  resolve: {
    alias: {
      '@client': path.resolve(__dirname, './client'),
    },
    modules: [
      './',
      './node_modules/',
      './node_modules/foundation-sites/scss',
      './node_modules/hamburgers/_sass/hamburgers'
    ]
  },
  devtool: env !== 'production' ? 'source-map' : undefined,
  plugins: [
    pluginEnvironment,
    pluginDefineESLint,
    pluginBrowserSync,
    pluginMiniCssExtract
  ]
};

module.exports = config;
