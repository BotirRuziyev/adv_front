// import React, { useState, useEffect } from "react";
// import "../styles/profile.css";
// import Menu from "../../navigation-bar/pages/menu";
// import ProfileChange from "../components/profile_change";
// import ProfileDocx from "../components/profile_docx";

// function Profile() {
//   document.title = "Профиль";

//   const [selectedAvatar, setSelectedAvatar] = useState(() => {
//     return localStorage.getItem("selectedAvatar") || "src/assets/avatars/43332.jpg";
//   });

//   useEffect(() => {
//     localStorage.setItem("selectedAvatar", selectedAvatar);
//   }, [selectedAvatar]);

//   return (
//     <div className="flex">
//       <Menu selectedAvatar={selectedAvatar} />
//       <main className="flex-1 p-4">
//         <h2 className="profile-title">Настройка профиля</h2>
//         <div className="profile-main">
//           {/* Передаем selectedAvatar и setSelectedAvatar в ProfileChange */}
//           <ProfileChange selectedAvatar={selectedAvatar} setSelectedAvatar={setSelectedAvatar} />
//           <ProfileDocx />
//         </div>
//       </main>
//     </div>
//   );
// }

// export default Profile;
import React, { useEffect } from "react";
import "../styles/profile.css";
import ProfileChange from "../components/profile_change";
import ProfileDocx from "../components/profile_docx";
import AvatarSelection from "../components/avatar_selection";

function Profile({ onAvatarChange, selectedAvatar }) {
  document.title = "Профиль";

  useEffect(() => {
    // Сохраняем выбранный аватар в локальное хранилище при изменении
    if (selectedAvatar) {
      localStorage.setItem("selectedAvatar", selectedAvatar);
    }
  }, [selectedAvatar]);

  return (
    <div>
      <h2 className="profile-title">Настройка профиля</h2>
      <div className="profile-main">
        <ProfileChange
          selectedAvatar={selectedAvatar} // Передаем текущий аватар
          setSelectedAvatar={onAvatarChange} // Передаем функцию смены аватара
        />
        <ProfileDocx />
      </div>
    </div>
  );
}

export default Profile;
