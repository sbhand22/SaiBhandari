import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import "./App.css";

/*  TODOS:
      1. Add proper Experience and Education sections in Home page
      2. Improve About section in Home page
      3. Get more creative with the navigation bar

*/

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/slack-project" component={ProjectDetails} />
        <Route path="/burger-project" component={ProjectDetails} />
        <Route path="/wikimovies-project" component={ProjectDetails} />
        <Route path="/snuggs-commerce-project" component={ProjectDetails} />
        <Route path="/natours-project" component={ProjectDetails} />
        <Route path="/trillo-project" component={ProjectDetails} />
        <Route path="/nexter-project" component={ProjectDetails} />
        <Route path="*" component={Home} />
      </Switch>
    );
  }
}

export default App;
