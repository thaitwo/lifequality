import React from 'react';
import UrbanAreasList from '../components/UrbanAreasList';

const HomePage = () => (
  <div className="home-container">
    <h2 className="text-subheader">Popular Cities Around The World</h2>
    <p>Select a city below to discover</p>
    <UrbanAreasList />
  </div>
);

export default HomePage;