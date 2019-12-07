import React from 'react';

const People = ({ people, population, language }) => {
  // PEOPLE DATA
  let elderlyPercent = '';
  let elderlyPercentContent = '';
  let lifeExpectancy = '';
  let lifeExpectancyContent = '';
  let medianAge = '';
  let medianAgeContent = '';
  let unemploymentRate = '';
  let unemploymentRateContent = '';

  // POPULATION DATA
  let populationCount = '';
  let populationContent = '';
  let populationDensity = '';
  let populationDensityContent = '';

  // LANGUAGE DATA
  let engProficiency = '';
  let engProficiencyContent = '';
  let spokenLanguage = '';
  let spokenLanguageContent = '';

  
  /**
   * We have to check and make sure that data exists
   * because not all cities return the same data.
   */
  
  // PEOPLE
  if (people) {
    const hasElderlyPercent = people.some(item => item.id === 'ELDERLY-PEOPLE');
    const hasLifeExpectancy = people.some(item => item.id === 'LIFE-EXPECTANCY');
    const hasMedianAge = people.some(item => item.id === 'MEDIAN-AGE');
    const hasUnemploymentRate = people.some(item => item.id === 'UNEMPLOYMENT-RATE');
    elderlyPercent = hasElderlyPercent ? people.find(item => item.id === 'ELDERLY-PEOPLE') : '';
    lifeExpectancy = hasLifeExpectancy ? people.find(item => item.id === 'LIFE-EXPECTANCY') : '';
    medianAge = hasMedianAge ? people.find(item => item.id === 'MEDIAN-AGE') : '';
    unemploymentRate = hasUnemploymentRate ? people.find(item => item.id === 'UNEMPLOYMENT-RATE') : '';
    
    if (elderlyPercent) {
      elderlyPercentContent = (
        <div>
          <h4>{String(Math.round(elderlyPercent.percent_value * 10000))}%</h4>
          <p>Elderly People (65+)</p>
        </div>
      );
    }

    if (lifeExpectancy) {
      lifeExpectancyContent = (
        <div>
          <h4>{String(lifeExpectancy.float_value)} yrs</h4>
          <p>Life Expectancy at Birth</p>
        </div>
      );
    }

    if (medianAge) {
      medianAgeContent = (
        <div>
          <h4>{String(medianAge.float_value)}</h4>
          <p>Median Age</p>
        </div>
      );
    }

    if (unemploymentRate) {
      unemploymentRateContent = (
        <div>
          <h4>{String(unemploymentRate.percent_value * 10000)}%</h4>
          <p>Unemployment Rate</p>
        </div>
      );
    }
  }

  // LANGUAGE
  if (language) {
    const hasEngProficiency = language.some(item => item.id === 'ENGLISH-SKILLS-DETAIL');
    const hasSpokenLanguage = language.some(item => item.id === 'SPOKEN-LANGUAGES');
    engProficiency = hasEngProficiency ? language.find(item => item.id === 'ENGLISH-SKILLS-DETAIL') : '';
    spokenLanguage = hasSpokenLanguage ? language.find(item => item.id === 'SPOKEN-LANGUAGES') : '';
    
    if (engProficiency) {
      engProficiencyContent = (
        <div>
          <h4>{String(engProficiency.int_value)}</h4>
          <p>English Proficiency</p>
        </div>
      );
    }

    if (spokenLanguage) {
      spokenLanguageContent = (
        <div>
          <h4>{spokenLanguage.string_value}</h4>
          <p>Spoken Language</p>
        </div>
      );
    }
  }
  
  // POPULATION
  if (population) {
    const hasPopulation = population.some(item => item.id === 'POPULATION-SIZE');
    const hasPopulationDensity = population.some(item => item.id === 'POPULATION-UA-DENSITY');
    populationCount = hasPopulation ? population.find(item => item.id === 'POPULATION-SIZE') : '';
    populationDensity = hasPopulationDensity ? population.find(item => item.id === 'POPULATION-UA-DENSITY') : '';
    
    if (populationCount) {
      populationContent = (
        <div>
          <h4>{(populationCount.float_value * 1000000).toLocaleString('en')}</h4>
          <p>Population</p>
        </div>
      );
    }

    if (populationDensity) {
      populationDensityContent = (
        <div>
          <h4>{(Math.round(populationDensity.float_value)).toLocaleString('en')}</h4>
          <div>
            <p>Population Density</p>
            <span className="text-caption">People Per Square Kilometer</span>
          </div>
        </div>
      );
    }
  }

  return (
    <div>
      <h2 className="text-header">People</h2>
      <div className="people-list">
        {populationContent}
        {populationDensityContent}
        {elderlyPercentContent}
        {lifeExpectancyContent}
        {medianAgeContent}
        {unemploymentRateContent}
        {spokenLanguageContent}
        {engProficiencyContent}
      </div>
    </div>
  );
}

export default People;