import React from "react";

const Suggestions = props => {
  if (props.results === "Not Found") {
    return (
      <div className="alert alert-warning mt-3">
        <strong>Info!</strong> Comic Not Found.
      </div>
    );
  }
  const options = props.results.map(r => (
    <a
      key={r.title}
      href={r.url}
      className="list-group-item list-group-item-action"
    >
      {r.title}
    </a>
  ));
  return <div className="list-group mt-3">{options}</div>;
};

export default Suggestions;
