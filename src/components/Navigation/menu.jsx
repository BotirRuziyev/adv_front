import React from 'react';
import '../styles/nav-bar.css';
import { Link } from "react-router-dom";
import Toggle from './switch';

function Menu({ selectedAvatar }) {
  return (
    <nav className="nav-pannel">
      <div className="profile-preview">
        <Link to="/profile" className="avatar-placeholder">
          <img src={selectedAvatar} className="avatar" alt="Аватар" />
        </Link>
        <h3 className="nickname-preview">Иванов Иван</h3>
        <p id="user-id">(ID...)</p>
      </div>
      <Toggle />
      <ul>
        <CustomLink href="/main">
          <img src="src/assets/icons/side-nav/main.svg" alt="Главная" />
          Главная
        </CustomLink>
        <CustomLink href="/adv">
          <img src="src/assets/icons/side-nav/adv.svg" alt="Реклама" />
          Реклама
        </CustomLink>
        <CustomLink href="/income">
          <img src="src/assets/icons/side-nav/income.svg" alt="Доход" />
          Доход
        </CustomLink>
        <CustomLink href="/transactions">
          <img src="src/assets/icons/side-nav/transactions.svg" alt="Вывод средств" />
          Вывод средств
        </CustomLink>
        <CustomLink href="/support">
          <img src="src/assets/icons/side-nav/support.svg" alt="Поддержка" />
          Поддержка
        </CustomLink>
        <CustomLink href="/notification">
          <img src="src/assets/icons/side-nav/notification.svg" alt="Уведомления" />
          Уведомления
        </CustomLink>
        <CustomLink href="/profile">
          <img src="src/assets/icons/side-nav/profile.svg" alt="Профиль" />
          Профиль
        </CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ href, children }) {
  const path = window.location.pathname;
  return (
    <li className="mb-2">
      <a href={href} className={path === href ? "active-menu-link" : "menu-link"}>
        {children}
      </a>
    </li>
  );
}

export default Menu;
