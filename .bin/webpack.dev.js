const web_base = require('./webpack.base.js');
const webpack = require('webpack');
let devConfig = {};
devConfig = Object.assign(web_base,{
    mode:"development",    
})
devConfig.plugins = [...devConfig.plugins,new webpack.HotModuleReplacementPlugin()];

module.exports= devConfig;