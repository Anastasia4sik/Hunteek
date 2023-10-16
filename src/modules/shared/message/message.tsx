import React from 'react';

import { Messages } from '../../../types/Messages';

import trash from '../../../img/icons/message/trash.svg';

type Props = {
  message: Messages,
};

export const Message: React.FC<Props> = ({ message }) => {
  return (
    <a href={`#ref-${message.slug}`} className="message d-flex flex-column">
      <div className="message__top d-flex flex-row justify-content-between align-items-center">
        <div className="message__title d-flex flex-row align-items-center">
          <img src={message.photo} alt="Logo" className="message__title__photo" />

          <p className="message__title__name main-text">
            {message.name}
          </p>
        </div>

        <div className="message__btns d-flex flex-row">
          <button type="button" className="message__btn">
            <img src={trash} alt="Trash" className="message__btn__img" />
          </button>
        </div>
      </div>

      <p className="message__content main-text">
        {message.message}
      </p>

      <p className="message__date list-text">
        {message.date}
      </p>
    </a>
  );
};
