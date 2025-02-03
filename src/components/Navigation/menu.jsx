import React from 'react'
import '../styles/nav-bar.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Toggle from './switch'




function Menu() {
  const executer = document.getElementById('executer');
  const customer = document.getElementById('customer');

  // checkbox.addEventListener('change', function() {
  //   console.log(this.checked ? this.value : 'Флажок не выбран');
  // });

  return (
    <nav className="nav-pannel">
      <div className="profile-preview">
        <Link to="/profile" className="avatar-placeholder">
          <img src="..\src\assets\avatars\43332.jpg" className="avatar" alt="" />
        </Link>
        <h3 className="nickname-preview">Иванов Иван</h3>
        <p id="user-id">(ID...)</p>
      </div>
      <Toggle />
      <ul>
        <CustomLink href="/main"><img src="..\src\assets\icons\side-nav\main.svg" />Главная</CustomLink>
        <CustomLink href="/adv"><img src="..\src\assets\icons\side-nav\adv.svg" />Реклама</CustomLink>
        <CustomLink href="/income"><img src="..\src\assets\icons\side-nav\income.svg" />Доход</CustomLink>
        <CustomLink href="/transactions"><img src="..\src\assets\icons\side-nav\transactions.svg" />Вывод средств</CustomLink>
        <CustomLink href="/support"><img src="..\src\assets\icons\side-nav\support.svg" />Поддержка</CustomLink>
        <CustomLink href="/notification"><img src="..\src\assets\icons\side-nav\notification.svg" />Уведомления</CustomLink>
        <CustomLink href="/profile"><img src="..\src\assets\icons\side-nav\profile.svg" />Профиль</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({href, children, props}) {
  const path = window.location.pathname
  
  return(
    <li className="mb-2">
      <a href={href} className={path === href ? "active-menu-link" : "menu-link"}>{children}</a>
    </li>
  )
}




export default Menu;