import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as ROUTES from './constants/routes';

import TopNavigation from './components/TopNavigation';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import CityPage from './pages/CityPage';
import Footer from './components/Footer';

const App = () => (
  <Router>
    <TopNavigation />
    <div className="app-container">
      <Route exact path={process.env.PUBLIC_URL + ROUTES.HOME} component={HomePage} />
      <Route path={process.env.PUBLIC_URL + ROUTES.ABOUT} component={AboutPage} />
      <Route path={process.env.PUBLIC_URL + `${ROUTES.CITIES}/:cityId`} component={CityPage} />
    </div>
    <Footer />
  </Router>
);

export default App;
