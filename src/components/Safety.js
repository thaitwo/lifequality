import React from 'react';

const Safety = ({ label, data }) => {
  const crimeRateScore = data ? data.find(item => item.id === 'CRIME-RATE-TELESCORE') : '';
  const gunDeathRate = data ? data.find(item => item.id === 'GUN-DEATH-RATE') : '';
  const gunOwnership = data ? data.find(item => item.id === 'GUN-OWNERSHIP') : '';

  return (
    <div>
      <h2 className="text-subheader">{label}</h2>
      <div>
        <div>{crimeRateScore.label}</div>
        <div>{crimeRateScore.float_value}</div>
      </div>
      <div>
        <div>{gunDeathRate.label}</div>
        <div>{gunDeathRate.int_value}</div>
      </div>
      <div>
        <div>{gunOwnership.label}</div>
        <div>{gunOwnership.int_value}</div>
      </div>
    </div>
  );
}

export default Safety;