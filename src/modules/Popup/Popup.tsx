import React from 'react';

type Props = {
  text: string;
  onClose: () => void;
};

export const Popup: React.FC<Props> = ({ text, onClose }) => {
  return (
    <div id="popup" className="popup">
      <div className="popup__container d-flex flex-column align-items-center">
        <h2 className="popup__container__text main-text">
          {text}
        </h2>

        <button className="popup__container__btn main-text" onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
};
