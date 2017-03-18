# react系列教程四

### 组件中的状态

目前我们的数据都是通过属性传递的，组件内的属性通常不会被修改，此时需要另一种存储数据的方式，组件中的状态

### 3个重要的API

- componentDidMount : 组件渲染后调用该方法
- getInitialState : 初始化`state`对象
- this.setState : 该方法可以设置 `state`对象的值

### 举个栗子：

<a href="https://github.com/hsian/react-tutorial/blob/master/demo/demo-state.html">demo-state</a>

现在我们实现一个上面栗子的功能，很简单，一个输入框，一个按钮和下面一个负责显示的p标签，当点击按钮后把输入框的内容填充到p标签，类似todos，不过只有一条数据；

初始化一个状态数据 `name`

	getInitialState : function(){
		return {
			name : ""
		};
	},

组件渲染后设置`name`初始值为`"请输入名字"`

	componentDidMount : function(){
		this.setState({
			name : "请输入名字"
		})
	},

添加一个点击按钮触发的函数

	record : function(){
		this.setState({
			name : this.inputElement.value					
		})
	},

	// 给按钮绑定事件
	...
	<button className="btn" onClick={this.record}>确认</button>
	...

那问题来了，点击按钮需要要获取到input的value值，再设置给state，那应该怎么获取呢?

因为react的dom是jsx，所以我们不能使用原生的js获取dom的方法，react提供了一个ref属性； 属性里面使用一个匿名函数，

	<input ref={(a) => this.inputElement = a} type="text" className="input"/>

`(a) => this.inputElement = a`是es6的匿名函数写法，参数a表示当前节点，把节点赋值给组件的 `inputElement` 属性，这样 `record` 函数就能通过 `this.inputElement.value` 来获取input的值了


