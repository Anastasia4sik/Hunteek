import React from 'react';

import { UserPhoto } from '../../../shared/userPhoto';

import { ReferralPerson } from '../../../../types/referralPerson';
import { CatalogFull } from '../../content/catalogFull';
import { useTranslation } from 'react-i18next';

type Props = {
  personInfo: ReferralPerson,
};

export const Reporting: React.FC<Props> = ({ personInfo }) => {
  const { t } = useTranslation();

  return (
    <div className="reporting d-flex flex-column align-items-center justify-content-center">
      <div className="reporting__content">
        <div className="repoting__top text-center">
          <div className="reporting__top__photo">
            <UserPhoto size={100} photo={personInfo.photo} />
          </div>

          <h3 className="main-text reporting__top__name">
            {personInfo.name}
          </h3>

          <p className="light-text reporting__top__number">
            {personInfo.number}
          </p>

          <p className="main-text reporting__top__profit">
            {t('profit')}
          </p>

          <p className="main-text reporting__top__amount">
            {personInfo.amount}
          </p>
        </div>

        <div className="reporting__catalog scroll">
          <CatalogFull forSideInfo />
        </div>
      </div>
    </div>
  );
};
