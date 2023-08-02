import React, { RefObject, useRef, useState } from 'react';

import { ReferralCard } from '../../../shared/referralCard';
import { Pagination } from '../../../shared/pagination';

import referralInfo from '../../../../api/referralPerson.json';

export const Referral: React.FC = () => {
  const inputRef: RefObject<HTMLInputElement> = useRef(null);

  const [perPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  const total = referralInfo.length;
  const firstItem = (currentPage - 1) * perPage;
  const lastItem = currentPage * perPage;
  const itemsPerPage = referralInfo.slice(firstItem, lastItem);
  let newHash: string;

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
  };

  const handleCopyPlaceholder = () => {
    const inputElement = inputRef.current;

    if (inputElement) {
      const placeholderValue = inputElement.placeholder;

      navigator.clipboard.writeText(placeholderValue)
        .then(() => {
        })
        .catch(error => {
          window.alert(`Failed to copy placeholder: ${error}`);
        });
    }
  };

  return (
    <div className="referral">
      <div className="referral__container">
        <div className="referral__copy position-relative">
          <input
            type="text"
            name="referralLink"
            placeholder="https://www.google.com/search?sxsrf=AB5stBiDsij1zHDH-KTCjIjoJLfdp03ysg:1689079135519&q=huntik&tbm=isch&sa=X&ved=2ahUKEwju8PmO1oaAAxXJgf0HHQVyCk0Q0pQJegQICxAB&biw=1920&bih=969&dpr=1"
            className="referral__copy__input border-0 rounded-pill main-text position-absolute"
            disabled
            ref={inputRef}
          />

          <button
            type="button"
            className=" btn-grey referral__copy__btn bold-text position-absolute"
            onClick={handleCopyPlaceholder}
          >
            Copy
          </button>
        </div>

        <div className="referral__catalog d-flex flex-row justify-content-between align-items-center">
          {itemsPerPage.map(person => (
            <ReferralCard key={person.slug} personInfo={person} />
          ))}
        </div>

      </div>

      <Pagination
        total={total}
        perPage={perPage}
        currentPage={currentPage}
        onPageChange={handleOnPageChange}
        withBullets
      />
    </div>
  );
};
