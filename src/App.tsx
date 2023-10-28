import React, {useEffect, useState} from 'react';
import { Outlet } from 'react-router-dom';
import './main.scss';

export const App: React.FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};