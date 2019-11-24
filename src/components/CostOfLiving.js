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
  <div className="icon-stackCircle is-small iconStack-red"><FontAwesomeIcon className="iconSize-small" icon={faAppleAlt} /></div>,
  <div className="icon-stackCircle is-small iconStack-brown"><FontAwesomeIcon className="iconSize-small" icon={faBreadSlice} /></div>,
  <div className="icon-stackCircle is-small iconStack-tan"><FontAwesomeIcon className="iconSize-small" icon={faMugHot} /></div>,
  <div className="icon-stackCircle is-small iconStack-blue"><FontAwesomeIcon className="iconSize-small" icon={faTicketAlt} /></div>,
  <div className="icon-stackCircle is-small iconStack-purple"><FontAwesomeIcon className="iconSize-small" icon={faRunning} /></div>,
  <div className="icon-stackCircle is-small iconStack-yellow"><FontAwesomeIcon className="iconSize-small" icon={faBeer} /></div>,
  <div className="icon-stackCircle is-small iconStack-teal"><FontAwesomeIcon className="iconSize-small" icon={faBusAlt} /></div>,
  <div className="icon-stackCircle is-small iconStack-green"><FontAwesomeIcon className="iconSize-small" icon={faHamburger} /></div>,
  <div className="icon-stackCircle is-small iconStack-amber"><FontAwesomeIcon className="iconSize-small" icon={faTaxi} /></div>,
  <div className="icon-stackCircle is-small iconStack-orange"><FontAwesomeIcon className="iconSize-small" icon={faUtensils} /></div>,
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
            {icons[index]}
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