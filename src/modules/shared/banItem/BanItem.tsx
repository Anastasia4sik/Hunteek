import React, {useState} from 'react';

import unlock from '../../../img/icons/unlock.svg';
import { UserPhoto } from '../userPhoto';
import { Employee } from '../../../types/Employee';
import { useTranslation } from 'react-i18next';
import { Popup } from '../../Popup';

type Props = {
  employee: Employee,
};

export const BanItem: React.FC<Props> = ({ employee }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupText, setPopupText] = useState('');

  if (!employee) {
    return null;
  }

  const {
    name,
    lastname,
    photo,
    homeCity,
    homeCountry,
  } = employee;

  const { t } = useTranslation();

  const togglePopup = (popupText: string) => {
    setIsPopupVisible(!isPopupVisible);
    if (popupText) {
      setPopupText(popupText);
    }
  };

  return (
    <div className="banItem d-flex flex-row justify-content-between align-items-center">
      <UserPhoto size={4} height={120} photo={photo} />

      <p className="banItem__name bold-text">
        {`${name} ${lastname}`}
      </p>

      <p className="banItem__location bold-text">
        {`${homeCountry}, ${homeCity}`}
      </p>

      <p className="banItem__date bold-text">
        12.02.2023
      </p>

      <button
        type="button"
        className="banItem__unban d-flex flex-row align-items-center"
        onClick={() => togglePopup(`${t('unblocked__user')} ${employee.name}`)}
      >
        <img src={unlock} alt="Unban" />
        <p className="bold-text">
          {t('unban')}
        </p>
      </button>

      {isPopupVisible && (
        <Popup
          text={popupText}
          onClose={() => togglePopup('')}
        />
      )}
    </div>
  );
};
