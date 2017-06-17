var React = require("react");

var QuoteListEntry = React.createClass({
	render: function() {
		var quote = this.props.quote;

		return (
			<div>
				<p>{quote.text}</p>
				<button onClick={this.props.handleClick}>favorite</button>
			</div>
		)
	}
});

module.exports = QuoteListEntry;