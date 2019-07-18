const web_base = require('./webpack.base.js');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
let devConfig = {};

devConfig = Object.assign(web_base,{
    mode:"development",     
    devServer:{
        open:true,
        proxy:{
            "/workshop/*":{
                target:"https://wqws.jd.com",               
                changeOrigin: true,
                secure: false
            }
        }     
    }  
});

devConfig.plugins = [...devConfig.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
          title:"vue_stage",
          template:'./src/index.html'
    }),   
];

module.exports= devConfig;