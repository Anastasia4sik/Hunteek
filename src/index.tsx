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
import { News } from './modules/News';
import { Support } from './modules/Support';

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          // general
          "download": "Download",
          "search": "Search",
          "edit": "Edit",
          "copy": "Copy",
          "desc": "Description",
          "added": "Added",
          "wallet": "Wallet",

          // menu
          "menu__home": "Home",
          "menu__news": "News",
          "menu__proj": "My Projects",
          "menu__mes": "My Messages",
          "menu__wallet": "My Wallet",
          "menu__profile": "My Profile",
          "menu__team": "My Team",
          "menu__support": "Support",
          "menu__feedback": "Send Feedback",
          "menu__theme": "Theme:",

          // header
          "video__desc": "Video team meetings are coming soon",

          // banlist
          "ban__title": "Ban List",
          "ban__block": "Block a user",
          "ban__photo": "Photo",
          "ban__name": "Name",
          "location": "Location",
          "ban__date": "Date of blocking",
          "ban__action": "Action",

          // search
          "search__desc": "Enter a name to search for",
          
          // wallet catalog
          "catalog__title": "Catalog of accounting and reports",
          "catalog__show__all": "Show All Transaction",
          "filter": "Filter",
          "download__all": "Download All",
          "date": "Date",
          "id": "ID",
          "amount": "Amount",
          "vat": "VAT",
          "profit": "Profit",
          "id__referral": "ID Referral",
          "link": "Link",
          "no__referral": "No referral",

          // wallet
          "wallet__title": "Internal wallet",
          "transfer": "Transfer of funds",
          "crypto__wallet": "Cryptocurrency Wallet",
          "wallet__show__all": "Show all wallets",
          "cur__amount": "Current amount",

          // info
          "time__zone": "Time zone:",
          "work__term": "Work term:",
          "work__time": "Work time:",
          "eng__level": "Level of English:",
          "experience": "Years of experience:",
          "skills": "Skills:",
          "phone": "Phone:",
          "edit__profile": "Edit Profile",
          "edit__resume": "Edit Resume",
          "recruiter": "Recruiter",
        }
      },
      ua: {
        translation: {
          // general
          "search": "Пошук",
          "download": "Завантажити",
          "edit": "Редагувати",
          "copy": "Копіювати",
          "desc": "Опис",
          "location": "Місце",
          "added": "Додано",
          "wallet": "Гаманці",

          // menu
          "menu__home": "Головна",
          "menu__news": "Новини",
          "menu__proj": "Мої Проєкти",
          "menu__mes": "Мої Повідомлення",
          "menu__wallet": "Мій Гаманець",
          "menu__profile": "Мій Профіль",
          "menu__team": "Моя Команда",
          "menu__support": "Підтримка",
          "menu__feedback": "Надіслати Відгук",
          "menu__theme": "Тема:",
          
          // header
          "video__desc": "Відео зустрічі будуть доступні зовсім скоро",

          // banlist
          "ban__title": "Чорний список",
          "ban__block": "Заблокувати",
          "ban__photo": "Фото",
          "ban__name": "Ім'я",
          "ban__date": "Дата блокування",
          "ban__action": "Дії",

          // search
          "search__desc": "Введіть ім'я для пошуку",

          // wallet catalog
          "catalog__title": "Каталог обліку та звітів",
          "catalog__show__all": "Показати Всі Транзакції",
          "filter": "Фільтр",
          "download__all": "Завантажити Все",
          "date": "Дата",
          "id": "ID",
          "amount": "Сума",
          "vat": "ПДВ",
          "profit": "Прибуток",
          "id__referral": "ID Реферала",
          "link": "Посилання",
          "no__referral": "Без реферала",

          // wallet
          "wallet__title": "Внутрішній гаманець",
          "transfer": "Переказ коштів",
          "crypto__wallet": "Криптовалютний гаманець",
          "wallet__show__all": "Переглянути всі гаманці",
          "cur__amount": "Поточна сума",

          // info
          "time__zone": "Часова зона:",
          "work__term": "Термін роботи:",
          "work__time": "Робочий час:",
          "eng__level": "Рівень англійської:",
          "experience": "Роки досвіду:",
          "skills": "Навички:",
          "phone": "Номер телефону:",
          "edit__profile": "Редагувати профіль",
          "edit__resume": "Редагувати резюме",
          "recruiter": "Рекрутер",
        }
      }
    },
    lng: "en",
    fallbackLng: "en",
  });

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Main />} />

          <Route path="/my-profile" element={<MyProfile />} />

          <Route path="/my-profile/my-resume" element={<MyResume />} />

          <Route path="/my-wallet" element={<MyWallet />} />

          <Route path="/my-wallet/catalog-full" element={<MyWalletCatFull />} />

          <Route path="/projects" element={<Projects />} />

          <Route path="/my-team" element={<Team />} />

          <Route path="/my-messages" element={<Messages />} />

          <Route path="/support" element={<Support />} />

          <Route path="/news" element={<News />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Login />} />
          <Route path="/code" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
