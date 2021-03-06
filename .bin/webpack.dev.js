const web_base = require('./webpack.base.js');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
let devConfig = {};
devConfig = Object.assign(web_base,{
    mode:"development",    
    devtool:"inline-source-map"
})
devConfig.plugins = [...devConfig.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
          title:"vue_stage",
          template:'./src/index.html'
    }),   
];

module.exports= devConfig;