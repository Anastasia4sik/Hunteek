import React from 'react';

import photo from '../../../img/photo/news/first.png'
import { t } from 'i18next';

export const NewsCard: React.FC = () => {
  return (
    <div className="newsCard block">
      <div className="newsCard__title text-center">
        <h3 className="newsCard__title__p text-center main-text">
          Need a specialist who works in OKCMS
        </h3>
      </div>

      <img src={photo} alt="Photo" className="newsCard__img" />

      <p className="newsCard__desc list-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididnt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repreh...
      </p>

      <div className="newsCard__bottom d-flex flex-row justify-content-between">
        <a href="https://www.wired.com/tag/programming/" className="newsCard__bottom__link" target='_blank'>
          {t('read__more')}:
        </a>

        <p className="newsCard__bottom__date">
          19.01.2023 14:37
        </p>
      </div>
    </div>
  );
};
