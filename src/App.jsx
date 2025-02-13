// import { useState } from 'react'
// import './App.css'
// // import LoginPage from'./apps/auth/pages/LoginPage';
// // import RegisterPage from'./apps/auth/pages/RegisterPage';
// // import Profile from './apps/profile/pages/profile'
// // import Main from './apps/main/pages/MainPage'
// import AuthRoutes from './apps/auth/AuthRoutes';
// import NavBarRoutes from './apps/navigation-bar/NavBarRoutes';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <Router>
//       <Routes>
//         {/* <Route path="/login" element={<LoginPage />} />
//         <Route path="/register" element={<RegisterPage />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/main" element={<Main />} /> */}
//         <Route path='/auth/*' element={<AuthRoutes />} />
//         <Route path='/*' element={<NavBarRoutes />} />
//       </Routes>
//     </Router>
//   )
// }

// export default App;
import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthRoutes from "./apps/auth/AuthRoutes";
import Layout from "./apps/navigation-bar/pages/layout";
import Profile from "./apps/profile/pages/profile";
import MainPage from "./apps/main/pages/MainPage";
import AdvRoutes from "./apps/adv/AdvRoutes";
import avatars from "./assets/avatars.js"

function App() {
  // Состояние для выбранной аватарки
  const [selectedAvatar, setSelectedAvatar] = useState(() => {
    // Загружаем аватарку из LocalStorage при первой загрузке
    return localStorage.getItem("selectedAvatar") || avatars.men_1;
  });

  const handleAvatarChange = (avatar) => {
    setSelectedAvatar(avatar);
    localStorage.setItem("selectedAvatar", avatar); // Сохраняем в LocalStorage
  };

  return (
    <Router>
      <Routes>
        <Route path="/auth/*" element={<AuthRoutes />} />
        {/* Оборачиваем страницы с навигационной панелью */}
        <Route
          path="/"
          element={<Layout selectedAvatar={selectedAvatar} />}
        >
          {/* Вкладываем дочерние маршруты */}
          <Route path="profile" element={<Profile onAvatarChange={handleAvatarChange} selectedAvatar={selectedAvatar} />} />
          <Route path="main" element={<MainPage />} />
          <Route path="/adv/*" element={<AdvRoutes />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
