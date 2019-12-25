import React from 'react';
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import * as HighchartsSolidGauge from 'highcharts/modules/solid-gauge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faSun,
	faCloudRain,
	faTemperatureHigh,
	faTemperatureLow
} from '@fortawesome/free-solid-svg-icons';

/**
 * HELPER
 */
import { dataExists, findData, toFahrenheit } from '../helper';

HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);

const Climate = ({ climate }) => {
	const renderData = () => {
		if (climate) {
			let weatherTypeContent = '';
			let avgRainyDaysContent = '';
			let avgSunshineContent = '';
			let avgDayLengthContent = '';
			let avgHighTempContent = '';
			let avgLowTempContent = '';

			const hasWeatherType = dataExists(climate, 'WEATHER-TYPE');
			const hasAvgDayLength = dataExists(climate, 'WEATHER-AV-DAY-LENGTH');
			const hasAvgRainyDays = dataExists(climate, 'WEATHER-AV-NUMBER-RAINY-DAYS');
			const hasAvgSunshine = dataExists(climate, 'WEATHER-AV-POSSIBILITY-SUNSHINE');
			const hasAvgHighTemp = dataExists(climate, 'WEATHER-AVERAGE-HIGH');
			const hasAvgLowTemp = dataExists(climate, 'WEATHER-AVERAGE-LOW');

			if (hasWeatherType) {
				const weatherType = findData(climate, 'WEATHER-TYPE');
				weatherTypeContent = (
					<div className="climate-weatherType">
						<p className="text-subheader">{weatherType.label}</p>
						<div>{weatherType.string_value}</div>
					</div>
				);
			}

			if (hasAvgDayLength) {
				const avgDayLength = findData(climate, 'WEATHER-AV-DAY-LENGTH');
				avgDayLengthContent = (
					<div>
						<p className="text-subheader">{avgDayLength.label}</p>
						<div className="climate-iconData-wrapper">
							<FontAwesomeIcon className="icon-sun iconSize-medium" icon={faSun} />
							<div className="text-header">{String(avgDayLength.float_value)}</div>
						</div>
					</div>
				);
			}

			if (hasAvgSunshine) {
				const avgSunshine = findData(climate, 'WEATHER-AV-POSSIBILITY-SUNSHINE');
				const avgSunshinePercent = (avgSunshine.percent_value * 100).toFixed(0);
				avgSunshineContent = (
					<div>
						<p className="text-subheader">Average Sunshine Per Year</p>
						<div className="climate-iconData-wrapper">
							<FontAwesomeIcon className="icon-sun iconSize-medium" icon={faSun} />
							<div className="text-header">{String(avgSunshinePercent)}%</div>
						</div>
					</div>
				);
			}

			if (hasAvgRainyDays) {
				const avgRainyDays = findData(climate, 'WEATHER-AV-NUMBER-RAINY-DAYS');
				avgRainyDaysContent = (
					<div>
						<p className="text-subheader">Average Rainy Days Per Year</p>
						<div className="climate-iconData-wrapper">
							<FontAwesomeIcon className="icon-rain iconSize-medium" icon={faCloudRain} />
							<div className="text-header">{String(avgRainyDays.float_value)}</div>
						</div>
					</div>
				);
			}

			if (hasAvgHighTemp) {
				const avgHighTemp = findData(climate, 'WEATHER-AVERAGE-HIGH');
				avgHighTempContent = (
					<div>
						<p className="text-subheader">Average High Temperature</p>
						<div className="climate-iconData-wrapper">
							<FontAwesomeIcon className="icon-tempHigh iconSize-medium" icon={faTemperatureHigh} />
							<div className="text-header">{toFahrenheit(Number(avgHighTemp.string_value))}°F</div>
						</div>
					</div>
				);
			}

			if (hasAvgLowTemp) {
				const avgLowTemp = findData(climate, 'WEATHER-AVERAGE-LOW');
				avgLowTempContent = (
					<div>
						<p className="text-subheader">Average Low Temperature</p>
						<div className="climate-iconData-wrapper">
							<FontAwesomeIcon className="icon-tempLow iconSize-medium" icon={faTemperatureLow} />
							<div className="text-header">{toFahrenheit(Number(avgLowTemp.string_value))}°F</div>
						</div>
					</div>
				);
			}

			return (
				<div>
					<div className="climate-container">
						{weatherTypeContent}
						{avgSunshineContent}
						{avgRainyDaysContent}
						{avgDayLengthContent}
						{avgHighTempContent}
						{avgLowTempContent}
					</div>
				</div>
			);
		}
	};

	return (
		<div className="bg-black">
			<div className="section">
				<h2 className="text-header">Climate</h2>
				{renderData()}
			</div>
		</div>
	);
};

export default Climate;
