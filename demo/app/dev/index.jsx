import React from "react"; 
import ReactDOM from "react-dom"; 

var HelloWorld = React.createClass({ 
	render: function() { 
		return ( 
			<p>Hello, World!</p> 
		); 
	} 
}); 

ReactDOM.render( 
	<div> 
		<HelloWorld/> 
	</div>, 
	document.querySelector("#container") 
);