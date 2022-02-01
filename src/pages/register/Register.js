import React from 'react'
import './Register.css'
import {Link} from 'react-router-dom'

class Register extends React.Component {
    render() { 
        return (
          <div>
            <header className="header-bottom register-header ">
              <form className="container register-form" action="#">
                <div className="register-card">
                  <p className="register-title">Ro’yxatdan o’tish</p>
                  <input
                    type="text"
                    className="input-card"
                    placeholder="Ismingizni kiriting..."
                  />
                  <input
                    type="text"
                    className="input-card"
                    placeholder="Familiyangizni kiriting..."
                  />
                  <input
                    type="number"
                    className="input-card"
                    placeholder="Telefon raqamingizni kiriting..."
                  />
                  <select
                    className="input-card"
                    placeholder="Davlat nomini kiriting..."
                  >
                    <option value="0">Davlat nomini kiriting...</option>
                    <option value="1">AQSH</option>
                    <option value="2">Qozog'iston</option>
                    <option value="3">Turkiya</option>
                  </select>
                  <select className="input-card">
                    <option value="0">Shahar/tuman nomini kiriting...</option>
                    <option value="1">Moskva</option>
                    <option value="2">Sant-Peterburg</option>
                    <option value="3">Irkutski</option>
                  </select>
                  <input
                    type="password"
                    className="input-card"
                    placeholder="Parol o’ylab toping..."
                  />
                  <input
                    type="password"
                    className="input-card"
                    placeholder="Parolni tasdiqlang"
                  />
                  <button
                    type="button"
                    className="btn btn-primary register-btn"
                  >
                    Ro’yxatdan o’tish
                  </button>
                  <p className="register-content me-2">
                    Profilingiz mavjudmi?
                    <Link to='/login' className="ms-2 text-decoration-none" >
                      Kirish
                    </Link>
                  </p>
                </div>
              </form>
            </header>
          </div>
        );
    }
}
 
export default Register;