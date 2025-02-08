import { Routes, Route } from 'react-router-dom';
import Layout from './pages/layout'; // Путь к Layout
import Profile from '../profile/pages/profile';
import MainPage from '../main/pages/MainPage';

const NavBarRoutes = ({ selectedAvatar }) => {
  return (
    <Routes>
      <Route element={<Layout selectedAvatar={selectedAvatar} />}>
        <Route path="profile" element={<Profile />} />
        <Route path="main" element={<MainPage />} />
      </Route>
    </Routes>
  );
};

export default NavBarRoutes;
