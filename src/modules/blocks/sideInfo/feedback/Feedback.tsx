import React, { useState } from 'react';

import upload from '../../../../img/icons/upload.svg';
import { useTranslation } from 'react-i18next';
import { Popup } from '../../../Popup';

export const Feedback: React.FC = () => {
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
            Email
          </legend>

          <input type="email" id="email" placeholder={t('none')} className="edit__input edit__input--name list-text" />
        </fieldset>

        <fieldset className="edit__container">
          <label htmlFor="attachFile" className="edit__label list-text"> 
            {t('attach__files')}
          </label>

          <div className="edit__photo d-flex flex-row align-items-center justify-content-between">
            <input type="text" className="edit__input list-text w-100" placeholder={t('none')} />
            
            <div className="edit__photo__upload">
              <label htmlFor="uploadFile" className="edit__photo__upload__label btn-grey">
                <div className="edit__photo__upload__label__content d-flex align-items-center flex-row">
                  <img src={upload} alt="Upload Icon" className="edit__photo__upload__label__icon" />
                </div>
              </label>

              <input id="uploadPhoto" type="file" className="edit__photo__upload edit__input" />
            </div>
          </div>
        </fieldset>

        <fieldset className="edit__container d-flex flex-column">
          <legend className="edit__label list-text">
            {t('desc')}
          </legend>

          <textarea id="email" placeholder={t('none')} className="edit__input edit__input--name list-text" />
        </fieldset>

        <button
          type="button"
          className="edit__btn btn-grey"
          onClick={() => setIsPopupVisible(true)}
        >
          {t('send__feedback')}
        </button>
      </form>

      {isPopupVisible && (
        <Popup text={t('success__transfer')} onClose={togglePopup} />
      )}
    </div>
  );
};
