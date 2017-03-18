# react 系列教程

一套react入门教程，从基本概念，到webpack + 单文件组件开发应用，每一章都有单独的实例参考。

后续会更新redux+nodejs构建一套完整应用，

React应用开发是基本的东西是`JSX`，`JSX`可以创建类似dom结构的块，也叫虚拟dom。
 
`JSX`最后会通过babel编译成浏览器可执行的javascript；

**react所需的三个文件**

- react.js       
- react-dom.js
- babel.min.js

第一行引入 核心 React 库

第二行引入 React DOM 

第三行引入 Babel JavaScript 编译器，**将 JSX 变成 JavaScript 的能力** 

babel 这玩意1M多，学习阶段我们先使用浏览器引入进行编译，后面教程会使用webpack+nodejs进行编译

### JSX 基本使用

<a href="https://github.com/hsian/react-tutorial/blob/master/demo/demo-base.html">查看代码 demo-base</a>

	//渲染dom 固定的方法
	ReactDOM.render(
		<span>xiao ming</span>,
		document.querySelector("#contianer")
	);	

### React 组件

<a href="https://github.com/hsian/react-tutorial/blob/master/demo/demo-component.html">查看代码 demo-component</a>

在 React 中创建组件的方式有几种，但是最开始我们创建组件的方式是用 `React.createClass`

	var Name = React.createClass({
		render : function(){
			return (
				<p>react component!</p>
			);
		}
	});

上面代码创建了一个组件，下面可以使用`<Name/>`来调用组件：

	ReactDOM.render(
		<Name/>
		document.querySelector("#contianer")
	)

### 组件属性

<a href="https://github.com/hsian/react-tutorial/blob/master/demo/demo-props.html">查看代码 demo-props</a>

当前组件是数据是静态的，现在我们需要接收组件的属性并填充到组件，实际上就是把数据填充到界面

	var Name = React.createClass({
		render : function(){
			return (
				<p>{this.props.name}, component!</p>
			);
		}
	});

组件可以通过`this.props`来访问属性，注意需要放到一个大括号中

上面代码设置能够访问组件的 name 属性，那么现在需要设置该组件的属性了，在调用组件时添加`name="hsian.T"`：

	ReactDOM.render( 
		<Name name="hsian.T"/>, 
		document.querySelector("#contianer") 
	);

### 组件中的子元素

<a href="https://github.com/hsian/react-tutorial/blob/master/demo/demo-component-children.html">查看代码 demo-component-children</a>

组件除了可以添加属性之外，还可以添加子元素：

	ReactDOM.render( 
		<Name name="hsian.T">
			<p>爱好 : 读书 ！嗯？</p>
		</Name>, 
		contianer 
	);

`<p>爱好 : 读书 ！嗯？</p>`是子元素，作为组件中的子元素，组件需要通过`{this.props.children}`属性来接收；

	var Name = React.createClass({
		render : function(){
			return (
				<div>
					<p>{this.props.name}, component!</p>
					{this.props.children}
				</div>
			);
		}
	});

组件好像越来越大了~~，不过接下来要创建更加复杂的组件了。


	








