import React from 'react';
import Highcharts from 'highcharts';
import more from 'highcharts/highcharts-more';
import { options } from '../constants/options/chartOptions';
more(Highcharts)

class UrbanAreaSalaries extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      jobTitles: null,
    };

    this.chart = null;

    // this.handleOpenDropdown = this.handleOpenDropdown.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.salaries !== this.props.salaries) {
      const jobTitles = this.props.salaries.map(salary => salary.job.title);
      const salaryPercentiles = this.props.salaries.map(salary => {
        const perc25 = Math.round(parseInt(salary.salary_percentiles.percentile_25) / 1000);
        const perc75 = Math.round(parseInt(salary.salary_percentiles.percentile_75) / 1000);
        return [perc25, perc75];
      });

      options.xAxis.categories = jobTitles;
      options.series[0].data = salaryPercentiles;
      // console.log(options.xAxis.categories)
      
      this.chart = new Highcharts.chart(options);
    }
  }



  render() {
    // const { jobTitles } = this.state;

    return (
      <div>
        <h2 className="text-subheader">Salaries</h2>
        <p className="text-body">Ranges are from 25th to 75th percentiles.</p>
        <div id="uaSalariesChart" style={chartStyles}></div>
      </div>
    );
  }
}

const chartStyles = {
  height: '1200px',
  width: '100%'
};

export default UrbanAreaSalaries;