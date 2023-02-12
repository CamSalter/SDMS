// App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Root from './Root';
import LandingPage from './components/LandingPage.jsx';

Root.render(
  <Router>
    <LandingPage />
  </Router>
);

export default LandingPage;
