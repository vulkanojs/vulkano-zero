const path = require('path');
const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const pk = require('./package.json');

const env = String(process.env.NODE_ENV || 'development').toLowerCase();
const version = String(pk.version) || '0.0.1';

// Babel Loader
const useBabelLoader = {
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

// SASS Loader
const useSassLoader = {
  test: /\.s[ac]ss$/i,
  use: [
    MiniCssExtractPlugin.loader,
    'css-loader',
    'sass-loader',
  ]
};

// SASS plugin
const sassPlugin = new MiniCssExtractPlugin({
  filename: 'css/[name].css',
});

// Enviroment Plugin
const pluginEnvironment = new webpack.EnvironmentPlugin({
  NODE_ENV: env,
  VERSION: version
});

// ESLint Options
const pluginDefineESLint = new ESLintPlugin({
  failOnWarning: false,
  failOnError: false
});

// BrowserSync
const pluginBrowserSync = new BrowserSyncPlugin({
  host: 'localhost',
  port: 3000,
  proxy: 'localhost:8082'
});

const config = {
  mode: String(process.env.NODE_ENV || 'development').toLowerCase(),
  stats: {
    colors: true,
    env: true,
    errorDetails: true
  },
  module: {
    rules: [
      useBabelLoader,
      useSassLoader
    ]
  },
  entry: {
    app: ['./client/index.js', './client/app.scss']
  },
  output: {
    path: path.resolve(process.cwd(), './public/dist/'),
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
    sassPlugin,
    pluginBrowserSync
  ]
};

module.exports = config;
