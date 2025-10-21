import React from "react";
import shipping from "../../public/assets/free-shipping.avif";
import money from "../../public/assets/money.jpg";
import support from "../../public/assets/support.webp";
import payment from "../../public/assets/money.avif";

const Guarrenty = () => {
  return (
    <div className="flex items-center mt-10 gap-10">
      <div className="bg-[#F2BFFC] text-black flex flex-col items-center rounded-xl gap-2">
        <img
          src={shipping}
          alt="free shipping"
          className="w-[300px] h-[220px] rounded-[20px]"
        />
        <h1 className="text-2xl py-3">Free Shipping</h1>
      </div>
      <div className="bg-[#31AEC4] text-black flex flex-col items-center rounded-xl gap-2">
        <img
          src={money}
          alt="free shipping"
          className="w-[300px] h-[220px] rounded-[20px]"
        />
        <h1 className="text-2xl py-3">Money Guarantee</h1>
      </div>
      <div className="bg-[#FEFEFC] text-black flex flex-col items-center rounded-xl gap-2">
        <img
          src={support}
          alt="free shipping"
          className="w-[300px] h-[220px] rounded-[20px]"
        />
        <h1 className="text-2xl py-3">Online Support</h1>
      </div>
      <div className="bg-[#6F4A1B] text-black flex flex-col items-center rounded-xl gap-2">
        <img
          src={payment}
          alt="free shipping"
          className="w-[300px] h-[220px] rounded-[20px]"
        />
        <h1 className="text-2xl py-3">Flexible Payment</h1>
      </div>
    </div>
  );
};

export default Guarrenty;
