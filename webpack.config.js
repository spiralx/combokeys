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
    path: './build',
    publicPath: '/',
    filename: 'combokeys.js',
    library: 'Combokeys',
    libraryTarget: 'umd'
  },

  devtool: 'eval',

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint'
      }
    ]
  },

  devServer: {
    contentBase:          './public',
    port:                 9000,
    historyApiFallback:   true,
    colors:               true,
    inline:               true,
    progress:             true,
    stats:                'errors-only'
  },

  eslint: {
    configFile:   './.eslintrc',
    parser:       'babel-eslint'
  }

}
