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
import { Team } from './modules/Team';
import { MyWalletCatFull } from './modules/MyWalletCatFull';
import { Messages } from './modules/Messages';
import { Login } from './modules/Login';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Main />} />

          <Route path="my-profile" element={<MyProfile />}>
            <Route path="my-resume" element={<MyResume />} />
          </Route>

          <Route path="my-wallet" element={<MyWallet />}>
            <Route path="catalog-full" element={<MyWalletCatFull />} />
          </Route>

          <Route path="projects" element={<Projects />} />

          <Route path="teams" element={<Team />} />

          <Route path="messages" element={<Messages />} />

          <Route path="login" element={<Login />} />

          <Route path="register" element={<Login />} />

          <Route path="code" element={<Login />} />
        </Route>

        <Route path=":lang">
          <Route index element={<Main />} />

          <Route path="my-profile" element={<MyProfile />}>
            <Route path="my-resume" element={<MyResume />} />
          </Route>

          <Route path="my-wallet" element={<MyWallet />}>
            <Route path="catalog-full" element={<MyWalletCatFull />} />
          </Route>

          <Route path="projects" element={<Projects />} />

          <Route path="teams" element={<Team />} />

          <Route path="messages" element={<Messages />} />

          <Route path="login" element={<Login />} />

          <Route path="register" element={<Login />} />

          <Route path="code" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
