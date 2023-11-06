import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import upload from '../../../../img/icons/upload.svg';
import filter from '../../../../img/icons/filter.svg';

import { Pagination } from '../../../shared/pagination';
import { useTranslation } from 'react-i18next';

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
    const hash = window.location.hash;

    if (typeof page === 'number') {
      setCurrentPage(page);
      window.location.hash = `${hash}#${page}`;
    } else if (page === 'prev') {
      setCurrentPage(current => current - 1);
      window.location.hash = hash.replace(`${page}`,'');
      window.location.hash = hash.replace('next','');
      window.location.hash = hash.replace('prev','');
      window.location.hash = `${hash}#prev`;
    } else if (page === 'next') {
      setCurrentPage(current => current + 1);
      window.location.hash = hash.replace(`${page}`,'');
      window.location.hash = hash.replace('next','');
      window.location.hash = hash.replace('prev','');
      window.location.hash = `${hash}#next`;
    }

    const newHashWithCurrent = hash ? `${hash}${newHash}` : newHash;

    window.location.hash = newHashWithCurrent;
  };

  const { t } = useTranslation();

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
              {t('catalog__title')}
            </p>

            <div className="catalog__header__targets d-flex flex-row">
              <button className="catalog__header__btn d-flex flex-row btn-grey ">
                <img src={filter} alt="Filter" className="catalog__header__btn__img" />

                <p className="catalog__header__btn__p bold-text">
                  {t('filter')}
                </p>
              </button>

              <button className="catalog__header__btn d-flex flex-row btn-grey">
                <img src={upload} alt="Download" className="catalog__item__download__img" />

                <p className="catalog__header__btn__p bold-text">
                  {t('download__all')}
                </p>
              </button>
            </div>
          </div>

          <div className="catalog__table d-flex flex-row justify-content-between align-items-center">
            <p className="catalog__table__item bold-text">
              {t('date')}
              <span className="invisible">.....</span>
            </p>

            <p className="catalog__table__item bold-text">
              {t('id')}
            </p>

            <p className="catalog__table__item bold-text">
              {t('amount')}
            </p>

            <p className="catalog__table__item bold-text">
              {t('vat')}
            </p>

            <p className="catalog__table__item bold-text">
              {t('profit')}
            </p>

            <p className="catalog__table__item bold-text">
              {t('id__referral')}
            </p>

            <p className="catalog__table__item bold-text">
              {t('link')}
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
                    {t('no__referral')}
                  </p>

                  <a href="#download" className="catalog__item__download bold-text d-flex flex-row align-items-center">
                    <img src={upload} alt="Download" className="catalog__item__download__img" />

                    <p className="catalog__header__btn__p bold-text">
                      {t('download')}
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
