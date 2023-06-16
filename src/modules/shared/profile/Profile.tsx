/* eslint-disable max-len */
import React from 'react';

import user from '../../../img/photo/user.png';
import { Rate } from '../rate';

export const Profile: React.FC = () => {
  return (
    <div className="profile">
      <div className="profile__content">
        <div className="profile__user">
          <div className="profile__user__top d-flex flex-row align-items-center">
            <img src={user} alt="User" className="profile__user__img" />

            <div className="profile__user__info d-flex flex-column">
              <p className="profile__user__info__name big-text">
                Yuri Kudin
              </p>

              <Rate />

              <p className="profile__user__info__location small-text">
                Ukraine, Lviv
              </p>

              <p className="profile__user__info__add small-text">
                Remote
              </p>
            </div>
          </div>

          <p className="profile__user__desc bold-text">
            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual.
          </p>
        </div>

        <div className="profile__time d-flex flex-column">
          <div className="profile__time--1 d-flex flex-row justify-content-between">
            <p className="bold-text">
              Time zone:
            </p>

            <p className="list-text">
              Kyiv UTC+2
            </p>
          </div>

          <div className="profile__time--2 d-flex flex-row justify-content-between">
            <p className="bold-text">
              Work term:
            </p>

            <p className="list-text">
              Long-term
            </p>
          </div>

          <div className="profile__time--3 d-flex flex-row justify-content-between">
            <p className="bold-text">
              Work time:
            </p>

            <p className="list-text">
              Part-time
            </p>
          </div>

          <div className="profile__time--4 d-flex flex-row justify-content-between">
            <p className="bold-text">
              Level of English:
            </p>

            <p className="list-text">
              B2
            </p>
          </div>

          <div className="profile__time--5 d-flex flex-row justify-content-between">
            <p className="bold-text">
              Years of experience:
            </p>

            <p className="list-text">
              5
            </p>
          </div>
        </div>

        <div className="profile__skills d-flex flex-column">
          <h5 className="profile__skills__title bold-text">
            Skills:
          </h5>

          <p className="profile__skills__desc list-text">
            CSS, HTML, JavaScript
          </p>
        </div>
      </div>
    </div>
  );
};
