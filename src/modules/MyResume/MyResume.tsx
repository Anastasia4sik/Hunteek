/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';

import { Menu } from '../blocks/menu';
import { Header } from '../blocks/Header';
import { Select } from '../blocks/select';
import { Info } from '../blocks/Info';

import { getEmployees } from '../../api/api';
import { Resume } from '../blocks/resume';
import { Employee } from '../../types/Employee';

export const MyResume: React.FC = () => {
  const [location, setLocation] = useState('');
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#edit-resume') {
        setLocation('edit-resume');
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

  useEffect(() => {
    getEmployees().then(data => {
      setEmployees(data);
    });
  }, []);

  return (
    <div className="main">
      <Menu />

      <Header />

      <div className="content d-flex flex-row">
        <Select />

        <div className="content__middle d-flex flex-column">
          <Resume employee={employees[0]} />
        </div>

      </div>

      <Info purpose={location} employee={employees[0]} />
    </div>
  );
};
