import React from 'react';

const Lgbt = ({ data }) => {
  const adoptionRights = data ? data.find(item => item.id === 'LGBT-DETAIL-ADOPTION') : '';
  const genderChangeRights = data ? data.find(item => item.id === 'LGBT-DETAIL-CHANGING-GENDER') : '';
  const bloodDonation = data ? data.find(item => item.id === 'LGBT-DETAIL-DONATING-BLOOD') : '';
  const marriageRights = data ? data.find(item => item.id === 'LGBT-DETAIL-MARRIAGE') : '';

  return (
    <div>
      <h2 className="text-subheader">LGBT Rights</h2>
      <div>
        <div>{adoptionRights.label}</div>
        <div>{adoptionRights.string_value}</div>
      </div>
      <div>
        <div>{genderChangeRights.label}</div>
        <div>{genderChangeRights.string_value}</div>
      </div>
      <div>
        <div>{bloodDonation.label}</div>
        <div>{bloodDonation.string_value}</div>
      </div>
      <div>
        <div>{marriageRights.label}</div>
        <div>{marriageRights.string_value}</div>
      </div>
    </div>
  );
}

export default Lgbt;