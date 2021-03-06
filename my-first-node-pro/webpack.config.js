const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  entry: {
         app: './src/index.js',
         print: './src/print.js'
  },
  devtool: 'inline-source-map',
  devServer: {
      contentBase: './dist'
  },
  plugins: [
       new HtmlWebpackPlugin({
         title: 'Output Management1'
       }),
       new CleanWebpackPlugin(['dist']),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,//.css 结尾的全部文件，都将被提供给 style-loader 和 css-loader
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,//加載圖片
        use: [
          'file-loader'
        ]
      }
    ]
  }
};