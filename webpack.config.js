let webpack = require('webpack');
let path = require('path');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let HtmlWebpackPlugin = require("html-webpack-plugin");
var autoprefixer = require('autoprefixer');

let config = {
  // where all modules
  context: __dirname,

  //  source map dev tool
  devtool: 'chip-inline-module-source-map',

  entry: {
    app: './src/app/app.module.ts',
    vendor: './src/app/vendor.ts',
    style: './src/style/sass/main.scss'
  },
  devServer: {
      colors: true,
      contentBase: path.resolve(__dirname, "dist"),
      publicPath: "/",
      port: 8081
  },
  output: {
    filename: 'js/[name].js',
    chunkFilename: '[id].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
        'node_modules', '.'
    ],
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

    new ExtractTextPlugin('style/styles.css', {allChunks: true}),

    new webpack.DefinePlugin({
      __DEV__: process.env.NODE_ENV !== 'production',
      __PRODUCTION__: process.env.NODE_ENV === 'production',
      __TEST__: JSON.stringify(process.env.TEST || false),
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
  alias: {
    highcharts$: "highcharts/highcharts.src.js"
  }
}

module.exports = config;
