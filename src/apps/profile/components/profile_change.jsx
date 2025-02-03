import React from 'react';
import '../styles/profile-change.css';
import AvatarSelection from './avatar_selection';

function ProfileChange({ selectedAvatar, setSelectedAvatar }) {
  return (
    <div className="profile-change">
      <img className="profile-avatar" src={selectedAvatar} alt="Аватар профиля" />
      <p className="profile-status">Статус: <span id="status-indicator">a</span> Активный</p>

      {/* Передаем selectedAvatar и setSelectedAvatar в AvatarSelection */}
      <AvatarSelection onSelectAvatar={setSelectedAvatar} selectedAvatar={selectedAvatar} />

      <div className="profile-mail">
        <p className="mail-label">ivan@mail.ru</p>
        <button className="mail-change"><img src="src/assets/icons/dialog-windows/edit.svg" alt="" /></button>
      </div>
      <p id="user-id">ID: ...</p>
      <button className="change-password">Сменить пароль</button>
    </div>
  );
}

export default ProfileChange;
