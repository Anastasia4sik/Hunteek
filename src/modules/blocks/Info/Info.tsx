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

import { useTranslation } from 'react-i18next';

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

  const { t } = useTranslation();

  let title;
  let content;

  if (purpose === 'general') {
    title = t('info__general');
    content = <General />;
  } else if (purpose === 'profile') {
    title = t('info__profile');
    content = <Profile employee={employee} />;
  } else if (purpose === 'edit-profile') {
    title = t('edit__profile');
    content = <EditProfile recruteir={recruteir} />;
  } else if (purpose === 'edit-resume') {
    title = t('edit__resume');
    content = <EditResume employee={employee} />;
  } else if (purpose === 'block') {
    title = t('info__block');
    content = <BlockUser employees={employees} />;
  } else if (purpose === 'project') {
    title = t('create__project');
    content = <CreateProject />;
  } else if (purpose === 'cryptoWallets') {
    title = t('info__crypto__wallets');
    content = <AllWallets />;
  } else if (purpose === 'fiatWallets') {
    title = t('info__fiat__wallets');
    content = <AllWallets />;
  } else if (purpose === 'transfer') {
    title = t('info__transfer');
    content = <Transfer />;
  } else if (purpose === 'rating') {
    content = <Rating />;
  } else if (purpose === 'reporting') {
    title = t('info__report');
    content = personInfo ? <Reporting personInfo={personInfo} /> : null;
  } else if (purpose === 'team') {
    title = t('info__smart__contract');
    content = <EditResume employee={employee} />;
  } else if (purpose === 'news') {
    title = t('info__news');
    content = <General />;
  } else if (purpose === 'support') {
    title = t('info__support');
    content = <General />;
  } else if (purpose === 'feedback') {
    title = t('info__feedback');
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
