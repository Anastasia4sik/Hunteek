import React, { KeyboardEventHandler, useEffect, useRef, useState } from 'react';
import search from '../../../img/icons/search.svg';

import time from '../../../img/icons/header/time.svg';
import video from '../../../img/icons/header/video.svg';
import video_light from '../../../img/icons/header/video_light.svg';
import dollar from '../../../img/icons/header/dollar.svg';
import dollar_light from '../../../img/icons/header/dollar_light.svg';
import profile from '../../../img/icons/header/profile.svg';
import profile_light from '../../../img/icons/header/profile_light.svg';

import ua from '../../../img/icons/flags/ua.png';
import eng from '../../../img/icons/flags/eng.png';

import i18n from "i18next";
import { useTranslation } from 'react-i18next';

type Props = {
  searchQuery?: string;
  handleInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyPress?: KeyboardEventHandler<HTMLInputElement>;
  handleSearchClick?: () => void;
};

export const Header: React.FC<Props> = ({
  searchQuery,
  handleInputChange,
  handleKeyPress,
  handleSearchClick,
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('selectedLanguage') || 'en');
  
  const uaLangRef = useRef<HTMLImageElement | null>(null);
  const enLangRef = useRef<HTMLImageElement | null>(null);

  function changeLanguage(language: string) {
    i18n.changeLanguage(language);
    setSelectedLanguage(language);

    localStorage.setItem('selectedLanguage', language);
    
    if (language === 'en') {
      uaLangRef.current?.classList.add('langSmall');
      enLangRef.current?.classList.remove('langSmall');
    } else {
      enLangRef.current?.classList.add('langSmall');
      uaLangRef.current?.classList.remove('langSmall');
    }
  }

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage]);

  const { t } = useTranslation();

  return (
    <div className="header d-flex flex-row align-items-center">
      <div className="header__lang d-flex flex-row">
          <img
            src={ua}
            alt="Ukrainian"
            className={`
              header__lang__item
              header__lang__item--ua
              ${selectedLanguage === 'en' ? 'langSmall' : ''}
            `}
            onClick={() => changeLanguage('ua')}
            ref={uaLangRef}
          />

          <img
            src={eng}
            alt="Engish"
            className={`
              header__lang__item
              header__lang__item--en
              ${selectedLanguage === 'ua' ? 'langSmall' : ''}
            `}
            onClick={() => changeLanguage('en')}
            ref={enLangRef}
          />
      </div>

      <div className="header__search position-relative">
        <i className="bx bx-search-alt"></i>

        <input
          className="header__search__input border-0 rounded-pill main-text"
          type="text"
          placeholder={t('search')}
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
          </div>

          <div className="header__menu__info__bottom d-flex flex-row">
            <p className="header__menu__info__bottom__time list-text">
              1y 60m 48h
            </p>

            <img src={time} alt="Clock" />
          </div>
        </div>

        <div className="header__menu__nav d-flex align-items-center">
          <a href="/" title={t('video__desc')}>
            <img
              src={localStorage.theme === 'light' ? video_light : video}
              alt="Video"
              className="header__menu__nav__img header__menu__nav__img--video"
            />
          </a>

          <a href="/my-wallet">
            <img
              src={localStorage.theme === 'light' ? dollar_light : dollar}
              alt="Money"
              className="header__menu__nav__img"
            />
          </a>

          <a href="/my-profile">
            <img
              src={localStorage.theme === 'light' ? profile_light : profile}
              alt="Profile"
              className="header__menu__nav__img"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
