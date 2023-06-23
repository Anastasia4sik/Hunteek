/* eslint-disable max-len */
import React from 'react';
import { General } from '../../shared/general';
import { Profile } from '../../shared/profile';
import { EditProfile } from '../editPRofile';
import { BlockUser } from '../blockUser';
import { Employee } from '../../../types/Employee';

type Props = {
  purpose: string;
  employee: Employee;
  employees: Employee[];
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
  } else if (purpose === 'edit') {
    title = 'Edit Profile';
    content = <EditProfile employee={employee} />;
  } else if (purpose === 'block') {
    title = 'Block a user';
    content = <BlockUser employees={employees} />;
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
