/* eslint-disable max-len */
import React from 'react';

import { Rate } from '../rate';
import { UserPhoto } from '../userPhoto';

import { Employee } from '../../../types/Employee';

type Props = {
  employee: Employee,
};

export const Profile: React.FC<Props> = ({ employee }) => {
  if (!employee) {
    return null;
  }

  const {
    name,
    photo,
    desc,
    timeZone,
    homeCountry,
    homeCity,
    workTerm,
    workTime,
    whereToWork,
    englishLevel,
    expierence,
    skills,
  } = employee;

  return (
    <div className="profile">
      <div className="profile__content scroll">
        <div className="profile__user">
          <div className="profile__user__top d-flex flex-row align-items-center">
            <UserPhoto size={20} photo={photo} />

            <div className="profile__user__info d-flex flex-column">
              <p className="profile__user__info__name big-text">
                { name }
              </p>

              <Rate />

              <p className="profile__user__info__location small-text">
                {`${homeCountry}, ${homeCity}`}
              </p>

              <p className="profile__user__info__add small-text">
                { whereToWork }
              </p>
            </div>
          </div>

          <p className="profile__user__desc bold-text">
            { desc }
          </p>
        </div>

        <div className="profile__time d-flex flex-column">
          <div className="profile__time--1 d-flex flex-row justify-content-between">
            <p className="bold-text">
              Time zone:
            </p>

            <p className="list-text">
              { timeZone }
            </p>
          </div>

          <div className="profile__time--2 d-flex flex-row justify-content-between">
            <p className="bold-text">
              Work term:
            </p>

            <p className="list-text">
              { workTerm }
            </p>
          </div>

          <div className="profile__time--3 d-flex flex-row justify-content-between">
            <p className="bold-text">
              Work time:
            </p>

            <p className="list-text">
              { workTime }
            </p>
          </div>

          <div className="profile__time--4 d-flex flex-row justify-content-between">
            <p className="bold-text">
              Level of English:
            </p>

            <p className="list-text">
              { englishLevel }
            </p>
          </div>

          <div className="profile__time--5 d-flex flex-row justify-content-between">
            <p className="bold-text">
              Years of experience:
            </p>

            <p className="list-text">
              { expierence }
            </p>
          </div>
        </div>

        <div className="profile__skills d-flex flex-column">
          <h5 className="profile__skills__title bold-text">
            Skills:
          </h5>

          <p className="profile__skills__desc list-text">
            { skills }
          </p>
        </div>
      </div>
    </div>
  );
};
