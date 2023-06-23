import React, { useState } from 'react';

import arrow from '../../../img/icons/arrow_down.svg';
import user from '../../../img/icons/header/profile.svg';

export const Select: React.FC = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const handleToggle1 = () => {
    setIsOpen1(!isOpen1);
  };

  const handleToggle2 = () => {
    setIsOpen2(!isOpen2);
  };

  const handleToggle3 = () => {
    setIsOpen3(!isOpen3);
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
        <div className={`${isMy ? 'select--3' : 'select--1'} celect__content  ${isOpen1 ? 'open' : ''}`}>
          <div
            className={`${isMy ? 'select__header--profile' : ''} select__header d-flex flex-row justify-content-between ${isOpen1 ? 'select__header--active' : ''}`}
            role="button"
            tabIndex={0}
            onClick={handleToggle1}
            onKeyDown={handleKeyDown}
          >
            {!isMy ? (
              <span className="select__option list-text">Specilization</span>
            ) : (
              <div className="d-flex flex-row align-items-center select__profile">
                <img src={user} alt="User" />

                <span className="select__option list-text">
                  My profile
                </span>
              </div>
            )}

            {!isOpen1 ? <img src={arrow} alt="Open" /> : <img src={arrow} alt="Close" className="arrow-close" />}
          </div>

          {!isMy ? (
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
                <label htmlFor="android-checkbox" className="checkbox-label list-text">
                  <input
                    type="checkbox"
                    id="android-checkbox"
                    name="option"
                    value="Android"

                  />
                  <span>Android</span>
                </label>
              </li>

              <li className="
                  list-text
                  select__option__list__item"
              >
                <label htmlFor="iOS-checkbox" className="checkbox-label list-text">
                  <input
                    type="checkbox"
                    id="iOS-checkbox"
                    name="option"
                    value="iOS / macOS"

                  />
                  <span>iOS / macOS</span>
                </label>
              </li>

              <li className="
                  list-text
                  select__option__list__item"
              >
                <label htmlFor="C-checkbox" className="checkbox-label list-text">
                  <input
                    type="checkbox"
                    id="C-checkbox"
                    name="option"
                    value="C/C++/Embedded"

                  />
                  <span>C / C++ / Embedded</span>
                </label>
              </li>

              <li className="
                  list-text
                  select__option__list__item"
              >
                <label htmlFor="Golang-checkbox" className="checkbox-label list-text">
                  <input
                    type="checkbox"
                    id="Golang-checkbox"
                    name="option"
                    value="Golang"

                  />
                  <span>Golang</span>
                </label>
              </li>

              <li className="
                  list-text
                  select__option__list__item
                  select__option__list__item--last"
              >
                <label htmlFor="Scala-checkbox" className="checkbox-label list-text">
                  <input
                    type="checkbox"
                    id="Scala-checkbox"
                    name="option"
                    value="Scala"

                  />
                  <span>Scala</span>
                </label>
              </li>
            </ul>
          ) : (
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
                <label htmlFor="resume-checkbox" className="checkbox-label list-text">
                  <input
                    type="checkbox"
                    id="resume-checkbox"
                    name="option"
                    value="resume"

                  />
                  <span>My Resume</span>
                </label>
              </li>

              <li className="
                  list-text
                  select__option__list__item
                  select__option__list__item--border"
              >
                <label htmlFor="wallet-checkbox" className="d-flex flex-row justify-content-between select__option__list__item--wallet">
                  <div className={`select--4 celect__content ${isOpen3 ? 'open' : ''}`}>
                    <input
                      type="checkbox"
                      id="wallet-checkbox"
                      name="option"
                      value="wallet"
                      onClick={handleToggle3}
                      onKeyDown={handleKeyDown}
                    />
                    <span className="select__option list-text">My Wallet</span>
                  </div>

                  {!isOpen3 ? <img src={arrow} alt="Open" /> : <img src={arrow} alt="Close" className="arrow-close" />}
                </label>
              </li>

              <ul
                className={`
                  select__option__list
                  select__option__list--3
                  ${isOpen3 ? 'select__option__list--open' : 'select__option__list--close'}`}
              >
                <li className="
                  list-text
                  select__option__list__item"
                >
                  <label htmlFor="Balance-checkbox" className="checkbox-label list-text">
                    <input
                      type="checkbox"
                      id="Balance-checkbox"
                      name="option"
                      value="Balance"

                    />
                    <span>My Balance</span>
                  </label>
                </li>

                <li className="
                  list-text
                  select__option__list__item"
                >
                  <label htmlFor="Contracts-checkbox" className="checkbox-label list-text">
                    <input
                      type="checkbox"
                      id="Contracts-checkbox"
                      name="option"
                      value="Contracts"

                    />
                    <span>My Smart Contracts</span>
                  </label>
                </li>

                <li className="
                  list-text
                  select__option__list__item
                  select__option__list__item--border"
                >
                  <label htmlFor="Referral-checkbox" className="checkbox-label list-text">
                    <input
                      type="checkbox"
                      id="Referral-checkbox"
                      name="option"
                      value="Referral"

                    />
                    <span>Referral system</span>
                  </label>
                </li>
              </ul>

              <ul
                className={`
                select__option__list
                select__option__list--3
                ${isOpen1 ? 'select__option__list--open' : 'select__option__list--close'}`}
              >
                <li className="
                  list-text
                  select__option__list__item
                  select__option__list__item--last"
                >
                  <label htmlFor="BanList-checkbox" className="checkbox-label list-text">
                    <input
                      type="checkbox"
                      id="BanList-checkbox"
                      name="option"
                      value="BanList"

                    />
                    <span>BanList</span>
                  </label>
                </li>
              </ul>
            </ul>
          )}
        </div>

        {!isMy ? (
          <div className={`select--2 celect__content  ${isOpen2 ? 'open' : ''}`}>
            <div
              className={`select__header d-flex flex-row justify-content-between ${isOpen2 ? 'select__header--active' : ''}`}
              role="button"
              tabIndex={0}
              onClick={handleToggle2}
              onKeyDown={handleKeyDown}
            >
              <span className="select__option list-text">Seller type</span>

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
                <label htmlFor="first-checkbox" className="checkbox-label list-text">
                  <input
                    type="checkbox"
                    id="first-checkbox"
                    name="option"
                    value="first"

                  />
                  <span>first</span>
                </label>
              </li>

              <li className="
              list-text
              select__option__list__item"
              >
                <label htmlFor="second-checkbox" className="checkbox-label list-text">
                  <input
                    type="checkbox"
                    id="second-checkbox"
                    name="option"
                    value="second"

                  />
                  <span>second</span>
                </label>
              </li>

              <li className="
              list-text
              select__option__list__item"
              >
                <label htmlFor="third-checkbox" className="checkbox-label list-text">
                  <input
                    type="checkbox"
                    id="third-checkbox"
                    name="option"
                    value="third"
                  />
                  <span>third</span>
                </label>
              </li>

              <li className="
              list-text
              select__option__list__item"
              >
                <label htmlFor="fourth-checkbox" className="checkbox-label list-text">
                  <input
                    type="checkbox"
                    id="fourth-checkbox"
                    name="option"
                    value="fourth"

                  />
                  <span>fourth</span>
                </label>
              </li>

              <li className="
              list-text
              select__option__list__item
              select__option__list__item--last"
              >
                <label htmlFor="fifth-checkbox" className="checkbox-label list-text">
                  <input
                    type="checkbox"
                    id="fifth-checkbox"
                    name="option"
                    value="fifth"

                  />
                  <span>fifth</span>
                </label>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};
