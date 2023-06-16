/* eslint-disable max-len */
import React from 'react';
import { General } from '../general';
import { Profile } from '../profile';

type Props = {
  purpose: string;
};

export const Info: React.FC<Props> = ({ purpose }) => {
  let title;
  let content;

  if (purpose === 'general') {
    title = 'Information about the page';
    content = <General />;
  } else if (purpose === 'profile') {
    title = 'Profile';
    content = <Profile />;
  } else if (purpose === 'edit') {
    title = 'Edit profile';
    content = <General />;
  } else {
    title = '';
    content = <General />;
  }

  return (
    <div className="info">
      <div className="info__container">
        <h3 className="info__title main-text d-block text-center">
          {title}
        </h3>

        {content}
      </div>
    </div>
  );
};
