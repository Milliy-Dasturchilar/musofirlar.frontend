import React from "react";
import "./Home.css";
import HeadHeader from "../../components/headerTemplate/HeaderTemplate";
import MainCard from "../../components/main-card/MainCard";
import MainWork from "../../components/mainWork/MainWork";
import CardTop from "../../components/main-card/CardTop";
import photo from "./flat.png";
import mapImage from './mapImage.png'

class Home extends React.Component {
  render() {
    return (
      <div>
        <HeadHeader strongText={"DOIM"} hasSmallText={true} />
        <MainCard />
        <MainWork />

        {/* Elchixonalar */}

        <CardTop
          cardTitle={"Elchixonalar"}
          cartText={
            "MUSOFIRLAR.UZ yordamida o’zingiz uchun qulay va  hamyonbop ijara uylarini topishingiz mumkin!"
          }
        />

        <div className="container">
          <div
            className="row embassy mt-3"
            style={{
              display: "flex",
              alignItems: "flex-end",
              paddingBottom: "80px",
            }}
          >
            <p
              className="col-md-8"
              style={{
                color: "#fff",
                fontStyle: "normal",
                fontFamily: "Montserrat",
                fontWeight: 500,
                fontSize: "40px",
                lineHeight: "40px",
                paddingLeft: "35px",
              }}
            >
              Eng yaqin elchixonalarni
              <br /> oson toping
            </p>

            <div className="col-md-4">
              <img src={mapImage} style={{ width: "330px", heigth: "230px" }} />
            </div>
          </div>
        </div>

        {/* Oshxona Restoran */}
        <CardTop
          cardTitle={"O’zbek - oshxonasi va restoranlar"}
          cartText={
             ' MUSOFIRLAR.UZ yordamida o’zingiz uchun qulay va hamyonbop ijara uylarini topishingiz mumkin!'
          }
        />
      </div>
    );
  }
}

export default Home;
