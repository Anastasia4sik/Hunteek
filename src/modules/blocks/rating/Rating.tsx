/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import React from 'react';

import starBig from '../../../img/icons/card/rate/bigStar.svg';
import { Rate } from '../../shared/rate';

export const Rating: React.FC = () => {
  return (
    <div className="rating d-flex flex-column">
      <img src={starBig} alt="Star" className="rating__img" />

      <div className="rating__content d-flex flex-column">
        <div className="rating__block">
          <p className="big-text">
            Overall rating
          </p>

          <Rate forRatingBlock />
        </div>

        <div className="rating__block">
          <p className="big-text">
            Speed of operation
          </p>

          <Rate forRatingBlock />
        </div>

        <div className="rating__block">
          <p className="big-text">
            Quality of work
          </p>

          <Rate forRatingBlock />
        </div>

        <div className="rating__block">
          <p className="big-text">
            Price of work
          </p>

          <Rate forRatingBlock />
        </div>
      </div>

      <button type="submit" className="rating__btn btn-grey">
        Evaluate
      </button>
    </div>
  );
};
