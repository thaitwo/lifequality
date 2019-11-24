import React from 'react';

const Safety = ({ label, data }) => {
  const gunDeathRate = data ? data.find(item => item.id === 'GUN-DEATH-RATE') : '';
  const gunOwnership = data ? data.find(item => item.id === 'GUN-OWNERSHIP') : '';

  return (
    <div>
      <h2 className="text-header">{label}</h2>
      <div className="safety-cards-wrapper">
        <div className="safety-gunDeaths">
          <div>
            <div className="text-subheader no-margin-bottom">Gun-Related Deaths</div>
            <p>Per 100K People / Year</p>
          </div>
          <div className="text-header">{gunDeathRate.int_value}</div>
        </div>
        <div className="safety-gunOwnage">
          <div className="text-subheader no-margin-bottom">Guns Per 100 People</div>
          <div className="text-header">{gunOwnership.int_value}</div>
        </div>
      </div>
    </div>
  );
}

export default Safety;