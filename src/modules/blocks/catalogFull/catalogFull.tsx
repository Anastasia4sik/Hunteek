import React, { useState } from 'react';

import upload from '../../../img/icons/upload.svg';
import filter from '../../../img/icons/filter.svg';
import { Pagination } from '../../shared/pagination';

export const CatalogFull: React.FC = () => {
  const [perPage] = useState(14);
  const [currentPage, setCurrentPage] = useState(1);

  const total = 140;
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

  return (
    <div className="catalog">
      <div className="catalog__container block">
        <div className="catalog__header d-flex flex-row justify-content-between align-items-center">
          <p className="catalog__header__title big-text">
            Catalog of accounting and reports
          </p>

          <div className="catalog__header__targets d-flex flex-row">
            <a href="#filter" className="catalog__header__btn d-flex flex-row btn-grey ">
              <img src={filter} alt="Filter" className="catalog__header__btn__img" />

              <p className="catalog__header__btn__p bold-text">
                Filter
              </p>
            </a>

            <a href="#download" className="catalog__header__btn d-flex flex-row btn-grey">
              <img src={upload} alt="Download" className="catalog__header__btn__img" />

              <p className="catalog__header__btn__p bold-text">
                Download All
              </p>
            </a>
          </div>
        </div>

        <div className="catalog__table d-flex flex-row justify-content-between align-items-center">
          <p className="catalog__table__item bold-text">
            Date
            <span className="invisible">........</span>
          </p>

          <p className="catalog__table__item bold-text">
            ID
          </p>

          <p className="catalog__table__item bold-text">
            Amount
          </p>

          <p className="catalog__table__item bold-text">
            VAT
          </p>

          <p className="catalog__table__item bold-text">
            Profit
          </p>

          <p className="catalog__table__item bold-text">
            ID Referral
          </p>

          <p className="catalog__table__item bold-text">
            Link
          </p>
        </div>

        <ul>
          {[0, 1, 2, 3, 4, 5].map(each => (
            <li key={each}>
              <div className="catalog__item d-flex flex-row justify-content-between align-items-center">
                <p className="catalog__item__date bold-text">
                  06.03.2022
                </p>

                <p className="catalog__item__id bold-text">
                  36578
                </p>

                <p className="catalog__item__amount bold-text">
                  5,290.00
                </p>

                <p className="catalog__item__vat bold-text">
                  300.00
                </p>

                <p className="catalog__item__profit bold-text">
                  1200.00
                </p>

                <p className="catalog__item__referral bold-text">
                  No referral
                </p>

                <a href="#download" className="catalog__item__referral bold-text">
                  <img src={upload} alt="Download" className="catalog__header__btn__img" />

                  <p className="catalog__header__btn__p bold-text">
                    Download
                  </p>
                </a>
              </div>
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
