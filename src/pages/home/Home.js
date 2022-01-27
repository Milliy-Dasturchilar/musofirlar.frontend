import React from "react";
import "./Home.css";
import HeadHeader from "../../components/headerTemplate/HeaderTemplate";
import MainCard from "../../components/main-card/MainCard";
import MainWork from "../../components/mainWork/MainWork";
import CardTop from "../../components/main-card/CardTop";
import photo from "./flat.png";
import mapImage from './mapImage.png';
import kitchenImage from './oshxona.png'
import MainWorkContent from "../../components/mainWork/mainWorkContent/MainWorkContent";

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
        <div className="container">
          <CardTop
            cardTitle={"O’zbek - oshxonasi va restoranlar"}
            cartText={
              " MUSOFIRLAR.UZ yordamida o’zingiz uchun qulay va hamyonbop ijara uylarini topishingiz mumkin!"
            }
          />

          <div
            className="main-kitchen-bottom row mt-5"
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
            }}
          >
            <div className=" Main-kitchen-Photo  col-md-5">
              <img
                src={kitchenImage}
                style={{ width: "450px", height: "500px" }}
              />
            </div>

            <div className="kitchen-right col-md-7">
              <a href="#" className="text-decoration-none">
                <div>
                  <div>
                    <span>O’zbek milliy taomlar</span>
                    <i class="fas fa-hamburger"></i>
                  </div>
                  <p>
                    MUSOFIRLAR.UZ yordamida o'zingiz uchun qulay va hamyonbop
                    ijara uylarini topishingiz mumkin!
                  </p>
                </div>
              </a>
              <a href="#">
                <div>
                  <div>
                    <span>Halol mahsulotlar</span>
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <p>
                    MUSOFIR.BIZ yordamida o’zingiz uchun qulay va hamyonbop
                    ijara uylarini topishingiz mumkin!
                  </p>
                </div>
              </a>
              <a href="#">
                <div>
                  <div>
                    <span>O’zbekona xizmat</span>
                    <i class="fas fa-hands-helping"></i>
                  </div>
                  <p>
                    MUSOFIR.BIZ yordamida o’zingiz uchun qulay va hamyonbop
                    ijara uylarini topishingiz mumkin!
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
