var React = require("react");
var QuoteListEntry = require ("./QuoteListEntry");

var QuoteList = React.createClass({

	render: function() {
		var quotes = this.props.quotes
		var handleClick = this.props.handleFavoriteClick

		return (
			<div>
				<h1>Quote List</h1>
				{quotes.map(function(quote) {
					return (
						<QuoteListEntry
							quote={quote}
							handleClick={handleClick}
						/>
					)
				})}
			</div>
		)
	}
});

module.exports = QuoteList;