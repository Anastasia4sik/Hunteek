/* eslint-disable max-len */
import React from 'react';

import user from '../../../img/photo/user.png';
import edit from '../../../img/icons/edit.svg';
import { Rate } from '../rate';

export const RecruitInfo: React.FC = () => {
  return (
    <div className="recruitInfo">
      <div className="recruitInfo__content">
        <div className="recruitInfo__user">
          <div className="recruitInfo__user__top d-flex flex-row align-items-start justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <img src={user} alt="User" className="recruitInfo__user__img" />

              <div className="recruitInfo__user__info d-flex flex-column">
                <p className="recruitInfo__user__info__name big-text">
                  Yuri Kudin
                </p>

                <Rate />

                <p className="recruitInfo__user__info__location small-text">
                  Ukraine, Lviv
                </p>

                <p className="recruitInfo__user__info__add small-text">
                  Remote
                </p>
              </div>
            </div>

            <div className="recruitInfo__user__edit d-flex flex-row">
              <img src={edit} alt="Edit" className="recruitInfo__user__edit__img" />

              <p className="small-text"> Edit Profile</p>
            </div>
          </div>

          <p className="recruitInfo__user__desc bold-text">
            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual.
          </p>
        </div>

        <div className="recruitInfo__social d-flex flex-column">
          <div className="recruitInfo__social--1 d-flex flex-row justify-content-between">
            <p className="bold-text">
              Email:
            </p>

            <a href="mailto:gp.ugspl@gmail.com" className="list-text">
              gp.ugspl@gmail.com
            </a>
          </div>

          <div className="recruitInfo__social--2 d-flex flex-row justify-content-between">
            <p className="bold-text">
              Phone:
            </p>

            <a href="tel:+380991053517" className="list-text">
              +380 99 105 35 17
            </a>
          </div>

          <div className="recruitInfo__social--3 d-flex flex-row justify-content-between">
            <p className="bold-text">
              Telegram:
            </p>

            <a href="https://web.telegram.org/k/" className="list-text">
              Nikname
            </a>
          </div>

          <div className="recruitInfo__social--4 d-flex flex-row justify-content-between">
            <p className="bold-text">
              Linkedin:
            </p>

            <a href="https://www.linkedin.com/feed/" className="list-text">
              https://www.linkedin.com/feed/
            </a>
          </div>

          <div className="recruitInfo__social--5 d-flex flex-row justify-content-between">
            <p className="bold-text">
              GitHub:
            </p>

            <a href="https://github.com/" className="list-text">
              https://github.com/
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
