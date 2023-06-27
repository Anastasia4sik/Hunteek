import React from 'react';

export const Wallet: React.FC = () => {
  return (
    <div className="wallet">
      <div className="wallet__container">
        <div className="wallet__top d-flex flex-row justify-content-between">
          <div className="wallet__top__blocks d-flex flex-column">
            <div className="wallet__top__blocks__item justify-content-center block d-flex flex-column align-items-center">
              <h3 className="big-text wallet__top__blocks__item__title">
                Internal wallet &quot;Hunteek&quot;
              </h3>

              <p className="wallet__top__blocks__item__desc list-text">
                $13.176.3571
              </p>
            </div>

            <a href="#transfer" className="wallet__top__blocks__btn btn-grey">
              Transfer of funds
            </a>
          </div>

          <div className="wallet__top__blocks d-flex flex-column">
            <div className="wallet__top__blocks__item justify-content-center wallet__top__right__block--1 block d-flex flex-column align-items-center">
              <div className="wallet__top__blocks__item__text d-flex flex-column align-items-center">
                <h3 className="big-text wallet__top__blocks__item__title">
                  Cryptocurrency Wallet
                </h3>

                <p className="wallet__top__blocks__item__desc list-text">
                  Added 3 Wallet
                </p>
              </div>

              <a href="#crypto-wallets" className="wallet__top__blocks__item__btn btn-grey">
                Show all wallets
              </a>
            </div>

            <div className="wallet__top__blocks__item justify-content-center wallet__top__right__block--1 block d-flex flex-column align-items-center">
              <div className="wallet__top__blocks__item__text d-flex flex-column align-items-center">
                <h3 className="big-text wallet__top__blocks__item__title">
                  Fiat Wallet
                </h3>

                <p className="wallet__top__blocks__item__desc list-text">
                  Added 3 Wallet
                </p>
              </div>

              <a href="#fiat-wallets" className="wallet__top__blocks__item__btn btn-grey">
                Show all wallets
              </a>
            </div>

          </div>
        </div>

        <div className="wallet__top d-flex flex-row justify-content-between">

        </div>
      </div>
    </div>
  );
};
