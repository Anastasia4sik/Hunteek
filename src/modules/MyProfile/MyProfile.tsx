/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';

import { Menu } from '../blocks/menu';
import { Header } from '../blocks/Header';
import { Select } from '../blocks/select';
import { Info } from '../blocks/Info';
import { RecruitInfo } from '../blocks/recruitInfo';
import { Banlist } from '../blocks/banlist';

import { getRecruiters, getEmployees } from '../../helpers/api';
import { Recruiter } from '../../types/Recruiter';
import { Employee } from '../../types/Employee';
import { EmployeeInfo } from '../blocks/employeeInfo';

export const MyProfile: React.FC = () => {
  const [location, setLocation] = useState('');
  const [recruiters, setRecruiters] = useState<Recruiter[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);

  const [isBanListChecked, setIsBanListChecked] = useState(false);
  const [isResumeChecked, setIsResumeChecked] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#edit-profile') {
        setLocation('edit');
      } else if (window.location.hash === '#block-user') {
        setLocation('block');
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

      <Header />

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
                <div className="content__top__empty__hide">
                  <RecruitInfo recruiter={recruiters[0]} />
                </div>
              </div>
            </div>
          )}

          {isBanListChecked && <Banlist employees={employees} />}
        </div>

      </div>

      <Info purpose={location} employee={employees[0]} employees={employees} />
    </div>
  );
};
