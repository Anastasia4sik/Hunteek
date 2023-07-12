/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Menu } from '../blocks/menu';
import { Header } from '../blocks/Header';
import { Select } from '../blocks/select';
import { Info } from '../blocks/Info';
import { Wallet } from '../blocks/wallet';
import { CatalogSmall } from '../blocks/catalogSmall';
import { Referral } from '../blocks/referral';
import { CatalogFull } from '../blocks/catalogFull';

export const MyWallet: React.FC = () => {
  const [location, setLocation] = useState('');
  const [isReferralChecked, setIsReferralChecked] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location;

      if (hash === '#crypto-wallets') {
        setLocation('cryptoWallets');
      } else if (hash === '#transfer') {
        setLocation('transfer');
      } else if (hash === '#fiat-wallets') {
        setLocation('fiatWallets');
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
          {isReferralChecked ? (
            <>
              <Referral />

              <CatalogFull isShorter />
            </>
          ) : (
            <>
              <Wallet />

              <CatalogSmall />
            </>
          )}

        </div>
      </div>

      <Info purpose={location} />
    </div>
  );
};
