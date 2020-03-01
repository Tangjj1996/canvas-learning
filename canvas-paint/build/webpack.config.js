const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const resolve = (dir) => path.join(__dirname, '../', dir);

module.exports = {
  mode: 'development',
  context: resolve('src'),
  entry: './index.js',
  output: {
    filename: '[name][chunkhash:6].js',
    path: resolve('dist'),
  },
  devServer: {
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
};
