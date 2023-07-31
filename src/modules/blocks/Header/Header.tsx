import React, { useState } from 'react';
import search from '../../../img/icons/search.svg';

import chart from '../../../img/icons/header/chart.svg';
import menu from '../../../img/icons/header/menu.svg';
import time from '../../../img/icons/header/time.svg';
import video from '../../../img/icons/header/video.svg';
import projects from '../../../img/icons/header/category.svg';
import dollar from '../../../img/icons/header/dollar.svg';
import profile from '../../../img/icons/header/profile.svg';

export const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const performSearch = () => {
    console.log('Performing search:', searchQuery);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchClick = () => {
    performSearch();
    setSearchQuery('');
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      performSearch();

      setSearchQuery('');
    }
  };

  return (
    <div className="header d-flex flex-row align-items-center">
      <select className="header__select list-text" name="Language" id="language">
        <option
          value=""
          selected
          disabled
          hidden
        >
          Language
        </option>

        <option
          value="English"
        >
          English
        </option>

        <option
          value="Ukrainian"
        >
          Ukrainian
        </option>
      </select>

      <div className="header__search position-relative">
        <i className="bx bx-search-alt"></i>

        <input
          className="header__search__input border-0 rounded-pill main-text"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />

        <button
          className="header__search__btn position-absolute border-0 rounded-pill"
          type="button"
          onClick={handleSearchClick}
        >
          <img src={search} alt="Search" />
        </button>
      </div>

      <div className="header__menu d-flex flex-row">
        <div className="header__menu__info d-flex flex-column justify-content-between">
          <div className="header__menu__info__top d-flex flex-row justify-content-between ">
            <div className="header__menu__info__top__nums d-flex flex-row align-items-center text-center">
              <p className="header__menu__info__top__num header__menu__info__top__num--1 main-text">
                0
              </p>

              <p className="header__menu__info__top__num header__menu__info__top__num--2 main-text">
                0
              </p>

              <p className="header__menu__info__top__num header__menu__info__top__num--3 main-text">
                1
              </p>
            </div>

            <div className="header__menu__info__top__icons">
              <a href="/">
                <img src={chart} alt="Chart" className="header__menu__info__top__icons__chart" />
              </a>

              <a href="/">
                <img src={menu} alt="Menu" className="header__menu__info__top__icons__menu" />
              </a>
            </div>

          </div>

          <div className="header__menu__info__bottom d-flex flex-row">
            <p className="header__menu__info__bottom__time list-text">
              1y 60m 48h
            </p>

            <img src={time} alt="Clock" />
          </div>
        </div>

        <div className="header__menu__nav d-flex align-items-center">
          <a href="/" title="Video team meetings are coming soon">
            <img src={video} alt="Video" className="header__menu__nav__img header__menu__nav__img--video" />
          </a>

          <a href="/">
            <img src={projects} alt="Projects" className="header__menu__nav__img" />
          </a>

          <a href="/my-wallet">
            <img src={dollar} alt="Money" className="header__menu__nav__img" />
          </a>

          <a href="/my-profile">
            <img src={profile} alt="Profile" className="header__menu__nav__img" />
          </a>
        </div>
      </div>
    </div>
  );
};
