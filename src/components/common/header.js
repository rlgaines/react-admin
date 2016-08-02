"use strict";

var React = require('react');

var Header = React.createClass({
	render: function(){
		return (
			<nav>
				<ul>
					<a href="/#"><li>homes</li></a>
					<a href="/#authors"><li>authors</li></a>
					<a href="/#about"><li>abouts</li></a>
				</ul>
			</nav>
		);
	}
});

module.exports = Header;