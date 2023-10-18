import React, {useState} from 'react';

import eye from '../../../img/icons/card/eye.svg';
import message from '../../../img/icons/card/message.svg';
import { Rate } from '../rate';
import { UserPhoto } from '../userPhoto';

import { Employee } from '../../../types/Employee';
import { useTranslation } from 'react-i18next';

type Props = {
  employee: Employee,
  isPopupVisible: boolean;
  togglePopup: () => void;
  isLightTheme?: boolean;
};

export const Card: React.FC<Props> = ({
  employee,
  isPopupVisible,
  togglePopup,
  isLightTheme,
}) => {
  const {
    name,
    lastname,
    photo,
    position,
    workCity,
    whereToWork,
    typeOfWork,
    rate,
  } = employee;

  const { t } = useTranslation();

  const showPopup = () => {
    if (!isPopupVisible) {
      togglePopup();
    }
  };

  return (
    <div className={`card block ${isLightTheme ? 'light': ''}`}>
      <div className="card__title text-center">
        <h3 className="card__title__p text-center main-text">
          { position }
        </h3>
      </div>

      <a href="#profile">
        <div className={`card__person ${isLightTheme ? 'light': ''}`}>
          <div className="card__person__inner d-flex flex-row justify-content-between align-items-center">
            <div className="card__person__content d-flex flex-column">
              <p className="card__person__name main-text">
                {`${name} ${lastname}`}
              </p>

              <Rate rateIs={rate}/>
            </div>

            <UserPhoto size={100} photo={photo} />
          </div>
        </div>

        <div className={`card__info d-flex flex-column justify-content-center  ${isLightTheme ? 'light': ''}`}>
          <p className="card__info__desc main-text">
            { workCity }
          </p>

          <p className="card__info__desc main-text">
            { whereToWork }
          </p>

          <p className="card__info__desc main-text">
            { typeOfWork }
          </p>
        </div>

        <div className="card__media d-flex flex-row">
          <div className="card__media__item d-flex flex-row">
            <img src={eye} alt="Eye" />

            <p className="card__media__item__desc">194</p>
          </div>

          <div className="card__media__item d-flex flex-row">
            <img src={message} alt="Message" />

            <p className="card__media__item__desc">134</p>
          </div>
        </div>
      </a>

      <div className="card__btn">
        <button
          type="button"
          className={`card__btn__button main-text btn-grey  ${isLightTheme ? 'light': ''}`}
          id="CardBtn"
          onClick={showPopup}
        >
          {t('hire')}
        </button>
      </div>
    </div>
  );
};
