const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const ROOT_DIR = path.resolve(__dirname)
const resolvePath = (...args) => path.resolve(ROOT_DIR, ...args)
const WEB_DIR = resolvePath('web')
const WEB_DIST_DIR = resolvePath('web/dist')

module.exports = {
  target: 'web',
  // mode: 'development',
  entry: {
    app: [path.resolve(path.join(WEB_DIR, './index.js'))]
  },
  output: {
    path: path.resolve(WEB_DIST_DIR),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react'
          ],
        },
      }],
    }],
  },
  plugins: [ 
    new HtmlWebpackPlugin({
      title: 'Initial UNIR UI',
      pageHeader: 'Welcome',
      template: path.join(WEB_DIR, 'template.html'),
      filename: path.join(WEB_DIR, 'index.html')
    }),
  ],
  devtool: 'inline-source-map',
};