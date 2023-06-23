/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';

import { Menu } from '../blocks/menu';
import { Header } from '../blocks/Header';
import { Select } from '../blocks/select';
import { Info } from '../blocks/Info';
import { RecruitInfo } from '../blocks/recruitInfo';
import { Banlist } from '../blocks/banlist';

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
