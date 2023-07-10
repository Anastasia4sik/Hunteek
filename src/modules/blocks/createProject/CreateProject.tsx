/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import React from 'react';

import delet from '../../../img/icons/delete.svg';
import upload from '../../../img/icons/upload.svg';
import { UserPhoto } from '../../shared/userPhoto';

import photo from '../../../img/photo/user.png';

export const CreateProject: React.FC = () => {
  return (
    <div className="edit">
      <form action="#" className="edit__content scroll">
        <fieldset className="edit__container">
          <label htmlFor="uploadPhoto" className="edit__label list-text"> Image </label>

          <div className="edit__photo d-flex flex-row align-items-center justify-content-between">
            <UserPhoto size={20} photo={photo} />

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
            Vacancy
          </legend>

          <input type="text" id="vacancy" placeholder="None" className="edit__input edit__input--name list-text" />
        </fieldset>

        <fieldset className="edit__container d-flex flex-column">
          <legend className="edit__label list-text">
            Company Name
          </legend>

          <input type="text" id="name" placeholder="None" className="edit__input edit__input--name list-text" />
        </fieldset>

        <fieldset className="edit__container d-flex flex-column">
          <legend className="edit__label list-text">
            Description
          </legend>

          <textarea id="desc" placeholder="None" className="edit__input edit__input--desc list-text" />
        </fieldset>

        <fieldset className="edit__container d-flex flex-column">
          <legend className="edit__label list-text">
            Salary
          </legend>

          <input type="text" id="salary" placeholder="None" className="edit__input edit__input--name list-text" />
        </fieldset>

        <button type="submit" className="edit__btn btn-grey">
          Submit
        </button>
      </form>
    </div>
  );
};
