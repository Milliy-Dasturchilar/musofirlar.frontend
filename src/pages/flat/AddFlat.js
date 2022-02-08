import React from "react";
import "./AddFlat.css";

class AddFlat extends React.Component {
  render() {
    return (
      <div>
        <header className="header-bottom announcement-header ">
          <form action="#" className="announcement-card">
            <h1 className="announcement-title">E’lon berish</h1>
            <div className="card-top ">
              <div className="card-top-left">
                <select className="card-input">
                  <option>Davlatni tanglang</option>
                  <option>Rossiya</option>
                  <option>Ukraina</option>
                </select>
                <select className="card-input">
                  <option>Hududni tanglang</option>
                  <option>Moskva</option>
                  <option>Vladivostok</option>
                </select>
                <input
                  className="card-input card-input-cost"
                  placeholder="Narxi"
                />
                <select className="card-input">
                  <option>Jihozlar</option>
                  <option>hamma jihozlar bor</option>
                  <option>deyarli bor</option>
                </select>
              </div>

              <div className="card-top-right">
                <select className="card-input">
                  <option>Xonalar soni</option>
                  <option>3ta</option>
                  <option>5ta</option>
                </select>

                <select className="card-input">
                  <option>Sanuzel soni</option>
                  <option>2ta</option>
                  <option>1ta</option>
                </select>

                <select className="card-input">
                  <option>Qavat</option>
                  <option>18-qavat</option>
                  <option>3-qavat</option>
                </select>

                <div className="card-input card-input-img">
                  <span>Rasm</span>
                  <input type="file" />
                </div>
              </div>
            </div>

            {/* card bottom */}

            <div>
              <textarea
                className="addres"
                placeholder="To’liq manzilni kiriting ..."
              ></textarea>
              <textarea
                className="about-home"
                placeholder="Uy haqida batafsil ..."
              ></textarea>
              <textarea
                className="additional"
                placeholder="Qo’shimcha qulayliklar ..."
              ></textarea>
              <div className="announcement-btn">
                <div className="btn_1">
                  <button type="button" className="btn-main mt-4 ">
                    <i class="fas fa-long-arrow-alt-left me-2"></i>
                    Bekor qilish
                  </button>
                </div>
                <div className="btn_2">
                  <button type="button" className="btn-main ">
                    E’lon berish
                  </button>
                </div>
              </div>
            </div>
          </form>
        </header>
      </div>
    );
  }
}

export default AddFlat;
