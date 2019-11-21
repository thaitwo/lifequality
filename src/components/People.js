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
      <h2 className="text-subheader">People</h2>
      <div>
        <div>Population</div>
        <div>{uaPopulation.float_value}</div>
      </div>
      <div>
        <div>Population Density</div>
        <div>{populationDensity.float_value}</div>
      </div>
      <div>
        <div>Elderly People (65+)</div>
        <div>{elderlyPercent.percent_value}</div>
      </div>
      <div>
        <div>Life Expectancy at Birth</div>
        <div>{lifeExpectancy.float_value}</div>
      </div>
      <div>
        <div>Median Age</div>
        <div>{medianAge.float_value}</div>
      </div>
      <div>
        <div>Unemployment Rate</div>
        <div>{unemploymentRate.percent_value}</div>
      </div>
      <div>
        <div>Spoken Language</div>
        <div>{spokenLanguage.string_value}</div>
      </div>
      <div>
        <div>English Proficiency</div>
        <div>{englishProficiency.int_value}</div>
      </div>
    </div>
  );
}

export default People;