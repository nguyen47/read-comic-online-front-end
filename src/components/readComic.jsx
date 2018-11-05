import React, { Component } from "react";
const axios = require("axios");
class ReadComic extends Component {
  state = {
    pages: []
  };

  async componentDidMount() {
    const title = this.props.match.params.title;
    const chapter = this.props.match.params.chapter;

    const response = await axios.get(
      `http://localhost:4000/comic/${title}/${chapter}`
    );
    this.setState({ pages: response.data });
  }
  render() {
    return (
      <React.Fragment>
        <div className="container mt-3">
          {this.state.pages.map(p => (
            <img
              className="img-responsive mb-3"
              src={p.image}
              style={{ width: "100%", height: "auto" }}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default ReadComic;
