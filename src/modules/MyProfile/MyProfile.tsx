/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';

import { Menu } from '../shared/menu';
import { Header } from '../shared/Header';
import { Select } from '../shared/select';
import { Info } from '../shared/Info';
import { RecruitInfo } from '../shared/recruitInfo';
import { Banlist } from '../shared/banlist';

export const MyProfile: React.FC = () => {
  const [location, setLocation] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#edit-profile') {
        setLocation('edit');
      } else if (window.location.hash === '#block-user') {
        setLocation('block');
      } else {
        setLocation('general');
      }
    };

    handleHashChange(); // Call the function once on initial load to set the location

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

      <Info purpose={location} />
    </div>
  );
};
