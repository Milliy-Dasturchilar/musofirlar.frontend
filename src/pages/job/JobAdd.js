import React from "react";
import "./JobAdd.css";

class JobAdd extends React.Component {
  constructor(props) {
    super(props);
  }
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
                  placeholder="Oylik"
                />
                <select className="card-input">
                  <option>Ovqat</option>
                  <option>Palov</option>
                  <option>Qozon Kabob</option>
                </select>
                <input
                  className="card-input card-input-cost"
                  placeholder="Ish soati"
                />
              </div>

              <div className="card-top-right">
                <select className="card-input">
                  <option>Ish turi</option>
                  <option>Kunduzgi</option>
                  <option>Kechki</option>
                </select>

                <select className="card-input">
                  <option>Ishchilar soni</option>
                  <option>15ta</option>
                  <option>35ta</option>
                </select>

                <select className="card-input">
                  <option>Yotoq</option>
                  <option>Dom</option>
                  <option>Kontainer</option>
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
                className="about-home"
                placeholder="Qo’shimcha ma’lumot ..."
              ></textarea>
              <textarea
                className="additional"
                placeholder="Talablar:"
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

export default JobAdd;
