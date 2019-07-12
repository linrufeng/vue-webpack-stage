const web_base = require('./webpack.base.js');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const optimizeCss = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const argv = require('yargs').argv;
const path = require('path');
let buildCongfig = Object.assign(web_base,{
    mode:"production",    
    devtool:"source-map",
    optimization:{
        minimize:argv.press?true:false,
        splitChunks:{
            minSize:300,
            chunks: "all",      
            name:"common"
        }
    }
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
buildCongfig.module.rules.push({ 
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: /node_modules/  
})
buildCongfig.plugins = [
    ...buildCongfig.plugins,
    new HtmlWebpackPlugin({
        template: path.join(__dirname, '../src/index.html'),
        filename: 'index.html',    
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: './css/[name].[chunkhash].css',
      chunkFilename: '[id].css',
    }),
    new optimizeCss(),
    new webpack.BannerPlugin('Build time : '+new Date().toString())    
];

module.exports = buildCongfig;