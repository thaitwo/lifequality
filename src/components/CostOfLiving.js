import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAppleAlt,
  faBreadSlice,
  faBeer,
  faMugHot,
  faTicketAlt,
  faRunning,
  faBusAlt,
  faHamburger,
  faTaxi,
  faUtensils
} from '@fortawesome/free-solid-svg-icons';


const icons = [
  <FontAwesomeIcon className="icon-apple iconSize-small" icon={faAppleAlt} />,
  <FontAwesomeIcon className="icon-bread iconSize-small" icon={faBreadSlice} />,
  <FontAwesomeIcon className="icon-mug iconSize-small" icon={faMugHot} />,
  <FontAwesomeIcon className="icon-ticket iconSize-small" icon={faTicketAlt} />,
  <FontAwesomeIcon className="icon-fitness iconSize-small" icon={faRunning} />,
  <FontAwesomeIcon className="icon-beer iconSize-small" icon={faBeer} />,
  <FontAwesomeIcon className="icon-bus iconSize-small" icon={faBusAlt} />,
  <FontAwesomeIcon className="icon-burger iconSize-small" icon={faHamburger} />,
  <FontAwesomeIcon className="icon-taxi iconSize-small" icon={faTaxi} />,
  <FontAwesomeIcon className="icon-utensils iconSize-small" icon={faUtensils} />,
];


class CostOfLiving extends React.Component {
  constructor(props) {
    super(props);
  }

  renderData() {
    const { data } = this.props;

    if (data) {
      return data.slice(1).map((item, index) => (
        <li key={index}>
          <div className="costLiving-iconData-wrapper">
            <div className="costLiving-icon-wrapper">
              {icons[index]}
            </div>
            <div>{item.label}</div>
          </div>
          <div className="costLiving-cost">${item.currency_dollar_value.toFixed(2)}</div>
        </li>
      ));
    }
  }

  render() {
    return (
      <div>
        <h2 className="text-header">{this.props.label}</h2>

        <div className="text-subheader">Daily / Monthly Expenses</div>
        <ul className="costLiving-wrapper">
          {this.renderData()}
        </ul>
      </div>
    )
  }
}

export default CostOfLiving;