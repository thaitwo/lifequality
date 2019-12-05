/**
 * DEPENDENCIES
 */
import React from 'react';
import ReactHtmlParser from 'react-html-parser';


const Summary = ({ name, population, summary }) => {
  const parsedSummary = summary ? ReactHtmlParser(summary) : '';
  let populationCount;
  let populationContent;

  if (population) {
    populationCount = population ? population.find(item => item.id === 'POPULATION-SIZE') : '';
    populationCount = populationCount.float_value * 1000000000;
    populationCount = populationCount.toLocaleString('en');

    populationContent = (
      <div className="summary-population">
        <h3>{populationCount}</h3>
        <p className="text-subheader">Population</p>
      </div>
    );
  }
    
  return (
    <div>
      <p className="text-header">{name}</p>
			<div className="summary-text">{parsedSummary}</div>
      <div className="summary-population">
        {populationContent}
      </div>
    </div>
  );
};

export default Summary;