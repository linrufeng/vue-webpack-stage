const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
                use: ['style-loader','css-loader','postcss-loader', 'sass-loader']
            },         
            {
                test:/\.vue$/,
                use:['vue-loader']
            },
            // {
            //     test:/\.js$/,
            //     use:['']
            // }                    
      ]
  },
  plugins:[
      new HtmlWebpackPlugin({
          title:"vue_stage",
          template:'./src/index.html'
      }),      
      new VueLoaderPlugin(),      
  ] 
};