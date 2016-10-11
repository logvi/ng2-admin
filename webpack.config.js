let webpack = require('webpack');
let path = require('path');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let HtmlWebpackPlugin = require("html-webpack-plugin");
var autoprefixer = require('autoprefixer');

let config = {
  // where all modules
  context: __dirname + '/src',

  //  source map dev tool
  devtool: 'chip-inline-module-source-map',

  entry: {
    app: './app/app.ts',
    vendor: './app/vendor.ts',
    style: './style/sass/main.scss'
  },
  devServer: {
      colors: true,
      contentBase: path.resolve(__dirname, "dist"),
      publicPath: "/"
  },
  output: {
    filename: 'js/[name].js',
    chunkFilename: '[id].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts',
        exclude: [/node_modules/]
      },
      {
        test: /\.scss$/,
        include: [__dirname + '/src/style/'],
        loader: ExtractTextPlugin.extract('css?sourceMap!postcss!resolve-url!sass?sourceMap')
      }
    ]
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'common', filename: 'js/common.js', chunks: ['app', 'vendor'] }),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html.ejs'
    }),

    new ExtractTextPlugin('style/styles.css', {allChunks: true})
  ]
}

module.exports = config;
