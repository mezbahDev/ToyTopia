import React from "react";

const Card = ({ toy }) => {
  return (
    <div className="bg-white p-4 flex flex-col justify-between h-full gap-3 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
      <div className="bg-[#FEEEC1] rounded-2xl overflow-hidden flex justify-center items-center">
        <img
          src={toy.pictureURL}
          alt={toy.toyName}
          className="w-full h-[300px] object-contain"
        />
      </div>

      <div className="flex justify-between text-[16px] text-black">
        <p>
          Rating: <span className="font-semibold">{toy.rating}</span>
        </p>
        <p>
          Available:{" "}
          <span className="font-semibold">{toy.availableQuantity}</span>
        </p>
      </div>

      <h2 className="font-semibold text-[20px] hover:text-[#559BD7] cursor-pointer text-black">
        {toy.toyName}
      </h2>

      <p className="text-[#54576B] text-[14px]">{toy.description}</p>

      <p className="text-[18px] text-black">${toy.price}</p>

      <button className="w-full bg-[#FBC270] p-2 rounded-2xl text-white font-semibold text-[20px]">
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
