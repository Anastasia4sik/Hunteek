import React from 'react';

import { UserPhoto } from '../userPhoto';

import { ReferralPerson } from '../../../types/referralPerson';

type Props = {
  personInfo: ReferralPerson,
};

export const ReferralCard: React.FC<Props> = ({ personInfo }) => {
  return (
    <a href={`#ref-${personInfo.slug}`} className="referral__card d-flex flex-column align-items-center block">
      <UserPhoto size={20} photo={personInfo.photo} />

      <div className="referral__card__user d-flex flex-column align-items-center">
        <p className="referral__card__name list-text">
          {personInfo.name}
        </p>

        <p className="referral__card__number light-text">
          {personInfo.number}
        </p>
      </div>

      <p className="referral__card__amount list-text">
        {personInfo.amount}
      </p>
    </a>
  );
};
