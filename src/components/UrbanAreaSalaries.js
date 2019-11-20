import React from 'react';
import Highcharts from 'highcharts';

class UrbanAreaSalaries extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      jobTitles: null,
      visibilityClass: ''
    };

    this.chart = null;

    this.handleOpenDropdown = this.handleOpenDropdown.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.salaries !== this.props.salaries) {
      const jobTitles = this.props.salaries.map(salary => salary.job.title);
      const salaryPercentiles = this.props.salaries.map(salary => salary.salary_percentiles);
      this.setState({ jobTitles });
      // const options = {

      // };
      
      // this.chart = new Highcharts.chart(options);
    }
  }

  handleOpenDropdown() {
    if (this.state.visibilityClass) {
      this.setState({ visibilityClass: '' });
    } else {
      this.setState({ visibilityClass: 'is-visible' });
    }
  }

  renderJobTitlesDropdown() {
    const { jobTitles } = this.state;
    if (jobTitles) {
      return jobTitles.map((job, i) => <li key={i}>{job}</li>);
    }
  }


  render() {
    const { jobTitles, visibilityClass } = this.state;

    return (
      <div>
        <div className="jt-dropdown">
          <button onClick={this.handleOpenDropdown}>{jobTitles ? jobTitles[0] : ''}</button>
          <ul className={visibilityClass}>
            {this.renderJobTitlesDropdown()}
          </ul>
        </div>
      </div>
    );
  }
}

export default UrbanAreaSalaries;