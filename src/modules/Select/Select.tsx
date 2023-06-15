import React, { useState } from 'react';

import arrow from '../../img/icons/arrow_down.svg';

export const Select: React.FC = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const handleToggle1 = () => {
    setIsOpen1(!isOpen1);
  };

  const handleToggle2 = () => {
    setIsOpen2(!isOpen2);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleToggle1();
    }
  };

  return (
    <>
      <div className="select">
        <div className={`select--1 celect__content  ${isOpen1 ? 'open' : ''}`}>
          <div
            className={`select__header d-flex flex-row justify-content-between ${isOpen1 ? 'select__header--active' : ''}`}
            role="button"
            tabIndex={0}
            onClick={handleToggle1}
            onKeyDown={handleKeyDown}
          >
            <span className="select__option">Specilization</span>

            {!isOpen1 ? <img src={arrow} alt="Open" /> : <img src={arrow} alt="Close" className="arrow-close" />}
          </div>
          <ul
            className={`
              select__option__list
              select__option__list--1
              ${isOpen1 ? 'select__option__list--open' : 'select__option__list--close'}`}
          >
            <li className="
              list-text
              select__option__list__item"
            >
              <label htmlFor="android-checkbox" className="checkbox-label">
                <input
                  type="checkbox"
                  id="android-checkbox"
                  name="option"
                  value="Android"

                />
                Android
              </label>
            </li>

            <li className="
              list-text
              select__option__list__item"
            >
              <label htmlFor="iOS-checkbox" className="checkbox-label">
                <input
                  type="checkbox"
                  id="iOS-checkbox"
                  name="option"
                  value="iOS / macOS"

                />
                iOS / macOS
              </label>
            </li>

            <li className="
              list-text
              select__option__list__item"
            >
              <label htmlFor="C-checkbox" className="checkbox-label">
                <input
                  type="checkbox"
                  id="C-checkbox"
                  name="option"
                  value="C/C++/Embedded"

                />
                C / C++ / Embedded
              </label>
            </li>

            <li className="
              list-text
              select__option__list__item"
            >
              <label htmlFor="Golang-checkbox" className="checkbox-label">
                <input
                  type="checkbox"
                  id="Golang-checkbox"
                  name="option"
                  value="Golang"

                />
                Golang
              </label>
            </li>

            <li className="
              list-text
              select__option__list__item
              select__option__list__item--last"
            >
              <label htmlFor="Scala-checkbox" className="checkbox-label">
                <input
                  type="checkbox"
                  id="Scala-checkbox"
                  name="option"
                  value="Scala"

                />
                Scala
              </label>
            </li>
          </ul>
        </div>

        <div className={`select--2 celect__content  ${isOpen2 ? 'open' : ''}`}>
          <div
            className={`select__header d-flex flex-row justify-content-between ${isOpen2 ? 'select__header--active' : ''}`}
            role="button"
            tabIndex={0}
            onClick={handleToggle2}
            onKeyDown={handleKeyDown}
          >
            <span className="select__option">Seller type</span>

            {!isOpen2 ? <img src={arrow} alt="Open" /> : <img src={arrow} alt="Close" className="arrow-close" />}
          </div>

          <ul
            className={`
              select__option__list
              select__option__list--2
              ${isOpen2 ? 'select__option__list--open' : 'select__option__list--close'}`}
          >
            <li className="
              list-text
              select__option__list__item"
            >
              <label htmlFor="first-checkbox" className="checkbox-label">
                <input
                  type="checkbox"
                  id="first-checkbox"
                  name="option"
                  value="first"

                />
                first
              </label>
            </li>

            <li className="
              list-text
              select__option__list__item"
            >
              <label htmlFor="second-checkbox" className="checkbox-label">
                <input
                  type="checkbox"
                  id="second-checkbox"
                  name="option"
                  value="second"

                />
                second
              </label>
            </li>

            <li className="
              list-text
              select__option__list__item"
            >
              <label htmlFor="third-checkbox" className="checkbox-label">
                <input
                  type="checkbox"
                  id="third-checkbox"
                  name="option"
                  value="third"
                />
                third
              </label>
            </li>

            <li className="
              list-text
              select__option__list__item"
            >
              <label htmlFor="fourth-checkbox" className="checkbox-label">
                <input
                  type="checkbox"
                  id="fourth-checkbox"
                  name="option"
                  value="fourth"

                />
                fourth
              </label>
            </li>

            <li className="
              list-text
              select__option__list__item
              select__option__list__item--last"
            >
              <label htmlFor="fifth-checkbox" className="checkbox-label">
                <input
                  type="checkbox"
                  id="fifth-checkbox"
                  name="option"
                  value="fifth"

                />
                fifth
              </label>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
