import React from 'react';
import '../styles/nav-bar.css';
import { Link } from "react-router-dom";
import Toggle from '../components/switch';
import CustomLink from '../components/custom_link'

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
        <CustomLink href="/main"
          icon="src/assets/icons/side-nav/main.svg" 
          activeIcon="src/assets/icons/side-nav/main-active.svg"
        >
          Главная
        </CustomLink>
        <CustomLink href="/adv"
          icon="src/assets/icons/side-nav/adv.svg" 
          activeIcon="src/assets/icons/side-nav/adv-active.svg"
        >
          Реклама
        </CustomLink>
        <CustomLink href="/income"
          icon="src/assets/icons/side-nav/income.svg" 
          activeIcon="src/assets/icons/side-nav/income-active.svg"
        >
          Доход
        </CustomLink>
        <CustomLink href="/transactions"
          icon="src/assets/icons/side-nav/transactions.svg" 
          activeIcon="src/assets/icons/side-nav/transactions-active.svg"
        >
          Вывод средств
        </CustomLink>
        <CustomLink href="/support"
          icon="src/assets/icons/side-nav/support.svg" 
          activeIcon="src/assets/icons/side-nav/support-active.svg"
        >
          Поддержка
        </CustomLink>
        <CustomLink href="/notification"
          icon="src/assets/icons/side-nav/notification.svg" 
          activeIcon="src/assets/icons/side-nav/notification-active.svg"
        >
          Уведомления
        </CustomLink>
        <CustomLink href="/profile"
          icon="src/assets/icons/side-nav/profile.svg" 
          activeIcon="src/assets/icons/side-nav/profile-active.svg"
        >
          Профиль
        </CustomLink>
      </ul>
    </nav>
  );
}



export default Menu;
