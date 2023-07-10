/* eslint-disable max-len */
import React from 'react';
import { General } from '../../shared/general';
import { Profile } from '../../shared/profile';
import { EditProfile } from '../editProfile';
import { BlockUser } from '../blockUser';
import { Employee } from '../../../types/Employee';
import { Recruiter } from '../../../types/Recruiter';
import { EditResume } from '../editResume';
import { CreateProject } from '../createProject';

type Props = {
  purpose: string;
  employee?: Employee;
  employees?: Employee[];
  recruteir?: Recruiter;
  recruteirs?: Recruiter[];
};

export const Info: React.FC<Props> = ({ purpose, employee, employees }) => {
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
