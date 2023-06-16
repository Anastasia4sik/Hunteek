import React from 'react';

import user from '../../../img/photo/user.png';
import eye from '../../../img/icons/card/eye.svg';
import message from '../../../img/icons/card/message.svg';
import { Rate } from '../rate';

export const Card: React.FC = () => {
  return (
    <div className="card">
      <div className="card__title text-center">
        <h3 className="card__title__p text-center main-text">
          Middle Front-end Developer (Vue)
        </h3>
      </div>

      <a href="#profile">
        <div className="card__person">
          <div className="card__person__inner d-flex flex-row justify-content-between">
            <div className="card__person__content d-flex flex-column">
              <p className="card__person__name main-text">
                Yuri Kudin
              </p>

              <Rate />
            </div>

            <img src={user} alt="User" className="card__person__photo" />
          </div>
        </div>

        <div className="card__info d-flex flex-column justify-content-center">
          <p className="card__info__desc main-text">
            Kiev
          </p>

          <p className="card__info__desc main-text">
            Quarantine Remote
          </p>

          <p className="card__info__desc main-text">
            Product
          </p>
        </div>

        <div className="card__media d-flex flex-row">
          <div className="card__media__item d-flex flex-row">
            <img src={eye} alt="Eye" />

            <p className="card__media__item__desc">194</p>
          </div>

          <div className="card__media__item d-flex flex-row">
            <img src={message} alt="Message" />

            <p className="card__media__item__desc">134</p>
          </div>
        </div>
      </a>

      <div className="card__btn">
        <button type="button" className="card__btn__button main-text">Hire the talent</button>
      </div>
    </div>
  );
};