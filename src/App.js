import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
class App extends Component {
  render() {
    return (
      <main className="container-fluid" role="main">
        <Navbar />
        <Search />
      </main>
    );
  }
}

export default App;
