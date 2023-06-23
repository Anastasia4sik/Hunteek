/* eslint-disable max-len */
import React from 'react';

import star from '../../../img/icons/card/rate/star.svg';

export const Rate: React.FC = () => {
  return (
    <div className="rate d-flex flex-row align-items-center text-center">
      <div className="rate__stars d-flex flex-row">
        <img src={star} alt="Star" className="rate__stars__item" />
        <img src={star} alt="Star" className="rate__stars__item" />
        <img src={star} alt="Star" className="rate__stars__item" />
        <img src={star} alt="Star" className="rate__stars__item" />
        <img src={star} alt="Star" className="rate__stars__item" />
      </div>

      <p className="rate__desc small-text">(5/5)</p>
    </div>
  );
};
