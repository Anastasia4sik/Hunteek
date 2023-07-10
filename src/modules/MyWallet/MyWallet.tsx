/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';

import { Menu } from '../blocks/menu';
import { Header } from '../blocks/Header';
import { Select } from '../blocks/select';
import { Info } from '../blocks/Info';

import { getRecruiters } from '../../api/api';
import { Recruiter } from '../../types/Recruiter';
import { Wallet } from '../blocks/wallet';
import { CatalogSmall } from '../blocks/catalogSmall';
import { CatalogFull } from '../blocks/catalogFull';

export const MyWallet: React.FC = () => {
  const [location, setLocation] = useState('');
  const [recruiters, setRecruiters] = useState<Recruiter[]>([]);

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

  useEffect(() => {
    getRecruiters().then(data => {
      setRecruiters(data);
    });
  }, []);

  return (
    <div className="main">
      <Menu />

      <Header />

      <div className="content d-flex flex-row">
        <Select />

        <div className="content__middle d-flex flex-column">
          {window.location.hash === '#catalog-full' ? (
            <CatalogFull />
          ) : (
            <>
              <Wallet />
              <CatalogSmall />
            </>
          )}
        </div>

      </div>

      <Info purpose={location} recruteir={recruiters[0]} recruteirs={recruiters} />
    </div>
  );
};
