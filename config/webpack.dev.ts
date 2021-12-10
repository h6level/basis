const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');

const devConfig = {
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, '../public'),
    },
    hot: true,
    compress: true,
    port: 5001,
  },
};

module.exports = merge(baseConfig, devConfig);
