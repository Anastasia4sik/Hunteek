import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './main.scss';
import { Page } from './modules/Page';

export const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Page />
      </div>
    </BrowserRouter>
  );
};
