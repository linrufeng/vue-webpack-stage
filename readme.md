我写的主要记录vue webpack 搭建和优化的全过程
#step.1
 npm init 项目名称初始化
#step.2 
##准备工作 
 * 需要使用的插件
```
 npm i webpack -D // 我们需要的工具
 npm i webpack-cli -D // 工具辅助的命令
 npm i clean-webpack-plugin -D //文件清理工具
 npm i html-webpack-plugin -D //html 模版工具 
 /*
 各种需要的loader: 需要处理 css scss style img file html vue 等。我更加倾向选择功能全的 loader 简单的配置办更多的事情
 npm i css-loader postcss-loader vue-loader vue-template-compiler -d
 */
 ```
 在安装 vue-loader 时候需要注意
 每个 vue 包的新版本发布时，一个相应版本的 vue-template-compiler 也会随之发布。编译器的版本必须和基本的 vue 包保持同步，这样 vue-loader 就会生成兼容运行时的代码。这意味着你每次升级项目中的 vue 包时，也应该匹配升级 vue-template-compiler。
 
**4.0以上版本都需要按照**
 * vue项目常用依赖 vue vue-router 

#step.3
我是在 .bin目录下面放的配置文件，这样的好处是让项目变的更加清晰

#step.4 
接下来在package.json中添加配置
`"start": "webpack --config webpack.config.js"`

#step.5 
上面的一切配置ok之后就可以开始根据实际的情况进行webpack的编写,我这次写的是一个vue的项目，因为我的目录习惯于是我建立了src这个文件里面是关于vue的全部目录。

#step.6 
webpack.config.js 配置
// 我的规划分为 base dev / build 
1. 首先就是文件的输入
2. 然后是文件的输出
3. 每次build 时候记得清理 dist
4. 开发环境 
    webpack 中有几个不同的选项，可以帮助你在代码发生变化后自动编译代码：
    webpack's Watch Mode
    webpack-dev-server
    webpack-dev-middleware    
    使用 webpack-dev-server
    配置很简单 如果配置ok了总是报错 可以看下 host 是不是 127.0.0.1 
    写到此时大家可以看下我的js代码
### 开发环境
     "start": "webpack-dev-server --open  --config .bin/webpack.config.js",
     下面是目前完整的代码 devServer 主要是一个更完美的配置，让你对项目有更多的掌控，如果不配置也是可以使用的 但是我们简单的进行配置下
    ``` js
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
module.exports = {    
  entry: './src/app.js',
  output: {
    filename: './js/app.js',
    path: path.resolve(__dirname, '../dist')
  },
  mode:'development',
  module:{
      rules:[
          {
              test:/\.vue$/,
              use:[
                  {
                    loader: 'vue-loader'
                  }
              ]
          }
      ]
  },
  plugins:[
      new HtmlWebpackPlugin({
          title:"vue_stage",
          template:'./src/index.html'
      }),
      new CleanWebpackPlugin(),
      new VueLoaderPlugin()
  ],
  devServer:{
    contentBase: './dist',
    hot: true
  }
};
    ```
这样可以基本的跑起一个vue的项目来了，接下来一边对脚手架开发的探讨，其次是在我们的脚手架里面增加各种功能
各种loader的配置和功能的添加，让我们的工具变的更加完美。
### 模块热替换 
这个功能可以很快的提高我们的开发效率，主要就是更新 webpack-dev-server,然后使用webpack 内置的HMR插件
这里插一个题外话 loader现在的写法有很多种，大体可以用的是

* 第一种
 ```
{
    test:/\.vue$/,
    use:['vue-loader']
}
 ```
 * 第二种

 ```
 {
    test:/\.vue$/,
    use:[
        {
        loader: 'vue-loader'
        }
    ]
}
 ```
