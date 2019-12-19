/**
* DEPENDENCIES
*/
import React from 'react';
import { Link } from 'react-router-dom';

/**
* CONSTANTS
*/
import * as ROUTES from '../constants/routes';
import SearchBox from './SearchBox';


const TopNavigation = () => (
  <div className="topnav-container">
    <div className="topnav-content">
      <Link to={process.env.PUBLIC_URL + ROUTES.HOME} className="topnav-logo">
        <img src="../../logo.png" />
      </Link>
      <SearchBox />
    </div>
  </div>
);

export default TopNavigation;