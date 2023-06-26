/* eslint-disable max-len */
import React from 'react';

import edit from '../../../img/icons/edit.svg';
import { Rate } from '../../shared/rate';
import { UserPhoto } from '../../shared/userPhoto';

import { Employee } from '../../../types/Employee';

type Props = {
  employee: Employee,
};

export const EmployeeInfo: React.FC<Props> = ({ employee }) => {
  if (!employee) {
    return null;
  }

  const {
    name,
    photo,
    desc,
    position,
    timeZone,
    homeCountry,
    homeCity,
    workTerm,
    workTime,
    englishLevel,
    expierence,
    skills,
  } = employee;

  return (
    <div className="employeeInfo block">
      <div className="employeeInfo__content scroll">
        <div className="employeeInfo__user">
          <div className="employeeInfo__user__top d-flex flex-row align-items-start justify-content-between">
            <div className="employeeInfo__user__top__container d-flex flex-row align-items-center">
              <UserPhoto size={35} photo={photo} />

              <div className="employeeInfo__user__info d-flex flex-column">
                <p className="employeeInfo__user__info__name big-text">
                  {name}
                </p>

                <Rate />

                <p className="employeeInfo__user__info__location small-text">
                  {`${homeCountry}, ${homeCity}`}
                </p>

                <p className="employeeInfo__user__info__add small-text">
                  {position}
                </p>
              </div>
            </div>

            <a href="#edit-profile" className="employeeInfo__user__edit d-flex flex-row align-items-center">
              <img src={edit} alt="Edit" className="employeeInfo__user__edit__img" />

              <p className="small-text"> Edit</p>
            </a>
          </div>

          <p className="employeeInfo__user__desc bold-text">
            {desc}
          </p>
        </div>

        <div className="employeeInfo__social d-flex flex-column">
          <div className="employeeInfo__social--1 d-flex flex-row justify-content-between">
            <p className="bold-text">
              Time zone:
            </p>

            <p className="list-text">
              {timeZone}
            </p>
          </div>

          <div className="employeeInfo__social--2 d-flex flex-row justify-content-between">
            <p className="bold-text">
              Work term:
            </p>

            <p className="list-text">
              {workTerm}
            </p>
          </div>

          <div className="employeeInfo__social--3 d-flex flex-row justify-content-between">
            <p className="bold-text">
              Work time:
            </p>

            <p className="list-text">
              {workTime}
            </p>
          </div>

          <div className="employeeInfo__social--4 d-flex flex-row justify-content-between">
            <p className="bold-text">
              Level of English:
            </p>

            <p className="list-text">
              {englishLevel}
            </p>
          </div>

          <div className="employeeInfo__social--5 d-flex flex-row justify-content-between">
            <p className="bold-text">
              Years of experience::
            </p>

            <p className="list-text">
              {expierence}
            </p>
          </div>
        </div>

        <div className="employeeInfo__skills d-flex flex-column">
          <h5 className="employeeInfo__skills__title bold-text">
            Skills:
          </h5>

          <p className="employeeInfo__skills__desc list-text">
            { skills }
          </p>
        </div>
      </div>
    </div>
  );
};
