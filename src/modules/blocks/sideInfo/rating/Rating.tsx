import React from 'react';

import starBig from '../../../../img/icons/card/rate/bigStar.svg';

import { Rate } from '../../../shared/rate';
import { t } from 'i18next';

export const Rating: React.FC = () => {

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

      <button type="submit" className="rating__btn btn-grey">
        {t('evaluate')}
      </button>
    </div>
  );
};
