/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
import React from 'react';
import { useLocation } from 'react-router-dom';

import { SignIn } from '../blocks/SignIn';
import { Register } from '../blocks/Register';

export const Login: React.FC = () => {
  const location = useLocation(); // Get the current location using the useLocation hook
  const isRegisterPage = location.pathname === '/register';

  return (
    <div className="login position-relative">
      <div className="login__content position-absolute">
        <h1 className="login__title bold-text d-flex justify-content-center">
          {isRegisterPage ? 'Register to continue' : 'Sign in to continue'}
        </h1>

        <form action="#" className="login__form d-flex flex-column">
          {isRegisterPage ? <Register /> : <SignIn />}

          <div className="login__form__bottom d-flex flex-row justify-content-between align-items-center">
            <div className="login__form__bottom__remember d-flex flex-row align-items-start">
              <input type="checkbox" id="rememberMe" className="login__form__bottom__remember__input" />

              <label htmlFor="rememberMe" className="list-text login__form__bottom__remember__label">
                Remember me
              </label>
            </div>

            <div className="login__form__bottom__btns d-flex flex-row align-items-center">
              {isRegisterPage ? (
                <>
                  <a href="/login" className="login__form__bottom__btn login__form__bottom__btn--register list-text">
                    Login
                  </a>

                  <button type="button" className="login__form__bottom__btn login__form__bottom__btn--login btn-grey list-text">
                    Register
                  </button>
                </>
              ) : (
                <>
                  <a href="/register" className="login__form__bottom__btn login__form__bottom__btn--register list-text">
                    Register
                  </a>

                  <button type="button" className="login__form__bottom__btn login__form__bottom__btn--login btn-grey list-text">
                    Login
                  </button>
                </>
              )}
            </div>
          </div>

          {isRegisterPage ? (
            <p className="list-text login__form__desc text-center">
              By signing up I agree with
              {' '}
              <a href="/terms-of-service" className="login__form__desc__link">
                Terms of service
              </a>
              {' '}
              and processing of personal data as started in the
              {' '}
              <a href="/terms-of-service" className="login__form__desc__link">
                Privacy policy
              </a>
            </p>
          ) : (
            ''
          )}
        </form>

      </div>
    </div>
  );
};
