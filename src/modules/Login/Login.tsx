/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
import React, { useState } from 'react';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';

import { SignIn } from '../blocks/SignIn';
import { Register } from '../blocks/Register';
import { EnterCode } from '../blocks/EnterCode';

export const Login: React.FC = () => {
  const [, setSubmitted] = useState(false);

  const location = useLocation();
  const path = location.pathname;
  let headerText;

  if (path === '/register') {
    headerText = 'Register to continue';
  } else if (path === '/code') {
    headerText = 'Code';
  } else {
    headerText = 'Sign in to continue';
  }

  let content;

  switch (path) {
    case '/register':
      content = <Register />;
      break;
    case '/code':
      content = <EnterCode />;
      break;
    default:
      content = <SignIn />;
      break;
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="login position-relative">
      <div className="login__content position-absolute">
        <h1 className="login__title bold-text d-flex justify-content-center">
          {headerText}
        </h1>

        <form action="#" className="login__form d-flex flex-column" onSubmit={handleSubmit}>
          {content}

          <div className={classNames(
            'login__form__bottom d-flex flex-row align-items-center',
            { 'justify-content-end': path === '/code' },
            { 'justify-content-between': path !== '/code' },
          )}
          >
            {path !== '/code' ? (
              <div className="login__form__bottom__remember d-flex flex-row align-items-start">
                <input type="checkbox" id="rememberMe" className="login__form__bottom__remember__input" />

                <label htmlFor="rememberMe" className="list-text login__form__bottom__remember__label">
                  Remember me
                </label>
              </div>
            ) : null}

            <div className="login__form__bottom__btns d-flex flex-row align-items-center">
              {path === '/code' ? (
                <button
                  type="submit"
                  className="login__form__bottom__btn login__form__bottom__btn--main btn-grey list-text"
                >
                  Continue
                </button>
              ) : (
                <>
                  <a
                    href={path === '/register' ? '/login' : '/register'}
                    className="login__form__bottom__btn login__form__bottom__btn--sec list-text"
                  >
                    {path === '/register' ? 'Login' : 'Register'}
                  </a>

                  <button
                    type="submit"
                    className="login__form__bottom__btn login__form__bottom__btn--main btn-grey list-text"
                  >
                    {path === '/register' ? 'Register' : 'Login'}
                  </button>
                </>
              )}
            </div>
          </div>

          {path === '/register' ? (
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
          ) : null}
        </form>

      </div>
    </div>
  );
};
