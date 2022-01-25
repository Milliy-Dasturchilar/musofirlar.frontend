import React from "react";
import ButtonMain from "./buttonMain/Button-main";

class CardTop extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className="mt-5"
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        <p
          style={{
            fontSize: "18px",
            lineHeight: "25px",
          }}
        >
          <b style={{ fontSize: "40px" }}>{this.props.cardTitle}</b> <br />
          {this.props.cartText}
        </p>
        <ButtonMain />
      </div>
    );
  }
}

export default CardTop;
