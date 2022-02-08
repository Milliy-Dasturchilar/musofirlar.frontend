import React from "react";
import Logo from "./MusofirlarLogo.svg";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="mt-5">
        <footer className="site-footer">
          <div className=" footer-container">
            <img className="footer-title" alt="" src={Logo} />
            <ul className="footer-list">
              <li className="footer-item">
                <a href="#">Bosh sahifa</a>
              </li>
              <li className="footer-item">
                <a href="#">Ijara uylar</a>
              </li>
              <li className="footer-item">
                <a href="#">Ish topish</a>
              </li>
              <li className="footer-item">
                <a href="#">Elchixonalar</a>
              </li>
              <li className="footer-item">
                <a href="#">O'zbek oshxonasi</a>
              </li>
              <li className="footer-item">
                <a href="#">Masjidlar</a>
              </li>
              <li className="footer-item">
                <a href="#">Qo'shimcha ma'lumotlar</a>
              </li>
              <li className="footer-item">
                <a href="#">Biz haqimizda</a>
              </li>
            </ul>

            <ul className="footer-link">
              <li className="footer-links">
                <a href="https://t.me/Murodov_Bakhtiyor">
                  <i className="fab fa-telegram fab-branch"></i>
                </a>
              </li>
              <li className="footer-links">
                <a href="https://facebook.com/bakhtiyor.murodov1249">
                  <i className="fab fa-facebook fab-branch"></i>
                </a>
              </li>
              <li className="footer-links">
                <a href="https://youtube.com">
                  <i className="fab fa-youtube fab-branch"></i>
                </a>
              </li>

              <li className="footer-links">
                <a href="https://instagram.com/_baxtiyor.murodov_">
                  <i className="fab fa-instagram fab-branch"></i>
                </a>
              </li>
              <li className="footer-links">
                <a href="https://twiter.com/BaxtiyorMurodo2">
                  <i className="fab fa-twitter fab-branch"></i>
                </a>
              </li>
              <li className="footer-links">
                <a href="https://www.linkedin.com/in/baxtiyor-murodov">
                  <i className="fab fa-linkedin-in fab-branch"></i>
                </a>
              </li>
            </ul>
            <div className="footer-bottom">
              <img src="./img/first/footer-icon.png" alt="" />
              <span className="footer-text">
                Copyright 2022 All rigths reserved. Powered by{" "}
                <a href="https://saminjonovsanjarbek.github.io/Mdevs-team/">
                  MDevs
                </a>
              </span>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
