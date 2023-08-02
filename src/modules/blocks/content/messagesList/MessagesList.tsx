import React, { ReactNode, useEffect, useState } from 'react';

import { Pagination } from '../../../shared/pagination';

import messages from '../../../../api/messages.json';
import { Message } from '../../../shared/message';

type Props = {
  searchQuery: string;
};

export const MessagesList: React.FC<Props> = ({ searchQuery }) => {
  const [largePerPage] = useState(5);
  const [smallPerPage] = useState(6);
  const [perPage, setPerPage] = useState(largePerPage); // Start with the largePerPage value
  const [currentPage, setCurrentPage] = useState(1);

  const total = messages.length;
  const firstItem = (currentPage - 1) * perPage;
  const lastItem = currentPage * perPage;
  const itemsPerPage = messages.slice(firstItem, lastItem);
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
  };

  return (
    <div className="messages">
      <div className="block">
        <div className="d-flex flex-column justify-content-between">
          {itemsPerPage
            .filter((message) => message.name.toLowerCase().includes(searchQuery.toLowerCase()))
            .map(message => (
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
