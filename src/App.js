import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import BurgerProject from "./components/BurgerProject/BurgerProject";
import SlackClone from "./components/SlackClone/SlackClone";
import WikiMovies from "./components/WikiMovies/WikiMovies";
import SnuggsCommerce from "./components/SnuggsCommerce/SnuggsCommerce";
import Natours from "./components/Natours/Natours";
import Trillo from "./components/Trillo/Trillo";
import Nexter from "./components/Nexter/Nexter";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/slack-project" component={SlackClone} />
        <Route path="/burger-project" component={BurgerProject} />
        <Route path="/wikimovies-project" component={WikiMovies} />
        <Route path="/snuggs-commerce-project" component={SnuggsCommerce} />
        <Route path="/natours-project" component={Natours} />
        <Route path="/trillo-project" component={Trillo} />
        <Route path="/nexter-project" component={Nexter} />
        <Route path="*" component={Home} />
      </Switch>
    );
  }
}

export default App;
