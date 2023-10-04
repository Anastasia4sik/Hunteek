import React, { useState } from 'react';
import classNames from 'classnames';

import star from '../../../img/icons/card/rate/star.svg';

import { FaStar } from 'react-icons/fa';

type Props = {
  forRatingBlock?: boolean,
};

export const Rate: React.FC<Props> = ({ forRatingBlock }) => {
  const [isRating, setIsRating] = useState(0);
  const [isColorRate, setIsColorRate] = useState(0);

  if (forRatingBlock) {
    return (
      <div className="rate d-flex flex-row align-items-center text-center">
        {[...Array(5)].map((star, index) => {
          const currentRate = index + 1;
          return (
            <div key={star}>
              <label>
                <input
                  type="radio"
                  name="rating"
                  className="d-none rate__input"
                  value={currentRate}
                  onClick={() => setIsRating(currentRate)}
                />
    
                <FaStar 
                  size={23}
                  className=" rate__star"
                  color={
                    currentRate <= (isColorRate || isRating) ? "#F1A449" : "grey"
                  }
                  onMouseEnter={() => setIsColorRate(currentRate)}
                  onMouseLeave={() => setIsColorRate(0)}
                />
              </label>
            </div>
          );
        })}
  
        <p className='bigger rate__desc small-text'
        >
          {`(${isRating}/5)`}
        </p>
      </div>
    );
  };

  return (
    <div className="rate d-flex flex-row align-items-center text-center">
      <div className="rate__stars d-flex flex-row align-items-center">
        <img
          src={star}
          alt="Star"
          className='rate__stars__item'
        />
        <img
          src={star}
          alt="Star"
          className='rate__stars__item'
        />
        <img
          src={star}
          alt="Star"
          className='rate__stars__item'
        />
        <img
          src={star}
          alt="Star"
          className='rate__stars__item'
        />
        <img
          src={star}
          alt="Star"
          className='rate__stars__item'
        />
      </div>

      <p className='rate__desc small-text'
      >
        (5/5)

      </p>
    </div>
  );
};
