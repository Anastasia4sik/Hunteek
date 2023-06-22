import React, { useState } from 'react';
import { Pagination } from '../pagination';
import { getNumbers } from '../../../helpers';
import { BanItem } from '../banItem';

import search from '../../../img/icons/search.svg';
import lock from '../../../img/icons/lock.svg';

export const Banlist: React.FC = () => {
  const [perPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  // items in list
  const [total] = useState(36);

  const firstItem = (currentPage - 1) * perPage + 1;
  const lastItem = Math.min(perPage * currentPage, total);
  const itemsPerPage = getNumbers(firstItem, lastItem);

  const handleOnPageChange = (page: number | string) => {
    if (typeof page === 'number') {
      setCurrentPage(page);
    } else if (page === 'prev') {
      setCurrentPage(current => current - 1);
    } else if (page === 'next') {
      setCurrentPage(current => current + 1);
    }
  };

  // search

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
    <div className="banlist">
      <div className="banlist__container block">
        <div className="banlist__header d-flex flex-row justify-content-between align-items-center">
          <p className="banlist__header__title big-text">
            Ban List
          </p>

          <div className="banlist__header__targets d-flex lfex-row">
            <div className="banlist__header__search position-relative">
              <i className="bx bx-search-alt"></i>

              <input
                className="banlist__header__search__input border-0 rounded-pill main-text"
                type="text"
                placeholder="Enter a name to search for"
                value={searchQuery}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
              />

              <button
                className="banlist__header__search__btn position-absolute d-flex flex-row align-items-center"
                type="button"
                onClick={handleSearchClick}
              >
                <img src={search} alt="Search" className="banlist__header__search__btn__img" />

                <p className="bold-text">
                  Search
                </p>
              </button>
            </div>

            <a href="#block-user" className="banlist__header__btn d-flex flex-row align-items-center border-0 rounded-pill btn-grey">
              <img src={lock} alt="Lock" className="banlist__header__btn__img" />

              <p className="banlist__header__btn__p bold-text">
                Block a user
              </p>
            </a>
          </div>
        </div>

        <div className="banlist__table d-flex flex-row justify-content-between align-items-center">
          <p className="banlist__table__item bold-text">
            Photo
          </p>

          <p className="banlist__table__item bold-text">
            Name
          </p>

          <p className="banlist__table__item bold-text">
            Location
          </p>

          <p className="banlist__table__item bold-text">
            Date of blocking
          </p>

          <p className="banlist__table__item bold-text">
            Action
          </p>
        </div>

        <ul>
          {itemsPerPage.map(item => (
            <li
              key={item}
              data-cy="item"
            >
              <BanItem />
            </li>
          ))}
        </ul>
      </div>

      <Pagination
        total={total}
        perPage={perPage}
        currentPage={currentPage}
        onPageChange={handleOnPageChange}
      />
    </div>
  );
};
