// HomeLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <div className="flex flex-col items-center w-full pt-[80px]">
      <Header />
      <main className="flex flex-col items-center my-10 gap-20 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
