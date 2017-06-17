import React from "react";
import { Route, Router, browserHistory } from "react-router";
import Favorite from "../components/Favorite";

import Main from "../components/Main";

// Using just one route for now
// NOTE: browserHistory only works when run with a server
// build the webpack project, start the server, and navigate to localhost:3000
const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main} />
    <Route path="favorites" component={Favorite} />
  </Router>
);

export default routes;
