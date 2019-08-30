const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const optimizeCss = require('optimize-css-assets-webpack-plugin');
module.exports = {    
  entry: './src/app.ts',
  output: {
    filename: './js/app.js',
    path: path.resolve(__dirname, '../dist')
  }, 
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.vue','.svg' ]
  },
  module:{
      rules:[
            {
              test: /\.(sa|sc|c)ss$/,
              include: path.resolve(__dirname, "../src"),
              exclude: /node_modules/,
              use: ['style-loader','css-loader','sass-loader']
            },  
            {
              test: /\.tsx?$/,              
              include: path.resolve(__dirname, "../src"),
              exclude: /node_modules/,
              use:[
                {                  
                  loader:'ts-loader',
                  options: {
                    appendTsSuffixTo: [/\.vue$/],
                    appendTsxSuffixTo: [/\.vue$/]
                  }
                }
              ]              
            },  
            {
              test: /\.svg$/,
                loader: 'svg-sprite-loader',
                include:[path.resolve('src/asset/svgSprite')],
                options:{
                    symbolId:'icon-[name]'
                }
            },
            {
              test: /\.(png|jpg|gif|webp|woff|eot|ttf|svg)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        name:'img/[name].[ext]',
                        limit:3000
                    }
                },
                exclude:[path.resolve('src/asset/svgSprite')]
              
            },     
            {
              test:/\.vue$/,
              include: path.resolve(__dirname, "../src"),
              exclude: /node_modules/,
              use:['vue-loader']
            }  
      ]
  },
  plugins:[     
      new VueLoaderPlugin() 
  ] 
};