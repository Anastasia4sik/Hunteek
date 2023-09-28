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
          "my__wallet": "My Wallet",
          "my__profile": "My Profile",
          "my__balance": "My Balance",
          "my__resume": "My Resume",
          "banlist": "BanList",
          "block": "Block",
          
          // menu
          "menu__home": "Home",
          "menu__news": "News",
          "menu__proj": "My Projects",
          "menu__mes": "My Messages",
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
          "add__wallet": "Add Wallet",

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

          // about page
          "info__general": "Information about the page",
          "info__profile": "Profile",
          "info__edit__profile": "Edit Profile",
          "info__edit__resume": "Edit Resume",
          "info__block": "Block a user",
          "info__create__project": "Create a project",
          "info__crypto__wallets": "All Cryptocurrency Wallets",
          "info__fiat__wallets": "All Fiat Wallets",
          "info__transfer": "Transfer of funds",
          "info__report": "Reporting on payments",
          "info__smart__contract": "Create a new smart contract resume",
          "info__news": "News page",
          "info__support": "Support page",
          "info__feedback": "Send a feedack",

          // select
          "sel__spec": "Specilization",
          "sel__job__search": "Job search activity",
          "active": "Active",
          "passive": "Passive",
          "sel__english": "English level",
          "sel__experience": "Work Experience",
          "sel__work__type": "Type of work",
          "office__work": "In the office",
          "remote__work": "Remote work",
          "mixed__work": "Mixed (partly office and partly remote)",
          "sel__proj__employ": "Project employment",
          "full__time": "Full-time",
          "part__time": "Part-time",
          "sel__company__type": "Type of company",
          "sel__salary": "Salary (per month) from",
          "sel__reit": "Reit per hour",
          "sel__country__proj": "Country of project origin",
          "sel__languages": "Languages of communication",

          // select message
          "sel__write__mes": "Write a message",
          "sel__trash": "Trash",
          "sel__new__mes": "New messages",
          "sel__viewed__mes": "Viewed messages",
          
          // select other
          "sel__create__proj": "Create a project",
          "sel__create__resume": "Create a resume",
          "sel__smart__contract": "My Smart Contracts",
          "sel__referral": "Referral system",
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
          "my__wallet": "Мій Гаманець",
          "my__profile": "Мій Профіль",
          "my__balance": "Мій Баланс",
          "my__resume": "Моє Резюме",
          "banlist": "Чорний список",
          "block": "Заблокувати",

          // menu
          "menu__home": "Головна",
          "menu__news": "Новини",
          "menu__proj": "Мої Проєкти",
          "menu__mes": "Мої Повідомлення",
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
          "add__wallet": "Додати Гаманець",

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

          // about page
          "info__general": "Інформація про сторінку",
          "info__profile": "Профіль",
          "info__edit__profile": "Відредагуйте Профіль",
          "info__edit__resume": "Відредагуйте Резюме",
          "info__block": "Заблокуйте користувача",
          "info__create__project": "Створить проєкт",
          "info__crypto__wallets": "Всі Криптовалютні Гаманці",
          "info__fiat__wallets": "Всі Fiat Гаманці",
          "info__transfer": "Переказ коштів",
          "info__report": "Звітність про платежі",
          "info__smart__contract": "Створіть нове резюме смарт-контракту",
          "info__news": "Сторінка Новин",
          "info__support": "Сторінка Підтримки",
          "info__feedback": "Надіслати Відгук",

          // select
          "sel__spec": "Спеціалізація",
          "sel__job__search": "Активність пошуку роботи",
          "active": "Активний",
          "passive": "Пасивний",
          "sel__english": "Рівень Англійської",
          "sel__experience": "Досвід Роботи",
          "sel__work__type": "Тип роботи",
          "office__work": "Робота в офісі",
          "remote__work": "Віддалена робота",
          "mixed__work": "Змішана (частково в офісі, частково віддалена)",
          "sel__proj__employ": "Зайнятість у проєкті",
          "full__time": "Повна зайнятість",
          "part__time": "Часткова зайнятість",
          "sel__company__type": "Тип компанії",
          "sel__salary": "Зарплата (в місяць) від",
          "sel__reit": "Рейт на годину",
          "sel__country__proj": "Країна походження проєкту",
          "sel__languages": "Мови спілкування",

          // select message
          "sel__write__mes": "Написати повідомлення",
          "sel__trash": "Кошик",
          "sel__new__mes": "Нові повідомлення",
          "sel__viewed__mes": "Переглянуті повідомлення",
          
          // select other
          "sel__create__proj": "Створити проєкт",
          "sel__create__resume": "Створити резюме",
          "sel__smart__contract": "Мої Smart Контракти",
          "sel__referral": "Реферальна система",
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
