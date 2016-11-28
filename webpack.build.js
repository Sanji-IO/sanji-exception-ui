const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const config = require('./webpack.config.js');

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

config.module.rules = [
  {test: /\.js$/, loader: 'ng-annotate-loader', exclude: /(node_modules)/, enforce: 'post'},
].concat(config.module.rules);

config.plugins.push(
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false,
    quiet: true,
    options:{
      postcss: [
        autoprefixer({ browsers: ['last 2 versions'] })
      ]
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      screw_ie8: true,
      warnings: false,
      dead_code: true
    }
  })
);
module.exports = config;
