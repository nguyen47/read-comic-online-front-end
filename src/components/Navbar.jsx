import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light justify-content-between">
          <Link className="navbar-brand" to="/">
            Read Comic Online
          </Link>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
