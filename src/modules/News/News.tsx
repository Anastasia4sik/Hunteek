import React, { useEffect, useState } from 'react';
import { Menu } from '../blocks/menu';
import { Header } from '../blocks/Header';
import { Info } from '../blocks/Info';
import { NewsCard } from '../shared/NewsCard';

import { handleInputChange, handleSearchClick, handleKeyPress } from '../../helpers/search';

export const News: React.FC = () => {
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
        setLocation('news');
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
        <div className="main__catalog news__catalog">
          <NewsCard />

          <NewsCard />

          <NewsCard />

          <NewsCard />
        </div>

        <Info isLightTheme={isLightTheme} purpose={location} />
      </div>
    </div>
  );
};
