import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./Component/ProductListing";
import "./App.css";
import Home from "./Component/Home";

function App() {
  return (
    <div className="App">
      <Router>
      <Home/>
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
