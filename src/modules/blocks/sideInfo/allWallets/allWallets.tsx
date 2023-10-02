import React from 'react';

import { useTranslation } from 'react-i18next';

export const AllWallets: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="wallets d-flex flex-wrap">
      <div className="wallets__block block d-flex flex-column align-items-center">
        <h3 className="wallets__block__title big-text">
          BTC
        </h3>

        <p className="wallets__block__desc list-text">
          0.00 BTC
        </p>
      </div>

      <div className="wallets__block block d-flex flex-column align-items-center">
        <h3 className="wallets__block__title big-text">
          BTC
        </h3>

        <p className="wallets__block__desc list-text">
          0.00 BTC
        </p>
      </div>

      <div className="wallets__block block d-flex flex-column align-items-center">
        <h3 className="wallets__block__title big-text">
          BTC
        </h3>

        <p className="wallets__block__desc list-text">
          0.00 BTC
        </p>
      </div>

      <a href="/add-wallet" className="wallets__block wallets__block__add block d-flex flex-column align-items-center">
        <h3 className="wallets__block__title big-text">
          +
        </h3>

        <p className="wallets__block__desc list-text">
          {t('add__wallet')}
        </p>
      </a>
    </div>
  );
};
