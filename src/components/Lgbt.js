import React from 'react';

const Lgbt = ({ data }) => {
  const homosexualityRights = data ? data.find(item => item.id === 'LGBT-DETAIL-HOMOSEXUALITY') : '';
  const adoptionRights = data ? data.find(item => item.id === 'LGBT-DETAIL-ADOPTION') : '';
  const discrimination = data ? data.find(item => item.id === 'LGBT-DETAIL-DISCRIMINATION') : '';
  const genderChangeRights = data ? data.find(item => item.id === 'LGBT-DETAIL-CHANGING-GENDER') : '';
  const bloodDonation = data ? data.find(item => item.id === 'LGBT-DETAIL-DONATING-BLOOD') : '';
  const marriageRights = data ? data.find(item => item.id === 'LGBT-DETAIL-MARRIAGE') : '';

  return (
    <div>
      <h2 className="text-header">LGBT Rights</h2>
      <ul className="lgbt-list">
        <li>
          <div>Homosexuality</div>
          <div className="is-emphasized">{homosexualityRights.string_value}</div>
        </li>
        <li>
          <div>Marriage</div>
          <div className="is-emphasized">{marriageRights.string_value}</div>
        </li>
        <li>
          <div>Adoption</div>
          <div className="is-emphasized">{adoptionRights.string_value}</div>
        </li>
        <li>
          <div>Discrimination</div>
          <div className="is-emphasized">{discrimination.string_value}</div>
        </li>
        <li>
          <div>Gender Change</div>
          <div className="is-emphasized">{genderChangeRights.string_value}</div>
        </li>
        <li>
          <div>Blood Donation</div>
          <div className="is-emphasized">{bloodDonation.string_value}</div>
        </li>
      </ul>
    </div>
  );
}

export default Lgbt;