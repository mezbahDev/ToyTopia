import React, { useEffect, useState } from "react";
import banner1 from "../../public/assets/hero-banner1.png";
import banner2 from "../../public/assets/hero-banner2.png";
import banner3 from "../../public/assets/hero-banner3.png";

const banners = [
  {
    id: 1,
    image: banner1,
    title: "this is boat set toy",
    description: "plz buy it. or i will shot you",
  },
  {
    id: 2,
    image: banner2,
    title: "this is bear toy set",
    description: "plz buy it. or i will shot you",
  },
  {
    id: 3,
    image: banner3,
    title: "this is car set toy",
    description: "plz buy it. or i will shot you",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 10000);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`flex flex-col md:flex-row items-center justify-between transition-all duration-1000 ease-in-out transform ${
            index === current
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0 absolute top-0 left-0"
          }`}
        >
          {/* Image */}
          <div className="md:w-1/2 w-full">
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:w-1/2 w-full p-6 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4">{banner.title}</h1>
            <p className="mb-6 text-lg">{banner.description}</p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
              Shop Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;
