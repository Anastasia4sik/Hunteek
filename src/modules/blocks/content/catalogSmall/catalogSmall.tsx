import React from 'react';
import { useTranslation } from 'react-i18next';

const amountArray = [0, 1, 2, 3, 4, 5];

export const CatalogSmall: React.FC = () => {
  if (window.innerWidth <= 1670) {
    amountArray.length = 5;
  } else {
    amountArray.length = 6;
  }

  const { t } = useTranslation();

  return (
    <div className="catalog">
      <div className="catalog__container block">
        <div className="catalog__header d-flex flex-row justify-content-between align-items-center">
          <p className="catalog__header__title big-text">
            {t('catalog__title')}
          </p>

          <a href="/my-wallet/catalog-full" className="catalog__header__btn d-flex flex-row btn-grey bold-text">
            {t('catalog__show__all')}
          </a>
        </div>

        <div className="catalog__table d-flex flex-row justify-content-between align-items-center">
          <p className="catalog__table__item bold-text">
            {t('date')}
            <span className="invisible">........</span>
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
        </div>

        <ul>
          {amountArray.map(each => (
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

                <p className="catalogSmall__item__profit bold-text">
                  1200.00
                </p>

                <p className="catalogSmall__item__referral bold-text">
                  {t('no__referral')}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
