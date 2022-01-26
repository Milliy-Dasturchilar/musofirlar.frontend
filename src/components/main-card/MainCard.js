import React from "react";
import "./MainCard.css";
import CardTop from "./CardTop";

class MainCard extends React.Component {
  render() {
    return (
      <div>
        <section className="container">
          <CardTop
            cardTitle={"Ijara uylar"}
            cartText={
              "MUSOFIRLAR.UZ yordamida o'zingiz uchun qulay va hamyonbop ijara uylarinitopishingiz mumkin!"
            }
          />

          <div className="container main-card  mt-5">
            <div
              className="pt-5 ps-3 pe-3 "
              style={{
                display: "flex",
                alignItems: "start",
                justifyContent: "space-between",
              }}
            >
              <div className="main-card-left col-md-7">
                <p
                  className="pe-4 ps-4 pt-1 pb-1"
                  style={{
                    backgroundColor: "white",
                    display: "inline",
                    borderRadius: "8px",
                    fontSize: "30px",
                  }}
                >
                  12/dona
                </p>

                <p
                  style={{
                    color: "#fff",
                    fontStyle: "normal",
                    fontFamily: "Montserrat",
                    fontWeight: 500,
                    fontSize: "40px",
                    lineHeight: "40px",
                  }}
                >
                  Arzon narxda<br /> shinam va keng uy
                  
                </p>
              </div>

              <div className="main-ijara-card">
                <div className="ijara-user">
                  <i className="fas fa-user-circle main-user"></i>
                  <div className="ijara-user-item">
                    <span className="ijara-user-item1">
                      Abdusalom Abdusalomov
                    </span>
                    <br />
                    <span className="ijara-user-item2">
                      OOO Birbalo corporation
                    </span>
                  </div>
                </div>
                <div className="room-quality">
                  <span>2 Xonali / 80m2</span>
                  <i className="far fa-heart"></i>
                </div>
                <div className="room-cost">
                  <span className="room-cost1">100.000</span>so'm
                  <span className="room-cost2">750.000</span>
                </div>
                <div className="room-equipment">
                  <div>
                    <i className="fas fa-map-marker-alt"></i>
                    <span>London</span>
                  </div>
                  <div>
                    <i className="fas fa-user-circle"></i>
                    <span>Yakkalik</span>
                  </div>
                </div>

                <div className="room-equipment">
                  <div>
                    <i className="fas fa-chair"></i>
                    <span>Mebellar</span>
                  </div>
                  <div>
                    <i className="fas fa-dollar-sign"></i>
                    <span>Arzon</span>
                  </div>
                </div>
                <div className="ijara-btns">
                  <a className="text-decoration-none" href="#">
                    Bog'lanish
                  </a>
                  <a className="text-decoration-none" href="#">
                    Ma'lumotlar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default MainCard;
