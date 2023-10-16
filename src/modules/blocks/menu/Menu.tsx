import React from 'react';

import classNames from 'classnames';
import logo from '../../../img/icons/logo.svg';
import home from '../../../img/icons/menu/home.svg';
import news from '../../../img/icons/menu/news.svg';
import team from '../../../img/icons/menu/team.svg';
import project from '../../../img/icons/menu/project.svg';
import message from '../../../img/icons/menu/message.svg';
import wallet from '../../../img/icons/menu/wallet.svg';
import profile from '../../../img/icons/menu/profile.svg';
import support from '../../../img/icons/menu/support.svg';
import review from '../../../img/icons/menu/review.svg';

import { useTranslation } from 'react-i18next';

export const Menu: React.FC = () => {
  const isHome = window.location.pathname === '/';
  const isNews = window.location.pathname === '/news';
  const isSupport = window.location.pathname === '/support';
  const isMessages = window.location.pathname === '/messages';
  const isWallet = window.location.pathname === '/my-wallet';
  const isProjects = window.location.pathname === '/projects';
  const isFeedback = window.location.pathname === '/feedback';

  const { t } = useTranslation();

  return (
    <div className="menu d-flex flex-column">
      <div className="menu__content">
        <a href="/" className="menu__logo">
          <img src={logo} alt="Logo" className="menu__logo__img" />
        </a>

        <div className="menu__container d-flex flex-column justify-content-between">
          <nav className="menu__nav d-flex flex-column">
            <a
              href="/"
              className={classNames(
                'menu__nav__item list-text d-flex flex-row align-items-center',
                { menu__nav__item__selected: isHome },
              )}
            >
              <img src={home} alt="Home" className="menu__nav__item__img" />

              {t('menu__home')}
            </a>

            <a
              href="/news"
              className={classNames(
                'menu__nav__item list-text d-flex flex-row align-items-center',
                { menu__nav__item__selected: isNews },
              )}
            >
              <img src={news} alt="News" className="menu__nav__item__img" />

              {t('menu__news')}
            </a>

            <a
              href="/projects"
              className={classNames(
                'menu__nav__item list-text d-flex flex-row align-items-center',
                { menu__nav__item__selected: isProjects },
              )}
            >
              <img src={project} alt="Project" className="menu__nav__item__img" />

              {t('menu__proj')}
            </a>

            <a
              href="/my-team"
              className={classNames(
                'menu__nav__item list-text d-flex flex-row align-items-center',
              )}
            >
              <img src={team} alt="Team" className="menu__nav__item__img" />

              {t('menu__team')}
            </a>

            <a
              href="/my-messages"
              className={classNames(
                'menu__nav__item list-text d-flex flex-row align-items-center',
                { menu__nav__item__selected: isMessages },
              )}
            >
              <img src={message} alt="Message" className="menu__nav__item__img" />

              {t('menu__mes')}
            </a>

            <a
              href="/my-wallet"
              className={classNames(
                'menu__nav__item list-text d-flex flex-row align-items-center',
                { menu__nav__item__selected: isWallet },
              )}
            >
              <img src={wallet} alt="Wallet" className="menu__nav__item__img" />

              {t('my__wallet')}
            </a>

            <a
              href="/my-profile"
              className={classNames(
                'menu__nav__item list-text d-flex flex-row align-items-center',
              )}
            >
              <img src={profile} alt="Profile" className="menu__nav__item__img" />
              
              {t('my__profile')}
            </a>

            <a
              href="/support"
              className={classNames(
                'menu__nav__item list-text d-flex flex-row align-items-center',
                { menu__nav__item__selected: isSupport },
              )}
            >
              <img src={support} alt="Support" className="menu__nav__item__img" />

              {t('menu__support')}
            </a>

            <a
              href="/review"
              className={classNames(
                'menu__nav__item list-text d-flex flex-row align-items-center',
                { menu__nav__item__selected: isSupport },
              )}
            >
              <img src={review} alt="Review" className="menu__nav__item__img" />

              {t('menu__review')}
            </a>

            {/* <a
              href="#feedback"
              className={classNames(
                'menu__nav__item list-text d-flex flex-row align-items-center',
                { menu__nav__item__selected: isFeedback },
              )}
            >
              <img src={message} alt="Message" className="menu__nav__item__img" />

              {t('menu__feedback')}
            </a> */}
          </nav>

          <div className="menu__theme">
            <p className="menu__theme__text list-text">
              {t('menu__theme')}
            </p>

            <label className="menu__theme__btn">
              <input type="checkbox"></input>

              <span className="menu__theme__btn__slider round"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
