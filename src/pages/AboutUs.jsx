import React from "react";
import about from "../../public/assets/about.png";
import quality from "../../public/assets/highQuality.png";
import eco from "../../public/assets/ecoFriendly.png";
import harmless from "../../public/assets/Harmless.png";
import brands from "../../public/assets/all.png";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-start text-black w-full min-h-screen gap-8 pt-8">
      <h1
        className="text-[50px] text-[#FAFAFA] mt-0 mb-0"
        style={{ fontFamily: "Fredoka One" }}
      >
        About Us
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-6 bg-white rounded-2xl shadow-lg p-6 w-full max-w-[1200px]">
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src={about}
            alt="Some people enjoying toys"
            className="rounded-2xl object-cover w-full h-full max-h-[400px]"
          />
        </div>

        <div className="md:w-1/2 w-full flex flex-col gap-4">
          <div>
            <h2 className="text-2xl mb-2" style={{ fontFamily: "Fredoka One" }}>
              Welcome to Toy Store
            </h2>
            <p className="text-[16px] text-gray-700">
              At ToyStore, we bring joy, creativity, and learning together. Our
              safe, high-quality toys inspire imagination and skill development
              for children of all ages. Every product is chosen to spark fun,
              exploration, and unforgettable play experiences.
            </p>
          </div>

          <div>
            <h2 className="text-xl mb-4" style={{ fontFamily: "Fredoka One" }}>
              Our Philosophy
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center gap-2 bg-[#FEEEC1] p-4 rounded-2xl shadow-md h-[150px] justify-center">
                <img src={quality} alt="High Quality" className="w-16 h-16" />
                <p className="text-center font-semibold text-lg">
                  High Quality
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 bg-[#BFF9FF] p-4 rounded-2xl shadow-md h-[150px] justify-center">
                <img src={eco} alt="Eco Friendly" className="w-16 h-16" />
                <p className="text-center font-semibold text-lg">
                  Eco Friendly
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 bg-[#C1E5FF] p-4 rounded-2xl shadow-md h-[150px] justify-center">
                <img
                  src={harmless}
                  alt="Harmless for Kids"
                  className="w-16 h-16"
                />
                <p className="text-center font-semibold text-lg">
                  Harmless for Kids
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 bg-[#FDCDC5] p-4 rounded-2xl shadow-md h-[150px] justify-center">
                <img src={brands} alt="All Brands" className="w-16 h-16" />
                <p className="text-center font-semibold text-lg">All Brands</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
