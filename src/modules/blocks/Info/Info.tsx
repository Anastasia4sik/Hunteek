/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { General } from '../../shared/general';
import { Profile } from '../../shared/profile';
import { EditProfile } from '../editProfile';
import { BlockUser } from '../blockUser';
import { Employee } from '../../../types/Employee';
import { Recruiter } from '../../../types/Recruiter';
import { EditResume } from '../editResume';
import { CreateProject } from '../createProject';
import { AllWallets } from '../allWallets';
import { Transfer } from '../transfer';
import { Reporting } from '../reporting';
import { ReferralPerson } from '../../../types/referralPerson';

import referralInfo from '../../../api/referralPerson.json';

type Props = {
  purpose: string;
  employee?: Employee;
  employees?: Employee[];
  recruteir?: Recruiter;
  recruteirs?: Recruiter[];
  referralPerson?: ReferralPerson;
};

export const Info: React.FC<Props> = ({
  purpose,
  employee,
  employees,
}) => {
  const [personInfo, setPersonInfo] = useState<ReferralPerson | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const slug = window.location.hash.substring(5);
      const foundPersonInfo = referralInfo.find(person => person.slug === slug);

      setPersonInfo(foundPersonInfo || null);
    };

    handleHashChange(); // Handle initial hash on component mount

    window.addEventListener('hashchange', handleHashChange); // Listen for hash change events

    return () => {
      window.removeEventListener('hashchange', handleHashChange); // Cleanup the event listener
    };
  }, []);

  let title;
  let content;

  if (purpose === 'general') {
    title = 'Information about the page';
    content = <General />;
  } else if (purpose === 'profile') {
    title = 'Profile';
    content = <Profile employee={employee} />;
  } else if (purpose === 'edit-profile') {
    title = 'Edit Profile';
    content = <EditProfile employee={employee} />;
  } else if (purpose === 'edit-resume') {
    title = 'Edit Resume';
    content = <EditResume employee={employee} />;
  } else if (purpose === 'block') {
    title = 'Block a user';
    content = <BlockUser employees={employees} />;
  } else if (purpose === 'project') {
    title = 'Create a vacancy';
    content = <CreateProject />;
  } else if (purpose === 'cryptoWallets') {
    title = 'All Cryptocurrency Wallet';
    content = <AllWallets />;
  } else if (purpose === 'fiatWallets') {
    title = 'All Fiat Wallet';
    content = <AllWallets />;
  } else if (purpose === 'transfer') {
    title = 'Transfer of funds';
    content = <Transfer />;
  } else if (purpose === 'reporting') {
    title = 'Reporting on payments';

    content = personInfo ? <Reporting personInfo={personInfo} /> : null;
  } else {
    title = '';
    content = '';
  }

  return (
    <div className="info block">
      <div className="info__container">
        <h3 className="info__title main-text d-block text-center">
          {title}
        </h3>

        {content}
      </div>
    </div>
  );
};
