import { useState } from 'react'
import './App.css'
import LoginPage from'./apps/auth/pages/LoginPage';
import RegisterPage from'./apps/auth/pages/RegisterPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  )
}

export default App;
