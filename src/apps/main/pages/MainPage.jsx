// App.js
import React from "react";
import { useState } from "react";
import '../../profile/styles/profile.css'   
import Menu from '../../navigation-bar/pages/menu'
import ProfileChange from '../../profile/components/profile_change'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";




function Main() {

  const [toggled, setToggled] = useState(false);

  const [selectedAvatar, setSelectedAvatar] = useState(() => {
      return localStorage.getItem("selectedAvatar") || "src/assets/avatars/43332.jpg";
    });

  return (
      <div className="flex">
        <Menu selectedAvatar={selectedAvatar} />
        <main className="flex-1 p-4">
          <div className="profile-main">
            
          </div>
        </main>
      </div>
    
  );
};


export default Main;