import React from 'react';
import classNames from 'classnames';

import star from '../../../img/icons/card/rate/star.svg';

type Props = {
  forRatingBlock?: boolean,
};

export const Rate: React.FC<Props> = ({ forRatingBlock }) => {
  return (
    <div className="rate d-flex flex-row align-items-center text-center">
      <div className="rate__stars d-flex flex-row align-items-center">
        <img
          src={star}
          alt="Star"
          className={classNames(
            'rate__stars__item',
            { bigger: forRatingBlock },
          )}
        />
        <img
          src={star}
          alt="Star"
          className={classNames(
            'rate__stars__item',
            { bigger: forRatingBlock },
          )}
        />
        <img
          src={star}
          alt="Star"
          className={classNames(
            'rate__stars__item',
            { bigger: forRatingBlock },
          )}
        />
        <img
          src={star}
          alt="Star"
          className={classNames(
            'rate__stars__item',
            { bigger: forRatingBlock },
          )}
        />
        <img
          src={star}
          alt="Star"
          className={classNames(
            'rate__stars__item',
            { bigger: forRatingBlock },
          )}
        />
      </div>

      <p className={classNames(
        'rate__desc small-text',
        { bigger: forRatingBlock },
      )}
      >
        (5/5)

      </p>
    </div>
  );
};
