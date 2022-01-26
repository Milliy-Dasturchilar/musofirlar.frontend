import React from "react";
import ButtonMain from "../buttonMain/Button-main";
class CardTop extends React.Component {
  render() {
    return (
      <div
        className="mt-5 container pt-5"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p
          style={{
            fontSize: "18px",
            lineHeight: "35px",
            marginBottom: '0px',
            paddingBottom:'0px'
            
          }}
        >
          <b style={{ fontSize: "40px", }}>{this.props.cardTitle}</b> <br />
          {this.props.cartText}
        </p>
        <ButtonMain />
      </div>
    );
  }
}

export default CardTop;
