import React from "react";
import './HeaderTemplate.css';

class Home extends React.PureComponent {
  render() {
    return (
      <section class="header-bottom">
        <div class="container header-bottom-container">
          <div class="header-bottom-item">
            <div>
              <span class="tex1">DOIM</span>
              <span class="text2">
                biz bilan bo'ling! <br />
                o'zbeklar bilan bo'ling!
              </span>
            </div>
            <p class="text3">
              <span>MUSOFIRLAR.UZ</span> yordamida dunyoning <br />
              istalgan joyida najot topasiz!
            </p>
            <a class="main-btn" href="#">
              Boshlash
            </a>
          </div>
          <div class="global-time">
            <span class="time">09:45 </span>
            <br />
            <span class="place">Tashkent</span>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
