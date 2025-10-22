import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomeLayout = () => {
  return (
    <div className="flex flex-col items-center w-full pt-[80px]">
      <Navbar />

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <main className="flex flex-col items-center my-10 gap-20 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
