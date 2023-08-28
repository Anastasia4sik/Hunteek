import React, { KeyboardEventHandler, useState } from 'react';
import search from '../../../img/icons/search.svg';

import chart from '../../../img/icons/header/chart.svg';
import menu from '../../../img/icons/header/menu.svg';
import time from '../../../img/icons/header/time.svg';
import video from '../../../img/icons/header/video.svg';
import projects from '../../../img/icons/header/category.svg';
import dollar from '../../../img/icons/header/dollar.svg';
import profile from '../../../img/icons/header/profile.svg';

import ua from '../../../img/icons/flags/ua.png';
import eng from '../../../img/icons/flags/eng.png';
type Props = {
  searchQuery?: string;
  handleInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyPress?: KeyboardEventHandler<HTMLInputElement>;
  handleSearchClick?: () => void;
};

export const Header: React.FC<Props> = ({ searchQuery, handleInputChange, handleKeyPress, handleSearchClick }) => {
  // const uaLang = document.querySelector('.header__lang__item--ua');
  // const engLang = document.querySelector('.header__lang__item--eng');

  // if (window.location.pathname.includes('/en')) {
  //   uaLang?.classList.add('langSmall');
  //   engLang?.classList.remove('langSmall');
  // } else {
  //   uaLang?.classList.remove('langSmall');
  //   engLang?.classList.add('langSmall');
  // }

  return (
    <div className="header d-flex flex-row align-items-center">
      <div className="header__lang d-flex flex-row">
        <a href="/" className="header__lang__item header__lang__item--ua langSmall">
          <img src={ua} alt="Ukrainian" className="header__lang__item__img"/>
        </a>

        <a href="/" className="header__lang__item header__lang__item--eng">
          <img src={eng} alt="Engish" className="header__lang__item__img"/>
        </a>
      </div>

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
