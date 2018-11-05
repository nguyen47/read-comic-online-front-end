import React, { Component } from "react";
import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Comic from "./components/comics";
import ReadComic from "./components/readComic";
import NotFound from "./components/not-found";
class App extends Component {
  render() {
    return (
      <main className="container-fluid" role="main">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Search} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/comic/:title" exact component={Comic} />
          <Route path="/comic/:title/:chapter" exact component={ReadComic} />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    );
  }
}

export default App;
