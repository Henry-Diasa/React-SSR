const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { smart } = require('webpack-merge');
const base = require('./webpack.base');

module.exports = smart(base, {
  target: 'node',
  entry: './src/server/index.js',
  output: {
    path: path.resolve('build'),
    filename: 'server.js'
  },
  externals: [nodeExternals()],
  module: {
    rules: [
    ]
  }
})
