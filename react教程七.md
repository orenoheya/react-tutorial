# 使用Node 和 Webpack 来创建 React 

在页面引入babel，由浏览器来解析jsx是一个非常耗费性能的方法，解析不说，光babel这玩意就1M多了，想想都夸张。这个时候就需要node出马了，我们可以在node端把jsx编译成js，再使用webpack打包成单个js文件引入到页面；

### 新建app目录

新建一个文件夹，执行`npm init`；初始化 `packge.json` 文件

里面新建一个 `dev` 和 `output`文件夹， 再新建 index.html文件

`jsx`组件则放到`dev`文件夹内，

通过`webpack`打包到`output`, 

`index.html`引入`output`生成后的`js`文件,详细代码参考下面demo

<a href="https://github.com/hsian/react-tutorial/blob/master/demo/app">demo-app</a>

安装需要的依赖模块：

### webpack

`npm install webpack --save`

webpack配置文件 webpack.config.js

	var webpack = require("webpack");
	var path = require("path");
	
	var DEV = path.resolve(__dirname,"dev");
	var OUTPUT = path.resolve(__dirname,"output");
	
	var config = {
		entry : DEV + "/index.jsx",
		output : {
			path : OUTPUT,
			filename : "code.js"
		},
		module : {
			loaders : [{
				include : DEV,
				loader : "babel-loader",
			}]
		}
	};
	
	module.exports = config;

这里就不逐行解析了，猜不出来啥意思的可以百度；

### babel 

`npm install babel-core babel-loader babel-preset-es2015 babel-preset-react --save`

安装完成后依赖包就自动添加到packge.json文件，但是需要手动添加"babel"声明

	"babel" : {
	    "presets" : [
	      "es2015",
	      "react"
	    ]
	  }

上面基本的框架搭完了，接下来添加文件：

### 编译

os系统进入app根目录执行

`./node_modules/.bin/webpack`

windows则全局安装webpack

`npm install webpack -g`

执行 `webpack`编译即可输出 `code.js`到 `output`文件夹

运行index.html可正常浏览页面







