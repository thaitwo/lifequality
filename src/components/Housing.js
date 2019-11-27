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
          <div className="icon-stack-circle is-large fill-blue">
            <FontAwesomeIcon className="icon-home iconSize-large" icon={faHome} />
          </div>
          <div>
            <div className="housing-price">${largeAptRent.currency_dollar_value}</div>
            <div className="housing-description">{largeAptRent.label}</div>
          </div>
        </li>
        <li>
          <div className="icon-stack-circle is-medium fill-blue">
            <FontAwesomeIcon className="icon-home iconSize-medium" icon={faHome} />
          </div>
          <div>
            <div className="housing-price">${mediumAptRent.currency_dollar_value}</div>
            <div className="housing-description">{mediumAptRent.label}</div>
          </div>
        </li>
        <li>
          <div className="icon-stack-circle is-small fill-blue">
            <FontAwesomeIcon className="icon-home iconSize-small" icon={faHome} />
          </div>
          <div>
            <div className="housing-price">${smallAptRent.currency_dollar_value}</div>
            <div className="housing-description">{smallAptRent.label}</div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Housing;