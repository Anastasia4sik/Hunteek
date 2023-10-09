import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';
import { Popup } from '../../../Popup';

export const Transfer: React.FC = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const { t } = useTranslation();

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className="edit">
      <form action="#" className="edit__content">
        <fieldset className="edit__container d-flex flex-column">
          <legend className="edit__label list-text">
            {t('wallet')}
          </legend>

          <select
            id="wallet"
            className="list-text edit__input"
          >
            <option value="" disabled selected hidden>
              {t('none')}
            </option>

            <option value="BTC - 0.312422 BTC">BTC - 0.312422 BTC</option>

            <option value="BTC - 0.312422 BTC">BTC - 0.312422 BTC</option>

            <option value="BTC - 0.312422 BTC">BTC - 0.312422 BTC</option>
          </select>
        </fieldset>

        <fieldset className="edit__container d-flex flex-column">
          <legend className="edit__label list-text">
            {t('payment__type')}
          </legend>

          <select
            id="paymentType"
            className="list-text edit__input"
          >
            <option value="" disabled selected hidden>
              {t('none')}
            </option>

            <option value="1">first</option>

            <option value="2">second</option>

            <option value="3">third</option>
          </select>
        </fieldset>

        <fieldset className="edit__container d-flex flex-column">
          <legend className="edit__label list-text">
            {t('card__num__ID')}
          </legend>

          <input type="number" id="number" placeholder={t('none')} className="edit__input list-text" />
        </fieldset>

        <div className="edit__container__row d-flex flex-row justify-content-between">
          <fieldset className="edit__container d-flex flex-column">
            <legend className="edit__label list-text">
              {t('amount')}
            </legend>

            <input type="number" id="amount" placeholder={t('none')} className="edit__input list-text" />
          </fieldset>

          <fieldset className="edit__container d-flex flex-column">
            <legend className="edit__label list-text">
              {t('currency')}
            </legend>

            <input type="number" id="currency" placeholder={t('none')} className="edit__input list-text" />
          </fieldset>
        </div>

        <button
          type="button"
          className="edit__btn btn-grey"
          onClick={() => setIsPopupVisible(true)}
        >
          {t('submit')}
        </button>
      </form>

      {isPopupVisible && (
        <Popup text={'The transfer was successful'} onClose={togglePopup} />
      )}
    </div>
  );
};
