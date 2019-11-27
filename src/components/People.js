import React from 'react';

const People = ({ data, population, language }) => {
  const elderlyPercent = data ? data.find(item => item.id === 'ELDERLY-PEOPLE') : '';
  const lifeExpectancy = data ? data.find(item => item.id === 'LIFE-EXPECTANCY') : '';
  const medianAge = data ? data.find(item => item.id === 'MEDIAN-AGE') : '';
  const unemploymentRate = data ? data.find(item => item.id === 'UNEMPLOYMENT-RATE') : '';

  const uaPopulation = population ? population.find(item => item.id === 'POPULATION-SIZE') : '';
  const populationDensity = population ? population.find(item => item.id === 'POPULATION-UA-DENSITY') : '';

  const spokenLanguage = language ? language.find(item => item.id === 'SPOKEN-LANGUAGES') : '';
  const englishProficiency = language ? language.find(item => item.id === 'ENGLISH-SKILLS-DETAIL') : '';

  return (
    <div>
      <h2 className="text-header">People</h2>
      <div className="people-list">
        <div>
          <h4>{(uaPopulation.float_value * 1000000).toString()}</h4>
          <p>Population</p>
        </div>
        <div>
          <h4>{Math.round(populationDensity.float_value).toString()}</h4>
          <div>
            <p>Population Density</p>
            <span className="text-caption">People Per Square Kilometer</span>
          </div>
        </div>
        <div>
          <h4>{Math.round(elderlyPercent.percent_value * 10000).toString()}%</h4>
          <p>Elderly People (65+)</p>
        </div>
        <div>
          <h4>{lifeExpectancy.float_value} yrs</h4>
          <p>Life Expectancy at Birth</p>
        </div>
        <div>
          <h4>{medianAge.float_value}</h4>
          <p>Median Age</p>
        </div>
        {/* <div>
          <h4>{(unemploymentRate.percent_value * 10000).toString()}%</h4>
          <div>Unemployment Rate</div>
        </div> */}
        <div>
          <h4>{spokenLanguage.string_value}</h4>
          <p>Spoken Language</p>
        </div>
        <div>
          <h4>{englishProficiency.int_value}</h4>
          <p>English Proficiency</p>
        </div>
      </div>
    </div>
  );
}

export default People;