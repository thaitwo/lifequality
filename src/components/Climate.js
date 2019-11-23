import React from 'react';
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import * as HighchartsSolidGauge from 'highcharts/modules/solid-gauge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloudRain, faTemperatureHigh, faTemperatureLow } from '@fortawesome/free-solid-svg-icons';

/**
 * HELPER
 */
import { dataExists, toFahrenheit } from '../helper';

HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);

class Climate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      avgDayLength: 0
    }

    this.chart = null;
  }

  renderData() {
    const { data } = this.props;

    if (data) {
      let avgRainyDaysContent = '';
      let avgSunshineContent = '';
      const avgRainyDaysExists = dataExists(data, 'WEATHER-AV-NUMBER-RAINY-DAYS');
      const avgSunshineExists = dataExists(data, 'WEATHER-AV-POSSIBILITY-SUNSHINE');

      const weatherType = data.find(category => category.id === 'WEATHER-TYPE');
      const avgDayLength = data.find(category => category.id === 'WEATHER-AV-DAY-LENGTH');
      const avgHighTemp = data.find(category => category.id === 'WEATHER-AVERAGE-HIGH');
      const avgLowTemp = data.find(category => category.id === 'WEATHER-AVERAGE-LOW');
      const avgRainyDays = avgRainyDaysExists ? data.find(category => category.id === 'WEATHER-AV-NUMBER-RAINY-DAYS') : '';

      if (avgRainyDaysExists) {
        avgRainyDaysContent = (
          <div>
            <p className="text-subheader">Average Rainy Days Per Year</p>
            <div className="climate-iconData-wrapper">
              <FontAwesomeIcon className="icon-rain iconSize-medium" icon={faCloudRain} />
              <div className="text-header">{avgRainyDays.float_value}</div>
            </div>
          </div>
        );
      }

      return (
        <div>
          <div className="climate-weatherType">
            <p className="text-subheader">{weatherType.label}</p>
            <div>{weatherType.string_value}</div>
          </div>
          <div className="climate-data-wrapper">
            <div>
              <p className="text-subheader">{avgDayLength.label}</p>
              <div className="climate-iconData-wrapper">
                <FontAwesomeIcon className="icon-sun iconSize-medium" icon={faSun} />
                <div className="text-header">{avgDayLength.float_value}</div>
              </div>
            </div>
            {avgRainyDaysContent}
            <div>
              <p className="text-subheader">Average High Temperature</p>
              <div className="climate-iconData-wrapper">
                <FontAwesomeIcon className="icon-tempHigh iconSize-medium" icon={faTemperatureHigh} />
                <div className="text-header">{toFahrenheit(Number(avgHighTemp.string_value))}°F</div>
              </div>
            </div>
            <div>
              <p className="text-subheader">Average Low Temperature</p>
              <div className="climate-iconData-wrapper">
                <FontAwesomeIcon className="icon-tempLow iconSize-medium" icon={faTemperatureLow} />
                <div className="text-header">{toFahrenheit(Number(avgLowTemp.string_value))}°F</div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2 className="text-header">{this.props.label}</h2>
        {this.renderData()}
      </div>
    )
  }
}

export default Climate;