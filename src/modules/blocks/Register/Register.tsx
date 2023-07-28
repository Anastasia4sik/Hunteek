import React, { useState } from 'react';

import profile from '../../../img/icons/header/profile.svg';
import key from '../../../img/icons/login/key.svg';
import email from '../../../img/icons/login/email.svg';
import phone from '../../../img/icons/login/phone.svg';

export const Register: React.FC = () => {
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [submitted] = useState(false);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleRepeatPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRepeatPassword(event.target.value);
    setPasswordMatch(event.target.value === password);
  };

  return (
    <div className="login__form__inputs d-flex flex-column">
      <div className="login__form__block position-relative">
        <img
          src={profile}
          alt="Name"
          className="login__form__img login__form__img--profile position-absolute"
        />

        <input
          type="text"
          placeholder="Your name"
          className="login__form__input"
          required
        />
      </div>

      <div className="login__form__block position-relative">
        <img
          src={email}
          alt="E-mail"
          className="login__form__img login__form__img--profile position-absolute"
        />

        <input
          type="email"
          placeholder="E-mail address"
          className="login__form__input"
          required
        />
      </div>

      <div className="login__form__block position-relative">
        <img
          src={phone}
          alt="Phone"
          className="login__form__img login__form__img--profile position-absolute"
        />

        <input
          type="text"
          placeholder="Phone number"
          className="login__form__input"
          required
        />
      </div>

      <div className="login__form__block position-relative">
        <img
          src={key}
          alt="Password"
          className="login__form__img login__form__img--password position-absolute"
        />

        <input
          type="text"
          placeholder="Create a password"
          className="login__form__input login__form__input--2"
          required
          value={password}
          onChange={handlePasswordChange}
        />
      </div>

      <div className="login__form__block login__form__block--last position-relative">
        <img
          src={key}
          alt="Password"
          className="login__form__img login__form__img--password position-absolute"
        />

        <input
          type="text"
          placeholder="Repeat the created password"
          className={`login__form__input login__form__input--2 ${!passwordMatch && 'login__form__input--invalid'}`}
          required
          value={repeatPassword}
          onChange={handleRepeatPasswordChange}
        />

        {!passwordMatch && submitted && (
          <p className="login__form__message">Passwords do not match.</p>
        )}
      </div>
    </div>
  );
};
