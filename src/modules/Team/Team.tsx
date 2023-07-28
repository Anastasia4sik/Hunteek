import React, { useEffect, useState } from 'react';

import { Menu } from '../blocks/menu';
import { Header } from '../blocks/Header';
import { Select } from '../blocks/select';
import { Info } from '../blocks/Info';
import { Rate } from '../shared/rate';
import { UserPhoto } from '../shared/userPhoto';

import { Employee } from '../../types/Employee';
import { getEmployees } from '../../api/api';

import photo from '../../img/photo/user.png';
import eye from '../../img/icons/card/eye.svg';
import message from '../../img/icons/card/message.svg';

export const Team: React.FC = () => {
  const [location, setLocation] = useState('');
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#create-project') {
        setLocation('project');
      } else if (window.location.hash === '#create-resume') {
        setLocation('team');
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

  useEffect(() => {
    getEmployees().then(data => {
      setEmployees(data);
    });
  }, []);

  return (
    <div className="main">
      <Menu />

      <Header />

      <div className="content d-flex flex-row">
        <Select />

        <div className="main__catalog">
          {[0, 1, 2, 3, 4, 5].map((each) => (
            <div key={each} className="card block">
              <div className="card__title text-center">
                <h3 className="card__title__p text-center main-text">
                  Middle Front-end Developer (Vue)
                </h3>
              </div>

              <a href="#team">
                <div className="card__person">
                  <div className="card__person__inner d-flex flex-row justify-content-between align-items-center">
                    <div className="card__person__content d-flex flex-column">
                      <p className="card__person__name main-text">
                        Ivan Kadylo
                      </p>

                      <Rate />
                    </div>

                    <UserPhoto size={24} photo={photo} />
                  </div>
                </div>

                <div className="card__info d-flex flex-column justify-content-center">
                  <p className="card__info__desc main-text">
                    Kyiv
                  </p>

                  <p className="card__info__desc main-text">
                    Remote
                  </p>

                  <p className="card__info__desc main-text">
                    Product
                  </p>
                </div>

                <div className="card__media d-flex flex-row">
                  <div className="card__media__item d-flex flex-row">
                    <img src={eye} alt="Eye" />

                    <p className="card__media__item__desc">194</p>
                  </div>

                  <div className="card__media__item d-flex flex-row">
                    <img src={message} alt="Message" />

                    <p className="card__media__item__desc">134</p>
                  </div>
                </div>
              </a>

              <div className="card__btn">
                <button type="button" className="card__btn__button main-text btn-grey">
                  Terminate cooperation
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      <Info purpose={location} employee={employees[0]} />
    </div>
  );
};
