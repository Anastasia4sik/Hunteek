import React from 'react';
import { SearchUser } from '../../shared/searchUser';
import { UserPhoto } from '../../shared/userPhoto';

import lock from '../../../img/icons/lock_red.svg';
import { Employee } from '../../../types/Employee';

type Props = {
  employees: Employee[] | undefined,
};

export const BlockUser: React.FC<Props> = ({ employees }) => {
  return (
    <div className="blockUser">
      <div className="blockUser__content">
        <SearchUser />

        <div className="
          blockUser__list
          d-flex
          flex-row
          flex-wrap
          justify-content-between"
        >
          {employees?.map((employee) => (
            <div
              key={employee.slug}
              className="
                blockUser__list__card
                block
                d-flex
                flex-column
                justify-content-center
                align-items-center"
            >
              <UserPhoto size={26} height={35} photo={employee.photo} />

              <p className="small-text blockUser__list__card__name">
                {employee.name}
              </p>

              <p className="small-text blockUser__list__card__location">
                {`${employee.homeCountry}, ${employee.homeCity}`}
              </p>

              <a
                href="/"
                className="
                  blockUser__list__card__block
                  d-flex
                  flex-row
                  align-items-center"
              >
                <img src={lock} alt="Lock" />

                <p className="small-text">
                  Block
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
