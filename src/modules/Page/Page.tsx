import React from 'react';
import { Menu } from '../Menu';
import { Header } from '../Header';
import { Card } from '../Card';

export const Page: React.FC = () => {
  return (
    <div className="main">
      <Menu />

      <Header />

      <div className="main__catalog">
        {[0, 1, 2, 3, 4, 5].map((each) => (
          <Card key={each} />
        ))}
      </div>
    </div>
  );
};
