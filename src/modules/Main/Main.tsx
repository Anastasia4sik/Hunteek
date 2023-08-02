import React, { useEffect, useState } from 'react';
import { Menu } from '../blocks/menu';
import { Header } from '../blocks/Header';
import { Card } from '../shared/Card';
import { Select } from '../blocks/select';
import { Info } from '../blocks/Info';

import { Employee } from '../../types/Employee';
import { getEmployees } from '../../api/api';

import { handleInputChange, handleSearchClick, handleKeyPress } from '../../helpers/search';

export const Main: React.FC = () => {
  const [location, setLocation] = useState('');
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

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

  useEffect(() => {
    getEmployees().then(data => {
      setEmployees(data);
    });
  }, []);

  return (
    <div className="main">
      <Menu />

      <Header
        searchQuery={searchQuery}
        handleInputChange={() => {handleInputChange(event, setSearchQuery)}}
        handleKeyPress={() => handleKeyPress(event, setSearchQuery)}
        handleSearchClick={handleSearchClick}
      />

      <div className="content d-flex flex-row">
        <Select />

        <div className="main__catalog">
          {employees
            .filter((employee) => employee.position.toLowerCase().includes(searchQuery.toLowerCase()))
            .map((employee) => (
              <Card key={employee.slug} employee={employee} />
          ))}
        </div>

        <Info purpose={location} employee={employees[0]} employees={employees} />
      </div>
    </div>
  );
};
