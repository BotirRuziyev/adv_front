import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "./menu";

const Layout = ({ selectedAvatar }) => {
  return (
    <div className="flex">
      <Menu selectedAvatar={selectedAvatar} />
      <main className="flex-1 p-4">
        <Outlet /> {/* Динамический рендер страниц */}
      </main>
    </div>
  );
};

export default Layout;
