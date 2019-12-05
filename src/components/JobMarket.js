import React from 'react'

const JobMarket = ({ label, data }) => {
  let startupSalary = data ? data.find(item => item.id === 'STARTUP-SALARIES-DETAIL') : '';
  let jobAvail = data ? data.find(item => item.id === 'STARTUP-JOBS-AVAILABLE') : '';
  let jobAvailContent = '';
  let startupSalaryContent = '';

  if (jobAvail) {
    jobAvailContent = (
      <div>
        <div className="text-subheader">{jobAvail.label}</div>
        <div>{jobAvail.int_value}</div>
      </div>
    );
  }

  if (startupSalary) {
    startupSalaryContent = (
      <div>
        <div className="text-subheader">{startupSalary.label}</div>
        <div>{startupSalary.currency_dollar_value}</div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-header">{label}</h2>
      {jobAvailContent}
      {startupSalaryContent}
    </div>
  );
}

export default JobMarket;