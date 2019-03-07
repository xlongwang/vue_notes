const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
     entry: {
         app: './src/index.js'
        //  print: './src/print.js'
     },
     output: {
         filename: '[name].bundle.js',
         path: path.resolve(__dirname, "dist"),
         publicPath:'/'
     },
     devtool: 'inline-source-map',
     devServer: {
        contentBase: './dist',
        hot: true
      },
      module:{
          rules:[
              // 'transform-runtime' 插件告诉 babel 要引用 runtime 来代替注入。
              {
                  test: /\.css$/,
                  use:['style-loader', 'css-loader']
              },
              {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/transform-runtime','@babel/plugin-proposal-class-properties']
                  }
                }
              }
          ]
      },
      performance: {
        hints: false
      },
      plugins: [
          new CleanWebpackPlugin(['dist']),
          new HtmlWebpackPlugin({
              title: 'Output Management'
          }),
          new webpack.NamedModulesPlugin(),     
          new webpack.HotModuleReplacementPlugin()
      ],


}