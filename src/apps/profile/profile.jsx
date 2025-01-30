// App.js
import React from "react";
import './styles/profile.css'   

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";




function Profile() {
  const iconPath = {

  }

  return (
      <div className="flex">
        <nav className="w-64 bg-gray-800 text-white h-screen p-4">
          <div className="profile-preview">
            <Link to="/profile" className="avatar-placeholder">
              <img src="..\src\assets\avatars\43332.jpg" className="avatar" alt="" />
            </Link>
            <h3 className="nickname-preview">Иванов Иван</h3>
          </div>
          <ul>
            <CustomLink href="/main"><img src="..\src\assets\icons\side-nav\main.svg" alt="" />Главная</CustomLink>
            <CustomLink href="/adv"><img src="..\src\assets\icons\side-nav\adv.svg" alt="" />Реклама</CustomLink>
            <CustomLink href="/income"><img src="..\src\assets\icons\side-nav\income.svg" alt="" />Доход</CustomLink>
            <CustomLink href="/transactions"><img src="..\src\assets\icons\side-nav\transactions.svg" alt="" />ывод средств</CustomLink>
            <CustomLink href="/support"><img src="..\src\assets\icons\side-nav\support.svg" alt="" />Поддержка</CustomLink>
            <CustomLink href="/notification"><img src="..\src\assets\icons\side-nav\notification.svg" alt="" />Уведомления</CustomLink>
            <CustomLink href="/profile"> <img src="..\src\assets\icons\side-nav\profile.svg" alt="" />Профиль</CustomLink>
          </ul>
        </nav>
        <main className="flex-1 p-4">
          
        </main>
      </div>
    
  );
};

function CustomLink({href, children, props}) {
const path = window.location.pathname

  return(
    <li className="mb-2">
      <a href={href} className={path === href ? "active-menu-link" : "menu-link"}>{children}</a>
    </li>
  )
}
 
export default Profile;