import React from 'react'

const JobMarket = ({ data }) => {
  let startupSalary = data ? data.find(item => item.id === 'STARTUP-SALARIES-DETAIL') : '';
  let jobAvail = data ? data.find(item => item.id === 'STARTUP-JOBS-AVAILABLE') : '';
  let jobAvailContent = '';
  let startupSalaryContent = '';

  if (jobAvail) {
    jobAvailContent = (
      <div>
        <h4 className="text-subheader">{jobAvail.label}</h4>
        <h3 className="text-header">{jobAvail.int_value}</h3>
      </div>
    );
  }

  if (startupSalary) {
    startupSalaryContent = (
      <div>
        <h4 className="text-subheader">{startupSalary.label}</h4>
        <h3 className="text-header">${(startupSalary.currency_dollar_value).toLocaleString('en')}</h3>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-header">Job Market</h2>
      <div className="job-market-stats">
        {jobAvailContent}
        {startupSalaryContent}
      </div>
    </div>
  );
}

export default JobMarket;