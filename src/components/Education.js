import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-solid-svg-icons';

import { dataExists, findData } from '../helper';

const Education = ({ data }) => {
  let studentHappinessContent = '';
  let bestUniversityContent = '';
  let pisaScoresContent = '';
  let pisaMathScoreContent = '';
  let pisaReadingScoreContent = '';
  let pisaScienceScoreContent = '';
  
  if (data) {
    const hasStudentHappiness = dataExists(data, 'PISA-DETAIL-HAPPINESS');
    const hasbestUniversity = dataExists(data, 'UNIVERSITIES-BEST-RANKED-NAME');
    const hasbestUniversityRank = dataExists(data, 'UNIVERSITIES-BEST-RANKED-RANK');
    const hasPisaMathScore = dataExists(data, 'PISA-DETAIL-MATH-MEAN-SCORES');
    const hasPisaReadingScore = dataExists(data, 'PISA-DETAIL-READING-MEAN-SCORES');
    const hasPisaScienceScore = dataExists(data, 'PISA-DETAIL-SCIENCE-MEAN-SCORES');
    
    if (hasStudentHappiness) {
      const studentHappiness = findData(data, 'PISA-DETAIL-HAPPINESS');
      studentHappinessContent = (
        <div>
          <div className="text-subheader">Percent of Happy High School Students</div>
          <div className="education-happinessPercent">
            <div className="text-header">{parseFloat(studentHappiness.percent_value * 100).toFixed(0)}%</div>
          </div>
        </div>
      );
    }
    
    if (hasbestUniversity && hasbestUniversityRank) {
      const bestUniversity = findData(data, 'UNIVERSITIES-BEST-RANKED-NAME');
      const bestUniversityRank = findData(data, 'UNIVERSITIES-BEST-RANKED-RANK');
      bestUniversityContent = (
        <div className="block">
          <div className="text-subheader">Best University &amp; Ranking</div>
          <div className="education-bestUni-wrapper card fill-black">
            <div className="text-subheader no-margin-bottom">#{bestUniversityRank.int_value}</div>
            <div className="text-subheader no-margin-bottom">{bestUniversity.string_value}</div>
          </div>
        </div>
      );
    }
    
    if (hasPisaMathScore) {
      const pisaMathScore = findData(data, 'PISA-DETAIL-MATH-MEAN-SCORES');
      pisaMathScoreContent = (
        <li>
          <h4 className="education-subject">Math</h4>
          <p className="is-emphasized">{Math.round(pisaMathScore.float_value).toFixed(0)}</p>
        </li>
      );
    }
    
    if (hasPisaReadingScore) {
      const pisaReadingScore = findData(data, 'PISA-DETAIL-READING-MEAN-SCORES');
      pisaReadingScoreContent = (
        <li>
          <h4 className="education-subject">Reading</h4>
          <p className="is-emphasized">{Math.round(pisaReadingScore.float_value).toFixed(0)}</p>
        </li>
      );
    }
    
    if (hasPisaScienceScore) {
      const pisaScienceScore = findData(data, 'PISA-DETAIL-SCIENCE-MEAN-SCORES');
      pisaScienceScoreContent = (
        <li>
          <h4 className="education-subject">Science</h4>
          <p className="is-emphasized">{Math.round(pisaScienceScore.float_value).toFixed(0)}</p>
        </li>
      );
    }

    if (hasPisaMathScore || hasPisaReadingScore || hasPisaScienceScore) {
      pisaScoresContent = (
        <div>
          <div className="text-subheader">Average PISA Scores (High School)</div>
          <p>The Program for International Student Assessment (PISA) is an international assessment that measures 15-year-old students' reading, mathematics, and science literacy every three years. Scores are reported on a scale from 0 to 1,000.</p>
          <p><a href="https://nces.ed.gov/surveys/pisa/" target="_blank">Learn more about PISA</a></p>
          <ul className="education-pisaScore-list">
            <li>
              <h4 className="is-emphasized is-sublte">Subject</h4>
              <h4 className="is-emphasized is-sublte">PISA Score</h4>
            </li>
            {pisaMathScoreContent}
            {pisaReadingScoreContent}
            {pisaScienceScoreContent}
          </ul>
        </div>
      );
    }
  }

  return (
    <div className="section">
      <h2 className="text-header">Education</h2>
      <div className="education-wrapper">
        <div>
          {studentHappinessContent}
          {bestUniversityContent}
        </div>
        {pisaScoresContent}
      </div>
    </div>
  );
}

export default Education;