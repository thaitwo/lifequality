import React from 'react'

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
      <h2 className="text-subheader">{label}</h2>
      <div>
        <div>{studentHappiness.label}</div>
        <div>{parseFloat(studentHappiness.percent_value * 100).toFixed(0)}</div>
      </div>
      <div>
        <div>{pisaRanking.label}</div>
        <div>{pisaRanking.int_value}</div>
      </div>
      <div>
        <div>{Math.round(pisaMathScore.float_value).toFixed(0)}</div>
        <div>{Math.round(pisaReadingScore.float_value).toFixed(0)}</div>
        <div>{Math.round(pisaScienceScore.float_value).toFixed(0)}</div>
      </div>
      <div>
        <div>{bestUniversity.label}</div>
        <div>{bestUniversity.string_value}</div>
        <div>{bestUniversityRanking.int_value}</div>
      </div>
    </div>
  );
}

export default Education;