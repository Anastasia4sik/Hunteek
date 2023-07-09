/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import classNames from 'classnames';
import logo from '../../../img/icons/logo.svg';
import home from '../../../img/icons/menu/home.svg';
import news from '../../../img/icons/menu/news.svg';
import subsc from '../../../img/icons/menu/subsc.svg';
import team from '../../../img/icons/menu/team.svg';
import project from '../../../img/icons/menu/project.svg';
import task from '../../../img/icons/menu/task.svg';
import message from '../../../img/icons/menu/message.svg';
import analytics from '../../../img/icons/menu/analytics.svg';

export const Menu: React.FC = () => {
  const isHome = window.location.pathname === '/';
  const isNews = window.location.pathname === '/news';
  const isSubs = window.location.pathname === '/subscriptions';
  const isTeam = window.location.pathname === '/teams';
  const isProjects = window.location.pathname === '/projects';
  const isTask = window.location.pathname === '/task';
  const isMessage = window.location.pathname === '/messages';
  const isAnalytics = window.location.pathname === '/analytics';

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
              href="/subscriptions"
              className={classNames(
                'menu__nav__item list-text d-flex flex-row align-items-center',
                { menu__nav__item__selected: isSubs },
              )}
            >
              <img src={subsc} alt="Subscriptions" className="menu__nav__item__img" />

              Subscriptions
            </a>

            <a
              href="/teams"
              className={classNames(
                'menu__nav__item list-text d-flex flex-row align-items-center',
                { menu__nav__item__selected: isTeam },
              )}
            >
              <img src={team} alt="Team" className="menu__nav__item__img" />

              Team
            </a>

            <a
              href="/projects"
              className={classNames(
                'menu__nav__item list-text d-flex flex-row align-items-center',
                { menu__nav__item__selected: isProjects },
              )}
            >
              <img src={project} alt="Project" className="menu__nav__item__img" />

              Project
            </a>

            <a
              href="/task"
              className={classNames(
                'menu__nav__item list-text d-flex flex-row align-items-center',
                { menu__nav__item__selected: isTask },
              )}
            >
              <img src={task} alt="Task" className="menu__nav__item__img" />

              Task
            </a>

            <a
              href="/messages"
              className={classNames(
                'menu__nav__item list-text d-flex flex-row align-items-center',
                { menu__nav__item__selected: isMessage },
              )}
            >
              <img src={message} alt="Message" className="menu__nav__item__img" />

              Message
            </a>

            <a
              href="/analytics"
              className={classNames(
                'menu__nav__item list-text d-flex flex-row align-items-center',
                { menu__nav__item__selected: isAnalytics },
              )}
            >
              <img src={analytics} alt="Analytics" className="menu__nav__item__img" />

              Analytics
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
