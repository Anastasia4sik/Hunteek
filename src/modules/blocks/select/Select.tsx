/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState } from 'react';

import arrow from '../../../img/icons/arrow_down.svg';
import user from '../../../img/icons/header/profile.svg';
import plus from '../../../img/icons/message/plus.svg';
import trash from '../../../img/icons/message/trash.svg';
import bell from '../../../img/icons/message/bell.svg';
import check from '../../../img/icons/message/check.svg';

type Props = {
  setIsBanListChecked?: (isChecked: boolean) => void,
  setIsResumeChecked?: (isChecked: boolean) => void,
  setIsReferralChecked?: (isChecked: boolean) => void,
};

export const Select: React.FC<Props> = ({
  setIsBanListChecked,
  setIsResumeChecked,
  setIsReferralChecked,
}) => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const handleToggle1 = () => {
    setIsOpen1(!isOpen1);
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
  const isProject = window.location.pathname.includes('projects');
  const isTeam = window.location.pathname.includes('team');
  const isMessage = window.location.pathname.includes('messages');

  const handleBanListChange = (e: { target: { checked: any; }; }) => {
    setIsBanListChecked ? setIsBanListChecked(e.target.checked) : null;
  };

  const handleResumeChange = (e: { target: { checked: any; }; }) => {
    setIsResumeChecked ? setIsResumeChecked(e.target.checked) : null;
  };

  const handleReferralChange = (e: { target: { checked: any; }; }) => {
    setIsReferralChecked ? setIsReferralChecked(e.target.checked) : null;
  };

  return (
    <div className="select block">
      <div className="select__container">
        {isMessage ? (
          <div className="select__messages d-flex flex-column">
            <a href="#write-message" className="select__messages__item d-flex flex-row">
              <img src={plus} alt="Write a message" className="select__messages__item__img" />

              <p className="list-text">
                Write a message
              </p>
            </a>

            <a href="#trash" className="select__messages__item select__messages__item--delete d-flex flex-row">
              <img src={trash} alt="Delete message" className="select__messages__item__img" />

              <p className="list-text">
                Trash
              </p>
            </a>

            <a href="#new-messages" className="select__messages__item d-flex flex-row">
              <img src={bell} alt="New message" className="select__messages__item__img" />

              <p className="list-text">
                New messages
              </p>
            </a>

            <a href="#viewed-messages" className="select__messages__item d-flex flex-row">
              <img src={check} alt="Viewed messages" className="select__messages__item__img" />

              <p className="list-text">
                Viewed messages
              </p>
            </a>
          </div>
        ) : (
          <>
            {isProject && (
              <a href="#create-project" className="select__container__btn btn-grey list-text">
                Create a project
              </a>
            )}

            {isTeam && (
              <a href="#create-resume" className="select__container__btn btn-grey list-text">
                Create a resume
              </a>
            )}

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
                        onChange={handleResumeChange}
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
                          onChange={handleReferralChange}
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
                          onChange={handleBanListChange}
                        />
                        <span>BanList</span>
                      </label>
                    </li>
                  </ul>
                </ul>
              )}
            </div>

          </>
        )}
      </div>
    </div>
  );
};
