import React from "react";
import "./MainWorkContent.css";

class MainWorkContent extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className="work-bottom-left col-md-7">
        <a href="#" className="text-decoration-none">
          <div className="work-bottom-card">
            <div>
              <i className="fas fa-users"></i>
              <span>Bag'ri keng jamoa</span>
            </div>
            <p>
              MUSOFIRLAR yordamida o'zingiz uchun qulay va <br />
              hamyonbop ijara uylarini topishingiz mumkin!
            </p>
          </div>
        </a>
        <a href="#" className="text-decoration-none">
          <div className="work-bottom-card">
            <div>
              <i className="fas fa-dollar-sign"></i>
              <span>Yuqori maosh va yingil mehnat</span>
            </div>
            <p>
              MUSOFIRLAR yordamida o'zingiz uchun qulay va <br />
              hamyonbop ijara uylarini topishingiz mumkin!
            </p>
          </div>
        </a>

        <a href="#" className="text-decoration-none">
          <div className="work-bottom-card">
            <div>
              <i className="fas fa-mug-hot"></i>
              <span>Coffeebreak ham mavjud</span>
            </div>
            <p>
              MUSOFIRLAR yordamida o'zingiz uchun qulay va <br />
              hamyonbop ijara uylarini topishingiz mumkin!
            </p>
          </div>
        </a>
      </div>
    );
  }
}

export default MainWorkContent;
