import React from 'react';
import '../styles/profile-change.css';
import avatar_icon from "../../../assets/avatars.js"

function AvatarSelection({ onSelectAvatar, selectedAvatar }) {
  const avatars = [
    avatar_icon.men_1,
    avatar_icon.men_2,
    avatar_icon.men_3,
    avatar_icon.women_1,
    avatar_icon.women_2,
    avatar_icon.women_3
  ];

  return (
    <div className="avatar-select-block">
      {avatars.map((avatar, index) => (
        <button
          key={index} 
          className={`avatar-select ${selectedAvatar === avatar ? "active" : ""}`}
          onClick={() => onSelectAvatar(avatar)}
        >
          <img src={avatar} alt="Аватар" />
        </button>
      ))}
    </div>
  );
}

export default AvatarSelection;
