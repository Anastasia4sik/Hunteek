import React, { useEffect } from 'react';

import { useTranslation } from 'react-i18next';

type Props = {
  isLightTheme?: boolean;
}

export const AllWallets: React.FC<Props> = ({ isLightTheme }) => {
  const { t } = useTranslation();

  const parentBlock = document.querySelector('.info__container');
  
  useEffect(() => {
    if (isLightTheme) {
      const children = parentBlock?.querySelectorAll('*');

      children?.forEach((child) => {
        if (!child.classList.contains('light')) {
          child.classList.add('light');
        }
      });
    } else {
      const children = parentBlock?.querySelectorAll('*');

      children?.forEach((child) => {
        child.classList.remove('light');
      });
    }
  }, [isLightTheme])

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
