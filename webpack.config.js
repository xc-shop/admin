const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  //入口
  entry: './src/router.jsx',
  //输出
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'js/app.js'
  },
  //插件
  plugins: [
    //处理html文件
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    //独立css
    new ExtractTextPlugin("css/[name].css"),
    //提出公共模块
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'js/base.js'
    })
  ],
  module: {
    rules: [{
        //处理jsx
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      },
      {
        //处理css
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader']
        })
      },
      {
        //处理scss
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        //图片处理
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'resource/[name].[ext]'
          }
        }]
      },
      {
        //字体处理
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'resource/[name].[ext]'
          }
        }]
      },
    ]
  },
  devServer: {
    open: true,
    port: 8080,
  }
};