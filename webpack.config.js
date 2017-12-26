const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    vendor: ["react", "react-dom"],
    index: "./src/index.js"
  },
  output:{
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
    // filename: "bundle.js",
    // path: path.join(__dirname,"dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 , minimize:true } }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "react-svg-loader",
            options: {
              jsx: true // true outputs JSX tags
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor')
  ]
}