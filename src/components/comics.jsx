import React, { Component } from "react";
const axios = require("axios");

class Comics extends Component {
  state = {
    comics: []
  };

  async componentDidMount() {
    const title = this.props.match.params.title;
    const response = await axios.get(`http://localhost:4000/comic/${title}`);
    this.setState({ comics: response.data });
  }

  render() {
    console.log(this.state.comics);
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
            <div className="col">
              <ul className="list-group">
                <li className="list-group-item">
                  Title: {this.state.comics.title}
                </li>
                <li className="list-group-item">
                  OtherName: {this.state.comics.otherName}
                </li>
                <li className="list-group-item">
                  <ul>
                    {this.state.comics.authors.map(a => (
                      <li>{a.name}</li>
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
        </div>
      </React.Fragment>
    );
  }
}

export default Comics;
