/* eslint-disable no-alert */
import React, { RefObject, useRef } from 'react';
import { UserPhoto } from '../../shared/userPhoto';

import photo from '../../../img/photo/user.png';

export const Referral: React.FC = () => {
  const inputRef: RefObject<HTMLInputElement> = useRef(null);

  const handleCopyPlaceholder = () => {
    const inputElement = inputRef.current;

    if (inputElement) {
      const placeholderValue = inputElement.placeholder;

      navigator.clipboard.writeText(placeholderValue)
        .then(() => {
        })
        .catch(error => {
          window.alert(`Failed to copy placeholder: ${error}`);
        });
    }
  };

  return (
    <div className="referral">
      <div className="referral__container">
        <div className="referral__copy position-relative">
          <input
            type="text"
            name="referralLink"
            placeholder="https://www.google.com/search?sxsrf=AB5stBiDsij1zHDH-KTCjIjoJLfdp03ysg:1689079135519&q=huntik&tbm=isch&sa=X&ved=2ahUKEwju8PmO1oaAAxXJgf0HHQVyCk0Q0pQJegQICxAB&biw=1920&bih=969&dpr=1"
            className="referral__copy__input border-0 rounded-pill main-text position-absolute"
            disabled
            ref={inputRef}
          />

          <button
            type="button"
            className=" btn-grey referral__copy__btn bold-text position-absolute"
            onClick={handleCopyPlaceholder}
          >
            Copy
          </button>
        </div>

        <a href="#report">
          <div className="referral__card d-flex flex-column align-items-center block">
            <UserPhoto size={20} photo={photo} />

            <div className="referral__card__user d-flex flex-column align-items-center">
              <p className="referral__card__name list-text">
                Olena Maccorter
              </p>

              <p className="referral__card__number light-text">
                36578
              </p>
            </div>

            <p className="referral__card__amount list-text">
              1200.00
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};
