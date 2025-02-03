// App.js
import React from "react";
import { useState } from "react";
import '../styles/profile.css'   
import Menu from '../../../components/Navigation/menu'
import ProfileChange from '../components/profile_change'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";




function Profile() {

  const [toggled, setToggled] = useState(false);

  return (
      <div className="flex">
        <Menu />
        <main className="flex-1 p-4">
          <h2 className="profile-title">Настройка профиля</h2>
          <div className="profile-main">
            <ProfileChange />
          </div>
        </main>
      </div>
    
  );
};


export default Profile;