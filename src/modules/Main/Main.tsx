import React from 'react';
import { Menu } from '../Menu';
import { Header } from '../Header';
import { Card } from '../Card';
import { Select } from '../Select';
import { Info } from '../Info';

export const Main: React.FC = () => {
  let location = '';

  if (window.location.hash.includes('#profile')) {
    location = 'profile';
  } else {
    location = 'general';
  }

  return (
    <div className="main">
      <Menu />

      <Header />

      <div className="content d-flex flex-row">
        <Select />

        <div className="main__catalog">
          {[0, 1, 2, 3, 4, 5].map((each) => (
            <Card key={each} />
          ))}
        </div>

        <Info purpose={location} />
      </div>
    </div>
  );
};
