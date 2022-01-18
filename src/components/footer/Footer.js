import React from "react";
import Logo from "./MusofirlarLogo.svg"
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer bg-primary py-4 mt-5">
        <div className="container text-light">
          <div className="row py-3 border-bottom">
            <div className="my-2 col-md-5">
              <div className="footer__logo flex-column">
                <img src={Logo} alt="Musofirlar" className="img-fluid"/>
              </div>
              <p className="footer__text mt-3 pe-lg-5 fs-6">
                Musofirlar.uz yordamida o’zingiz uchun qulay va hamyonbop ijara uylarini topishingiz mumkin!
              </p>
            </div>
            <div className="my-2 col-md-2">
              <nav className="footer__nav">
                <ul className="footer__nav-list m-0 p-0">
                  <li className="footer__nav-item">
                    <a href="/" className="footer__nav-link text-decoration-none text-light">
                      Bosh sahifa
                    </a>
                  </li>
                  <li className="footer__nav-item mt-1">
                    <a href="/" className="footer__nav-link text-decoration-none text-light">
                      Ijara uylar
                    </a>
                  </li>
                  <li className="footer__nav-item mt-1">
                    <a href="/" className="footer__nav-link text-decoration-none text-light">
                      Ish topish
                    </a>
                  </li>
                  <li className="footer__nav-item mt-1">
                    <a href="/" className="footer__nav-link text-decoration-none text-light">
                      Elchixonalar
                    </a>
                  </li>
                  <li className="footer__nav-item mt-1">
                    <a href="/" className="footer__nav-link text-decoration-none text-light">
                      O’zbek oshxonasi
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="my-2 col-md-3">
              <nav className="footer__nav">
                <ul className="footer__nav-list m-0 p-0">
                  <li className="footer__nav-item">
                    <a href="/" className="footer__nav-link text-decoration-none text-light">
                      Masjidlar
                    </a>
                  </li>
                  <li className="footer__nav-item mt-1">
                    <a href="/" className="footer__nav-link text-decoration-none text-light">
                      Qo’shimcha ma’lumotlar
                    </a>
                  </li>
                  <li className="footer__nav-item mt-1">
                    <a href="/" className="footer__nav-link text-decoration-none text-light">
                      Biz haqimizda
                    </a>
                  </li>
                  <li className="footer__nav-item mt-1">
                    <a href="/" className="footer__nav-link text-decoration-none text-light">
                      Ko’p beriladigan savollar
                    </a>
                  </li>
                  <li className="footer__nav-item mt-1">
                    <a href="/" className="footer__nav-link text-decoration-none text-light">
                      Linkedin
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="my-2 col-md-2">
              <nav className="footer__nav">
                <ul className="footer__nav-list m-0 p-0">
                  <li className="footer__nav-item">
                    <a href="/" className="footer__nav-link text-decoration-none text-light">
                      Telegram
                    </a>
                  </li>
                  <li className="footer__nav-item mt-1">
                    <a href="/" className="footer__nav-link text-decoration-none text-light">
                      Twitter
                    </a>
                  </li>
                  <li className="footer__nav-item mt-1">
                    <a href="/" className="footer__nav-link text-decoration-none text-light">
                      Facebook
                    </a>
                  </li>
                  <li className="footer__nav-item mt-1">
                    <a href="/" className="footer__nav-link text-decoration-none text-light">
                      Instagram
                    </a>
                  </li>
                  <li className="footer__nav-item mt-1">
                    <a href="/" className="footer__nav-link text-decoration-none text-light">
                      Youtube
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;