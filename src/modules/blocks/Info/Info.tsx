import React, { useEffect, useState } from 'react';

import { General } from '../sideInfo/general';
import { Profile } from '../sideInfo/profile';
import { EditProfile } from '../sideInfo/editProfile';
import { BlockUser } from '../sideInfo/blockUser';
import { Employee } from '../../../types/Employee';
import { Recruiter } from '../../../types/Recruiter';
import { EditResume } from '../sideInfo/editResume';
import { CreateProject } from '../sideInfo/createProject';
import { AllWallets } from '../sideInfo/allWallets';
import { Transfer } from '../sideInfo/transfer';
import { Reporting } from '../sideInfo/reporting';
import { ReferralPerson } from '../../../types/referralPerson';

import referralInfo from '../../../api/referralPerson.json';
import { Rating } from '../sideInfo/rating';
import { News } from '../../News';
import { Feedback } from '../sideInfo/feedback';

type Props = {
  purpose: string;
  employee?: Employee;
  employees?: Employee[];
  recruteir?: Recruiter;
  recruiters?: Recruiter[];
  referralPerson?: ReferralPerson;
};

export const Info: React.FC<Props> = ({
  purpose,
  employee,
  employees,
  recruteir,
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
    content = <EditProfile recruteir={recruteir} />;
  } else if (purpose === 'edit-resume') {
    title = 'Edit Resume';
    content = <EditResume employee={employee} />;
  } else if (purpose === 'block') {
    title = 'Block a user';
    content = <BlockUser employees={employees} />;
  } else if (purpose === 'project') {
    title = 'Create a project';
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
  } else if (purpose === 'rating') {
    content = <Rating />;
  } else if (purpose === 'reporting') {
    title = 'Reporting on payments';
    content = personInfo ? <Reporting personInfo={personInfo} /> : null;
  } else if (purpose === 'team') {
    title = 'Create a new smart contract resume';
    content = <EditResume employee={employee} />;
  } else if (purpose === 'news') {
    title = 'News page';
    content = <General />;
  } else if (purpose === 'support') {
    title = 'Support page';
    content = <General />;
  } else if (purpose === 'feedback') {
    title = 'Send a feedack';
    content = <Feedback />;
  } else {
    title = '';
    content = '';
  }

  return (
    <div className="info block">
      <div className="info__container">
        {purpose === 'rating' ? (
          null
        ) : (
          <h3 className="info__title main-text d-block text-center">
            {title}
          </h3>
        )}

        {content}
      </div>
    </div>
  );
};
