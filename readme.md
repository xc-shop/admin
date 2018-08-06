## React 16+React-Router4 从零打造企业级电商后台管理系统

### 开发过程

#### 构建初始化
```
yarn init
yarn add webpack@3.10.0 --save-dev
yarn add html-webpack-plugin@2.30.1 --save-dev
yarn add extract-text-webpack-plugin@3.0.2 --save-dev
yarn add xxxx-loader@x.x.x --dev
```
#### 配置webpack.config.js
```js
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  //入口
  entry: './src/app.jsx',
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
    port： 8000,
    open: true
  }
};
```
#### 配置package.json编译命令
```
  "scripts": {
    "dev": "node_modules/.bin/webpack-dev-server",
    "dist": "node_modules/.bin/webpack -p"
  },
```
#### 开始开发
```
yarn dev
or
yarn dist
``` 
### 使用

#### 克隆
```
git clone https://github.com/zenquan/reactAdmin.git
```
#### 安装依赖
```
cd reactAdmin
yarn
```
#### 启动
```
yarn dev
or
yarn dist
```
### 相关文档

[ES6总结](./docs/ES6.md)

[react总结](./docs/react.md)

[webpack4.0总结](./docs/webpack4.0.md)

[yarn的使用](./docs/yarn.md)

[编写好的代码](./docs/good-code.md)

