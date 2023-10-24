import React, { useEffect, useState } from 'react';

import { Menu } from '../blocks/menu';
import { Header } from '../blocks/Header';
import { Select } from '../blocks/select';
import { Info } from '../blocks/Info';
import { Rate } from '../shared/rate';
import { UserPhoto } from '../shared/userPhoto';

import time from '../../img/icons/header/time.svg';
import wallet from '../../img/icons/card/wallet.svg';

import { Project } from '../../types/Project';

import { getProjects } from '../../api/api';

import { handleInputChange, handleSearchClick, handleKeyPress } from '../../helpers/search';
import { Popup } from '../Popup';

import { useTranslation } from 'react-i18next';

export const Projects: React.FC = () => {
  const [location, setLocation] = useState('');
  const [projects, setProjects] = useState<Project[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupText, setPopupText] = useState('');
  const [isLightTheme] = useState(() => {
    return localStorage.theme === 'light';
  });

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#create-project') {
        setLocation('project');
      } else if (window.location.hash === '#feedback') {
        setLocation('feedback');
      } else {
        setLocation('general');
      }
    };

    handleHashChange(); // Call the function once on initial load to set the location

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    getProjects().then(data => {
      setProjects(data);
    });
  }, []);

  const togglePopup = (popupText: string) => {
    setIsPopupVisible(!isPopupVisible);
    if (popupText) {
      setPopupText(popupText);
    }
  };

  const { t } = useTranslation();

  return (
    <div className="main">
      <Menu />

      <Header
        searchQuery={searchQuery}
        handleInputChange={() => {handleInputChange(event, setSearchQuery)}}
        handleKeyPress={() => handleKeyPress(event, setSearchQuery)}
        handleSearchClick={handleSearchClick}
      />

      <div className="content d-flex flex-row">
        <Select />

        <div className="main__catalog">
          {projects
            .filter((project) => {
              const slug = project.slug.toLowerCase().replace(/-/g, ' ');
              const query = searchQuery.toLowerCase();
        
              if (!query) {
                return true;
              }
        
              const searchWords = query.split(' ');
        
              return searchWords.every((word) => slug.includes(word));
            })
            .map((project) => (
            <div key={project.slug} className="card block">
              <div className="card__title text-center">
                <h3 className="card__title__p text-center main-text">
                  {project.position}
                </h3>
              </div>

              <div className="card__person--projects">
                <div className="card__person__inner d-flex flex-row justify-content-between align-items-center">
                  <div className="card__person__content d-flex flex-column">
                    <p className="card__person__name main-text">
                      {project.company_name}
                    </p>

                    <Rate rateIs={project.rate}/>
                  </div>

                  <UserPhoto size={20} photo={project.photo} />
                </div>
              </div>

              <div className="card__info--projects d-flex flex-column justify-content-center">
                <p className="card__info__desc main-text">
                  {project.desc}
                </p>
              </div>

              <div className="card__media d-flex flex-row">
                <div className="card__media__item d-flex flex-row">
                  <img src={time} alt="Time" />

                  <p className="card__media__item__desc main-text">{`${project.workTime}h`}</p>
                </div>

                <div className="card__media__item d-flex flex-row">
                  <img src={wallet} alt="Money" />

                  <p className="card__media__item__desc main-text">{`$${project.salary}`}</p>
                </div>
              </div>

              <div className="card__btn">
                <button
                  type="button"
                  className="card__btn__button main-text btn-grey"
                  onClick={() => togglePopup(`${t('message__sent')} ${project.company_name}`)}
                >
                  {t('complete__project')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Info isLightTheme={isLightTheme} purpose={location} />

      {isPopupVisible && (
        <Popup text={popupText} onClose={() => togglePopup('')} />
      )}
    </div>
  );
};
