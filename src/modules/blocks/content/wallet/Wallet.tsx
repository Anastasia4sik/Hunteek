import React from 'react';
import { t } from 'i18next';

export const Wallet: React.FC = () => {

  return (
    <div className="wallet">
      <div className="wallet__container">
        <div className="wallet__top d-flex flex-row justify-content-between">
          <div className="wallet__top__blocks d-flex flex-column">
            <div className="wallet__top__blocks__item justify-content-center block d-flex flex-column align-items-center">
              <h3 className="big-text wallet__top__blocks__item__title">
              {t('wallet__title')} &quot;Hunteek&quot;
              </h3>

              <p className="wallet__top__blocks__item__desc list-text">
                $13.176.3571
              </p>
            </div>

            <a href="#transfer" className="wallet__top__blocks__btn btn-grey">
              {t('transfer')}
            </a>
          </div>

          <div className="wallet__top__blocks d-flex flex-column">
            <div className="wallet__top__blocks__item justify-content-center wallet__top__right__block--1 block d-flex flex-column align-items-center">
              <div className="wallet__top__blocks__item__text d-flex flex-column align-items-center">
                <h3 className="big-text wallet__top__blocks__item__title">
                  {t('crypto__wallet')}
                </h3>

                <p className="wallet__top__blocks__item__desc list-text">
                {t('added')} 3 {t('wallet')}
                </p>
              </div>

              <a href="#crypto-wallets" className="wallet__top__blocks__item__btn btn-grey">
                {t('wallet__show__all')}
              </a>
            </div>

            <div className="wallet__top__blocks__item justify-content-center wallet__top__right__block--1 block d-flex flex-column align-items-center">
              <div className="wallet__top__blocks__item__text d-flex flex-column align-items-center">
                <h3 className="big-text wallet__top__blocks__item__title">
                  {t('cur__amount')}
                </h3>

                <p className="wallet__top__blocks__item__desc list-text">
                  $13.176.3570
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
