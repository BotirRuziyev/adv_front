import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";





function Menu() {

  console.log(111111);

<nav className="w-64 bg-gray-800 text-white h-screen p-4">
  <h1 className="text-2xl font-bold mb-4">Меню</h1>
  <ul>
    <li className="mb-2">
      <Link to="/" className="hover:text-blue-400">Главная</Link>
    </li>
    <li className="mb-2">
      <Link to="/ads" className="hover:text-blue-400">Реклама</Link>
    </li>
    <li className="mb-2">
      <Link to="/support" className="hover:text-blue-400">Поддержка</Link>
    </li>
    <li className="mb-2">
      <Link to="/finances" className="hover:text-blue-400">Финансы</Link>
    </li>
  </ul>
</nav>

}
import Menu from './components/menu'
export default Menu;