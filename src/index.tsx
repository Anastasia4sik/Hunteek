import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.scss';
import { App } from './App';
import { Page } from './modules/Page';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Page />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
