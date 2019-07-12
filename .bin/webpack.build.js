const web_base = require('./webpack.base.js');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const optimizeCss = require('optimize-css-assets-webpack-plugin');

let buildCongfig = Object.assign(web_base,{
    mode:"production",    
});

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
    'postcss-loader',
    'sass-loader'
];
buildCongfig.optimization = {
    minimize:true,
    splitChunks:{
        minSize:300,
        chunks: "all",      
        name:"common"
    }
};

buildCongfig.plugins = [
    ...buildCongfig.plugins,
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: './css/[name].css',
      chunkFilename: '[id].css',
    }),
    new optimizeCss(),
    new webpack.BannerPlugin('Build time : '+new Date().toString())    
];

module.exports = buildCongfig;