import React from 'react';

import profile from '../../../img/icons/header/profile.svg';
import key from '../../../img/icons/login/key.svg';

export const SignIn: React.FC = () => {
  return (
    <div className="login__form__inputs d-flex flex-column">
      <div className="login__form__block position-relative">
        <img src={profile} alt="Name or Phone" className="login__form__img login__form__img--profile position-absolute" />

        <input type="text" placeholder="Enter Name or Phone" className="login__form__input" />
      </div>

      <div className="login__form__block login__form__block--last position-relative">
        <img src={key} alt="Password" className="login__form__img login__form__img--password position-absolute" />

        <input type="password" placeholder="Enter Password" className="login__form__input login__form__input--2" />
      </div>
    </div>
  );
};
