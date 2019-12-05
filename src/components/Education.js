import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-solid-svg-icons';

const Education = ({ label, data }) => {
  const studentHappiness = data ? data.find(item => item.id === 'PISA-DETAIL-HAPPINESS') : '';
  const pisaRanking = data ? data.find(item => item.id === 'PISA-RANKING') : '';
  const pisaMathScore = data ? data.find(item => item.id === 'PISA-DETAIL-MATH-MEAN-SCORES') : '';
  const pisaReadingScore = data ? data.find(item => item.id === 'PISA-DETAIL-READING-MEAN-SCORES') : '';
  const pisaScienceScore = data ? data.find(item => item.id === 'PISA-DETAIL-SCIENCE-MEAN-SCORES') : '';
  const bestUniversity = data ? data.find(item => item.id === 'UNIVERSITIES-BEST-RANKED-NAME') : '';
  const bestUniversityRanking = data ? data.find(item => item.id === 'UNIVERSITIES-BEST-RANKED-RANK') : '';
  let bestUniversityContent = '';

  if (bestUniversity && bestUniversityRanking) {
    bestUniversityContent = (
      <div className="block">
        <div className="text-subheader">Best University &amp; Ranking</div>
        <div className="education-bestUni-wrapper card fill-black">
          <div className="text-subheader no-margin-bottom">#{bestUniversityRanking.int_value}</div>
          <div className="text-subheader no-margin-bottom">{bestUniversity.string_value}</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-header">{label}</h2>
      <div className="education-wrapper">
        <div>
          <div>
            <div className="text-subheader">Percent of Happy High School Students</div>
            <div className="education-happinessPercent">
              <div className="text-header">{parseFloat(studentHappiness.percent_value * 100).toFixed(0)}%</div>
            </div>
          </div>
          {bestUniversityContent}
        </div>
        <div>
          <div>
            <div className="text-subheader">Average PISA Scores (High School)</div>
            <p>The Program for International Student Assessment (PISA) is an international assessment that measures 15-year-old students' reading, mathematics, and science literacy every three years. Scores are reported on a scale from 0 to 1,000.</p>
            <p><a href="https://nces.ed.gov/surveys/pisa/" target="_blank">Learn more about PISA</a></p>
            <ul className="education-pisaScore-list">
              <li>
                <h4 className="is-emphasized is-sublte">Subject</h4>
                <h4 className="is-emphasized is-sublte">PISA Score</h4>
              </li>
              <li>
                <h4 className="education-subject">Math</h4>
                <p className="is-emphasized">{Math.round(pisaMathScore.float_value).toFixed(0)}</p>
              </li>
              <li>
                <h4 className="education-subject">Reading</h4>
                <p className="is-emphasized">{Math.round(pisaReadingScore.float_value).toFixed(0)}</p>
              </li>
              <li>
                <h4 className="education-subject">Science</h4>
                <p className="is-emphasized">{Math.round(pisaScienceScore.float_value).toFixed(0)}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;