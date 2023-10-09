import React, { useState } from 'react';
import { SearchUser } from '../../../shared/searchUser';
import { UserPhoto } from '../../../shared/userPhoto';

import lock from '../../../../img/icons/lock_red.svg';
import { Employee } from '../../../../types/Employee';

import { Popup } from '../../../Popup';

import { handleInputChange, handleSearchClick, handleKeyPress } from '../../../../helpers/search';

import { useTranslation } from 'react-i18next';

type Props = {
  employees: Employee[] | undefined,
};

export const BlockUser: React.FC<Props> = ({ employees }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupText, setPopupText] = useState('');

  const { t } = useTranslation();

  const togglePopup = (popupText: string) => {
    setIsPopupVisible(!isPopupVisible);
    if (popupText) {
      setPopupText(popupText);
    }
  };

  return (
    <div className="blockUser">
      <div className="blockUser__content">
        <SearchUser
          searchQuery={searchQuery}
          handleInputChange={() => {handleInputChange(event, setSearchQuery)}}
          handleKeyPress={() => handleKeyPress(event, setSearchQuery)}
          handleSearchClick={handleSearchClick}
        />

        <div className="
          blockUser__list
          d-flex
          flex-row
          flex-wrap
          justify-content-between"
        >
          {employees?.filter((employee) => {
              const slug = employee.slug.toLowerCase().replace(/-/g, ' ');
              const query = searchQuery.toLowerCase();
        
              if (!query) {
                return true;
              }
        
              const searchWords = query.split(' ');
        
              return searchWords.every((word) => slug.includes(word));
            })
            .map((employee) => (
              <div
                key={employee.slug}
                className="
                  blockUser__list__card
                  block
                  d-flex
                  flex-column
                  justify-content-center
                  align-items-center"
              >
                <UserPhoto size={26} height={35} photo={employee.photo} />

                <p className="small-text blockUser__list__card__name">
                  {`${employee.name} ${employee.lastname}`}
                </p>

                <p className="small-text blockUser__list__card__location">
                  {`${employee.homeCountry}, ${employee.homeCity}`}
                </p>

                <button
                  type="button"
                  className="
                    blockUser__list__card__block
                    d-flex
                    flex-row
                    align-items-center
                  "
                  onClick={() => togglePopup(`${t('blocked__user')} ${employee.name}`)}
                >
                  <img src={lock} alt="Lock" />

                  <p className="small-text">
                    {t('block')}
                  </p>
                </button>
              </div>
            ))}
        </div>
      </div>

      {isPopupVisible && (
        <Popup
          text={popupText}
          onClose={() => togglePopup('')}
        />
      )}
    </div>
  );
};
