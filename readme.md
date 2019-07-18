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
在其中使用插件 例如 css压缩 和去除代码中的console
```
minimizer:[
    new optimizeCss(),
    new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
        sourceMap: true,
        uglifyOptions:{
            compress: {
                drop_console: true,
                drop_debugger: true, 
            },
        }
    })
],
```
从webpack4开始官方移除了commonchunk插件，改用了optimization属性进行更加灵活的配置。
optimization是webpack4新增的，主要是用来让开发者根据需要自定义一些优化构建打包的策略配置，
关于 splitchunksPlugin 的介绍
```
splitChunks: {
    chunks: "async”,//默认作用于异步chunk，值为all/initial/async/function(chunk),值为function时第一个参数为遍历所有入口chunk时的chunk模块，chunk._modules为chunk所有依赖的模块，通过chunk的名字和所有依赖模块的resource可以自由配置,会抽取所有满足条件chunk的公有模块，以及模块的所有依赖模块，包括css
    minSize: 30000,  //表示在压缩前的最小模块大小,默认值是30kb
    minChunks: 1,  // 表示被引用次数，默认为1；
    maxAsyncRequests: 5,  //所有异步请求不得超过5个
    maxInitialRequests: 3,  //初始话并行请求不得超过3个
   automaticNameDelimiter:'~',//名称分隔符，默认是~
    name: true,  //打包后的名称，默认是chunk的名字通过分隔符（默认是～）分隔
    cacheGroups: { //设置缓存组用来抽取满足不同规则的chunk,下面以生成common为例
       common: {
         name: 'common',  //抽取的chunk的名字
         chunks(chunk) { //同外层的参数配置，覆盖外层的chunks，以chunk为维度进行抽取
         },
         test(module, chunks) {  //可以为字符串，正则表达式，函数，以module为维度进行抽取，只要是满足条件的module都会被抽取到该common的chunk中，为函数时第一个参数是遍历到的每一个模块，第二个参数是每一个引用到该模块的chunks数组。自己尝试过程中发现不能提取出css，待进一步验证。
         },
        priority: 10,  //优先级，一个chunk很可能满足多个缓存组，会被抽取到优先级高的缓存组中
       minChunks: 2,  //最少被几个chunk引用
       reuseExistingChunk: true，//  如果该chunk中引用了已经被抽取的chunk，直接引用该chunk，不会重复打包代码
       enforce: true  // 如果cacheGroup中没有设置minSize，则据此判断是否使用上层的minSize，true：则使用0，false：使用上层minSize
       }
    }
}
```
splitChunks 的详细介绍可以参考另一篇 学习文章 **splitChunks** https://www.codercto.com/a/24308.html
通过配置
optimization.minimize true/false 我们可以查看我们的代码是否压缩，为了更好的方便查看我们代码打包的内容我们选择不压缩。
首先我们要去除 我们的无效代码
这里我借助的是
其次是 babel 如果我们开发环境只需要 chrome 为了让webpack运转如飞，我们就不需要配置 babel，只需要在打包的过程中配置好就行了
这里需要准备的是
```
npm i @babel/core   @babel/preset-env abel-loader -D
```
之后 在 babelrc 进行一下定植后的配置就好了

### 图片，视频 ，svg 的处理


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

upd：更新某功能（不是 feat, 不是 fix）
feat：新功能（feature）
fix：修补bug
docs：文档（documentation）
style： 格式（不影响代码运行的变动）
refactor：重构（即不是新增功能，也不是修改bug的代码变动）
test：增加测试
chore：构建过程或辅助工具的变动
git commit -m 'feat: 增加 xxx 功能'
git commit -m 'bug: 修复 xxx 功能'
## 代码引入自动识别
```
  resolve: {
    extensions: ['.js', '.vue', '.json', '.ts'],
    alias: {
      '@': resolve('src')
    }
  }
```
