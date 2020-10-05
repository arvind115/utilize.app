import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Home from "./components/Home";
import NewOrder from "./components/NewOrder";
import EditOrder from "./components/EditOrder";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/add" component={NewOrder} />
        <Route
          exact
          path="/edit"
          component={(props) => (
            <EditOrder history={props.history} {...props.location.state} />
          )}
        />
      </Switch>
    </Router>
  );
}
