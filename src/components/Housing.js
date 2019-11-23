import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Housing = ({ label, data }) => {
  const largeAptRent = data ? data.find(item => item.id === 'APARTMENT-RENT-LARGE') : '';
  const mediumAptRent = data ? data.find(item => item.id === 'APARTMENT-RENT-MEDIUM') : '';
  const smallAptRent = data ? data.find(item => item.id === 'APARTMENT-RENT-SMALL') : '';

  return (
    <div>
      <h2 className="text-subheader">Housing Costs</h2>
      <ul className="housing-cards-wrapper">
        <li>
          <div>{largeAptRent.label}</div>
          <div>
            <FontAwesomeIcon className="icon-home iconSize-large" icon={faHome} />
          </div>
          <div>${largeAptRent.currency_dollar_value}</div>
        </li>
        <li>
          <div>{mediumAptRent.label}</div>
          <div>
            <FontAwesomeIcon className="icon-home iconSize-medium" icon={faHome} />
          </div>
          <div>${mediumAptRent.currency_dollar_value}</div>
        </li>
        <li>
          <div>{smallAptRent.label}</div>
          <div>
            <FontAwesomeIcon className="icon-home iconSize-small" icon={faHome} />
          </div>
          <div>${smallAptRent.currency_dollar_value}</div>
        </li>
      </ul>
    </div>
  )
}

export default Housing;