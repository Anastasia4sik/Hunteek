import React from 'react';

export const Header: React.FC = () => {
  return (
    <div className="card d-grid">
      <p className="card__title">
        Middle Front-end Developer (Vue)
      </p>

      <div className="card__person">
        <p className="card__person__name">
          Yuri Kudin
        </p>

        <div className="card__person__rate"></div>

        <img src="" alt="" className="card__person__photo" />
      </div>

      <div className="card__info">
        <p className="card__info__desc"></p>
        <p className="card__info__desc"></p>
        <p className="card__info__desc"></p>
      </div>

      <div className="card__media">
        <div className="card__media__item"></div>
        <div className="card__media__item"></div>
      </div>

      <div className="card__btn"></div>
    </div>
  );
};