## 样式管理 
我们前端最重要的是啥，样式，对这很重要所以接下来是关于样式的配置 这个环境很重要，它涉及到了 scss 和 各个浏览器的兼容行
因为我们现在前端开发大部门是使用 scss/less/css 所以需要他们的loader
1. node-sass是解析sass和scss=>css的基础，webpack中的sass-loader依赖于node-sass
当我们使用这些loader的时候 记得下载node-sass 
```
{
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader','css-loader','postcss-loader', 'sass-loader']
}
```
因为我们使用了 postcss-loader 所以在使用的时候要在根目录添加一个它的配置 postcss.config.js 用来配置这个loader 可以有效的减少 css生成之后的体积。
下面是有样式管理的完整代码
```
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {    
  entry: './src/app.js',
  output: {
    filename: './js/app.js',
    path: path.resolve(__dirname, '../dist')
  },
  mode:'development',
  module:{
      rules:[
            {
                test: /\.(sa|sc|c)ss$/,
                use: ['style-loader','css-loader','postcss-loader', 'sass-loader']
            },  
            {
                test:/\.vue$/,
                use:[ 'vue-loader']
            }
      ]
  },
  plugins:[
      new HtmlWebpackPlugin({
          title:"vue_stage",
          template:'./src/index.html'
      }),     
      new VueLoaderPlugin()
  ]
};
```
style-loader 的作用是抽离 .vue 中<style> 标签里面的代码，并且要把它放到首位,这样我们在开发过程中样式的编辑基本就完成了

### css文件抽离 (打包用)
写到这里我们打包的css仅仅只有一个js文件，这样会造成一个冗余，我们要想办法把css抽离出来，我选用的插件是 MiniCssExtractPlugin，它是支持webpack4.3+的，
见代码
```
 {
    test: /\.(sa|sc|c)ss$/,
    use: [        
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
        
    ]
}
```
```
new MiniCssExtractPlugin({
    filename: './css/[name].css',
    chunkFilename: '[id].css',
})
```
这样我们打包出一个main.css,接下来我们要做的是css文件的同类提取，和代码压缩
optimize-css-assets-webpack-plugin 这个插件可以用于压缩和去重 
```
 new optimizeCss()
```
### postcss.config 配置
当css样式代码被压缩之后，我们需要让我们写的代码有更好的兼容性 在配置 postcss.config.js 时候注意我们 autoprefixer 的版本，我这个项目的版本 9.6.1要把 autoprefixer 改成  overrideBrowserslist，

### 打包日志

我们要给我们的每个 css 文件加一个时间戳 new webpack.BannerPlugin('Build time : '+new Date().toString())

目前我们完成了 css 的开发 和 打包 配置，接下来主要是 js的 这两方面配置。

## js 管理
做到这里很有意思，我们 js并没有1行代码，而我们前面的例子中我们打包的app.js 文件确有 97kb 天啊，这是多么可怕的一件事。不要担心我们慢慢来。
在没有做任何js配置的时候 我们的项目是可以正常运行的，这是一件高兴的事情,我们在 script 标签内尝试 引用外部的 css scss 等文件都是可以的
这是因为 vue-loader 的作用。 但是目前很多浏览器对js并不能很好的支持， 所以我们要在这方面做一些文章，它们主要表现在打包的过程中，其中之一就是 es6 语法的
转换,到现在为止。我们面对的是两个问题 重复js 代码的抽离 ，公共资源的抽离。
```
buildCongfig.optimization = {
    splitChunks:{
        chunks: "all",
        minSize:0,
        minChunks:1
    }
};
```
splitChunks 的详细介绍可以参考另一篇 学习文章 **splitChunks** https://www.codercto.com/a/24308.html


#### 这里我先描述一下 vue-loader 的作用 

vue-loader是webpack的一个loader，用于处理.vue文件。
.vue 文件是一个自定义的文件类型，用类 HTML 语法描述一个 Vue 组件。每个 .vue 文件包含三种类型的顶级语言块 <template>、<script>和 <style>。
vue-loader 会解析文件，提取每个语言块，如有必要会通过其它 loader 处理（比如<script>默认用babel-loader处理，<style>默认用style-loader处理），最后将他们组装成一个 CommonJS 模块，module.exports 出一个 Vue.js 组件对象。

关于js部分的管理，我把它分为两个部分，其中一个 js 兼容问题，另一个是公共代码。
公共代码
https://blog.csdn.net/qq_17175013/article/details/87024522
js兼容问题

## ts模块

## 优化
 前面的步骤，基本就完成了vue webpack的基本配置,但是我们怎么能把webpack的性能开到最大呢