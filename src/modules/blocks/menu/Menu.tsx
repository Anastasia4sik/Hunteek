import React from 'react';

import classNames from 'classnames';
import logo from '../../../img/icons/logo.svg';
import home from '../../../img/icons/menu/home.svg';
import news from '../../../img/icons/menu/news.svg';
import team from '../../../img/icons/menu/team.svg';
import project from '../../../img/icons/menu/project.svg';
import message from '../../../img/icons/menu/message.svg';

export const Menu: React.FC = () => {
  const isHome = window.location.pathname === '/';
  const isNews = window.location.pathname === '/news';
  const isSupport = window.location.pathname === '/support';
  const isMessages = window.location.pathname === '/messages';
  const isWallet = window.location.pathname === '/my-wallet';
  const isProjects = window.location.pathname === '/projects';
  const isFeedback = window.location.pathname === '/feedback';

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

              Home
            </a>

            <a
              href="/news"
              className={classNames(
                'menu__nav__item list-text d-flex flex-row align-items-center',
                { menu__nav__item__selected: isNews },
              )}
            >
              <img src={news} alt="News" className="menu__nav__item__img" />

              News
            </a>

            <a
              href="/projects"
              className={classNames(
                'menu__nav__item list-text d-flex flex-row align-items-center',
                { menu__nav__item__selected: isProjects },
              )}
            >
              <img src={project} alt="Project" className="menu__nav__item__img" />

              My Projects
            </a>

            <a
              href="/messages"
              className={classNames(
                'menu__nav__item list-text d-flex flex-row align-items-center',
                { menu__nav__item__selected: isMessages },
              )}
            >
              <img src={message} alt="Message" className="menu__nav__item__img" />

              My Messages
            </a>

            <a
              href="/my-wallet"
              className={classNames(
                'menu__nav__item list-text d-flex flex-row align-items-center',
                { menu__nav__item__selected: isWallet },
              )}
            >
              <img src={project} alt="Team" className="menu__nav__item__img" />

              My Wallet
            </a>

            <a
              href="/my-profile"
              className={classNames(
                'menu__nav__item list-text d-flex flex-row align-items-center',
              )}
            >
              <img src={team} alt="Team" className="menu__nav__item__img" />

              My Profile
            </a>

            <a
              href="/support"
              className={classNames(
                'menu__nav__item list-text d-flex flex-row align-items-center',
                { menu__nav__item__selected: isSupport },
              )}
            >
              <img src={team} alt="Support" className="menu__nav__item__img" />

              Support
            </a>

            <a
              href="/"
              className={classNames(
                'menu__nav__item list-text d-flex flex-row align-items-center',
                { menu__nav__item__selected: isFeedback },
              )}
            >
              <img src={message} alt="Message" className="menu__nav__item__img" />

              Send Feedback
            </a>
          </nav>

          <div className="menu__theme">
            <p className="menu__theme__text list-text">Theme:</p>

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
