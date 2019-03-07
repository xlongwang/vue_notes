const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
     entry: path.join(__dirname, './src/main.js'), // 入口文件
     output: {    // 出口
         filename: 'bundle.js',
         path: path.resolve(__dirname, "../dist"),
     },
     devServer:{
         open: true,  //自动打开浏览器
         port: 3000, //设置启动端口
         contentBase: false,  //指定托管根目录
         inline:true,//webpack官方推荐
        //  watchOptions: {
        //     aggregateTimeout: 2000,//浏览器延迟多少秒更新
        //     poll: 1000//每秒检查一次变动
        //  },
         historyApiFallback:true,//找不到页面默认跳index.html
         hot: true  // 启用热启动   
     },
     module: {
        rules: [
            {
                test:/\.js$/,
                use:[
                    'babel-loader'
                ],
                include:path.resolve(__dirname,"../src"),
                exclude:path.resolve(__dirname,"../node_modules")
            },
            {
                test: /\.(png|jpg|gif|bmp|jpeg)$/,
                use:[
                    {
                        loader: "url-loader?name=[name].[ext]",   //name属性 是不改变名字与后缀名
                        // loader: "url-loader?name=[hash:8]-[name].[ext]",   //name属性名加hash 值
                        options: {
                            limit: 2000
                        }
                    }
                ]
            },
            {
                test:/\.css$/,
                use:[
                    {
                        loader: "style-loader"
                    },
                    {
                        loader:"css-loader"
                    }
                ]
            },
            {
                test: /\.less$/,
                use:[
                    {
                        loader: "style-loader"
                    },
                    {
                        loader:"css-loader"
                    },
                    {
                        loader:"less-loader"
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            {//处理字体文件的配制项
                 test: /\.(ttf|eot|svg|woff2)$/,
                 use: [
                     {
                         loader: "url-loader"
                     }
                 ]
            },  
            {
                test:/\.styl/,
                use:[
                    {
                        loader: "style-loader"
                    },
                    {
                        loader:"css-loader"
                    },
                    {
                        loader:"stylus-loader"
                    }
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // {
            //     test: /\.m?js$/,
            //     exclude: /(node_modules|bower_components)/,
            //     use: {
            //       loader: 'babel-loader',
            //       options: {
            //         presets: ['env'],
            //         plugins: ['@babel/plugin-transform-runtime']
            //       }
            //     }
            //   }
            {
               test: /\.js$/,
               loader: 'babel-loader',
               exclude: __dirname + 'node_modules',
               include: __dirname + 'src',
            }
        ]
    },
    resolve:{
        alias:{  //修改 vue 被导入时候的路径
            "vue$": 'vue/dist/vue.js'
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({   //创建一个 在内存中 生成的html 页面的插件
            template: path.join(__dirname, './src/index.html'),  //指定模板页面，根据指定模板页面生成内存中的页面
            title:'vue project',
            inject: true
        }),
        new webpack.ProvidePlugin({
            'Promise': 'bluebird'
        }),
        new VueLoaderPlugin()
     ]
}