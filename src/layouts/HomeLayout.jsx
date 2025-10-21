import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Guarrenty from "../components/Guarrenty";
import TrendyToys from "../components/TrendyToys";

const HomeLayout = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col items-center w-full">
      <Header />

      {location.pathname === "/" && (
        <>
          <Hero />
          <Guarrenty />
          <TrendyToys />
        </>
      )}

      {location.pathname !== "/" && (
        <main className="flex flex-col items-center my-10 gap-20 w-full">
          <Outlet />
        </main>
      )}

      <footer className="w-full text-center py-5 border-t mt-10">
        &copy; 2025 ToyTopia. All Rights Reserved.
      </footer>
    </div>
  );
};

export default HomeLayout;
