import React, { useEffect, useState } from 'react';
import { Menu } from '../blocks/menu';
import { Header } from '../blocks/Header';
import { Card } from '../shared/Card';
import { Select } from '../blocks/select';
import { Info } from '../blocks/Info';

import { Employee } from '../../types/Employee';
import { getEmployees } from '../../api/api';

import { handleInputChange, handleSearchClick, handleKeyPress } from '../../helpers/search';
import { Popup } from '../Popup';

import { useTranslation } from 'react-i18next';

export const Main: React.FC = () => {
  const [location, setLocation] = useState('');
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupText, setPopupText] = useState('');
  const [isLightTheme] = useState(() => {
    return localStorage.theme === 'light';
  });

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#profile') {
        setLocation('profile');
      } else if (window.location.hash === '#feedback') {
        setLocation('feedback');
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

  const togglePopup = (popupText: string) => {
    setIsPopupVisible(!isPopupVisible);
    if (popupText) {
      setPopupText(popupText);
    }
  };

  const { t } = useTranslation();

  return (
    <>
      <div className={`main ${isLightTheme ? 'light' : ''}`}>
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
              .filter((employee) => {
                const slug = employee.slug.toLowerCase().replace(/-/g, ' ');
                const query = searchQuery.toLowerCase();
          
                if (!query) {
                  return true;
                }
          
                const searchWords = query.split(' ');
          
                return searchWords.every((word) => slug.includes(word));
              })
              .map((employee) => (
                <Card
                  key={employee.slug}
                  employee={employee}
                  isPopupVisible={isPopupVisible}
                  togglePopup={() => togglePopup(`${t('message__sent')} ${employee.name}`)}
                />
            ))}
          </div>

          <Info purpose={location} employee={employees[0]} employees={employees} />
        </div>
        
        {isPopupVisible && (
          <Popup text={popupText} onClose={() => togglePopup('')} />
        )}
      </div>
    </>
  );
};
