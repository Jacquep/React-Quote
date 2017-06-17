// Include React as a dependency
var React = require("react");

// Include the Helper (for the saved recall)
var API = require("../utils/API").default;
var QuoteList = require("../components/QuoteList");

// Create the Main component
var Favorites = React.createClass({

  getInitialState: function() {
    return { 
      favoriteQuotes: []
    };
  },

  componentWillMount: function() {
    // get all quotes and set them on state
    API.getQuotes()
      .then(function(response){
        var quotes = response.data
        console.log(quotes)
        this.setState({
          favoriteQuotes: quotes.filter(function(quote) {
            return quote.favorited
          })
        })
      }.bind(this))
  },

  // Our render method. Utilizing a few helper methods to keep this logic clean
  render: function() {
    return (
      <div>
        <h1>Favorited Quotes</h1>
        <QuoteList quotes={this.state.favoriteQuotes}/>
      </div>
    )
  }
});

// Export the module back to the route
module.exports = Favorites;
