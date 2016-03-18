'use strict';

var webpack = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var bourbon = require('node-bourbon').includePaths;
var config = require('./webpack.config.js');

config.devtool = 'source-map';
config.entry = {
  'sanji-ui': './component/index.js'
};
config.output.filename = 'sanji-exception-ui.js';
config.output.libraryTarget = 'umd';
config.output.library = 'sjException';
config.externals = {
  angular: {
    root: 'angular',
    commonjs2: 'angular',
    commonjs: 'angular',
    amd: 'angular'
  },
  'sanji-logger-ui': {
    root: 'sjLogger',
    commonjs2: 'sanji-logger-ui',
    commonjs: 'sanji-logger-ui',
    amd: 'sanji-logger-ui'
  }
};

config.module.loaders = [
  {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract('style-loader', 'css!autoprefixer?browsers=last 2 versions!sass?includePaths[]=' + bourbon)
  }
].concat(config.module.loaders);

config.plugins.push(
  new ExtractTextPlugin('sanji-exception-ui.css'),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
);
module.exports = config;
