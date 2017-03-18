# react系列教程3

下面我们来写一个复杂的组件，先看demo

<a href="https://github.com/hsian/react-tutorial/blob/master/demo/demo-card.html">demo-card</a>

首先分析下这个页面，container里包含一个关于电影的介绍卡片，左侧为图片，右侧为电影相关信息，在APP上这肯定是动态的数据，因此我们需要在组件上接收动态的数据，我们先创建一个最外层的组件：

	var Section = React.createClass({
		render : function(){
			var secCss = {
				padding: "10px",
				background:"#fff"
			};

			return (
				<div style={secCss} className="clearfix">
					<Picture image={this.props.image}/>
					<Detail detail={this.props.detail}/>
				</div>
			);
		}
	});

`this.props.image`和`this.props.detail`在调用该组件时传入属性：

	<Section image="img/pic_movie.jpg" detail={data}/>,

注意`{data}`是我们在外面定义的一个对象，在JSX里需要使用大括号括起来才可以识别：

	var data = {
		name : "一条狗的使命",
		en_name : "A Dog's Purpose",
		score : "9.3",
		type : "剧情,喜剧",
		city : "美国",
		duration : "101",
		date : "2017-03-03大陆"
	};

因此Section组件的`this.props.detail`属性是一个对象；

再来看Detail组件：

	var Detail = React.createClass({
		render : function(){
			
			var data = this.props.detail,
				detailCss = {
					lineHeight : 1.5
				}, 
				color = {
					color: "orange"
				};

			return (
				<div style={detailCss}>
					<h4>{data.name}</h4>
					<p>{data.en_name}</p>
					<p style={color}>评分 : {data.score}</p>
					<p>{data.type}</p>
					<p>{data.city} / {data.duration}分钟</p>
					<p>{data.date}上映</p>
				</div>
			);
		}
	});

`data`就是Section组件传递过来`this.props.detail`, 然后把对应的字段填充到节点. 详细源码查看上面demo

### 传递多个属性

<a href="https://github.com/hsian/react-tutorial/blob/master/demo/demo-card2.html">demo-card2</a>

这个例子因为数据较多，我们使用了data对象，但是在Section组件调用时还是有两个属性，甚至可能更多

`<Section image="img/pic_movie.jpg" detail={data}/>,`

这里我们可以使用es6的扩展运算符方法，Section使用`{...this.props}`来接收组件调用时传递过来的所有属性

	var Section = React.createClass({
		render : function(){

			var secCss = {
				padding: "10px",
				background:"#fff"
			};

			return (
				<div style={secCss} className="clearfix">
					<Picture {...this.props}/>
					<Detail {...this.props}/>
				</div>
			);
		}
	});

此时通过`{...this.props}`再传递给子组件，实现多组件之间的属性传递，这样哪怕属性再多也不担心会混乱了



	