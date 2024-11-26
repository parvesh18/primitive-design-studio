import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const AppLayout = () => {
  return (
    <div className="font-raleway">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
