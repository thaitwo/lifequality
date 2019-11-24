import React from 'react'

const JobMarket = ({ label, data }) => {
  const jobAvail = data ? data.find(item => item.id === 'STARTUP-JOBS-AVAILABLE') : '';
  const startupSalary = data ? data.find(item => item.id === 'STARTUP-SALARIES-DETAIL') : '';

  return (
    <div>
      <h2 className="text-header">{label}</h2>
      <div>
        <div className="text-subheader">{jobAvail.label}</div>
        <div>{jobAvail.int_value}</div>
      </div>
      <div>
        <div className="text-subheader">{startupSalary.label}</div>
        <div>{startupSalary.currency_dollar_value}</div>
      </div>
    </div>
  );
}

export default JobMarket;