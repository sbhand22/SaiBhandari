import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import "./App.css";

/*  TODOS:
      1. Get more creative with the navigation bar
*/

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/kira-project" component={ProjectDetails} />
        <Route path="/chatapp-project" component={ProjectDetails} />
        <Route path="/heartwise-project" component={ProjectDetails} />
        <Route path="/wikimovies-project" component={ProjectDetails} />
        <Route path="/snuggs-commerce-project" component={ProjectDetails} />
        <Route path="/natours-project" component={ProjectDetails} />
        <Route path="/nexter-project" component={ProjectDetails} />
        <Route path="*" component={Home} />
      </Switch>
    );
  }
}

export default App;
