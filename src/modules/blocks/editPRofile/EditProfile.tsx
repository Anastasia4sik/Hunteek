/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import React from 'react';

import delet from '../../../img/icons/delete.svg';
import upload from '../../../img/icons/upload.svg';
import { UserPhoto } from '../../shared/userPhoto';

// eslint-disable-next-line import/no-unresolved
import { Employee } from '../../../types/Employee';

type Props = {
  employee: Employee,
};

export const EditProfile: React.FC<Props> = ({ employee }) => {
  return (
    <div className="editProfile">
      <form action="#" className="editProfile__content scroll">
        <div className="editProfile__container">
          <label htmlFor="uploadPhoto" className="editProfile__label list-text"> Image </label>

          <div className="editProfile__photo d-flex flex-row align-items-center">
            <UserPhoto size={20} photo={employee.photo} />

            <div className="editProfile__photo__upload">
              <label htmlFor="uploadPhoto" className="editProfile__photo__upload__label btn-grey">
                <div className="editProfile__photo__upload__label__content d-flex align-items-center flex-row">
                  <img src={upload} alt="Upload Icon" className="editProfile__photo__upload__label__icon" />

                  <span className="editProfile__photo__upload__label__text bold-text">Upload Image</span>
                </div>
              </label>

              <input id="uploadPhoto" type="file" className="editProfile__photo__upload editProfile__input" />
            </div>

            <button type="button" className="editProfile__photo__delete btn-grey">
              <img src={delet} alt="Delete" className="editProfile__photo__delete__img" />
            </button>
          </div>
        </div>

        <div className="editProfile__container d-flex flex-column">
          <label htmlFor="name" className="editProfile__label list-text"> Name </label>
          <input type="text" id="name" placeholder="None" className="editProfile__input editProfile__input--name list-text" />
        </div>

        <div className="editProfile__container d-flex flex-column">
          <label htmlFor="lastName" className="editProfile__label list-text"> Last Name </label>
          <input type="text" id="lastName" placeholder="None" className="editProfile__input editProfile__input--lastName list-text" />
        </div>

        <div className="editProfile__container d-flex flex-column">
          <label htmlFor="desc" className="editProfile__label list-text"> Description </label>
          <textarea id="desc" placeholder="None" className="editProfile__input editProfile__input--desc list-text" />
        </div>

        <div className="editProfile__container d-flex flex-column">
          <label htmlFor="email" className="editProfile__label list-text"> Email </label>
          <input type="email" id="email" placeholder="None" className="editProfile__input editProfile__input--email list-text" />
        </div>

        <div className="editProfile__container d-flex flex-column">
          <label htmlFor="phone" className="editProfile__label list-text"> Phone </label>
          <input type="number" id="phone" placeholder="None" className="editProfile__input editProfile__input--phone list-text" />
        </div>

        <div className="editProfile__container d-flex flex-column">
          <label htmlFor="telegram" className="editProfile__label list-text"> Telegram </label>
          <input type="url" id="telegram" placeholder="None" className="editProfile__input editProfile__input--telegram list-text" />
        </div>

        <div className="editProfile__container d-flex flex-column">
          <label htmlFor="linkedin" className="editProfile__label list-text"> Linkedin </label>
          <input type="url" id="linkedin" placeholder="None" className="editProfile__input editProfile__input--linkedin list-text" />
        </div>

        <div className="editProfile__container d-flex flex-column">
          <label htmlFor="github" className="editProfile__label list-text"> GitHub </label>
          <input type="url" id="github" placeholder="None" className="editProfile__input editProfile__input--github list-text" />
        </div>

        <button type="submit" className="editProfile__btn btn-grey">
          Submit
        </button>
      </form>
    </div>
  );
};
