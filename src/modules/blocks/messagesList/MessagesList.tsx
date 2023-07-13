/* eslint-disable max-len */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import { Pagination } from '../../shared/pagination';

import messages from '../../../api/messages.json';
import { Message } from '../../shared/message';

export const MessagesList: React.FC = () => {
  const [perPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const total = messages.length;
  const firstItem = (currentPage - 1) * perPage;
  const lastItem = currentPage * perPage;
  const itemsPerPage = messages.slice(firstItem, lastItem);
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

  return (
    <div className="messages">
      <div className="referral__container block">

        <div className="referral__catalog d-flex flex-column justify-content-between align-items-center">
          {itemsPerPage.map(message => (
            <Message key={message.slug} message={message} />
          ))}
        </div>

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
