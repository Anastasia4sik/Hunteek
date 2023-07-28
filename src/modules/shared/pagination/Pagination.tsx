import classNames from 'classnames';
import React from 'react';
import { getNumbers } from '../../../helpers';

type Props = {
  total: number,
  perPage: number,
  currentPage: number,
  onPageChange: (page: number | string) => void,
  withBullets?: boolean,
};

export const Pagination: React.FC<Props> = (props) => {
  const {
    total,
    perPage,
    currentPage,
    onPageChange,
    withBullets,
  } = props;

  const lastPage = Math.ceil(total / perPage);
  let numbersOfPages: number[] | string[] | (number | string)[] = withBullets
    ? getNumbers(
      Math.max(1, currentPage - 1),
      Math.min(lastPage, currentPage + 1),
    )
    : getNumbers(
      Math.max(1, currentPage - 1),
      Math.min(lastPage, currentPage + 1),
    );

  if (currentPage === 1) {
    numbersOfPages = [' ', ...numbersOfPages];
  } else if (currentPage === lastPage) {
    numbersOfPages = [...numbersOfPages, ' '];
  }

  const centerIndex = Math.floor(numbersOfPages.length / 2);

  return (
    <ul className="pagination justify-content-center pag align-items-center">
      {/* prev page btn */}
      <li
        className={classNames('pag__item', {
          disabled: currentPage === 1,
        })}
      >
        <a
          data-cy="prevLink"
          className="pag__link"
          href="#prev"
          aria-disabled={currentPage === 1}
          onClick={() => {
            if (currentPage !== 1) {
              onPageChange(currentPage - 1);
            }
          }}
        >
          &lt;
        </a>
      </li>

      {/* pages */}
      {numbersOfPages.map((page: number | string, index: number) => (
        <li
          className={classNames('pag__item', {
            pag__active: page === currentPage,
            center: index === centerIndex,
          })}
          key={page}
        >
          <a
            data-cy="pageLink"
            className="pag__link"
            href={`#${page}`}
            onClick={() => onPageChange(page)}
          >
            {withBullets ? (
              <div
                className={classNames('bullet', {
                  active: page === currentPage,
                })}
              />
            ) : (
              page
            )}
          </a>
        </li>
      ))}

      {/* next page btn */}
      <li
        className={classNames('pag__item', {
          disabled: currentPage === lastPage,
        })}
      >
        <a
          data-cy="nextLink"
          className="pag__link"
          href="#next"
          aria-disabled={currentPage === lastPage}
          onClick={() => {
            if (currentPage !== lastPage) {
              onPageChange(currentPage + 1);
            }
          }}
        >
          &gt;
        </a>
      </li>
    </ul>
  );
};
