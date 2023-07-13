/* eslint-disable max-len */
import React from 'react';

import edit from '../../../img/icons/edit.svg';
import { Rate } from '../../shared/rate';
import { UserPhoto } from '../../shared/userPhoto';

import { Recruiter } from '../../../types/Recruiter';

type Props = {
  recruiter: Recruiter,
};

export const RecruitInfo: React.FC<Props> = ({ recruiter }) => {
  if (!recruiter) {
    return null;
  }

  const {
    name,
    lastname,
    photo,
    desc,
    homeCity,
    homeCountry,
    email,
    phone,
    telegram,
    linkedin,
    github,
  } = recruiter;

  return (
    <div className="recruitInfo block">
      <div className="recruitInfo__content scroll">
        <div className="recruitInfo__user">
          <div className="recruitInfo__user__top d-flex flex-row align-items-start justify-content-between">
            <div className="recruitInfo__user__top__container d-flex flex-row align-items-center">
              <UserPhoto size={35} photo={photo} />

              <div className="recruitInfo__user__info d-flex flex-column">
                <p className="recruitInfo__user__info__name big-text">
                  {`${name} ${lastname}`}
                </p>

                <a href="#rating">
                  <Rate />
                </a>

                <p className="recruitInfo__user__info__location small-text">
                  {`${homeCountry}, ${homeCity}`}
                </p>

                <p className="recruitInfo__user__info__add small-text">
                  Recruiter
                </p>
              </div>
            </div>

            <a href="#edit-profile" className="recruitInfo__user__edit d-flex flex-row align-items-center">
              <img src={edit} alt="Edit" className="recruitInfo__user__edit__img" />

              <p className="small-text"> Edit Profile</p>
            </a>
          </div>

          <p className="recruitInfo__user__desc bold-text">
            {desc}
          </p>
        </div>

        <div className="recruitInfo__social d-flex flex-column">
          <div className="recruitInfo__social--1 d-flex flex-row justify-content-between">
            <p className="bold-text">
              Email:
            </p>

            <a href="mailto:gp.ugspl@gmail.com" className="list-text">
              {email}
            </a>
          </div>

          <div className="recruitInfo__social--2 d-flex flex-row justify-content-between">
            <p className="bold-text">
              Phone:
            </p>

            <a href="tel:+380991053517" className="list-text">
              {phone}
            </a>
          </div>

          <div className="recruitInfo__social--3 d-flex flex-row justify-content-between">
            <p className="bold-text">
              Telegram:
            </p>

            <a href="https://web.telegram.org/k/" className="list-text">
              {telegram}
            </a>
          </div>

          <div className="recruitInfo__social--4 d-flex flex-row justify-content-between">
            <p className="bold-text">
              Linkedin:
            </p>

            <a href="https://www.linkedin.com/feed/" className="list-text">
              {linkedin}
            </a>
          </div>

          <div className="recruitInfo__social--5 d-flex flex-row justify-content-between">
            <p className="bold-text">
              GitHub:
            </p>

            <a href="https://github.com/" className="list-text">
              {github}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
