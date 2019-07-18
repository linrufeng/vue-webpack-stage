const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const optimizeCss = require('optimize-css-assets-webpack-plugin');
module.exports = {    
  entry: './src/app.js',
  output: {
    filename: './js/app.js',
    path: path.resolve(__dirname, '../dist')
  },  
  module:{
      rules:[
            {
                test: /\.(sa|sc|c)ss$/,
                include: path.resolve(__dirname, "../src"),
                use: ['style-loader','css-loader','sass-loader']
            },         
            {
                test:/\.vue$/,
                include: path.resolve(__dirname, "../src"),
                use:['vue-loader']
            }  
      ]
  },
  plugins:[     
      new VueLoaderPlugin() 
  ] 
};