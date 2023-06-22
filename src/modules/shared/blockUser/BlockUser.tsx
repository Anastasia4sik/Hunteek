import React from 'react';
import { SearchUser } from '../searchUser';
import { UserPhoto } from '../userPhoto';

import lock from '../../../img/icons/lock_red.svg';

export const BlockUser: React.FC = () => {
  return (
    <div className="blockUser">
      <div className="blockUser__content scroll">
        <SearchUser />

        <div className="
          blockUser__list
          d-flex
          flex-row
          flex-wrap
          justify-content-between"
        >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((each) => (
            <div
              key={each}
              className="
                blockUser__list__card
                block
                d-flex
                flex-column
                justify-content-center
                align-items-center"
            >
              <UserPhoto size={26} height={35} />

              <p className="small-text blockUser__list__card__name">
                Yuri Kudin
              </p>

              <p className="small-text blockUser__list__card__location">
                Ukraine, Lviv
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
