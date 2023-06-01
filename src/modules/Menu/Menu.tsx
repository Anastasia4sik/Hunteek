import React from 'react';

export const Menu: React.FC = () => {
  return (
    <div className="menu d-flex flex-column">
      <div className="menu__logo">
        Hi
      </div>

      <nav className="menu__nav d-flex flex-column">
        <a href="/home" className="menu__nav__item">
          Home
        </a>

        <a href="/news" className="menu__nav__item">
          News
        </a>

        <a href="/subscriptions" className="menu__nav__item">
          Subscriptions
        </a>

        <a href="/team" className="menu__nav__item">
          Team
        </a>

        <a href="/project" className="menu__nav__item">
          Project
        </a>

        <a href="/task" className="menu__nav__item">
          Task
        </a>

        <a href="/message" className="menu__nav__item">
          Message
        </a>

        <a href="/analytics" className="menu__nav__item">
          Analytics
        </a>
      </nav>

    </div>
  );
};
