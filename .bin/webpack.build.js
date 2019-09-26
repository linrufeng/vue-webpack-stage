const web_base = require('./webpack.base.js');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const optimizeCss = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const argv = require('yargs').argv;
const path = require('path');
let buildCongfig = Object.assign(web_base,{})
buildCongfig.mode = "production";
buildCongfig.module.rules[0].use =[
    {
        loader: MiniCssExtractPlugin.loader,
        options: {                        
        publicPath: '../',
        hmr: false,
        reloadAll:true
        },
    },  
    'css-loader',    
    'sass-loader',
    {
        loader: 'postcss-loader',
        options: {
            plugins: () => [
                require('autoprefixer')({
                    overrideBrowserslist: ['last 2 versions', 'Android >= 4.0','iOS >= 8.0','last 5 QQAndroid versions','last 5 UCAndroid versions'],
                    grid:true
                })
            ]
        }
    }
];
buildCongfig.module.rules = [...buildCongfig.module.rules,{ 
    test: /\.js$/,
    use:[
        {loader:'babel-loader',
        options:{
            "presets": [
                ["@babel/preset-env",
                {         
                    "targets": {
                        "browsers": ["> 1%", "last 2 versions", "not ie <= 8","Android >= 4","iOS >= 8"]
                    }            
                }]
            ]   
        }
    }
    ],      
    exclude: /node_modules/,
    include: path.resolve(__dirname, "../src")
}]
buildCongfig.plugins = [
    ...buildCongfig.plugins,
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        template: path.join(__dirname, '../src/index.html'),
        filename: 'index.html',    
    }),       
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename:'css/[id].css'    
    }),  
    new optimizeCss(),           
    new webpack.BannerPlugin('Build time : '+new Date().toString()),
     
];

module.exports =buildCongfig;