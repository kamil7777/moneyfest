/* eslint-disable linebreak-style */
const common = require('./webpack.common.js');
const paths = require('./webpack.paths.js');
const { commonModules, commonPlugins, commonResolve } = common;
module.exports = {
  mode: 'development',
  entry: [paths.src + '/index.js'],
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    assetModuleFilename: '[file]',
    clean: true,
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
  module: {
    ...commonModules,
  },
  plugins: [
    ...commonPlugins,
  ],
  resolve: {
    ...commonResolve,
  },
};