import React, { useEffect, useState } from 'react';
import { Menu } from '../blocks/menu';
import { Header } from '../blocks/Header';
import { Select } from '../blocks/select';
import { Info } from '../blocks/Info';
import { Wallet } from '../blocks/content/wallet';
import { CatalogSmall } from '../blocks/content/catalogSmall';
import { Referral } from '../blocks/content/referral';
import { CatalogFull } from '../blocks/content/catalogFull';

export const MyWallet: React.FC = () => {
  const [location, setLocation] = useState('');
  const [isReferralChecked, setIsReferralChecked] = useState(false);
  const [isLightTheme] = useState(() => {
    return localStorage.theme === 'light';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location;

      if (hash === '#crypto-wallets') {
        setLocation('cryptoWallets');
      } else if (hash === '#transfer') {
        setLocation('transfer');
      } else if (hash === '#fiat-wallets') {
        setLocation('fiatWallets');
      } else if (hash.includes('#ref-')) {
        setLocation('reporting');
      } else if (window.location.hash === '#feedback') {
        setLocation('feedback');
      } else {
        setLocation('general');
      }
    };

    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="main">
      <Menu />
      <Header />

      <div className="content d-flex flex-row">
        <Select setIsReferralChecked={setIsReferralChecked} />

        <div className="content__middle d-flex flex-column">
          {window.location.hash.includes('referral') ? (
            <>
              <Referral isLightTheme={isLightTheme} />

              <CatalogFull forSideInfo />
            </>
          ) : (
            <>
              <Wallet />

              <CatalogSmall />
            </>
          )}

        </div>
      </div>

      <Info isLightTheme={isLightTheme} purpose={location} />
    </div>
  );
};
