import React, { useState } from 'react';
import { Menu } from '../blocks/menu';
import { Header } from '../blocks/Header';
import { Select } from '../blocks/select';
import { Info } from '../blocks/Info';
import { NewsCard } from '../shared/NewsCard';

import { handleInputChange, handleSearchClick, handleKeyPress } from '../../helpers/search';

export const News: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

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

        <div className="main__catalog news__catalog">
          <NewsCard />

          <NewsCard />

          <NewsCard />

          <NewsCard />
        </div>

        <Info purpose='news' />
      </div>
    </div>
  );
};
