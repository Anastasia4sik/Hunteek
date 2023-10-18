import React, { useState } from 'react';

import arrow from '../../../img/icons/arrow_down.svg';
import arrow_light from '../../../img/icons/arrow_down_light.svg';

import languages from '../../../helpers/arrays/programLanguages.js';
import levels from '../../../helpers/arrays/langLevels.js';
import companyTypes from '../../../helpers/arrays/companyType.js';
import salaries from '../../../helpers/arrays/salaries.js';
import reits from '../../../helpers/arrays/reits.js';
import countries from '../../../helpers/arrays/countries.js';
import experiences from '../../../helpers/arrays/experiences.js';
import speakLanguages from '../../../helpers/arrays/speakLanguages.js';

import { useTranslation } from 'react-i18next';

export const MainSelect = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);
  const [isOpen10, setIsOpen10] = useState(false);
  const [isOpen11, setIsOpen11] = useState(false);

  const isProject = window.location.pathname.includes('projects');

  const handleToggle1 = () => {
    setIsOpen1(!isOpen1);
  };

  const handleToggle2 = () => {
    setIsOpen2(!isOpen2);
  };

  const handleToggle3 = () => {
    setIsOpen3(!isOpen3);
  };

  const handleToggle4 = () => {
    setIsOpen4(!isOpen4);
  };

  const handleToggle5 = () => {
    setIsOpen5(!isOpen5);
  };

  const handleToggle6 = () => {
    setIsOpen6(!isOpen6);
  };

  const handleToggle7 = () => {
    setIsOpen7(!isOpen7);
  };

  const handleToggle8 = () => {
    setIsOpen8(!isOpen8);
  };

  const handleToggle9 = () => {
    setIsOpen9(!isOpen9);
  };

  const handleToggle10 = () => {
    setIsOpen10(!isOpen10);
  };

  const handleToggle11 = () => {
    setIsOpen11(!isOpen11);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleToggle1();
    }
  };

  const isMy = window.location.pathname.includes('my');

  const { t } = useTranslation();

  const parentDiv = document.getElementById('select');
  const childElements = parentDiv?.querySelectorAll('*');
  const headers = document.querySelectorAll('.select__header');

  if (localStorage.theme === 'light') {
    parentDiv?.classList.add('light');

    headers.forEach((element) => {
      element.classList.add('light');
    });
    
    if (childElements) {
      for (let i = 0; i < childElements.length; i++) {
        const child = childElements[i];
        child.classList.add('light');
      }
    }
  } else {
    parentDiv?.classList.remove('light');

    headers.forEach((element) => {
      element.classList.remove('light');
    });
    
    if (childElements) {
      for (let i = 0; i < childElements.length; i++) {
        const child = childElements[i];
        child.classList.remove('light');
      }
    }
  }

  return (
    <div className="select select__main block" id='select'>
      <div className="select__container select__container__main scroll">
        {isProject && (
          <a href="#create-project" className="select__container__btn btn-grey list-text">
            {t('create__project')}
          </a>
        )}

        {/* program languages */}
        <div className={
          `${isMy ? 'select--3' : 'select--1'}
          select__content
          big
          ${isOpen1 ? 'open' : ''}`
        }>
          <div
            className={
              `${isMy ? 'select__header--profile' : ''}
              select__header
              d-flex
              flex-row
              justify-content-between
              ${isOpen1 ? 'select__header--active' : ''}`
            }
            role="button"
            tabIndex={0}
            onClick={handleToggle1}
            onKeyDown={handleKeyDown}
          >
              <span className="select__option list-text">
                {t('sel__spec')}
              </span>

            {!isOpen1 ?
              <img
                src={
                  localStorage.theme === 'light' ?
                  arrow_light :
                  arrow
                }
                alt="Open" 
              /> :
              <img
                src={
                  localStorage.theme === 'light' ?
                  arrow_light :
                  arrow
                }
                alt="Close"
                className="arrow-close"
              />
            }
          </div>

          <ul
            className={`
              select__option__list
              scroll
              select__option__list--1
              ${isOpen1 ? 'select__option__list--open' : 'select__option__list--close'}`}
          >
            {languages.map((language: string) => (
              <li key={language} 
                className="
                list-text
                select__option__list__item"
              >
                <label htmlFor={`${language}-checkbox`} className="checkbox-label list-text">
                  <input
                    type="checkbox"
                    id={`${language}-checkbox`}
                    name="option"
                    value={language}

                  />
                  <span>{language}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        {!isProject && (
          <>
            {/* Job search activity */}
            <div className={`select--1 select__content  ${isOpen2 ? 'open' : ''}`}>
              <div
                className={`select__header d-flex flex-row justify-content-between ${isOpen2 ? 'select__header--active' : ''}`}
                role="button"
                tabIndex={0}
                onClick={handleToggle2}
                onKeyDown={handleKeyDown}
              >
                  <span className="select__option list-text">
                    {t('sel__job__search')}
                  </span>

                {!isOpen2 ? 
                  <img
                  src={
                    localStorage.theme === 'light' ?
                    arrow_light :
                    arrow
                  }
                  alt="Open" 
                /> :
                <img
                  src={
                    localStorage.theme === 'light' ?
                    arrow_light :
                    arrow
                  }
                  alt="Close"
                  className="arrow-close"
                />
              }
              </div>

              <ul
                className={`
                  select__option__list
                  select__option__list--1
                  ${isOpen2 ? 'select__option__list--open' : 'select__option__list--close'}`}
              >
                  <li className="
                    list-text
                    select__option__list__item"
                  >
                    <label htmlFor='active-checkbox' className="checkbox-label list-text">
                      <input
                        type="checkbox"
                        id='active-checkbox'
                        name="option"
                        value='active'

                      />
                      <span>
                        {t('active')}
                      </span>
                    </label>
                  </li>

                  <li className="
                    list-text
                    select__option__list__item"
                  >
                    <label htmlFor='passive-checkbox' className="checkbox-label list-text">
                      <input
                        type="checkbox"
                        id='passive-checkbox'
                        name="option"
                        value='passive'

                      />
                      <span>
                        {t('passive')}
                      </span>
                    </label>
                  </li>
              </ul>
            </div>

            {/* English level */}
            <div className={`select--1 select__content  ${isOpen3 ? 'open' : ''}`}>
              <div
                className={`select__header d-flex flex-row justify-content-between ${isOpen3 ? 'select__header--active' : ''}`}
                role="button"
                tabIndex={0}
                onClick={handleToggle3}
                onKeyDown={handleKeyDown}
              >
                  <span className="select__option list-text">
                    {t('sel__english')}
                  </span>

                {!isOpen3 ? 
                  <img
                    src={
                      localStorage.theme === 'light' ?
                      arrow_light :
                      arrow
                    }
                    alt="Open" 
                  /> :
                  <img
                    src={
                      localStorage.theme === 'light' ?
                      arrow_light :
                      arrow
                    }
                    alt="Close"
                    className="arrow-close"
                  />
                }
              </div>

              <ul
                className={`
                  select__option__list
                  select__option__list--1
                  ${isOpen3 ? 'select__option__list--open' : 'select__option__list--close'}`}
              >
                {levels.map((level: string) => (
                  <li key={level} className="
                    list-text
                    select__option__list__item"
                  >
                    <label htmlFor={`${level}-checkbox`} className="checkbox-label list-text">
                      <input
                        type="checkbox"
                        id={`${level}-checkbox`}
                        name="option"
                        value={level}

                      />
                      <span>{level}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* experience */}
            <div className={`select--1 select__content  ${isOpen4 ? 'open' : ''}`}>
              <div
                className={`select__header d-flex flex-row justify-content-between ${isOpen4 ? 'select__header--active' : ''}`}
                role="button"
                tabIndex={0}
                onClick={handleToggle4}
                onKeyDown={handleKeyDown}
              >
                  <span className="select__option list-text">
                    {t('sel__experience')}
                  </span>

                {!isOpen4 ? 
                  <img
                    src={
                      localStorage.theme === 'light' ?
                      arrow_light :
                      arrow
                    }
                    alt="Open" 
                  /> :
                  <img
                    src={
                      localStorage.theme === 'light' ?
                      arrow_light :
                      arrow
                    }
                    alt="Close"
                    className="arrow-close"
                  />
                }
              </div>

              <ul
                className={`
                  select__option__list
                  select__option__list--1
                  ${isOpen4 ? 'select__option__list--open' : 'select__option__list--close'}`}
              >
                {experiences.map((experience: string) => (
                  <li key={experience} className="
                    list-text
                    select__option__list__item"
                  >
                    <label htmlFor={`${experience}-checkbox`} className="checkbox-label list-text">
                      <input
                        type="checkbox"
                        id={`${experience}-checkbox`}
                        name="option"
                        value={experience}

                      />
                      <span>{experience}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
        {/* Type of work */}
        <div className={`select--1 select__content  ${isOpen5 ? 'open' : ''}`}>
          <div
            className={`select__header d-flex flex-row justify-content-between ${isOpen5 ? 'select__header--active' : ''}`}
            role="button"
            tabIndex={0}
            onClick={handleToggle5}
            onKeyDown={handleKeyDown}
          >
              <span className="select__option list-text">
                {t('sel__work__type')}
              </span>

            {!isOpen5 ? 
              <img
                src={
                  localStorage.theme === 'light' ?
                  arrow_light :
                  arrow
                }
                alt="Open" 
              /> :
              <img
                src={
                  localStorage.theme === 'light' ?
                  arrow_light :
                  arrow
                }
                alt="Close"
                className="arrow-close"
              />
            }
          </div>

          <ul
            className={`
              select__option__list
              select__option__list--1
              ${isOpen5 ? 'select__option__list--open' : 'select__option__list--close'}`}
          >
              <li className="
                list-text
                select__option__list__item"
              >
                <label htmlFor='office-checkbox' className="checkbox-label list-text">
                  <input
                    type="checkbox"
                    id='office-checkbox'
                    name="option"
                    value='office'

                  />
                  <span>
                    {t('office__work')}
                  </span>
                </label>
              </li>

              <li className="
                list-text
                select__option__list__item"
              >
                <label htmlFor='remote-checkbox' className="checkbox-label list-text">
                  <input
                    type="checkbox"
                    id='remote-checkbox'
                    name="option"
                    value='remote'

                  />
                  <span>
                    {t('remote__work')}
                  </span>
                </label>
              </li>

              <li className="
                list-text
                select__option__list__item"
              >
                <label htmlFor='mixed-checkbox' className="checkbox-label list-text">
                  <input
                    type="checkbox"
                    id='mixed-checkbox'
                    name="option"
                    value='mixed'

                  />
                  <span>
                    {t('mixed__work')}
                  </span>
                </label>
              </li>
          </ul>
        </div>
        {/* Project employment */}
        <div className={`select--1 select__content  ${isOpen6 ? 'open' : ''}`}>
          <div
            className={`select__header d-flex flex-row justify-content-between ${isOpen6 ? 'select__header--active' : ''}`}
            role="button"
            tabIndex={0}
            onClick={handleToggle6}
            onKeyDown={handleKeyDown}
          >
              <span className="select__option list-text">
                {t('sel__proj__employ')}
              </span>

            {!isOpen6 ? 
              <img
                src={
                  localStorage.theme === 'light' ?
                  arrow_light :
                  arrow
                }
                alt="Open" 
              /> :
              <img
                src={
                  localStorage.theme === 'light' ?
                  arrow_light :
                  arrow
                }
                alt="Close"
                className="arrow-close"
              />
            }
          </div>

          <ul
            className={`
              select__option__list
              select__option__list--1
              ${isOpen6 ? 'select__option__list--open' : 'select__option__list--close'}`}
          >
              <li className="
                list-text
                select__option__list__item"
              >
                <label htmlFor='full-checkbox' className="checkbox-label list-text">
                  <input
                    type="checkbox"
                    id='full-checkbox'
                    name="option"
                    value='full'

                  />
                  <span>
                    {t('full__time')}
                  </span>
                </label>
              </li>

              <li className="
                list-text
                select__option__list__item"
              >
                <label htmlFor='part-checkbox' className="checkbox-label list-text">
                  <input
                    type="checkbox"
                    id='part-checkbox'
                    name="option"
                    value='part'

                  />
                  <span>
                    {t('part__time')}
                  </span>
                </label>
              </li>
          </ul>
        </div>
        {/* Company type */}
        <div className={`select--1 select__content  ${isOpen7 ? 'open' : ''}`}>
          <div
            className={`select__header d-flex flex-row justify-content-between ${isOpen7 ? 'select__header--active' : ''}`}
            role="button"
            tabIndex={0}
            onClick={handleToggle7}
            onKeyDown={handleKeyDown}
          >
              <span className="select__option list-text">
                {t('sel__company__type')}
              </span>

            {!isOpen7 ? 
              <img
                src={
                  localStorage.theme === 'light' ?
                  arrow_light :
                  arrow
                }
                alt="Open" 
              /> :
              <img
                src={
                  localStorage.theme === 'light' ?
                  arrow_light :
                  arrow
                }
                alt="Close"
                className="arrow-close"
              />
            }
          </div>

          <ul
            className={`
              select__option__list
              select__option__list--1
              ${isOpen7 ? 'select__option__list--open' : 'select__option__list--close'}`}
          >
              {companyTypes.map((type: string) => (
              <li key={type} className="
                list-text
                select__option__list__item"
              >
                <label htmlFor={`${type}-checkbox`} className="checkbox-label list-text">
                  <input
                    type="checkbox"
                    id={`${type}-checkbox`}
                    name="option"
                    value={type}

                  />
                  <span>{type}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
        {/* Salary */}
        <div className={`select--1 select__content big  ${isOpen8 ? 'open' : ''}`}>
          <div
            className={`select__header d-flex flex-row justify-content-between ${isOpen8 ? 'select__header--active' : ''}`}
            role="button"
            tabIndex={0}
            onClick={handleToggle8}
            onKeyDown={handleKeyDown}
          >
              <span className="select__option list-text">
                {t('sel__salary')}
              </span>

            {!isOpen8 ? 
              <img
                src={
                  localStorage.theme === 'light' ?
                  arrow_light :
                  arrow
                }
                alt="Open" 
              /> :
              <img
                src={
                  localStorage.theme === 'light' ?
                  arrow_light :
                  arrow
                }
                alt="Close"
                className="arrow-close"
              />
            }
          </div>

          <ul
            className={`
              select__option__list
              scroll
              select__option__list--1
              ${isOpen8 ? 'select__option__list--open' : 'select__option__list--close'}`}
          >
              {salaries.map((salary: number) => (
                <li key={salary} className="
                  list-text
                  select__option__list__item"
                >
                  <label htmlFor={`${salary}-checkbox`} className="checkbox-label list-text">
                    <input
                      type="checkbox"
                      id={`${salary}-checkbox`}
                      name="option"
                      value={salary}
                    />
                    <span>
                      {salary < 1000
                        ? `${salary} $`
                        : `${Math.floor(salary / 1000)} ${salary % 1000 === 0 ? '000' : salary % 1000} $`
                      }
                    </span>
                  </label>
                </li>
              ))}
          </ul>
        </div>
        {/* Reit per hour */}
        <div className={`select--1 select__content big  ${isOpen9 ? 'open' : ''}`}>
          <div
            className={`select__header d-flex flex-row justify-content-between ${isOpen9 ? 'select__header--active' : ''}`}
            role="button"
            tabIndex={0}
            onClick={handleToggle9}
            onKeyDown={handleKeyDown}
          >
              <span className="select__option list-text">
                {t('sel__reit')}
              </span>

            {!isOpen9 ?
             <img
              src={
                localStorage.theme === 'light' ?
                arrow_light :
                arrow
              }
              alt="Open" 
              /> :
              <img
                src={
                  localStorage.theme === 'light' ?
                  arrow_light :
                  arrow
                }
                alt="Close"
                className="arrow-close"
              />
            }
          </div>

          <ul
            className={`
              select__option__list
              scroll
              select__option__list--1
              ${isOpen9 ? 'select__option__list--open' : 'select__option__list--close'}`}
          >
              {reits.map((reit: number) => (
                <li key={reit} className="
                  list-text
                  select__option__list__item"
                >
                  <label htmlFor={`${reit}-checkbox`} className="checkbox-label list-text">
                    <input
                      type="checkbox"
                      id={`${reit}-checkbox`}
                      name="option"
                      value={reit}
                    />
                    <span>
                      {`${reit} $/hour`}
                    </span>
                  </label>
                </li>
              ))}
          </ul>
        </div>
        {/* Countries */}
        <div className={`select--1 select__content big  ${isOpen10 ? 'open' : ''}`}>
          <div
            className={`select__header d-flex flex-row justify-content-between ${isOpen10 ? 'select__header--active' : ''}`}
            role="button"
            tabIndex={0}
            onClick={handleToggle10}
            onKeyDown={handleKeyDown}
          >
              <span className="select__option list-text">
                {t('sel__country__proj')}
              </span>

            {!isOpen10 ? 
              <img
                src={
                  localStorage.theme === 'light' ?
                  arrow_light :
                  arrow
                }
                alt="Open" 
              /> :
              <img
                src={
                  localStorage.theme === 'light' ?
                  arrow_light :
                  arrow
                }
                alt="Close"
                className="arrow-close"
              />
            }
          </div>

          <ul
            className={`
              select__option__list
              scroll
              select__option__list--1
              ${isOpen10 ? 'select__option__list--open' : 'select__option__list--close'}`}
          >
              {countries.map((country: string) => (
                <li key={country} className="
                  list-text
                  select__option__list__item"
                >
                  <label htmlFor={`${country}-checkbox`} className="checkbox-label list-text">
                    <input
                      type="checkbox"
                      id={`${country}-checkbox`}
                      name="option"
                      value={country}
                    />
                    <span>
                      {country}
                    </span>
                  </label>
                </li>
              ))}
          </ul>
        </div>
        {/* Languages of communication */}
        <div className={`select--1 select__content big  ${isOpen11 ? 'open' : ''}`}>
          <div
            className={`select__header d-flex flex-row justify-content-between ${isOpen11 ? 'select__header--active' : ''}`}
            role="button"
            tabIndex={0}
            onClick={handleToggle11}
            onKeyDown={handleKeyDown}
          >
              <span className="select__option list-text">
                {t('sel__languages')}
              </span>

            {!isOpen11 ?  
              <img
                src={
                  localStorage.theme === 'light' ?
                  arrow_light :
                  arrow
                }
                alt="Open" 
              /> :
              <img
                src={
                  localStorage.theme === 'light' ?
                  arrow_light :
                  arrow
                }
                alt="Close"
                className="arrow-close"
              />
            }
          </div>

          <ul
            className={`
              select__option__list
              scroll
              select__option__list--1
              ${isOpen11 ? 'select__option__list--open' : 'select__option__list--close'}`}
          >
              {speakLanguages.map((language: string) => (
                <li key={language} className="
                  list-text
                  select__option__list__item"
                >
                  <label htmlFor={`${language}-checkbox`} className="checkbox-label list-text">
                    <input
                      type="checkbox"
                      id={`${language}-checkbox`}
                      name="option"
                      value={language}
                    />
                    <span>
                      {language}
                    </span>
                  </label>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
