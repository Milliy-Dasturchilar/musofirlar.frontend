import React from "react";
import "./MainWork.css";
import Photo from "./work-main.png";

import CardTop from "../main-card/Card-top";
import MainWorkContent from "./mainWorkContent/MainWorkContent";

class MainWork extends React.Component {
  render() {
    return (
      <section>
        <div className="container  ">
          <CardTop
            cardTitle={"Ishlar"}
            cartText={"MUSOFIRLAR.UZ kascasbcjkascas "}
          />
          <div className="main-ish-bottom">
            <MainWorkContent />
            <div>
              <img src={Photo} width="500px" height="550px" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MainWork;
