import React, { useState } from 'react';
import { Pagination } from '../../shared/pagination';
import { getNumbers } from '../../../helpers';
import { BanItem } from '../../shared/banItem';

import lock from '../../../img/icons/lock.svg';
import { SearchUser } from '../../shared/searchUser';

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

  return (
    <div className="banlist">
      <div className="banlist__container block">
        <div className="banlist__header d-flex flex-row justify-content-between align-items-center">
          <p className="banlist__header__title big-text">
            Ban List
          </p>

          <div className="banlist__header__targets d-flex lfex-row">
            <div className="banlist__header__search">
              <SearchUser />
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
