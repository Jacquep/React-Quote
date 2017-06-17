// Include React as a dependency
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link
var Link = require("react-router").Link;
var QuoteCreator = require("./QuoteCreator");
var QuoteList = require("./QuoteList");
var API = require("../utils/API").default

// Create the Main component
var Main = React.createClass({

  getInitialState: function() {
    return {
      quotes: [
        { id: 1, favorited: false, text: "Carpe Diem" },
        { id: 2, favorited: false, text: "Love Yourself" },
        { id: 3, favorited: false, text: "Rock On" },
        { id: 4, favorited: true, text: "Be The Change" }
      ],
      quoteInput: ""
    }
  },

  componentWillMount: function() {
    // get all quotes and set them on state
    API.getQuotes()
    .then(function(response){
      console.log(response.data)
      this.setState({
        quotes: response.data
      })
    }.bind(this))
  },

  handleInputChange: function(event) {
    console.log("TEXT CHANGED");

    // Here we create syntax to capture any change in text to the query terms (pre-search).
    // See this Stack Overflow answer for more details:
    // http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },

  // This code handles the sending of the search terms to the parent Search component
  handleQuoteSubmit: function(event) {
    event.preventDefault();
    console.log("CLICKED");
    var quote = this.state.quoteInput
    API.saveQuote(quote)
      .then(function(response) {
        var quotes = this.state.quotes;
        quotes.push(response.data)
        console.log(response.data, quotes)
        this.setState(function() {
          return {
            quoteInput: "",
            quotes: quotes
          }
        })
      }.bind(this))
  },

  handleFavoriteClick: function(event) {
    event.preventDefault();
    console.log('Clickled')
  },

  render: function() {
    return (
      <div className="main-container">
        <div className="row">
          <div className="col-lg-12">
            <QuoteCreator
              quoteInput={this.state.quoteInput}
              handleSubmit={this.handleQuoteSubmit}
              handleChange={this.handleInputChange}
            />
          </div>  
          <div className="col-lg-12">
            <QuoteList quotes={this.state.quotes}/>
          </div>
        </div>
      </div>
    );
  }
});

// Export the module back to the route
module.exports = Main;