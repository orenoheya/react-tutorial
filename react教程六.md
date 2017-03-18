# ReactRoute创建单页面应用（SPA）

好了，终于来到了我认为react最有价值的地方，单页面应用。

在以前传统的开发中，我们都是使用多页面或者后端来拆分模块，但是现在前端进入了一个全新的领域，单页应用程序中导航是不会进入到一个完全新的页面。单页应用程序中的页面通常是在相同页面本身内联加载。

- 显示在地址栏的 URL 总是反映用户正在浏览的事情。
- 用户可以成功地使用浏览器的后退和向前按钮。
- 用户可以使用合适的 URL 直接导航到特定的视图（即深度链接，deep link）。

react 提供了react router来创建单页面应该的能力

<a href="https://github.com/hsian/react-tutorial/blob/master/demo/demo-spa.html">demo-spa</a>

react是一个独立的模块 ，需要引入以下文件：

`<script src="../js/ReactRouter.min.js"></script> `

### 创建路由

所谓路由，使用起来就像自定义的组件一样：

	ReactDOM.render( 
		<ReactRouter.Router> 
			<ReactRouter.Route path="/" component={App}> </ReactRouter.Route> 
		</ReactRouter.Router>, 
		destination 
	);

ReactRouter.Router就认为是调用ReactRouter组件来注册一个路由吧，`<ReactRouter.Route path="/" component={App}> </ReactRouter.Route>`是子组件，注册了一路径为“/”的根目录，指向组件App，即是根路径则显示App组件，

这里`ReactRouter.Router`重复的比较多，因此可以使用es6的对象扩展来自动获得前缀`ReactRouter`

	var { Router, Route, IndexRoute, IndexLink, Link } = ReactRouter;

上列代码可修改为（	其实就是去掉了前缀）：

	ReactDOM.render( 
		<Router> 
			<Route path="/" component={App}> </Route> 
		</Router>, 
		destination 
	);

现在我们只有一个组件App，假如应用还有aboutme和contact两个组件，那么我们再注册两个组件：

	ReactDOM.render(
		<Router>
			<Route path="/" component={App}>
				<IndexRoute component={Home}/>
				<Route path="about" component={About}/>
				<Route path="contact" component={Contact}/>
			</Route>
		</Router>,
		document.querySelector('#contianer')
	);

aboutme和contact分别指向各自的组件，IndexRoute表示根路径

### 添加导航链接

组件是注册好了，但是页面的切换都是通过用户点击相对应链接来切换内容的，先看我们导航的代码：

	<ul>
		<li><IndexLink to="/" activeClassName="active">home</IndexLink></li>
		<li><Link to="/about" activeClassName="active">about me</Link></li>
		<li><Link to="/contact" activeClassName="active">contact</Link></li>
	</ul>

这里添加链接并不是用dom的a标签，而是Link标签，是不是也很像我们的组件的调用，`activeClassName`表示当前页面对应的导航按钮`class`为`active`

### 添加对应视图

此时点击li url地址栏确实改变了，但是内容并没有显示对应的内容，还需要添加以下这段：

	<div className="content">
		{this.props.children}
	</div>

App是父组件，home、about和contact是子组件，路由到相对应的页面时，父组件可以通过`this.props.children`来访问子组件，**匹配的每个路由，你指定显示的组件会出现**

	<Router>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>
			<Route path="about" component={About}/>
			<Route path="contact" component={Contact}/>
		</Route>
	</Router>

	