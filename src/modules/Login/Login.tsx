/* eslint-disable no-console */
import React from 'react';

export const Login: React.FC = () => {
  return (
    <div className="login d-flex flex-column align-items-center justify-content-center">
      <div className="login__content">
        <h1 className="login__title bold-text d-flex justify-content-center">
          Sign in to continue
        </h1>

        <form action="#" className="login__form d-flex flex-column align-items-center">
          <input type="text" placeholder="Enter Name or Phone" className="login__form__input login__form__input--1" />

          <input type="text" placeholder="Enter Password" className="login__form__input login__form__input--2" />

          <div className="login__form__bottom d-flex flex-row justify-content-between">
            <input type="checkbox" className="login__form__bottom__remember" required />

            <div className="login__form__bottom__btns d-flex flex-row">
              <button type="button" className="login__form__bottom__btn login__form__bottom__btn--register">
                Register
              </button>

              <button type="button" className="login__form__bottom__btn btn-grey">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
