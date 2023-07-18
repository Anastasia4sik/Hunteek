/* eslint-disable no-console */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import upload from '../../../img/icons/upload.svg';
import filter from '../../../img/icons/filter.svg';
import { Pagination } from '../../shared/pagination';

type Props = {
  forSideInfo?: boolean,
};

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

export const CatalogFull: React.FC<Props> = ({ forSideInfo }) => {
  const [largePerPage] = useState(forSideInfo ? 7 : 15);
  const [smallPerPage] = useState(11);
  const [perPage, setPerPage] = useState(largePerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const total = array.length;
  const firstItem = (currentPage - 1) * perPage;
  const lastItem = currentPage * perPage;
  const itemsPerPage = array.slice(firstItem, lastItem);
  let newHash: string;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1670) {
        setPerPage(smallPerPage);
      } else {
        setPerPage(largePerPage);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [largePerPage, smallPerPage]);

  const handleOnPageChange = (page: number | string) => {
    if (typeof page === 'number') {
      setCurrentPage(page);
      newHash = `#${page}`;
    } else if (page === 'prev') {
      setCurrentPage(current => current - 1);
      newHash = '#prev';
    } else if (page === 'next') {
      setCurrentPage(current => current + 1);
      newHash = '#next';
    }

    const currentHash = window.location.hash;
    const newHashWithCurrent = currentHash ? `${currentHash}${newHash}` : newHash;

    window.location.hash = newHashWithCurrent;

    console.log(newHash);
  };

  return (
    <>
      <div className={classNames(
        'catalog',
        { catalog__sideinfo: forSideInfo },
      )}
      >
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
                <img src={upload} alt="Download" className="catalog__item__download__img" />

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
            {itemsPerPage.map(each => (
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

                  <a href="#download" className="catalog__item__download bold-text d-flex flex-row align-items-center">
                    <img src={upload} alt="Download" className="catalog__item__download__img" />

                    <p className="catalog__header__btn__p bold-text">
                      Download
                    </p>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Pagination
        total={total}
        perPage={perPage}
        currentPage={currentPage}
        onPageChange={handleOnPageChange}
      />
    </>
  );
};
