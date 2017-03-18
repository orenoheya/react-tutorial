#react 系列教程

折腾了很久react了，但是网上找的 react 教程都不尽人意，要么一套套的看不懂，要么看后什么也写不出来，等于没看，所以自己花点时间，整理下react相关，刚好碰巧找到一份翻译国外的react教程，写得非常好！下面用更加简短的言语自己来标记一遍。

要用 React 创建 Web 应用，我们需要一种方式采用 JSX，并将它转换为浏览器可以理解的标准 
JavaScript

**react所需的三个文件**

- react.js       
- react-dom.js
- babel.min.js

第一行引入 核心 React 库，第二行引入 React DOM ，第三行引入 Babel JavaScript 编译器，**将 JSX 变成 JavaScript 的能力** *这玩意1M多，学习阶段先使用浏览器引入编译，项目开发使用nodejs编译，后面再了解！*

###JSX 基本使用

<a href="https://github.com/hsian/react-tutorial/blob/master/demo/demo-base.html">demo-base</a>

	//render 方法
	ReactDOM.render(
		<span>xiao ming</span>,
		document.querySelector("#contianer")
	);	

###React 组件

<a href="https://github.com/hsian/react-tutorial/blob/master/demo/demo-component.html">demo-component</a>

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

###组件属性

<a href="https://github.com/hsian/react-tutorial/blob/master/demo/demo-props.html">demo-props</a>

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

###组件中的子元素

<a href="https://github.com/hsian/react-tutorial/blob/master/demo/demo-component-children.html">demo-component-children</a>

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


	








