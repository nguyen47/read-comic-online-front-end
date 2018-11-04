import React, { Component } from "react";
import Suggestions from "./suggestions";

const axios = require("axios");
class Search extends Component {
  state = {
    query: "",
    comics: []
  };

  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          if (this.state.query.length % 2 === 0) {
            this.getInfo();
          }
        } else if (!this.state.query) {
        }
      }
    );
  };

  getInfo = () => {
    axios
      .get(`http://localhost:4000/search/${this.state.query}`)
      .then(({ data: comics }) => {
        this.setState({
          comics
        });
      });
  };

  render() {
    return (
      <div className="container mt-3">
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control col-12"
            type="search"
            placeholder="Search Comic"
            aria-label="Search"
            ref={input => (this.search = input)}
            onChange={this.handleInputChange}
          />
        </form>
        <Suggestions results={this.state.comics} />
      </div>
    );
  }
}

export default Search;
