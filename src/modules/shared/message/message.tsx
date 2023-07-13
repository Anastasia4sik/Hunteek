import React from 'react';

import { UserPhoto } from '../userPhoto';

import { Messages } from '../../../types/Messages';

type Props = {
  message: Messages,
};

export const Message: React.FC<Props> = ({ message }) => {
  return (
    <a href={`#ref-${message.slug}`} className="message__card d-flex flex-column align-items-center block">
      <UserPhoto size={20} photo={message.photo} />

      <div className="message__card__user d-flex flex-column align-items-center">
        <p className="message__card__name list-text">
          {message.name}
        </p>

        <p className="message__card__number light-text">
          {message.message}
        </p>
      </div>

      <p className="message__card__amount list-text">
        {message.date}
      </p>
    </a>
  );
};
