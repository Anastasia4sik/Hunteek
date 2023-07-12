import React from 'react';

import { UserPhoto } from '../userPhoto';

import photo from '../../../img/photo/user.png';

export const ReferraCard: React.FC = () => {
  return (
    <div className="referral__card d-flex flex-column align-items-center block">
      <UserPhoto size={20} photo={photo} />

      <div className="referral__card__user d-flex flex-column align-items-center">
        <p className="referral__card__name list-text">
          Olena Maccorter
        </p>

        <p className="referral__card__number light-text">
          36578
        </p>
      </div>

      <p className="referral__card__amount list-text">
        1200.00
      </p>
    </div>
  );
};
