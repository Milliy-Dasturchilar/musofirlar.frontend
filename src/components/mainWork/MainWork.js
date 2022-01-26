import React from "react";
import "./MainWork.css";
import Photo from "./work-main.png";
import CardTop from "../main-card/CardTop";
import MainWorkContent from "./mainWorkContent/MainWorkContent";

class MainWork extends React.Component {
  render() {
    return (
      <section>
        <div className="container  ">
          <CardTop
            cardTitle={"Ish topish"}
            cartText={" MUSOFIR.BIZ yordamida o'zingiz uchun qulay va hamyonbop ijara uylarini topishingiz mumkin!"}
          />
          <div className="main-work-bottom row ">
            <MainWorkContent />
            <div className=" Main-Work-Photo  col-md-5">
              <img src={Photo} style={{ width: "450px", height: "500px" }} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MainWork;
