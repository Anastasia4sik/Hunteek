import React, { useEffect, useState } from 'react';

import { Menu } from '../blocks/menu';
import { Header } from '../blocks/Header';
import { Select } from '../blocks/select';
import { Info } from '../blocks/Info';
import { RecruitInfo } from '../blocks/content/recruitInfo';
import { Banlist } from '../blocks/content/banlist';

import { getRecruiters, getEmployees } from '../../api/api';
import { Recruiter } from '../../types/Recruiter';
import { Employee } from '../../types/Employee';
import { EmployeeInfo } from '../blocks/content/employeeInfo';

import starBig from '../../img/icons/card/rate/bigStar.svg';

import { handleInputChange, handleSearchClick, handleKeyPress } from '../../helpers/search';

export const MyProfile: React.FC = () => {
  const [location, setLocation] = useState('');
  const [recruiters, setRecruiters] = useState<Recruiter[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);

  const [searchQuery, setSearchQuery] = useState('');

  const [isBanListChecked, setIsBanListChecked] = useState(false);
  const [isResumeChecked, setIsResumeChecked] = useState(false);
  const [isLightTheme] = useState(() => {
    return localStorage.theme === 'light';
  });

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#edit-profile') {
        setLocation('edit-profile');
      } else if (window.location.hash === '#block-user') {
        setLocation('block');
      } else if (window.location.hash === '#rating') {
        setLocation('rating');
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
    getRecruiters().then(data => {
      setRecruiters(data);
    });
  }, []);

  useEffect(() => {
    getEmployees().then(data => {
      setEmployees(data);
    });
  }, []);

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
        <Select
          setIsBanListChecked={setIsBanListChecked}
          setIsResumeChecked={setIsResumeChecked}
        />

        <div className="content__middle d-flex flex-column">
          {isResumeChecked ? (
            <div className="content__top__resume d-flex flex-row justify-content-between">
              <EmployeeInfo employee={employees[0]} />

              <div className="block content__top__empty">
                <div className="content__top__empty__hide">
                  <EmployeeInfo employee={employees[0]} />
                </div>
              </div>
            </div>
          ) : (
            <div className="content__top d-flex flex-row justify-content-between">
              <RecruitInfo recruiter={recruiters[0]} />

              <div className="block content__top__empty">
                {location === 'rating' ? (
                  <div className="content__top withStar d-flex">
                    <img src={starBig} alt="Star Big" className="withStar__img" />
                  </div>
                ) : (
                  <div className="content__top__empty__hide">
                    <RecruitInfo recruiter={recruiters[0]} />
                  </div>
                )}
              </div>
            </div>
          )}

          {isBanListChecked && <Banlist employees={employees} searchQuery={searchQuery} />}
        </div>

      </div>

      <Info isLightTheme={isLightTheme} purpose={location} recruteir={recruiters[0]} employees={employees} />
    </div>
  );
};
