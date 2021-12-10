const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');
const getPublicUrlOrPath = require('react-dev-utils/getPublicUrlOrPath');

const baseConfig = require('./webpack.base');

const publicUrlOrPath = getPublicUrlOrPath(
  process.env.PUBLIC_URL,
);

const prodConfig = {
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '../build'),
    globalObject: 'window',
    libraryTarget: 'umd',
    filename: 'js/[name].[contenthash:8].bundle.js',
    chunkFilename: 'js/[name].[contenthash:8].chunk.js',
    publicPath: publicUrlOrPath,
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
};

module.exports = merge(baseConfig, prodConfig);
