import React from 'react';

import delet from '../../../img/icons/delete.svg';
import upload from '../../../img/icons/upload.svg';
import { UserPhoto } from '../../shared/userPhoto';

import { Employee } from '../../../types/Employee';

type Props = {
  employee: Employee | undefined,
};

export const EditProfile: React.FC<Props> = ({ employee }) => {
  return (
    <div className="edit">
      <form action="#" className="edit__content">
        <fieldset className="edit__container">
          <label htmlFor="uploadPhoto" className="edit__label list-text"> Image </label>

          <div className="edit__photo d-flex flex-row align-items-center justify-content-between">
            <UserPhoto size={20} photo={employee?.photo} />

            <div className="edit__photo__upload">
              <label htmlFor="uploadPhoto" className="edit__photo__upload__label btn-grey">
                <div className="edit__photo__upload__label__content d-flex align-items-center flex-row">
                  <img src={upload} alt="Upload Icon" className="edit__photo__upload__label__icon" />

                  <span className="edit__photo__upload__label__text bold-text">Upload Image</span>
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
            Name
          </legend>

          <input type="text" id="name" placeholder="None" className="edit__input edit__input--name list-text" />
        </fieldset>

        <fieldset className="edit__container d-flex flex-column">
          <legend className="edit__label list-text">
            Last Name
          </legend>

          <input type="text" id="lastName" placeholder="None" className="edit__input edit__input--lastName list-text" />
        </fieldset>

        <fieldset className="edit__container d-flex flex-column">
          <legend className="edit__label list-text">
            Description
          </legend>

          <textarea id="desc" placeholder="None" className="edit__input edit__input--desc list-text" />
        </fieldset>

        <fieldset className="edit__container d-flex flex-column">
          <legend className="edit__label list-text">
            Email
          </legend>

          <input type="email" id="email" placeholder="None" className="edit__input edit__input--email list-text" />
        </fieldset>

        <fieldset className="edit__container d-flex flex-column">
          <legend className="edit__label list-text">
            Phone
          </legend>

          <input type="number" id="phone" placeholder="None" className="edit__input edit__input--phone list-text" />
        </fieldset>

        <fieldset className="edit__container d-flex flex-column">
          <legend className="edit__label list-text">
            Telegram
          </legend>

          <input type="url" id="telegram" placeholder="None" className="edit__input edit__input--telegram list-text" />
        </fieldset>

        <fieldset className="edit__container d-flex flex-column">
          <legend className="edit__label list-text">
            Linkedin
          </legend>

          <input type="url" id="linkedin" placeholder="None" className="edit__input edit__input--linkedin list-text" />
        </fieldset>

        <fieldset className="edit__container d-flex flex-column">
          <legend className="edit__label list-text">
            GitHub
          </legend>

          <input type="url" id="github" placeholder="None" className="edit__input edit__input--github list-text" />
        </fieldset>

        <button type="submit" className="edit__btn btn-grey">
          Submit
        </button>
      </form>
    </div>
  );
};
