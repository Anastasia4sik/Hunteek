import React, { useEffect, useState } from 'react';
import { Menu } from '../shared/Menu';
import { Header } from '../shared/Header';
import { Card } from '../shared/Card';
import { Select } from '../shared/Select';
import { Info } from '../shared/Info';

export const Main: React.FC = () => {
  const [location, setLocation] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#profile') {
        setLocation('profile');
      } else {
        setLocation('general');
      }
    };

    handleHashChange(); // Call the function once on initial load to set the location

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

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
