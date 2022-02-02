import React from "react";
import "./Header.css";
import Logo from "./MusofirlarLogo.svg";
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header className="header py-3 bg-light fixed-top">
        <div className="container-fluid header__container">
          <Link to="/" className="header__logo">
            <img src={Logo} alt="Musofirlar"/>
          </Link>

          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <Link to="/" className="header__nav-link">
                  Bosh sahifa
                </Link>
              </li>
              <li className="header__nav-item">
                <Link to="/flat" className="header__nav-link">
                  Ijara uylar
                </Link>
              </li>
              <li className="header__nav-item">
                <Link to="/job" className="header__nav-link">
                  Ish topish
                </Link>
              </li>
              <li className="header__nav-item">
                <Link to="/embassy" className="header__nav-link">
                  Elchixonalar
                </Link>
              </li>
              <li className="header__nav-item">
                <Link to="/canteen" className="header__nav-link">
                  O’zbek oshxonasi
                </Link>
              </li>
              <li className="header__nav-item">
                <Link to="/other-servises" className="header__nav-link">
                  Qo’shimcha xizmatlar
                </Link>
              </li>
              <li className="header__nav-item">
                <Link to="/about" className="header__nav-link">
                  Biz haqimizda
                </Link>
              </li>
            </ul>
          </nav>

          <div className="header__right">
            <div className="user-profile">
              <div class="btn-group">
                <button type="button" class="btn btn-primary btn-sm">Login</button>
                <button type="button" class="btn btn-primary btn-sm dropdown-toggle dropdown-toggle-split"
                        data-bs-toggle="dropdown" aria-expanded="false">
                  <span class="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul class="dropdown-menu">
                  <li><Link class="dropdown-item" to="./login">Login</Link></li>
                  <li><Link class="dropdown-item" to="./register">register</Link></li>
                  <li><Link class="dropdown-item" to="#">Something else here</Link></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><Link class="dropdown-item" to="#">Separated link</Link></li>
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
