import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import Hero from "../components/Hero";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header />
        <Hero />
      </header>
      <main>
        <section className="left-nav"></section>
        <section>
          <Outlet />
        </section>
      </main>
      <footer></footer>
    </div>
  );
};

export default HomeLayout;
