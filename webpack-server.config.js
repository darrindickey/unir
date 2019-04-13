const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')

const ROOT_DIR = path.resolve(__dirname)
const resolvePath = (...args) => path.resolve(ROOT_DIR, ...args)
const SERVER_DIR = resolvePath('server')
const SERVER_DIST_DIR = resolvePath('server/dist')

module.exports = {
  target: 'node',
  entry: {
    app: ['@babel/polyfill', path.join(SERVER_DIR, './server.js')],
  },
  output: {
    path: path.resolve(SERVER_DIST_DIR),
    filename: "server.bundle.js",
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
            ]
          }
        }
      ]
    }]
  },
  devtool: 'inline-source-map',
  node: {
    __dirname: false,
    __filename: false,
  },
  externals: [nodeExternals()],
};