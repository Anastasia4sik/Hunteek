import React, { useEffect, useState } from 'react';
import { Menu } from '../blocks/menu';
import { Header } from '../blocks/Header';
import { Card } from '../shared/Card';
import { Select } from '../blocks/select';
import { Info } from '../blocks/Info';

// eslint-disable-next-line import/no-unresolved
import { Employee } from '../../types/employee';
import { getEmployees } from '../../helpers/api';

export const Main: React.FC = () => {
  const [location, setLocation] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#profile') {
        setLocation('profile');
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

  const [employees, setEmployees] = useState<Employee[]>([]);

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

        <div className="main__catalog">
          {employees.map((employee) => (
            <Card key={employee.slug} employee={employee} />
          ))}
        </div>

        <Info purpose={location} />
      </div>
    </div>
  );
};
