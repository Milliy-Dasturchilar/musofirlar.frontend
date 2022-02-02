import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
class Login extends React.Component {
    render() { 
        return (
          <div>
            <header className="header-bottom register-header ">
              <form className="container register-form login-form" action="#">
                <div className="register-card">
                  <p className="register-title">Tizimga kirish</p>

                  <input
                    type="number"
                    className="input-card"
                    placeholder="Telefon raqamingizni kiriting..."
                  />

                  <input
                    type="password"
                    className="input-card"
                    placeholder="Parol o’ylab toping..."
                  />
                  <div className="input-bottom">
                    <div className="login-checkbox">
                      <input type="checkbox" />
                      <span className="login-content">Meni eslab qol</span>
                    </div>
                    <span className="inputi-content">
                      Parolni unutdingizmi ?
                    </span>
                    <br />
                  </div>

                  <button
                    type="button"
                    className="btn btn-primary register-btn mt-5"
                  >
                    Kirish
                  </button><br />
                  <span>yoki  
                    <Link to="/register" className='text-decoration-none ms-2 fs-5 fw-bold'>Ro'yhatdan o'tish</Link>
                  </span>
                </div>
              </form>
            </header>
          </div>
        );
    }
}
 
export default Login;