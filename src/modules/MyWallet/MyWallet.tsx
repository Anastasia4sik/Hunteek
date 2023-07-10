/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Menu } from '../blocks/menu';
import { Header } from '../blocks/Header';
import { Select } from '../blocks/select';
import { Info } from '../blocks/Info';
import { Wallet } from '../blocks/wallet';
import { CatalogSmall } from '../blocks/catalogSmall';

export const MyWallet: React.FC = () => {
  const [location, setLocation] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location;

      if (hash === '#all-wallets') {
        setLocation('wallets');
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
        <Select />

        <div className="content__middle d-flex flex-column">
          <Wallet />
          <CatalogSmall />
        </div>
      </div>

      <Info purpose={location} />
    </div>
  );
};
