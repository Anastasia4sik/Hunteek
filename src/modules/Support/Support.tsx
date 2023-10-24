import React, { useEffect, useState } from 'react';
import { Menu } from '../blocks/menu';
import { Header } from '../blocks/Header';
import { Info } from '../blocks/Info';
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

import { handleInputChange, handleSearchClick, handleKeyPress } from '../../helpers/search';

export const Support: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [isLightTheme] = useState(() => {
    return localStorage.theme === 'light';
  });

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#feedback') {
        setLocation('feedback');
      } else {
        setLocation('support');
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

      <Header
        searchQuery={searchQuery}
        handleInputChange={() => {handleInputChange(event, setSearchQuery)}}
        handleKeyPress={() => handleKeyPress(event, setSearchQuery)}
        handleSearchClick={handleSearchClick}
      />

      <div className="content d-flex flex-row">
        <div className="support__list d-flex flex-column content__middle">
          {array.map((item) => (
            <p key={item} className="support__list__item">
                Need a specialist who works in OKCMS
            </p>
          ))}
        </div>

        <Info isLightTheme={isLightTheme} purpose={location} />
      </div>
    </div>
  );
};
