import React from "react";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="max-w-1100 mx-auto px-3">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
