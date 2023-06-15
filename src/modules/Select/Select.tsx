import React, { useState } from 'react';

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
            className={`select__header ${isOpen1 ? 'select__header--active' : ''}`}
            role="button"
            tabIndex={0}
            onClick={handleToggle1}
            onKeyDown={handleKeyDown}
          >
            <span className="select__option">Specilization</span>
            <span className="arrow">▼</span>
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
              select__option__list__item
              select__option__list__item--last"
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
          </ul>
        </div>

        <div className={`select--2 celect__content  ${isOpen2 ? 'open' : ''}`}>
          <div
            className={`select__header ${isOpen2 ? 'select__header--active' : ''}`}
            role="button"
            tabIndex={0}
            onClick={handleToggle2}
            onKeyDown={handleKeyDown}
          >
            <span className="select__option">Seller type</span>
            <span className="arrow">▼</span>
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
              select__option__list__item
              select__option__list__item--last"
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
          </ul>
        </div>
      </div>
    </>
  );
};
