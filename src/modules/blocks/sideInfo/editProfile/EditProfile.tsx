import React from 'react';

import delet from '../../../../img/icons/delete.svg';
import upload from '../../../../img/icons/upload.svg';
import { UserPhoto } from '../../../shared/userPhoto';

import { Recruiter } from '../../../../types/Recruiter';

import { t } from 'i18next';

type Props = {
  recruteir: Recruiter | undefined,
};

export const EditProfile: React.FC<Props> = ({ recruteir }) => {
  if (recruteir === undefined) {
    return null;
  }

  const {
    name,
    lastname,
    photo,
    desc,
    email,
    phone,
    telegram,
    linkedin,
    github,
  } = recruteir;


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
            {t('name')}
          </legend>

          <input type="text" id="name" placeholder={name} className="edit__input edit__input--name list-text" />
        </fieldset>

        <fieldset className="edit__container d-flex flex-column">
          <legend className="edit__label list-text">
            {t('lastname')}
          </legend>

          <input type="text" id="lastName" placeholder={lastname} className="edit__input edit__input--lastName list-text" />
        </fieldset>

        <fieldset className="edit__container d-flex flex-column">
          <legend className="edit__label list-text">
            {t('desc')}
          </legend>

          <textarea id="desc" placeholder={desc} className="edit__input edit__input--desc list-text" />
        </fieldset>

        <fieldset className="edit__container d-flex flex-column">
          <legend className="edit__label list-text">
            Email
          </legend>

          <input type="email" id="email" placeholder={email} className="edit__input edit__input--email list-text" />
        </fieldset>

        <fieldset className="edit__container d-flex flex-column">
          <legend className="edit__label list-text">
            {t('phone__num')}
          </legend>

          <input type="number" id="phone" placeholder={phone} className="edit__input edit__input--phone list-text" />
        </fieldset>

        <fieldset className="edit__container d-flex flex-column">
          <legend className="edit__label list-text">
            Telegram
          </legend>

          <input type="url" id="telegram" placeholder={telegram} className="edit__input edit__input--telegram list-text" />
        </fieldset>

        <fieldset className="edit__container d-flex flex-column">
          <legend className="edit__label list-text">
            Linkedin
          </legend>

          <input type="url" id="linkedin" placeholder={linkedin} className="edit__input edit__input--linkedin list-text" />
        </fieldset>

        <fieldset className="edit__container d-flex flex-column">
          <legend className="edit__label list-text">
            GitHub
          </legend>

          <input type="url" id="github" placeholder={github} className="edit__input edit__input--github list-text" />
        </fieldset>

        <button type="submit" className="edit__btn btn-grey">
          {t('submit')}
        </button>
      </form>
    </div>
  );
};
