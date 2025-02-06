import { Routes, Route } from 'react-router-dom';

import Profile from '../profile/pages/profile';
import MainPage from '../main/pages/MainPage';

const NavBarRoutes = () => {
  return (
    <Routes>
      <Route>
        <Route path="profile" element={<Profile />} />
        <Route path="main" element={<MainPage />} />
      </Route>
    </Routes>
  );
};

export default NavBarRoutes;
