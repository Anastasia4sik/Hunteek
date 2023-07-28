import React from 'react';

import edit from '../../../img/icons/edit.svg';
import { Rate } from '../../shared/rate';
import { UserPhoto } from '../../shared/userPhoto';

import { Employee } from '../../../types/Employee';

type Props = {
  employee: Employee,
};

export const Resume: React.FC<Props> = ({ employee }) => {
  if (!employee) {
    return null;
  }

  const {
    name,
    photo,
    desc,
    position,
    timeZone,
    workTerm,
    workTime,
    homeCity,
    homeCountry,
    englishLevel,
    expierence,
    skills,
  } = employee;

  return (
    <div className="resume">
      <div className="resume__content">
        <div className="resume__main block">
          <div className="resume__main__top d-flex flex-row align-items-start justify-content-between">
            <div className="resume__main__top__container d-flex flex-row align-items-center">
              <UserPhoto size={20} photo={photo} />

              <div className="resume__main__info d-flex flex-column">
                <p className="resume__main__info__name big-text">
                  {name}
                </p>

                <Rate />

                <p className="resume__main__info__add small-text">
                  {position}
                </p>
              </div>
            </div>

            <a href="#edit-resume" className="resume__main__edit d-flex flex-row align-items-center">
              <img src={edit} alt="Edit" className="resume__main__edit__img" />

              <p className="small-text"> Edit Resume </p>
            </a>
          </div>

          <h6 className="main-text resume__main__desc__title">
            Description
          </h6>

          <p className="resume__main__desc bold-text">
            {desc}
          </p>
        </div>

        <div className="resume__info d-flex flex-row flex-wrap align-items-center justify-content-between">
          <div className="
            resume__info__item
            block
            d-flex
            flex-column
            justify-content-center
            align-items-center"
          >
            <p className="big-text resume__info__item__title">
              Time zone:
            </p>

            <p className="bold-text">
              {timeZone}
            </p>
          </div>

          <div className="
            resume__info__item
            block
            d-flex
            flex-column
            justify-content-center
            align-items-center"
          >
            <p className="big-text resume__info__item__title">
              Work term:
            </p>

            <p className="bold-text">
              {workTerm}
            </p>
          </div>

          <div className="
            resume__info__item
            block
            d-flex
            flex-column
            justify-content-center
            align-items-center"
          >
            <p className="big-text resume__info__item__title">
              Work time:
            </p>

            <p className="bold-text">
              {workTime}
            </p>
          </div>

          <div className="
            resume__info__item
            block
            d-flex
            flex-column
            justify-content-center
            align-items-center"
          >
            <p className="big-text resume__info__item__title">
              Level of English:
            </p>

            <p className="bold-text">
              {englishLevel}
            </p>
          </div>

          <div className="
            resume__info__item
            block
            d-flex
            flex-column
            justify-content-center
            align-items-center"
          >
            <p className="big-text resume__info__item__title">
              Years of experience:
            </p>

            <p className="bold-text">
              {expierence}
            </p>
          </div>

          <div className="
            resume__info__item
            block
            d-flex
            flex-column
            justify-content-center
            align-items-center"
          >
            <p className="big-text resume__info__item__title">
              Location:
            </p>

            <p className="bold-text">
              {`${homeCountry}, ${homeCity}`}
            </p>
          </div>
        </div>

        <div className="resume__skills block d-flex flex-column align-items-center">
          <h5 className="resume__skills__title big-text">
            Skills:
          </h5>

          <p className="resume__skills__desc bold-text">
            { skills }
          </p>
        </div>
      </div>
    </div>
  );
};
