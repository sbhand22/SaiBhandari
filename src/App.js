import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import BurgerProject from "./containers/Projects/BurgerProject/BurgerProject";
import SlackClone from "./containers/Projects/SlackClone/SlackClone";
import WikiMovies from "./containers/Projects/WikiMovies/WikiMovies";
import Natours from "./containers/Projects/Natours/Natours";
import Trillo from "./containers/Projects/Trillo/Trillo";
import Nexter from "./containers/Projects/Nexter/Nexter";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/slack-project" component={SlackClone} />
        <Route path="/burger-project" component={BurgerProject} />
        <Route path="/wikimovies-project" component={WikiMovies} />
        <Route path="/natours-project" component={Natours} />
        <Route path="/trillo-project" component={Trillo} />
        <Route path="/nexter-project" component={Nexter} />
        <Route path="*" component={Home} />
      </Switch>
    );
  }
}

export default App;
