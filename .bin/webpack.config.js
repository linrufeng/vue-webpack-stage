const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const optimizeCss = require('optimize-css-assets-webpack-plugin');
module.exports = {    
  entry: './src/app.js',
  output: {
    filename: './js/app.js',
    path: path.resolve(__dirname, '../dist')
  },
  mode:'development',
  module:{
      rules:[
            {
                test: /\.(sa|sc|c)ss$/,
                use: [        
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {                        
                        publicPath: '../',
                        hmr: false,
                        reloadAll:true
                        },
                    },  
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                   
                ]
            },         
            {
                test:/\.vue$/,
                use:[
                    {
                    loader: 'vue-loader',
                    }
                ]
            }                       
      ]
  },
  plugins:[
      new HtmlWebpackPlugin({
          title:"vue_stage",
          template:'./src/index.html'
      }),     
      new VueLoaderPlugin(),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: './css/[name].css',
        chunkFilename: '[id].css',
      }),
      new optimizeCss()
  ],
  optimization:{
    splitChunks:{
        cacheGroups:{
            common:{
                chunks:'initial',//刚开始就要抽离
                minSize:0,//大小大于0字节的时候需要抽离出来
                minChunks:2,//重复2次使用的时候需要抽离出来
            }
        }
    }
  }
//   devServer:{
//     contentBase: './dist',
//     hot: true
//   }
};