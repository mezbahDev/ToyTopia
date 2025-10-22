import React from "react";
import Hero from "../components/Hero";
import Guarrenty from "../components/Guarrenty";
import TrendyToys from "../components/TrendyToys";

const Home = () => {
  return (
    <div className="flex flex-col items-center w-full gap-20">
      <Hero />
      <Guarrenty />
      <TrendyToys />
    </div>
  );
};

export default Home;
