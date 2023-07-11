/* eslint-disable react/no-array-index-key */
import React from 'react';

export const ReferralSwiper: React.FC = () => {
  const cardData = [
    { name: 'Olena Maccorter', number: '36578', amount: '1200.00' },
    // Add more card data here if needed
  ];

  React.useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active',
      },
    });
  }, []);

  return (
    <div>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {cardData.map((card, index) => (
            <div key={index} className="swiper-slide">
              <div className="referral__card d-flex flex-column align-items-center block">
                <div className="referral__card__user d-flex flex-column align-items-center">
                  <p className="referral__card__name list-text">
                    {card.name}
                  </p>
                  <p className="referral__card__number light-text">
                    {card.number}
                  </p>
                </div>
                <p className="referral__card__amount list-text">
                  {card.amount}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};
