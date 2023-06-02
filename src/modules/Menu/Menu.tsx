/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import logo from '../../img/icons/logo.svg';
import home from '../../img/icons/menu/home.svg';
import news from '../../img/icons/menu/news.svg';
import subsc from '../../img/icons/menu/subsc.svg';
import team from '../../img/icons/menu/team.svg';
import project from '../../img/icons/menu/project.svg';
import task from '../../img/icons/menu/task.svg';
import message from '../../img/icons/menu/message.svg';
import analytics from '../../img/icons/menu/analytics.svg';

export const Menu: React.FC = () => {
  return (
    <div className="menu d-flex flex-column">
      <a href="/" className="menu__logo">
        <img src={logo} alt="Logo" />
      </a>

      <div className="menu__container d-flex flex-column justify-content-between">
        <nav className="menu__nav d-flex flex-column">
          <a href="/home" className="menu__nav__item d-flex flex-row">
            <img src={home} alt="Home" className="menu__nav__item__img" />

            Home
          </a>

          <a href="/news" className="menu__nav__item d-flex flex-row">
            <img src={news} alt="News" className="menu__nav__item__img" />

            News
          </a>

          <a href="/subscriptions" className="menu__nav__item d-flex flex-row">
            <img src={subsc} alt="Subscriptions" className="menu__nav__item__img" />

            Subscriptions
          </a>

          <a href="/team" className="menu__nav__item d-flex flex-row">
            <img src={team} alt="Team" className="menu__nav__item__img" />

            Team
          </a>

          <a href="/project" className="menu__nav__item d-flex flex-row">
            <img src={project} alt="Project" className="menu__nav__item__img" />

            Project
          </a>

          <a href="/task" className="menu__nav__item d-flex flex-row">
            <img src={task} alt="Task" className="menu__nav__item__img" />

            Task
          </a>

          <a href="/message" className="menu__nav__item d-flex flex-row">
            <img src={message} alt="Message" className="menu__nav__item__img" />

            Message
          </a>

          <a href="/analytics" className="menu__nav__item d-flex flex-row">
            <img src={analytics} alt="Analytics" className="menu__nav__item__img" />

            Analytics
          </a>
        </nav>

        <div className="menu__theme">
          <p className="menu__theme__text">Theme:</p>

          <label className="menu__theme__btn">
            <input type="checkbox"></input>

            <span className="menu__theme__btn__slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
};
