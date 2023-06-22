import React from 'react';

import unlock from '../../../img/icons/unlock.svg';
import { UserPhoto } from '../userPhoto';

export const BanItem: React.FC = () => {
  return (
    <div className="banItem d-flex flex-row justify-content-between align-items-center">
      <UserPhoto size={5} height={100} />

      <p className="banItem__name bold-text">
        Yuri Kudin
      </p>

      <p className="banItem__location bold-text">
        Ukraine, Lviv
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
