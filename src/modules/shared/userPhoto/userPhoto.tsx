import React from 'react';

type Props = {
  size: number;
  height?: number;
  photo: string | undefined;
};

export const UserPhoto: React.FC<Props> = ({ size, height, photo }) => {
  return (
    <div className={`user d-flex align-items-center justify-content-center ${localStorage.theme === 'light' ? 'light' : ''}`}>
      <img
        src={photo}
        alt="User"
        className="user__photo"
        style={{ width: `${size}%`, height: height ? `${height}%` : `${size}%` }}
      />
    </div>
  );
};
