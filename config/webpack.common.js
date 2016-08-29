var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  //splits webpack entry point into three files
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },

  //removes need for file extensions for the defined types
  resolve: {
    extensions: ['', '.js', '.ts']
  },

  module: {
    loaders: [
      //for files ending in .ts (typescript) load ts and ng2-template-loader to transpile to es5
      {
        test: /\.ts$/,
        loaders: ['ts', 'angular2-template-loader']
      },

      //loader for component template
      {
        test: /\.html$/,
        loader: 'html'
      },
      //loader to bundle images and fonts
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      //bundler for global css files
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
      },
      //bundler for component css files
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw'
      }
    ]
  },

  plugins: [
    //commons chunk keeps app and vendor files seperate
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    // webpack generator for script and links for required files
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};