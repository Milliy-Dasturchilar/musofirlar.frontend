import React from "react";
import "./Header.css";
import Logo from "./MusofirlarLogo.svg";

class Header extends React.Component {
  render() {
    return (
      <header className="header py-3 bg-light fixed-top">
        <div className="container-fluid header__container">
          <a href="/" className="header__logo">
            <img src={Logo} alt="Musofirlar"/>
          </a>

          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <a href="/" className="header__nav-link">
                  Bosh sahifa
                </a>
              </li>
              <li className="header__nav-item">
                <a href="/" className="header__nav-link">
                  Ijara uylar
                </a>
              </li>
              <li className="header__nav-item">
                <a href="/" className="header__nav-link">
                  Ish topish
                </a>
              </li>
              <li className="header__nav-item">
                <a href="/" className="header__nav-link">
                  Elchixonalar
                </a>
              </li>
              <li className="header__nav-item">
                <a href="/" className="header__nav-link">
                  O’zbek oshxonasi
                </a>
              </li>
              <li className="header__nav-item">
                <a href="/" className="header__nav-link">
                  Qo’shimcha xizmatlar
                </a>
              </li>
              <li className="header__nav-item">
                <a href="/" className="header__nav-link">
                  Biz haqimizda
                </a>
              </li>
            </ul>
          </nav>

          <div className="header__right">
            <div className="language dropdown">
              <button className="btn lang btn-light btn-sm dropdown-toggle" type="button" id="dropdownMenuButton1"
                      data-bs-toggle="dropdown" aria-expanded="false">
                Uz
              </button>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#">Uz</a></li>
                <li><a className="dropdown-item" href="#">Ru</a></li>
                <li><a className="dropdown-item" href="#">En</a></li>
              </ul>
            </div>
            <div className="user-profile">
              <div class="btn-group">
                <button type="button" class="btn btn-primary btn-sm">Login</button>
                <button type="button" class="btn btn-primary btn-sm dropdown-toggle dropdown-toggle-split"
                        data-bs-toggle="dropdown" aria-expanded="false">
                  <span class="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><a class="dropdown-item" href="#">Separated link</a></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </header>
  );
  }
  }

  export default Header;
