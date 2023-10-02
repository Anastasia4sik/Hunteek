import React from 'react';

import delet from '../../../../img/icons/delete.svg';
import upload from '../../../../img/icons/upload.svg';
import photo from '../../../../img/photo/user.png';

import { UserPhoto } from '../../../shared/userPhoto';

import { useTranslation } from 'react-i18next';

export const CreateProject: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="edit">
      <form action="#" className="edit__content">
        <fieldset className="edit__container">
          <label htmlFor="uploadPhoto" className="edit__label list-text"> 
            {t('image')}
          </label>

          <div className="edit__photo d-flex flex-row align-items-center justify-content-between">
            <UserPhoto size={20} photo={photo} />

            <div className="edit__photo__upload">
              <label htmlFor="uploadPhoto" className="edit__photo__upload__label btn-grey">
                <div className="edit__photo__upload__label__content d-flex align-items-center flex-row">
                  <img src={upload} alt="Upload Icon" className="edit__photo__upload__label__icon" />

                  <span className="edit__photo__upload__label__text bold-text">
                    {t('upload')}
                  </span>
                </div>
              </label>

              <input id="uploadPhoto" type="file" className="edit__photo__upload edit__input" />
            </div>

            <button type="button" className="edit__photo__delete btn-grey">
              <img src={delet} alt="Delete" className="edit__photo__delete__img" />
            </button>
          </div>
        </fieldset>

        <fieldset className="edit__container d-flex flex-column">
          <legend className="edit__label list-text">
            {t('vacancy')}
          </legend>

          <input type="text" id="vacancy" placeholder={t('none')} className="edit__input edit__input--name list-text" />
        </fieldset>

        <fieldset className="edit__container d-flex flex-column">
          <legend className="edit__label list-text">
            {t('company__name')}
          </legend>

          <input type="text" id="name" placeholder={t('none')} className="edit__input edit__input--name list-text" />
        </fieldset>

        <fieldset className="edit__container d-flex flex-column">
          <legend className="edit__label list-text">
            {t('desc')}
          </legend>

          <textarea id="desc" placeholder={t('none')} className="edit__input edit__input--desc list-text" />
        </fieldset>

        <fieldset className="edit__container d-flex flex-column">
          <legend className="edit__label list-text">
            {t('salary')}
          </legend>

          <input type="text" id="salary" placeholder={t('none')} className="edit__input edit__input--name list-text" />
        </fieldset>

        <button type="submit" className="edit__btn btn-grey">
          {t('submit')}
        </button>
      </form>
    </div>
  );
};
