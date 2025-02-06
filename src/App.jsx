import { useState } from 'react'
import './App.css'
// import LoginPage from'./apps/auth/pages/LoginPage';
// import RegisterPage from'./apps/auth/pages/RegisterPage';
// import Profile from './apps/profile/pages/profile'
// import Main from './apps/main/pages/MainPage'
import AuthRoutes from './apps/auth/AuthRoutes';
import NavBarRoutes from './apps/navigation-bar/NavBarRoutes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/main" element={<Main />} /> */}
        <Route path='/auth/*' element={<AuthRoutes />} />
        <Route path='/*' element={<NavBarRoutes />} />
      </Routes>
    </Router>
  )
}

export default App;
