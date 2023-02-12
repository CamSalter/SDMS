import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../styles/assets/Docusec.png';
import '../styles/LandingPage.scss';

const LandingPage = () => {
  return (
    <div className='landing-page'>
      <header className='header'>
        <div className='container'>
          <div className='row'>
            <div className='brand-name-column'>
              <h1 className='app-name'>_Docu-sec</h1>
              <div className='hamburger-menu-container'>
                <div className='hamburger-menu'>
                  <input id='menu__toggle' type='checkbox' />
                  <label className='menu__btn' for='menu__toggle'>
                    <span></span>
                  </label>

                  <ul className='menu__box'>
                    <li>
                      <a className='menu__item' href='#'>
                        Home
                      </a>
                    </li>
                    <li>
                      <a className='menu__item' href='#'>
                        About
                      </a>
                    </li>
                    <li>
                      <a className='menu__item' href='#'>
                        Team
                      </a>
                    </li>
                    <li>
                      <a className='menu__item' href='#'>
                        Contact
                      </a>
                    </li>
                    <li>
                      <a className='menu__item' href='#'>
                        Log Out
                      </a>
                    </li>
                    <li>
                      <a className='menu__item' href='#'>
                        Delete Account
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='intro-block'>
          <h2 className='intro-title-one'>
            Empowering individuals and organizations
          </h2>
          <h2 className='intro-title-two'>
            to securely manage and protect their
          </h2>
          <h2 className='intro-title-three'>sensitive information online. </h2>
          </div>
          <div className='login-signup-buttons'>
            <button className='login-button' onClick={() => navigate('/login')}>
              Log In
            </button>
            <button
              className='signup-button'
              onClick={() => navigate('/signup')}
            >
              Sign Up
            </button>
          </div>
        <h3 className='mission-statement'>
          We believe in the power of trust and transparency in the digital age, and strive to provide a secure document management system that utilizes the latest in encryption technology and the trusted data format.
        </h3>
      </header>
    </div>
  );
};

export default LandingPage;
