import React from 'react';

type Props = {
  size: number;
  height?: number;
  photo: string | undefined;
};

export const UserPhoto: React.FC<Props> = ({ size, height, photo }) => {
  return (
    <img
      src={photo}
      alt="User"
      className="photo"
      style={{ width: `${size}%`, height: height ? `${height}%` : `${size}%` }}
    />
  );
};
