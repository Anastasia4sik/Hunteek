import React, { useState } from 'react';

import arrow from '../../../img/icons/arrow_down.svg';

import languages from '../../../helpers/programLanguages.js'
import levels from '../../../helpers/langLevels.js'

export const MainSelect = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleToggle1();
    }
  };

  const isMy = window.location.pathname.includes('my');

  return (
    <div className="select block">
      <div className="select__container">
        <div className={`${isMy ? 'select--3' : 'select--1'} select__content big  ${isOpen1 ? 'open' : ''}`}>
          <div
            className={`${isMy ? 'select__header--profile' : ''} select__header d-flex flex-row justify-content-between ${isOpen1 ? 'select__header--active' : ''}`}
            role="button"
            tabIndex={0}
            onClick={handleToggle1}
            onKeyDown={handleKeyDown}
          >
              <span className="select__option list-text">Specilization</span>

            {!isOpen1 ? <img src={arrow} alt="Open" /> : <img src={arrow} alt="Close" className="arrow-close" />}
          </div>

          <ul
            className={`
              select__option__list
              scroll
              select__option__list--1
              ${isOpen1 ? 'select__option__list--open' : 'select__option__list--close'}`}
          >
            {languages.map((language: string) => (
              <li className="
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

        <div className={`select--1 select__content  ${isOpen2 ? 'open' : ''}`}>
          <div
            className={`select__header d-flex flex-row justify-content-between ${isOpen2 ? 'select__header--active' : ''}`}
            role="button"
            tabIndex={0}
            onClick={handleToggle2}
            onKeyDown={handleKeyDown}
          >
              <span className="select__option list-text">Job search activity</span>

            {!isOpen2 ? <img src={arrow} alt="Open" /> : <img src={arrow} alt="Close" className="arrow-close" />}
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
                  <span>Active</span>
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
                  <span>Passive</span>
                </label>
              </li>
          </ul>
        </div>

        <div className={`select--1 select__content  ${isOpen3 ? 'open' : ''}`}>
          <div
            className={`select__header d-flex flex-row justify-content-between ${isOpen3 ? 'select__header--active' : ''}`}
            role="button"
            tabIndex={0}
            onClick={handleToggle3}
            onKeyDown={handleKeyDown}
          >
              <span className="select__option list-text">English level</span>

            {!isOpen3 ? <img src={arrow} alt="Open" /> : <img src={arrow} alt="Close" className="arrow-close" />}
          </div>

          <ul
            className={`
              select__option__list
              select__option__list--1
              ${isOpen3 ? 'select__option__list--open' : 'select__option__list--close'}`}
          >
            {levels.map((level: string) => (
              <li className="
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

        <div className={`select--1 select__content  ${isOpen4 ? 'open' : ''}`}>
          <div
            className={`select__header d-flex flex-row justify-content-between ${isOpen4 ? 'select__header--active' : ''}`}
            role="button"
            tabIndex={0}
            onClick={handleToggle4}
            onKeyDown={handleKeyDown}
          >
              <span className="select__option list-text">Work Experience</span>

            {!isOpen4 ? <img src={arrow} alt="Open" /> : <img src={arrow} alt="Close" className="arrow-close" />}
          </div>

          <ul
            className={`
              select__option__list
              select__option__list--1
              ${isOpen4 ? 'select__option__list--open' : 'select__option__list--close'}`}
          >
            {levels.map((level: string) => (
              <li className="
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
      </div>
    </div>
  );
};
