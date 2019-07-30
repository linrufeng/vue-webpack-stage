const web_base = require('./webpack.base.js');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const optimizeCss = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const argv = require('yargs').argv;
const path = require('path');
let buildCongfig = Object.assign(web_base,{
    mode:"production",    
    // devtool:"source-map",
    optimization:{
         minimize:argv.press?true:false,
        // minimizer:[          
        //     new UglifyJsPlugin({
        //         test: /\.js(\?.*)?$/i,
        //         extractComments: true,               
        //         uglifyOptions:{
        //             compress: {
        //                 drop_console: true,
        //                 drop_debugger: true, 
        //             }                              
        //         },
               
        //     })
        // ],
        // runtimeChunk: {
        //     name: entrypoint => `runtimechunk~${entrypoint.name}`
        //   },
        splitChunks:{
            chunks: "async",
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: true,
            cacheGroups: {
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                }
            }
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
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        template: path.join(__dirname, '../src/index.html'),
        filename: 'index.html',    
    }),       
    new MiniCssExtractPlugin({
      filename: './css/[name].[chunkhash].css',
      chunkFilename: '[id].css',
    }),  
    new optimizeCss(),           
    new webpack.BannerPlugin('Build time : '+new Date().toString()),
     
];

module.exports = buildCongfig;