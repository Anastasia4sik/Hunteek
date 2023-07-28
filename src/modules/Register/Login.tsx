import React from 'react';

import profile from '../../img/icons/header/profile.svg';
import key from '../../img/icons/key.svg';

export const Login: React.FC = () => {
  return (
    <div className="login position-relative">
      <div className="login__content position-absolute">
        <h1 className="login__title bold-text d-flex justify-content-center">
          Sign in to continue
        </h1>

        <form action="#" className="login__form d-flex flex-column">
          <div className="login__form__block login__form__block--1 position-relative">
            <img src={profile} alt="Name or Phone" className="login__form__img login__form__img--profile position-absolute" />

            <input type="text" placeholder="Enter Name or Phone" className="login__form__input" />
          </div>

          <div className="login__form__block login__form__block--2 position-relative">
            <img src={key} alt="Password" className="login__form__img login__form__img--password position-absolute" />

            <input type="text" placeholder="Enter Password" className="login__form__input login__form__input--2" />
          </div>

          <div className="login__form__bottom d-flex flex-row justify-content-between align-items-center">
            <div className="login__form__bottom__remember d-flex flex-row align-items-start">
              <input type="checkbox" id="rememberMe" className="login__form__bottom__remember__input" />

              <label htmlFor="rememberMe" className="list-text login__form__bottom__remember__label">
                Remember me
              </label>
            </div>

            <div className="login__form__bottom__btns d-flex flex-row">
              <a href="/register" className="login__form__bottom__btn login__form__bottom__btn--register list-text">
                Register
              </a>

              <button type="button" className="login__form__bottom__btn login__form__bottom__btn--login btn-grey list-text">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
