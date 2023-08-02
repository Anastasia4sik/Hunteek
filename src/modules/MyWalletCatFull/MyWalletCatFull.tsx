import React from 'react';
import { Menu } from '../blocks/menu';
import { Header } from '../blocks/Header';
import { Select } from '../blocks/select';
import { Info } from '../blocks/Info';
import { CatalogFull } from '../blocks/content/catalogFull';

export const MyWalletCatFull: React.FC = () => {
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

      <Info purpose="general" />
    </div>
  );
};
