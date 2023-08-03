import React, { KeyboardEventHandler, MouseEventHandler } from 'react';
import search from '../../../img/icons/search.svg';

type Props = {
  searchQuery?: string;
  handleInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyPress?: KeyboardEventHandler<HTMLInputElement>;
  handleSearchClick?: MouseEventHandler<HTMLButtonElement> | undefined;
};

export const SearchUser: React.FC<Props> = ({ searchQuery, handleInputChange, handleKeyPress, handleSearchClick }) => {
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
