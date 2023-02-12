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
              <h1 className='app-name'>__Docu-sec</h1>
              <div class='hamburger-menu'>
                <input id='menu__toggle' type='checkbox' />
                <label class='menu__btn' for='menu__toggle'>
                  <span></span>
                </label>

                <ul class='menu__box'>
                  <li>
                    <a class='menu__item' href='#'>
                      Home
                    </a>
                  </li>
                  <li>
                    <a class='menu__item' href='#'>
                      About
                    </a>
                  </li>
                  <li>
                    <a class='menu__item' href='#'>
                      Team
                    </a>
                  </li>
                  <li>
                    <a class='menu__item' href='#'>
                      Contact
                    </a>
                  </li>
                  <li>
                    <a class='menu__item' href='#'>
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default LandingPage;
