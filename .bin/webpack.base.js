const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const config = require('./../package.json');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');
module.exports = {    
  entry: './src/app.ts',
  output: {
    filename: './js/app.js',
    path: path.resolve(__dirname, '../dist')
  }, 
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.vue','.svg' ]
  },
  externals:{
    vue:'Vue'
  },
  module:{
      rules:[           
            {
              test: /\.(sa|sc|c)ss$/,
              include: path.resolve(__dirname, "../src"),
              exclude: /node_modules/,
              use: [
                {
                  loader: 'cache-loader',
                  options: {
                    cacheDirectory: path.resolve(config.pathConfig.cache)
                  }
                },
                'style-loader','css-loader','sass-loader']
            },  
            {
              test: /\.ts?$/,              
              include: path.resolve(__dirname, "../src"),
              exclude: /node_modules/,
              use:[
                {
                  loader: 'cache-loader',
                  options: {
                    cacheDirectory: path.resolve(config.pathConfig.cache)
                  }
                },
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
              include: path.resolve(__dirname, "../src"),
              exclude: /node_modules/,
                use: [{
                  loader: 'cache-loader',
                  options: {
                    cacheDirectory: path.resolve(config.pathConfig.cache)
                  }
                },{
                  loader:'svg-sprite-loader',
                  options:{
                      symbolId:'icon-[name]'
                  }                  
                }],
                include:[path.resolve('src/asset/svgSprite')]
            },
            {
              test: /\.(svg)$/,
              include: path.resolve(__dirname, "../src"),
              exclude: /node_modules/,
                use:[{
                    loader:'file-loader',
                    options:{
                        name:'img/[name].[ext]',
                        limit:3000
                    }
                }],
                exclude:[path.resolve('src/asset/svgSprite')]
              
            }, 
            {
              test: /\.(png|jpg|gif|webp|woff|eot|ttf)$/,
              include: path.resolve(__dirname, "../src"),
              exclude: /node_modules/,
                use:[{
                  loader: 'cache-loader',
                  options: {
                    cacheDirectory: path.resolve(config.pathConfig.cache)
                  }
                },{
                    loader:'url-loader',
                    options:{
                        name:'img/[name].[ext]',
                        limit:3000
                    }
                }],
                exclude:[path.resolve('src/asset/svgSprite')]
              
            },                 
            {
              test:/\.vue$/,
              include: path.resolve(__dirname, "../src"),
              exclude: /node_modules/,
              use:[{
                  loader: 'cache-loader',
                  options: {
                    cacheDirectory: path.resolve(config.pathConfig.cache)
                  }
                },'vue-loader']
            }  
      ]
  },
  plugins:[     
      new VueLoaderPlugin(),
      new ProgressBarPlugin({
        format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
        clear: false
      })    
  ] 
};