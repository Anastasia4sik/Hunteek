import React from 'react';

import lock from '../../../img/icons/login/lock.svg';

export const EnterCode: React.FC = () => {
  return (
    <div className="login__form__inputs d-flex flex-column">
      <div className="login__form__block login__form__block--last position-relative">
        <img
          src={lock}
          alt="Code"
          className="login__form__img login__form__img--profile position-absolute"
        />

        <input
          type="text"
          placeholder="Confirmation code"
          className="login__form__input"
          required
        />
      </div>
    </div>
  );
};
