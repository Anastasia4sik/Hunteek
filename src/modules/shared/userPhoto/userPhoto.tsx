import React from 'react';
import user from '../../../img/photo/user.png';

type Props = {
  size: number;
  height?: number;
};

export const UserPhoto: React.FC<Props> = ({ size, height }) => {
  return (
    <img
      src={user}
      alt="User"
      className="photo"
      style={{ width: `${size}%`, height: height ? `${height}%` : `${size}%` }}
    />
  );
};
