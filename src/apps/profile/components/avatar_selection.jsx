import React from 'react';
import '../styles/profile-change.css';

function AvatarSelection({ onSelectAvatar, selectedAvatar }) {
  const avatars = [
    "src/assets/avatars/43332.jpg",
    "src/assets/avatars/51491.jpg",
    "src/assets/avatars/51578.jpg"
  ];

  return (
    <div className="avatar-select-block">
      {avatars.map((avatar, index) => (
        <button 
          key={index} 
          className={`avatar-select ${selectedAvatar === avatar ? "active" : ""}`}
          onClick={() => onSelectAvatar(avatar)}  // Передаем выбранный аватар
        >
          <img src={avatar} alt="Аватар" />
        </button>
      ))}
    </div>
  );
}

export default AvatarSelection;
