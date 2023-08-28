import React, { useState } from 'react';
import { Menu } from '../blocks/menu';
import { Header } from '../blocks/Header';
import { Select } from '../blocks/select';
import { Info } from '../blocks/Info';

import { handleInputChange, handleSearchClick, handleKeyPress } from '../../helpers/search';

export const Support: React.FC = () => {
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

        <div className="support__list d-flex flex-column">
          <div className="support__list__item">
            <p>
              Need a specialist who works in OKCMS
            </p>
          </div>
        </div>

        <Info purpose='support' />
      </div>
    </div>
  );
};
