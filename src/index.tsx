import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.scss';
import { App } from './App';
import { Main } from './modules/Main';
import { MyProfile } from './modules/MyProfile';
import { MyWallet } from './modules/MyWallet';
import { MyResume } from './modules/MyResume';
import { Projects } from './modules/Projects';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Main />} />

          <Route path="/my-profile" element={<MyProfile />} />

          <Route path="/my-resume" element={<MyResume />} />

          <Route path="/my-wallet" element={<MyWallet />} />

          <Route path="/projects" element={<Projects />} />

        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
