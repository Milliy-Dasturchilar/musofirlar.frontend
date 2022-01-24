import React from "react";
import "./main-card.css";

class MainCard extends React.Component {
  render() {
    return (
      <section className="container">
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
              fontSize: "15px",
              lineHeight: "25px",
            }}
          >
            <b style={{ fontSize: "40px" }}>Ijara uylar</b> <br />
            MUSOFIR.BIZ yordamida o'zingiz uchun qulay va hamyonbop ijara
            uylarini topishingiz mumkin!
          </p>
          <button
            style={{ borderRadius: "20px" }}
            type="button"
            className="btn  btn-outline-primary mb-3 pe-5 ps-5"
          >
            {" "}
            Batafsil
          </button>
        </div>
        <div className="container main-card  mt-4">
          <div
            className="pt-5 ps-3 pe-3 "
            style={{
              display: "flex",
              alignItems: "start",
              justifyContent: "space-between",
            }}
          >
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
                <a style={{ textDecoration: "none" }} href="#">
                  Bog'lanish
                </a>
                <a style={{ textDecoration: "none" }} href="#">
                  Ma'lumotlar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MainCard;
