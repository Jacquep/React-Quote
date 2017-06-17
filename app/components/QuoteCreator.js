// Include React as a dependency
var React = require("react");
var API = require("../utils/API");

// Query Component Declaration
var Quote = React.createClass({

  // Here we render the Query component
  render: function() {

    return (
      <div className="main-container">

        <div className="row">
          <div className="col-lg-12">

            <div className="panel panel-primary">
              <div className="panel-heading">
                <h1 className="panel-title">
                  <strong>
                    Quotes App
                  </strong>
                </h1>
              </div>
              <div className="panel-body">

                {/* Note how we associate the text-box inputs with the state values */}
                <form onSubmit={this.props.handleSubmit}>
                  <div className="form-group">
                    <h4 className=""><strong>Add a quote</strong></h4>
                    <input
                      type="text"
                      value={this.props.quoteInput}
                      className="form-control"
                      id="quoteInput"
                      onChange={this.props.handleChange}
                      required
                    />
                  </div>

                  {/* Here we create the onClick event that triggers the HandleSubmit */}
                  <div className="pull-right">
                    <button
                      type="submit"
                      className="btn btn-success"
                    >
                      <h4>Submit</h4>
                    </button>
                  </div>
                </form>

              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
});

// Export the module back to the route
module.exports = Quote;
