import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Guarrenty from "../components/Guarrenty";
import TrendyToys from "../components/TrendyToys";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="flex flex-col items-center w-full gap-20">
      <div data-aos="fade-down">
        <Hero />
      </div>

      <div data-aos="fade-up" data-aos-delay="200">
        <Guarrenty />
      </div>

      <div data-aos="zoom-in" data-aos-delay="400">
        <TrendyToys />
      </div>
    </div>
  );
};

export default Home;
