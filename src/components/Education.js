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

  return (
    <div>
      <h2 className="text-header">{label}</h2>
      <div className="education-wrapper">
        <div>
          <div>
            <div className="text-subheader">{studentHappiness.label}</div>
            <div className="education-happinessPercent">
              <div className="text-header">{parseFloat(studentHappiness.percent_value * 100).toFixed(0)}%</div>
            </div>
          </div>
          <div className="block">
            <div className="text-subheader">Best University</div>
            <div className="education-bestUni-wrapper">
              <div>#{bestUniversityRanking.int_value}</div>
              <div>{bestUniversity.string_value}</div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="text-subheader">Average PISA Scores</div>
            <ul className="education-pisaScore-list">
              <li>
                <h4 className="is-emphasized">Subject</h4>
                <h4 className="is-emphasized">PISA Score</h4>
              </li>
              <li>
                <h4 className="education-subject">Math</h4>
                {Math.round(pisaMathScore.float_value).toFixed(0)}
              </li>
              <li>
                <h4 className="education-subject">Reading</h4>
                {Math.round(pisaReadingScore.float_value).toFixed(0)}
              </li>
              <li>
                <h4 className="education-subject">Science</h4>
                {Math.round(pisaScienceScore.float_value).toFixed(0)}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;