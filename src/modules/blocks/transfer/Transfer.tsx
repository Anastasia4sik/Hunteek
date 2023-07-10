/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import React from 'react';

export const Transfer: React.FC = () => {
  return (
    <div className="edit">
      <form action="#" className="edit__content scroll">
        <fieldset className="edit__container d-flex flex-column">
          <legend className="edit__label list-text">
            Wallet
          </legend>

          <input type="text" id="name" placeholder="None" className="edit__input edit__input--name list-text" />
        </fieldset>

        <button type="submit" className="edit__btn btn-grey">
          Submit
        </button>
      </form>
    </div>
  );
};
