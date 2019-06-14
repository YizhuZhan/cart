const path = require('path');
// const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack'); // to access built-in plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: ['./node_modules/amfe-flexible/index.js', './app/js/main.js']
    },
    output: {
      filename: "[name].min.js",
      path: path.join(__dirname, 'dist')
    },
    // devServer: {
    //     contentBase: path.join(__dirname, 'dist'), // 如果需要提供静态文件，静态文件在哪里输出
    //     compress: true,
    //     port: 9000,
    //     open: true,
    //     hot: true,
    //     hotOnly: true
    // },
    module:{
      loaders: [
        {
          test: /\.html$/,
          loader: 'html-loader'
        }, {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.scss$/,
          loader: 'style-loader!css-loader!sass-loader'
        },
        {
          test: /\.(png|gif|jpg|jpeg|svg)$/,
          use:[
              {
                  loader:'url-loader',
                  options:{
                      limit:1024,
                      name:'[name].[ext]'
                  }
              }
          ]
        }
      ]
    },
    plugins:[
        // new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'webpackTest',
            template: './app/views/index.html'
        }), 
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
        // new VueLoaderPlugin()
        
    ],
    resolve: {
      extensions: [
        '.js', '.vue', '.json'
      ],
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].min.js'
    }

}


// const path = require('path');
// const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
// module.exports = env => {
//   if (!env) {
//     env = {}
//   }
//   let plugins=[
//     new CleanWebpackPlugin(['dist']),
//     new HtmlWebpackPlugin({template: './app/views/index.html'}),
//     new webpack.NamedModulesPlugin(),
//     new webpack.HotModuleReplacementPlugin()
//   ];
//   if(env.production){
//     plugins.push(
//       new webpack.DefinePlugin({
//         'process.env': {
//           NODE_ENV: '"production"'
//         }
//       }),
//       new ExtractTextPlugin("style.css", {ignoreOrder: true})
//     )
//   }
//   return {
//     entry: {
//       app: './app/js/main.js'
//     },
//     devServer: {
//       contentBase: './dist',
//       hot: true,
//       compress: true,
//       port: 9000,
//       clientLogLevel: "none",
//       quiet: true
//     },
//     module: {
//       loaders: [
//         {
//           test: /\.html$/,
//           loader: 'html-loader'
//         }, {
//           test: /\.vue$/,
//           loader: 'vue-loader',
//           // options: {
//           //   cssModules: {
//           //     localIdentName: '[path][name]---[local]---[hash:base64:5]',
//           //     camelCase: true
//           //   },
//           //   extractCSS: true,
//           //   loaders: env.production?{
//           //     css: ExtractTextPlugin.extract({use: 'css-loader!px2rem-loader?remUnit=40&remPrecision=8', fallback: 'vue-style-loader'}),
//           //     scss: ExtractTextPlugin.extract({use: 'css-loader!px2rem-loader?remUnit=40&remPrecision=8!sass-loader', fallback: 'vue-style-loader'})
//           //   }:{
//           //     css: 'vue-style-loader!css-loader!px2rem-loader?remUnit=40&remPrecision=8',
//           //     scss: 'vue-style-loader!css-loader!px2rem-loader?remUnit=40&remPrecision=8!sass-loader'
//           //   }
//           // }
//         }, {
//           test: /\.scss$/,
//           loader: 'style-loader!css-loader!sass-loader'
//         }
//       ]
//     },
//     resolve: {
//       extensions: [
//         '.js', '.vue', '.json'
//       ],
//       alias: {
//         'vue$': 'vue/dist/vue.esm.js'
//       }
//     },
//     plugins,
//     output: {
//       filename: '[name].min.js',
//       path: path.resolve(__dirname, 'dist')
//     }
//   }
// };
