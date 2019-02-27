const path = require('path');
const { smart } = require('webpack-merge');
const base = require('./webpack.base');
module.exports = smart(base, {
  target: 'node',
  entry: './src/client/index.js',
  output: {
    path: path.resolve('public'),
    filename: 'client.js'
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', {
      //     loader: 'css-loader',
      //     options: {
      //       modules: true
      //     }
      //   }]
      // }
    ]
  }
});
