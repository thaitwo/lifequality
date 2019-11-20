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
      <Link to={ROUTES.HOME} className="topnav-logo">
        <h2>Life Quality</h2>
      </Link>
      <SearchBox />
      <ul className="topnav-menu">
        <li>
          <Link to={ROUTES.ABOUT}>About</Link>
        </li>
      </ul>
    </div>
  </div>
);

export default TopNavigation;