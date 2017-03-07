#react系列教程2

###react设置样式

**react设置样式有两种方式**

例如给下面组件添加样式：

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

我们可以和往常一样定义class 样式

<a href="https://github.com/hsian/react-tutorial/blob/master/demo/demo-style.html">demo-style</a>

	<style>
		body{
		background:#f7f7f7;
		}

		.text{
			font-size:50px;
			text-align:center;
			line-height:100px;
			font-family:"Microsoft YaHei";
			color:#333;
		}

		.text-p {
			font-size: 30px;
			line-height: 1;
			color:#ccc;
		}
	</style>

组件调用样式class使用className，因为class是javascript关键字

	var Name = React.createClass({
		render : function(){
			return (
				<div className="text">
					<p>{this.props.name}, component!</p>
					{this.props.children}
				</div>
			);
		}
	});

	ReactDOM.render( 
		<Name name="hsian.T">
			<p className="text-p">爱好 : 读书 ！嗯？</p>
		</Name>, 
		contianer 
	);
	
**第二种方式**是在 react 组件内部写样式，最终会生成行内样式，这也是很多人不习惯的地方。

<a href="https://github.com/hsian/react-tutorial/blob/master/demo/demo-style2.html">demo-style2</a>

	var Name = React.createClass({

		render : function(){

			var textStyle = {
				fontSize:50,
				textAlign:"center",
				lineHeight:"100px",
				fontFamily:"Microsoft YaHei",
				color:"#333"
			};

			return (
				<div style={textStyle}>
					<p>{this.props.name}, component!</p>
					{this.props.children}
				</div>
			);
		}
	});

上面代码是在组件内部定义一个对象，对象的属性是css样式，注意这里可以省略px，但是lineHeight这种固定的像素值就不能忽略了，JSX 调用样式对象使用style属性 `style={textStyle}`

正如上面所说，样式实际上就是一个对象，那么在外面定义也是一样的，如：

	var textP = {
		fontSize: 30,
		lineHeight: 1,
		color:"#ccc"
	}

	ReactDOM.render( 
		<Name name="hsian.T">
			<p style={textP}>爱好 : 读书 ！嗯？</p>
		</Name>, 
		contianer 
	);
	
注意组件的样式也可以接受传递过来的属性`color: this.props.color`,这里不需要大括号{ }；

	var textStyle = {
		fontSize:50,
		textAlign:"center",
		lineHeight:"100px",
		fontFamily:"Microsoft YaHei",
		color: this.props.color
	};

	...
	<Name name="hsian.T" color="blue">
		<p style={textP}>爱好 : 读书 ！嗯？</p>
	</Name>,
	...