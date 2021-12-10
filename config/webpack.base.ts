const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: path.join(__dirname, '../src/index.tsx'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /|.scss/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          // 'style-loader',
          'css-loader',
          'postcss-loader',
          { loader: 'resolve-url-loader' },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
        include: /\.s?css$/,
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/,
        type: 'asset/inline',
      },
      // support fonts
      // {
      //   test: /\.(eot|ttf|woff|woff2)$/,
      //   type: 'asset/resource',
      //   generator: {
      //     filename: 'fonts/[hash][ext][query]',
      //   },
      // },
    ],
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, '../src'),
      '@src': path.join(__dirname, '../src'),
      '@comp': path.join(__dirname, '../src/components'),
      '@static': path.join(__dirname, '../src/static'),
      '@scss': path.join(__dirname, '../src/scss'),
    },
    mainFiles: ['index', 'main'],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.json'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../public/index.html'),
    }),
  ],
};
