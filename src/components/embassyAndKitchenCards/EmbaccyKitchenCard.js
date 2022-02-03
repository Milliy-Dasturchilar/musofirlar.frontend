import React from "react"
import "./EmbassyKitchenCard.css"


class EmbassyKitchenCard extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
          <div className="container">
            <h2 className="EK-title">{this.props.TextContent}</h2>
            <div className="EK-card-container row">
              <img src={this.props.CardImg} className="EK-main-img col-md-8" />
              <div className="EK-content col-md-4">
                <h4 className="EK-content-title">{this.props.TextContent}</h4>
                <h4 className="EK-contact-title">Aloqa uchun:</h4>
                <ul className="EK-content-list">
                  <li
                    className="EK-content-item"
                    style={{ alignItems: "flex-start" }}
                  >
                    <div>
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <p className="adress-text">
                      119017, 12 Pogorelskiy tor ko‘chasi, Moskva, Rossiya.
                    </p>
                  </li>
                  <li className="EK-content-item">
                    <div>
                      <div className="content-item-container">
                        <i class="fas fa-phone-alt"></i>
                        <p className="adress-text">+7-499 230-00-76</p>
                      </div>
                      <div className="content-item-container">
                        <i class="fas fa-phone-alt"></i>
                        <p className="adress-text">+7-499 238-36-20</p>
                      </div>
                    </div>
                  </li>
                  <li className="EK-content-item">
                    <i className="fas fa-globe"></i>
                    <a href="#" className="content-item-link">
                      http://uzembassy.ru
                    </a>
                  </li>
                  <li className="EK-content-item">
                    <div>
                      <div className="content-item-container">
                        <i class="fas fa-envelope"></i>
                        <a href="" className="content-item-link">
                          info@uzembassy.ru
                        </a>
                      </div>
                      <div className="content-item-container">
                        <i class="fas fa-envelope"></i>
                        <a href="" className="content-item-link">
                          uzkorus@mail.ru
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="EK-content-item">
                    <i class="fab fa-instagram"></i>
                    <a href="#" className="content-item-link">
                      @UzEmbassRussia
                    </a>
                  </li>
                  <li className="EK-content-item">
                    <i className="fab fa-facebook"></i>
                    <a href="#" className="content-item-link">
                      @UzEmbass.ru
                    </a>
                  </li>
                </ul>
                <div className="tg-container">
                  <a href="#" className="tg-link">
                    Telegram BOT
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default EmbassyKitchenCard;