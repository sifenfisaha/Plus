import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const RootLayout: React.FC = () => {
  return (
    <div>
      <MainNavigation />
      <Outlet />
    </div>
  );
};

export default RootLayout;
