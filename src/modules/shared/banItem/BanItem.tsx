import React from 'react';

import unlock from '../../../img/icons/unlock.svg';
import { UserPhoto } from '../userPhoto';
import { Employee } from '../../../types/Employee';

type Props = {
  employee: Employee,
};

export const BanItem: React.FC<Props> = ({ employee }) => {
  if (!employee) {
    return null;
  }

  const {
    name,
    lastname,
    photo,
    homeCity,
    homeCountry,
  } = employee;

  return (
    <div className="banItem d-flex flex-row justify-content-between align-items-center">
      <UserPhoto size={4} height={120} photo={photo} />

      <p className="banItem__name bold-text">
        {`${name} ${lastname}`}
      </p>

      <p className="banItem__location bold-text">
        {`${homeCountry}, ${homeCity}`}
      </p>

      <p className="banItem__date bold-text">
        12.02.2023
      </p>

      <a href="/" className="banItem__unban d-flex flex-row">
        <img src={unlock} alt="Unban" />
        <p className="bold-text">
          Unban
        </p>
      </a>
    </div>
  );
};
