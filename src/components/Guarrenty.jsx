import React from "react";
import shipping from "../../public/assets/free-shipping.avif";
import money from "../../public/assets/money.jpg";
import support from "../../public/assets/support.webp";
import payment from "../../public/assets/money.avif";

const Guarrenty = () => {
  return (
    <div className="flex justify-between items-center mt-[100px] mx-auto max-w-[1500px] gap-20">
      <div className="bg-[#F2BFFC] text-black flex flex-col items-center rounded-xl gap-2 shadow-md hover:scale-105 transition-transform duration-300">
        <img
          src={shipping}
          alt="free shipping"
          className="w-[300px] h-[220px] rounded-[20px] object-cover"
        />
        <h1 className="text-2xl py-3 font-semibold">Free Shipping</h1>
      </div>

      <div className="bg-[#31AEC4] text-black flex flex-col items-center rounded-xl gap-2 shadow-md hover:scale-105 transition-transform duration-300">
        <img
          src={money}
          alt="money guarantee"
          className="w-[300px] h-[220px] rounded-[20px] object-cover"
        />
        <h1 className="text-2xl py-3 font-semibold">Money Guarantee</h1>
      </div>

      <div className="bg-[#FEFEFC] text-black flex flex-col items-center rounded-xl gap-2 shadow-md hover:scale-105 transition-transform duration-300">
        <img
          src={support}
          alt="online support"
          className="w-[300px] h-[220px] rounded-[20px] object-cover"
        />
        <h1 className="text-2xl py-3 font-semibold">Online Support</h1>
      </div>

      <div className="bg-[#6F4A1B] text-white flex flex-col items-center rounded-xl gap-2 shadow-md hover:scale-105 transition-transform duration-300">
        <img
          src={payment}
          alt="flexible payment"
          className="w-[300px] h-[220px] rounded-[20px] object-cover"
        />
        <h1 className="text-2xl py-3 font-semibold">Flexible Payment</h1>
      </div>
    </div>
  );
};

export default Guarrenty;
