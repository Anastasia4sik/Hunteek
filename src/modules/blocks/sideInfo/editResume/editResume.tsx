import React, { useEffect, useState } from 'react';

import delet from '../../../../img/icons/delete.svg';
import upload from '../../../../img/icons/upload.svg';

import { UserPhoto } from '../../../shared/userPhoto';
import { Employee } from '../../../../types/Employee';
import { timeZones } from '../../../../helpers/arrays/timezones';
import { Popup } from '../../../Popup';
import { useTranslation } from 'react-i18next';

import levels from '../../../../helpers/arrays/langLevels.js';

type Props = {
  employee: Employee | undefined,
};

export const EditResume: React.FC<Props> = ({ employee }) => {
  if (employee === undefined) {
    return null;
  }

  const {
    name,
    lastname,
    photo,
    desc,
    position,
    timeZone,
    homeCountry,
    homeCity,
    workTerm,
    workTime,
    englishLevel,
    expierence,
    skills,
  } = employee;

  const [selectedTimezone, setSelectedTimezone] = useState(timeZone);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isLightTheme] = useState(() => {
    return localStorage.theme === 'light';
  });

  const parentBlock = document.querySelector('.info__container');

  useEffect(() => {
    if (isLightTheme) {
        const editChildren = parentBlock?.querySelectorAll('*');
  
        editChildren?.forEach((child) => {
          if (!child.classList.contains('light')) {
            child.classList.add('light');
          }
        })
    } else {
        const editChildren = parentBlock?.querySelectorAll('*');
  
        editChildren?.forEach((child) => {
          child.classList.remove('light');
        })
    }
  })

  const handleTimezoneChanged = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedTimezone(event.target.value);
  };

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };
  
  const { t } = useTranslation();

  useEffect(() => {
    const textarea = document.getElementById('descRes');
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    }
  }, [desc]);

  return (
    <div className="edit scroll">
      <form action="#" className="edit__content">
        <fieldset className="edit__container">
          <legend className="edit__label list-text"> 
            {t('image')}
          </legend>

          <div className="edit__photo d-flex flex-row align-items-center justify-content-between">
            <UserPhoto size={100} photo={photo} />

            <div className="edit__photo__upload">
              <label htmlFor="uploadPhoto" className="edit__photo__upload__label btn-grey">
                <div className="edit__photo__upload__label__content d-flex align-items-center flex-row">
                  <img
                    src={upload}
                    alt="Upload Icon"
                    className="edit__photo__upload__label__icon" 
                  />

                  <span className="edit__photo__upload__label__text bold-text">
                    {t('upload')}
                  </span>
                </div>
              </label>

              <input id="uploadPhoto" type="file" className="edit__photo__upload edit__input" />
            </div>

            <button type="button" className="edit__photo__delete btn-grey">
              <img
                src={delet}
                alt="Delete"
                className="edit__photo__delete__img"
              />
            </button>
          </div>
        </fieldset>

        <fieldset className="edit__container d-flex flex-column">
          <legend className="edit__label list-text"> 
            {t('name')}
          </legend>

          <input
            type="text"
            id="name"
            defaultValue={`${name} ${lastname}`}
            className="edit__input list-text"
          />
        </fieldset>

        <fieldset className="edit__container d-flex flex-column">
          <legend className="edit__label list-text">
            Position
          </legend>

          <input
            type="text"
            id="name"
            defaultValue={position}
            className="edit__input list-text"
          />
        </fieldset>

        <fieldset className="edit__container d-flex flex-column">
          <legend className="edit__label list-text">
            {t('desc')}
          </legend>

          <textarea
            id="descRes"
            defaultValue={desc}
            className="edit__input edit__input--desc list-text"
          />
        </fieldset>

        <fieldset className="edit__container d-flex flex-column">
          <legend className="edit__label list-text">
            {t('time__zone')}
          </legend>

          <select
            onChange={handleTimezoneChanged}
            id="timezone"
            className="list-text edit__input"
            defaultValue={selectedTimezone}
          >
            {timeZones.map((timezone) => (
              <option key={timezone.offset} value={timezone.offset}>
                {`${timezone.name}, ${timezone.offset}`}
              </option>
            ))}
          </select>
        </fieldset>

        <fieldset className="edit__container d-flex flex-column">
          <legend className="edit__label list-text">
          </legend>

          <div className="d-flex flex-row">
            <input
              type="checkbox"
              id="Long-term"
              className="list-text"
              defaultChecked={workTerm === "Long-term"}
            />
            <label htmlFor="Long-term" className="list-text">
              {t('long__term')}
            </label>
          </div>

          <div className="d-flex flex-row">
            <input
              type="checkbox"
              id="Short-term"
              className="list-text"
              defaultChecked={workTerm === "Short-term"}
            />
            <label htmlFor="Short-term" className="list-text">
              {t('short__term')}
            </label>
          </div>
        </fieldset>

        <fieldset className="edit__container d-flex flex-column">
          <legend className="edit__label list-text">
            {t('work__time')}
          </legend>

          <div className="d-flex flex-row">
            <input
              type="checkbox"
              id="Part-time"
              className="list-text"
              defaultChecked={workTime === "Part-time"}
            />
            <label htmlFor="Part-time" className="list-text">
              {t('part__time')}
            </label>
          </div>

          <div className="d-flex flex-row">
            <input
              type="checkbox"
              id="Full-time"
              className="list-text"
              defaultChecked={workTime === "Full-time"}
            />
            <label htmlFor="Full-time" className="list-text">
              {t('full__time')}
            </label>
          </div>
        </fieldset>

        <fieldset className="edit__container d-flex flex-column">
          <legend className="edit__label list-text">
            {t('eng__level')}
          </legend>

          <select
            id="english"
            className="list-text edit__input"
            defaultValue={englishLevel}
          >
            {levels.map((level: string) => (
              <option
                value={level}
                key={level}
              >
                {level}
              </option>
            ))}
          </select>
        </fieldset>

        <fieldset className="edit__container d-flex flex-column">
          <legend className="edit__label list-text"> 
            {t('location')}
          </legend>

          <input
            type="text"
            id="location"
            defaultValue={`${homeCountry}, ${homeCity}`}
            className="edit__input list-text"
          />
        </fieldset>

        <fieldset className="edit__container d-flex flex-column">
          <legend className="edit__label list-text">
            {t('skills')}
          </legend>

          <textarea
            id="skills"
            defaultValue={skills}
            className="edit__input list-text"
          />
        </fieldset>

        <fieldset className="edit__container d-flex flex-column">
          <legend className="edit__label list-text">
            {t('experience')}
          </legend>

          <input
            id="expierence"
            defaultValue={`${expierence}`}
            className="edit__input list-text"
          />
        </fieldset>

        <button
          type="button"
          className="edit__btn btn-grey"
          onClick={() => setIsPopupVisible(true)}
        >
          {t('submit')}
        </button>
      </form>

      {isPopupVisible && (
        <Popup text={t('resume__edited')} onClose={togglePopup} />
      )}
    </div>
  );
};
