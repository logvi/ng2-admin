let webpack = require('webpack');
let path = require('path');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let HtmlWebpackPlugin = require("html-webpack-plugin");

let config = {
  // where all modules
  context: __dirname + '/src',

  //  source map dev tool
  devtool: 'chip-inline-module-source-map',

  entry: {
    app: './app/app.ts',
    vendor: './app/vendor.ts'
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
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'common', filename: 'js/common.js', chunks: ['app', 'vendor'] }),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html.ejs'
    })
  ]
}

module.exports = config;
