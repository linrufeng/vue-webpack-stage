const web_base = require('./webpack.base.js');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
let devConfig = {};
devConfig = Object.assign(web_base,{});

devConfig.plugins = [...devConfig.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
          title:"vue_stage",
          template:'./src/index.html'
    })
];
devConfig = Object.assign(devConfig,{
    mode:"development",     
    devServer:{
        open:true,
        quiet: true,
        proxy:{           
            '/backlook': {
                target: 'http://jdmegy.jd.com/jmeMobile/backlook/',
                pathRewrite: {'^/backlook' : ''},
                changeOrigin: true,     
                secure: false,         
              },
        }     
    }  
})
module.exports=devConfig ;