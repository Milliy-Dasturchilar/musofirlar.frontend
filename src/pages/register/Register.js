import React from 'react'
// import HeadHeader from '../../components/headerTemplate/HeaderTemplate';
import './Register.css'
class Register extends React.Component {
   
    render() { 
        return (
          <div>
            <header className="header-bottom register-header " >
              <form className='container register-form' action="#">
                <div className="register-card">
                  <p className='register-title'>Ro’yxatdan o’tish</p>
                  <input
                    type="text"
                    className="input-card"
                    placeholder="Ismingizni kiriting..."
                  ></input>
                  <input
                    type="text"
                    className="input-card"
                    placeholder="Familiyangizni kiriting..."
                  ></input>
                  <input
                    type="number"
                    className="input-card"
                    placeholder="Telefon raqamingizni kiriting..."
                  ></input>
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
                    <option value="1"></option>
                    <option value="2"></option>
                    <option value="3"></option>
                  </select>
                  <input
                    type="password"
                    className="input-card"
                    placeholder="Parol o’ylab toping..."
                  ></input>
                  <input
                    type="password"
                    className="input-card"
                    placeholder="Parolni tasdiqlang"
                  ></input>
                  <button type="button" className="btn btn-primary register-btn">
                    Ro’yxatdan o’tish
                  </button>
                  <p>
                    Profilingiz mavjudmi?<a href="#">Kirish</a>
                  </p>
                </div>
              </form>
            </header>
          </div>
        );
    }
}
 
export default Register;