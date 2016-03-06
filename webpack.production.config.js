'use strict';

const path = require('path'),
      webpack = require('webpack')


// --------------------------------------------------------------------

module.exports = {

  entry: [
    'babel-polyfill',
    './src/index.js'
  ],

  output: {
    path: './dist',
    filename: 'combokeys.js',
    library: 'Combokeys',
    libraryTarget:  'umd'
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      output: {
        comments: false
      },
      compress: {
        screw_ie8: false,
        warnings: true
      }
    })
  ]

}
