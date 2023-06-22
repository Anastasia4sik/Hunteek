import React, { useState } from 'react';
import search from '../../../img/icons/search.svg';

export const SearchUser: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const performSearch = () => {
    // eslint-disable-next-line no-console
    console.log('Performing search:', searchQuery);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchClick = () => {
    performSearch();
    setSearchQuery('');
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      performSearch();

      setSearchQuery('');
    }
  };

  return (
    <div className="searchUser position-relative">
      <i className="bx bx-search-alt"></i>

      <input
        className="searchUser__input border-0 rounded-pill main-text"
        type="text"
        placeholder="Enter a name to search for"
        value={searchQuery}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />

      <button
        className="searchUser__btn position-absolute d-flex flex-row align-items-center"
        type="button"
        onClick={handleSearchClick}
      >
        <img src={search} alt="Search" className="searchUser__btn__img" />

        <p className="bold-text">
          Search
        </p>
      </button>
    </div>
  );
};
