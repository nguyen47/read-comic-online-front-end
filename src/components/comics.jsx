import React, { Component } from "react";
const axios = require("axios");

class Comics extends Component {
  state = {
    comics: [],
    authors: [],
    categories: [],
    chapters: []
  };

  async componentDidMount() {
    const title = this.props.match.params.title;
    const response = await axios.get(`http://localhost:4000/comic/${title}`);
    this.setState({ comics: response.data });
    this.setState({ authors: response.data.authors });
    this.setState({ categories: response.data.categories });
    this.setState({ chapters: response.data.chapters });
  }

  render() {
    return (
      <React.Fragment>
        <div className="container mt-3">
          <div className="row">
            <div className="col-3">
              <img
                src={this.state.comics.image}
                alt=""
                className="img-response"
              />
            </div>
            <div className="col-9">
              <ul className="list-group">
                <li className="list-group-item">
                  Title: {this.state.comics.title}
                </li>
                <li className="list-group-item">
                  OtherName: {this.state.comics.otherName}
                </li>
                <li className="list-group-item">
                  Authors:
                  <ul>
                    {this.state.authors.map(a => (
                      <li key={a.name}>{a.name}</li>
                    ))}
                  </ul>
                </li>
                <li className="list-group-item">
                  Categories:
                  <ul>
                    {this.state.categories.map(c => (
                      <li key={c.categoryName}>{c.categoryName}</li>
                    ))}
                  </ul>
                </li>
                <li className="list-group-item">
                  Type: {this.state.comics.type}
                </li>
                <li className="list-group-item">
                  Status: {this.state.comics.status}
                </li>
                <li className="list-group-item">
                  DateRelease: {this.state.comics.dateRelease}
                </li>
                <li className="list-group-item">
                  Views: {this.state.comics.views}
                </li>
              </ul>
            </div>
          </div>
          <div className="row mt-3">
            <ul className="list-group">
              <li className="list-group-item">
                <b>Description</b>
                <br />
                {this.state.comics.description}
              </li>
            </ul>
          </div>
          <div className="row mt-3">
            <ul className="list-group">
              {this.state.chapters.map(c => (
                <a
                  key={c.title}
                  href={c.url}
                  className="list-group-item list-group-item-action"
                >
                  {c.title}
                </a>
              ))}
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Comics;
