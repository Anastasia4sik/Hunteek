import React from 'react';
import { Menu } from '../shared/Menu';
import { Header } from '../shared/Header';
import { Select } from '../shared/Select';
import { Info } from '../shared/Info';
import { RecruitInfo } from '../shared/recruitInfo';

export const MyProfile: React.FC = () => {
  return (
    <div className="main">
      <Menu />

      <Header />

      <div className="content d-flex flex-row">
        <Select />

        <div className="content__top d-flex flex-rowjustify-content-between">
          <RecruitInfo />
          <RecruitInfo />
        </div>

        <Info purpose="general" />
      </div>
    </div>
  );
};
