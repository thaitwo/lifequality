import React from 'react';

const Housing = ({ label, data }) => {
  const largeAptRent = data ? data.find(item => item.id === 'APARTMENT-RENT-LARGE') : '';
  const mediumAptRent = data ? data.find(item => item.id === 'APARTMENT-RENT-MEDIUM') : '';
  const smallAptRent = data ? data.find(item => item.id === 'APARTMENT-RENT-SMALL') : '';

  return (
    <div>
      <h2 className="text-subheader">{label}</h2>
      <div>
        <div>{largeAptRent.label}</div>
        <div>{largeAptRent.currency_dollar_value}</div>
      </div>
      <div>
        <div>{mediumAptRent.label}</div>
        <div>{mediumAptRent.currency_dollar_value}</div>
      </div>
      <div>
        <div>{smallAptRent.label}</div>
        <div>{smallAptRent.currency_dollar_value}</div>
      </div>
    </div>
  )
}

export default Housing;