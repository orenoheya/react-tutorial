#react中的事件

<a href="https://github.com/hsian/react-tutorial/blob/master/demo/demo-touch.html">demo-touch</a>

说实话，到了这里我发现react越来越坑了，因为在事件方面有点糟糕，按照官网的例子，是这么来给jsx绑定事件的：

	render() {
	    return (
	      <button onClick={this.handleClick}>
	        Click me
	      </button>
	    );
	  }

这就好像给dom元素绑定行内事件一样，但是jsx编译后并不是行内事件，

**React 从不会将事件处理器直接绑定到 DOM 元素。它在文档的根部使用一个事件处理器，来负责监听所有事件，并按需调用合适的事件处理器.**

由于我的demo例子是移动端页面，所以我使用的事件是`onTouchStart`；

	<ul onTouchStart={this.start} ref={(e)=>{this.list = e}}>
		{listItems}
	</ul>

ul添加了`ref`属性，ref的自执行函数把`ul`赋值给`this.list`.

因为组件内部的`this`指向的是当前组件，所以`start`函数内部的`this`并不是事件触发的dom对象，因此需要把`ul`存储为组件的list属性，在`touchstart`后给`ul`绑定`touchmove`和`touchend`事件

	this.list.addEventListener("touchmove",move);
	this.list.addEventListener("touchend",end)

注意： 这里的touchstart事件是给jsx绑定的，touchmove和touchend不是，jsx的事件和dom事件是两种不同的事件类型，还好两种事件获取事件对象方法都差不多，如 x 坐标的值都是：

	var curX = e.touches[0].pageX;