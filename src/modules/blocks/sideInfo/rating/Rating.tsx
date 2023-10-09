import React, { useState } from 'react';

import starBig from '../../../../img/icons/card/rate/bigStar.svg';

import { Rate } from '../../../shared/rate';
import { useTranslation } from 'react-i18next';
import { Popup } from '../../../Popup';

export const Rating: React.FC = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const { t } = useTranslation();

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className="rating d-flex flex-column">
      <img src={starBig} alt="Star" className="rating__img" />

      <div className="rating__content d-flex flex-column">
        <div className="rating__block">
          <p className="big-text">
            {t('overall_rat')}
          </p>

          <Rate forRatingBlock />
        </div>

        <div className="rating__block">
          <p className="big-text">
            {t('operation__speed')}
          </p>

          <Rate forRatingBlock />
        </div>

        <div className="rating__block">
          <p className="big-text">
            {t('work__quality')}
          </p>

          <Rate forRatingBlock />
        </div>

        <div className="rating__block">
          <p className="big-text">
            {t('work__price')}
          </p>

          <Rate forRatingBlock />
        </div>
      </div>

      <button
        type="button"
        className="rating__btn btn-grey"
        onClick={() => setIsPopupVisible(true)}
      >
        {t('evaluate')}
      </button>

      {isPopupVisible && (
        <Popup
          text={t('evaluated__rate')}
          onClose={togglePopup}
        />
      )}
    </div>
  );
};
