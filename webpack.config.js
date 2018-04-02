const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const webpack = require('webpack');
const path = require('path');

const config = {
  context: path.resolve('src'),
  entry: {
    src: './index.js'
  },
  output: {
    path: path.resolve('src'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: path.resolve('src'),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }, {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 8080,
    open: true,
    contentBase: path.resolve('src')
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin("css/styles.css"),
    new HtmlWebpackPlugin({title: "Homepage", template: 'index.html'})
  ]
};

if (process.env.NODE_ENV === 'development') {
  config.plugins.push(new DashboardPlugin());
}

module.exports = config;
