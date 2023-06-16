import React from 'react';
import { Menu } from '../shared/Menu';
import { Header } from '../shared/Header';
import { Select } from '../shared/Select';
import { Info } from '../shared/Info';

export const MyProfile: React.FC = () => {
  return (
    <div className="main">
      <Menu />

      <Header />

      <div className="content d-flex flex-row">
        <Select />

        <Info purpose="general" />
      </div>
    </div>
  );
};
