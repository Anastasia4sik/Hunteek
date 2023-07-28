import React, { useState } from 'react';

import delet from '../../../img/icons/delete.svg';
import upload from '../../../img/icons/upload.svg';
import { UserPhoto } from '../../shared/userPhoto';

import { Employee } from '../../../types/Employee';

import { timeZones } from '../../../helpers/timezones';

type Props = {
  employee: Employee | undefined,
};

export const EditResume: React.FC<Props> = ({ employee }) => {
  const [, setSelectedTimezone] = useState('');

  const handleTimezoneChanged = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedTimezone(event.target.value);
  };

  return (
    <div className="edit">
      <form action="#" className="edit__content">
        <fieldset className="edit__container">
          <legend className="edit__label list-text"> Image </legend>

          <div className="edit__photo d-flex flex-row align-items-center justify-content-between">
            <UserPhoto size={20} photo={employee?.photo} />

            <div className="edit__photo__upload">
              <label htmlFor="uploadPhoto" className="edit__photo__upload__label btn-grey">
                <div className="edit__photo__upload__label__content d-flex align-items-center flex-row">
                  <img src={upload} alt="Upload Icon" className="edit__photo__upload__label__icon" />

                  <span className="edit__photo__upload__label__text bold-text">Upload Image</span>
                </div>
              </label>

              <input id="uploadPhoto" type="file" className="edit__photo__upload edit__input" />
            </div>

            <button type="button" className="edit__photo__delete btn-grey">
              <img src={delet} alt="Delete" className="edit__photo__delete__img" />
            </button>
          </div>
        </fieldset>

        <fieldset className="edit__container d-flex flex-column">
          <legend className="edit__label list-text"> Name </legend>

          <input type="text" id="name" placeholder="What is your name?" className="edit__input list-text" />
        </fieldset>

        <fieldset className="edit__container d-flex flex-column">
          <legend className="edit__label list-text">
            Description
          </legend>

          <textarea id="desc" placeholder="Tell us about yourself" className="edit__input edit__input--desc list-text" />
        </fieldset>

        <fieldset className="edit__container d-flex flex-column">
          <legend className="edit__label list-text">
            Time zone
          </legend>

          <select
            onChange={handleTimezoneChanged}
            id="timezone"
            className="list-text edit__input"
          >
            <option value="" disabled selected hidden>None</option>

            {timeZones.map((timezone) => (
              <option key={timezone.offset} value={timezone.offset}>
                {`${timezone.name}, ${timezone.offset}`}
              </option>
            ))}
          </select>
        </fieldset>

        <fieldset className="edit__container d-flex flex-column">
          <legend className="edit__label list-text">Work term</legend>

          <div className="d-flex flex-row">
            <input
              type="checkbox"
              id="Long-term"
              className="list-text"
            />
            <label htmlFor="Long-term" className="list-text">
              Long-term
            </label>
          </div>

          <div className="d-flex flex-row">
            <input
              type="checkbox"
              id="Short-term"
              className="list-text"
            />
            <label htmlFor="Short-term" className="list-text">
              Short-term
            </label>
          </div>
        </fieldset>

        <fieldset className="edit__container d-flex flex-column">
          <legend className="edit__label list-text">
            Work time
          </legend>

          <div className="d-flex flex-row">
            <input
              type="checkbox"
              id="Part-time"
              className="list-text"
            />
            <label htmlFor="Part-time" className="list-text">
              Part-time
            </label>
          </div>

          <div className="d-flex flex-row">
            <input
              type="checkbox"
              id="Full-time"
              className="list-text"
            />
            <label htmlFor="Full-time" className="list-text">
              Full-time
            </label>
          </div>
        </fieldset>

        <fieldset className="edit__container d-flex flex-column">
          <legend className="edit__label list-text">
            Level of English
          </legend>

          <select
            id="english"
            className="list-text edit__input"
          >
            <option value="" disabled selected hidden>None</option>

            <option value="A1">A1</option>

            <option value="A2">A2</option>

            <option value="B1">B1</option>

            <option value="B2">B2</option>

            <option value="C1">C1</option>

            <option value="C2">C2</option>
          </select>
        </fieldset>

        <fieldset className="edit__container d-flex flex-column">
          <legend className="edit__label list-text"> Location </legend>

          <input type="text" id="location" placeholder="Country, city" className="edit__input list-text" />
        </fieldset>

        <fieldset className="edit__container d-flex flex-column">
          <legend className="edit__label list-text">
            Skills
          </legend>

          <textarea id="skills" placeholder="What your skills are?" className="edit__input list-text" />
        </fieldset>

        <button type="submit" className="edit__btn btn-grey">
          Submit
        </button>
      </form>
    </div>
  );
};
