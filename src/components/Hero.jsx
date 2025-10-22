import React, { useEffect, useState } from "react";
import banner1 from "../../public/assets/hero-banner1.png";
import banner2 from "../../public/assets/hero-banner2.png";
import banner3 from "../../public/assets/hero-banner3.png";
import { useNavigate } from "react-router";

const banners = [
  {
    id: 1,
    toyId: 21,
    image: banner1,
    title: "Captain Bubble’s Boat Brigade",
    description:
      "Float, splash and giggle — build tiny boats and sail them on imaginary oceans. Perfect for storytime adventures and puddle races!",
    alt: "colorful toy boat set for imaginative play",
  },
  {
    id: 2,
    toyId: 23,
    image: banner2,
    title: "Mr. Snuggle’s Teddy Pals",
    description:
      "Hug-ready teddy friends who love tea parties, nap-time stories and secret handshakes. Soft, cuddly and always ready for a cuddle!",
    alt: "soft teddy bear toy for cuddles and pretend play",
  },
  {
    id: 3,
    toyId: 22,
    image: banner3,
    title: "Zoom-Zoom Racer Squad",
    description:
      "Vroom into playtime with tiny cars and twisty tracks — build circuits, race siblings, and invent your own finish-line celebrations!",
    alt: "mini racing cars and track set for action-packed play",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleShopNow = (toyId) => {
    navigate(`toys/${toyId}`);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-[#C1E5FF] mt-[-60px]">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`flex flex-col md:flex-row items-center justify-between transition-all duration-1000 ease-in-out transform ${
            index === current
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0 absolute top-0 left-0"
          }`}
        >
          <div className="md:w-1/2 w-full">
            <img
              src={banner.image}
              alt={banner.alt}
              className="w-full h-auto object-cover rounded-b-xl"
            />
          </div>

          <div className="flex flex-col gap-5 justify-center items-center text-center w-1/2 px-[100px]">
            <h1
              className="text-[60px] font-semibold mb-4 text-[#000000]"
              style={{ fontFamily: "Fredoka One" }}
            >
              {banner.title}
            </h1>
            <p className="mb-6 text-2xl text-[#646464]">{banner.description}</p>
            <button
              onClick={() => handleShopNow(banner.toyId)}
              className="bg-[#FBC270] text-[#00000088] px-6 py-3 font-semibold shadow-md rounded-full hover:bg-[#4178a1] transition-colors hover:text-white cursor-pointer"
            >
              Shop Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;
