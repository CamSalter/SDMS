import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../styles/assets/Docusec.png';
import '../styles/LandingPage.scss';

const LandingPage = () => {

  return (
    <div className='landing-page'>
      <img src="" alt='DocuSec logo' className='logo' />
      <p className='subtitle'>Your Information, Safe and Sound with DocuSec</p>
      <p className='description'>
        DocuSec uses the Trusted Document Format Security Protocol to keep your
        information secure and protected. Say goodbye to worries and hello to
        peace of mind with our top-notch document management system.{' '}
      </p>
      <div className='cta-section'>
        <a href='/login' className='cta-button'>
          Login
        </a>
        <a href='/signup' className='cta-button'>
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
