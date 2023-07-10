/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Menu } from '../blocks/menu';
import { Header } from '../blocks/Header';
import { Select } from '../blocks/select';
import { Info } from '../blocks/Info';
import { CatalogFull } from '../blocks/catalogFull';

export const MyWalletCatFull: React.FC = () => {
  const [location, setLocation] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location;

      if (hash === '#edit-profile') {
        setLocation('edit');
      } else if (hash === '#block-user') {
        setLocation('block');
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
          <CatalogFull />
        </div>
      </div>

      <Info purpose={location} />
    </div>
  );
};
