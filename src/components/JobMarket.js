import React from 'react'

const JobMarket = ({ label, data }) => {
  const jobAvailScore = data ? data.find(item => item.id === 'STARTUP-JOBS-AVAILABLE-TELESCORE') : '';
  const jobAvail = data ? data.find(item => item.id === 'STARTUP-JOBS-AVAILABLE') : '';
  const startupSalaryScore = data ? data.find(item => item.id === 'STARTUP-SALARIES') : '';
  const startupSalary = data ? data.find(item => item.id === 'STARTUP-SALARIES-DETAIL') : '';

  return (
    <div>
      <h2 className="text-subheader">{label}</h2>
      <div>
        <div>{jobAvailScore.label}</div>
        <div>{jobAvailScore.float_value}</div>
      </div>
      <div>
        <div>{jobAvail.label}</div>
        <div>{jobAvail.int_value}</div>
      </div>
      <div>
        <div>{startupSalaryScore.label}</div>
        <div>{startupSalaryScore.float_value}</div>
      </div>
      <div>
        <div>{startupSalary.label}</div>
        <div>{startupSalary.currency_dollar_value}</div>
      </div>
    </div>
  );
}

export default JobMarket;