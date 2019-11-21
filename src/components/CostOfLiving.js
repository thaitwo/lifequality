import React from 'react';

class CostOfLiving extends React.Component {
  constructor(props) {
    super(props);
  }

  renderData() {
    const { data } = this.props;

    if (data) {
      return data.slice(1).map((item, index) => (
        <li key={index}>
          <div>{item.label}</div>
          <div>${item.currency_dollar_value.toFixed(2)}</div>
        </li>
      ));
    }
  }

  render() {
    return (
      <div>
        <h2 className="text-subheader">{this.props.label}</h2>
        <ul>
          {this.renderData()}
        </ul>
      </div>
    )
  }
}

export default CostOfLiving;