import React from 'react';

export const Transfer: React.FC = () => {
  return (
    <div className="edit">
      <form action="#" className="edit__content">
        <fieldset className="edit__container d-flex flex-column">
          <legend className="edit__label list-text">
            Wallet
          </legend>

          <select
            id="wallet"
            className="list-text edit__input"
          >
            <option value="" disabled selected hidden>None</option>

            <option value="BTC - 0.312422 BTC">BTC - 0.312422 BTC</option>

            <option value="BTC - 0.312422 BTC">BTC - 0.312422 BTC</option>

            <option value="BTC - 0.312422 BTC">BTC - 0.312422 BTC</option>
          </select>
        </fieldset>

        <fieldset className="edit__container d-flex flex-column">
          <legend className="edit__label list-text">
            Type of payment
          </legend>

          <select
            id="paymentType"
            className="list-text edit__input"
          >
            <option value="" disabled selected hidden>None</option>

            <option value="1">first</option>

            <option value="2">second</option>

            <option value="3">third</option>
          </select>
        </fieldset>

        <fieldset className="edit__container d-flex flex-column">
          <legend className="edit__label list-text">
            Card number or ID
          </legend>

          <input type="number" id="number" placeholder="None" className="edit__input list-text" />
        </fieldset>

        <div className="edit__container__row d-flex flex-row justify-content-between">
          <fieldset className="edit__container d-flex flex-column">
            <legend className="edit__label list-text">
              Amount
            </legend>

            <input type="number" id="amount" placeholder="None" className="edit__input list-text" />
          </fieldset>

          <fieldset className="edit__container d-flex flex-column">
            <legend className="edit__label list-text">
              Currency
            </legend>

            <input type="number" id="currency" placeholder="None" className="edit__input list-text" />
          </fieldset>
        </div>

        <button type="submit" className="edit__btn btn-grey">
          Submit
        </button>
      </form>
    </div>
  );
};
