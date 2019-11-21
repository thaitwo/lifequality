import React from 'react';
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import * as HighchartsSolidGauge from 'highcharts/modules/solid-gauge';
import { gaugeOptions } from '../constants/options/climateOptions';


/**
 * HELPER
 */
import { dataExists } from '../helper';

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
      const sunshineAmount = data.find(category => category.id === 'WEATHER-SUNSHINE-AMOUNT');
      const avgRainyDays = avgRainyDaysExists ? data.find(category => category.id === 'WEATHER-AV-NUMBER-RAINY-DAYS') : '';
      const avgSunshine = avgSunshineExists ? data.find(category => category.id === 'WEATHER-AV-POSSIBILITY-SUNSHINE') : '';

      if (avgRainyDaysExists) {
        avgRainyDaysContent = (
          <div>
            <p>{avgRainyDays.label}</p>
            <div>{avgRainyDays.float_value}</div>
          </div>
        );
      }

      if (avgSunshineExists) {
        avgSunshineContent = (
          <div>
            <p>{avgSunshine.label}</p>
            <div>{avgSunshine.percent_value}</div>
          </div>
        );
      }

      return (
        <div>
          <div>
            <p>{weatherType.label}</p>
            <div>{weatherType.string_value}</div>
          </div>
          <div>
            <p>{avgDayLength.label}</p>
            <div>{avgDayLength.float_value}</div>
          </div>
          <div>
            <p>{avgHighTemp.label}</p>
            <div>{avgHighTemp.string_value}</div>
          </div>
          <div>
            <p>{avgLowTemp.label}</p>
            <div>{avgLowTemp.string_value}</div>
          </div>
          {avgRainyDaysContent}
          {avgSunshineContent}
          <div>
            <p>{sunshineAmount.label}</p>
            <div>{sunshineAmount.float_value}</div>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2 className="text-subheader">{this.props.label}</h2>
        {this.renderData()}
      </div>
    )
  }
}

export default Climate;