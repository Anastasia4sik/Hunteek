import React, { useState } from 'react';
import { Pagination } from '../../../shared/pagination';
// import { getNumbers } from '../../../helpers';
import { BanItem } from '../../../shared/banItem';

import lock from '../../../../img/icons/lock.svg';
import { SearchUser } from '../../../shared/searchUser';
import { Employee } from '../../../../types/Employee';

import { handleInputChange, handleSearchClick, handleKeyPress } from '../../../../helpers/search';
import { t } from 'i18next';

type Props = {
  employees: Employee[],
  searchQuery: string,
};

export const Banlist: React.FC<Props> = ({ employees }) => {
  const [perPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  if (!employees) {
    return null;
  }

  const total = employees.length;
  const firstItem = (currentPage - 1) * perPage;
  const lastItem = currentPage * perPage;
  const itemsPerPage = employees.slice(firstItem, lastItem);

  const handleOnPageChange = (page: number | string) => {
    if (typeof page === 'number') {
      setCurrentPage(page);
    } else if (page === 'prev') {
      setCurrentPage(current => current - 1);
    } else if (page === 'next') {
      setCurrentPage(current => current + 1);
    }
  };

  const matchSearchQuery = (slug: string, searchQuery: string) => {
    const slugWords = slug && slug.split('-');
    const searchWords = searchQuery && searchQuery.toLowerCase().split(' ');
  
    if (!searchWords || searchWords.length === 0) {
      return true; // If searchQuery is empty, show all employees
    }
  
    // Check if all words in searchQuery are present in the slug
    return searchWords.every((word: any) => slugWords && slugWords.some((slugWord: string | any[]) => slugWord.includes(word)));
  };


  return (
    <div className="banlist">
      <div className="banlist__container block">
        <div className="banlist__header d-flex flex-row justify-content-between align-items-center">
          <p className="banlist__header__title big-text">
            {t('ban__title')}
          </p>

          <div className="banlist__header__targets d-flex flex-row">
            <div className="banlist__heade r__search">
              <SearchUser
                searchQuery={searchQuery}
                handleInputChange={(event) => {handleInputChange(event, setSearchQuery)}}
                handleKeyPress={(event) => handleKeyPress(event, setSearchQuery)}
                handleSearchClick={(event) => handleSearchClick(event, setSearchQuery)}
              />
            </div>

            <a href="#block-user" className="banlist__header__btn d-flex flex-row btn-grey">
              <img src={lock} alt="Lock" className="banlist__header__btn__img" />

              <p className="banlist__header__btn__p bold-text">
                {t('ban__block')}
              </p>
            </a>
          </div>
        </div>

        <div className="banlist__table d-flex flex-row justify-content-between align-items-center">
          <p className="banlist__table__item bold-text">
            {t('ban__photo')}
          </p>

          <p className="banlist__table__item bold-text">
            {t('name')}
          </p>

          <p className="banlist__table__item bold-text">
            {t('location')}
          </p>

          <p className="banlist__table__item bold-text">
            {t('ban__date')}
          </p>

          <p className="banlist__table__item bold-text">
            {t('ban__action')}
          </p>
        </div>

        <ul>
          {itemsPerPage
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
              <li key={employee.slug} data-cy="item">
                <BanItem employee={employee} />
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
