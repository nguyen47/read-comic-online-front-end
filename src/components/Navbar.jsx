import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light justify-content-between">
          <a className="navbar-brand">Read Comic Online</a>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
