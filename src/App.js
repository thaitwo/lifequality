import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as ROUTES from './constants/routes';

import TopNavigation from './components/TopNavigation';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import CityPage from './pages/CityPage';

const App = () => (
  <Router>
    <TopNavigation />
    <div className="app-container">
      <Route exact path={process.env.PUBLIC_URL + ROUTES.HOME} component={HomePage} />
      <Route path={process.env.PUBLIC_URL + ROUTES.ABOUT} component={AboutPage} />
    </div>
    <Route path={process.env.PUBLIC_URL + `${ROUTES.CITY}/:cityId`} component={CityPage} />
  </Router>
);

export default App;
