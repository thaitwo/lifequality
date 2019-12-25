/**
 * DEPENDENCIES
 */
import React, { useEffect } from 'react';
import { HashRouter as Router, Route, useLocation } from 'react-router-dom';

/**
 * CONSTANTS
 */
import * as ROUTES from './constants/routes';

/**
 * COMPONENTS
 */
import TopNavigation from './components/TopNavigation';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import CityPage from './pages/CityPage';
import Footer from './components/Footer';

const ScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
};

const App = () => (
	<Router>
		<TopNavigation />
		<div className="app-container">
			<Route exact path={ROUTES.HOME} component={HomePage} />
			<Route path={ROUTES.ABOUT} component={AboutPage} />
			<Route path={`${ROUTES.CITIES}/:cityId`} component={CityPage} />
		</div>
		<ScrollToTop />
		<Footer />
	</Router>
);

export default App;
