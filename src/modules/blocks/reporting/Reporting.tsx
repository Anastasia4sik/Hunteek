/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import React from 'react';

import { UserPhoto } from '../../shared/userPhoto';

import { ReferralPerson } from '../../../types/referralPerson';
import { CatalogFull } from '../catalogFull';

type Props = {
  personInfo: ReferralPerson,
};

export const Reporting: React.FC<Props> = ({ personInfo }) => {
  return (
    <div className="reporting d-flex flex-column align-items-center justify-content-center">
      <div className="reporting__content">
        <div className="repoting__top text-center">
          <div className="reporting__top__photo">
            <UserPhoto size={20} photo={personInfo.photo} />
          </div>

          <h3 className="main-text reporting__top__name">
            {personInfo.name}
          </h3>

          <p className="light-text reporting__top__number">
            {personInfo.number}
          </p>

          <p className="main-text reporting__top__profit">
            Profit
          </p>

          <p className="main-text reporting__top__amount">
            {personInfo.amount}
          </p>
        </div>

        <div className="reporting__catalog scroll">
          <CatalogFull isShorter forSideInfo />
        </div>
      </div>
    </div>
  );
};
