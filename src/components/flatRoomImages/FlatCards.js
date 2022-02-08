import React, { Component } from "react";

import FlatCard from "./FlatCard";

class FlatCards extends Component {
  render() {
    return (
      <div className="container" style={{ padding: "0" }}>
        <div className="row">
          {this.props.flats.map((flat) => {
            return <FlatCard flat={flat} key={flat.id} />;
          })}
        </div>
      </div>
    );
  }
}

export default FlatCards;
