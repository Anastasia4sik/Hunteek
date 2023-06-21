import React from 'react';
import { Menu } from '../shared/menu';
import { Header } from '../shared/header';
import { Select } from '../shared/select';
import { Info } from '../shared/info';
import { RecruitInfo } from '../shared/recruitInfo';
import { Banlist } from '../shared/banlist';

export const MyProfile: React.FC = () => {
  return (
    <div className="main">
      <Menu />

      <Header />

      <div className="content d-flex flex-row">
        <Select />

        <div className="content__middle d-flex flex-column">
          <div className="content__top d-flex flex-row justify-content-between">
            <RecruitInfo />

            <div className="block content__top__empty">
              <div className="content__top__empty__hide">
                <RecruitInfo />
              </div>
            </div>
          </div>

          <Banlist />
        </div>

      </div>

      <Info purpose="general" />
    </div>
  );
};
