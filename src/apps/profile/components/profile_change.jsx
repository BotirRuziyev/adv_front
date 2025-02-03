import React from 'react'
import '../styles/profile-change.css'


function ProfileChange() {
    return (
        <div className="profile-change">
            <img className="profile-avatar" src="..\src\assets\avatars\43332.jpg" alt="" />
            <p className="profile-status">Статус: <span id="status-indicator">a</span> Активный</p>
            <AvatarSelection />
            <div className="profile-mail">
                <p className="mail-label">ivan@mail.ru</p>
                <button className="mail-change"><img src=".\src\assets\icons\dialog-windows\edit.svg" alt="" /></button>
            </div>
            <p id="user-id">ID: ...</p>
            <button className="change-password">Сменить пароль</button>
        </div>
    )
}

function AvatarSelection() {
    return (
    <div className="avatar-select-block">
      <button className="avatar-select active"><img src="..\src\assets\avatars\43332.jpg" alt="" /></button>
      <button className="avatar-select"><img src="..\src\assets\avatars\51491.jpg" alt="" /></button>
      <button className="avatar-select"><img src="..\src\assets\avatars\51578.jpg" alt="" /></button>
    </div>
    )
  }

export default ProfileChange