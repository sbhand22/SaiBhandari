import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import BurgerProject from "./containers/Projects/BurgerProject/BurgerProject";
import SlackClone from "./containers/Projects/SlackClone/SlackClone";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/slack-project" component={SlackClone} />
        <Route path="/burger-project" component={BurgerProject} />
        <Route path="*" component={Home} />
      </Switch>
    );
  }
}

export default App;
