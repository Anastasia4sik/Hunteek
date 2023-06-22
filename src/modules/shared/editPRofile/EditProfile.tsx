/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import React from 'react';

import user from '../../../img/photo/user.png';
import delet from '../../../img/icons/delete.svg';

export const EditProfile: React.FC = () => {
  return (
    <div className="editProfile">
      <div className="editProfile__content scroll">
        <label htmlFor="uploadPhoto" className="editProfile__label"> Image </label>
        <div className="editProfile__photo d-flex flex-row align-items-center">
          <img src={user} alt="User" className="editProfile__photo__img" />

          <input id="uploadPhoto" type="file" className="editProfile__photo__upload editProfile__input" />

          <button type="button" className="editProfile__photo__delete">
            <img src={delet} alt="Delete" />
          </button>
        </div>

        <label htmlFor="name" className="editProfile__label"> Name </label>
        <input type="text" id="name" placeholder="None" className="editProfile__input editProfile__input--name" />

        <label htmlFor="lastName" className="editProfile__label"> Name </label>
        <input type="text" id="lastName" placeholder="None" className="editProfile__input editProfile__input--lastName" />

        <label htmlFor="desc" className="editProfile__label"> Description </label>
        <textarea id="desc" placeholder="None" className="editProfile__input editProfile__input--desc" />

        <label htmlFor="email" className="editProfile__label"> Email </label>
        <input type="email" id="email" placeholder="None" className="editProfile__input editProfile__input--email" />

        <label htmlFor="phone" className="editProfile__label"> Phone </label>
        <input type="number" id="phone" placeholder="None" className="editProfile__input editProfile__input--phone" />

        <label htmlFor="telegram" className="editProfile__label"> Telegram </label>
        <input type="url" id="telegram" placeholder="None" className="editProfile__input editProfile__input--telegram" />

        <label htmlFor="linkedin" className="editProfile__label"> Linkedin </label>
        <input type="url" id="linkedin" placeholder="None" className="editProfile__input editProfile__input--linkedin" />

        <label htmlFor="github" className="editProfile__label"> GitHub </label>
        <input type="url" id="github" placeholder="None" className="editProfile__input editProfile__input--github" />
      </div>
    </div>
  );
};
