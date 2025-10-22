import React from "react";
import { Link } from "react-router-dom";

const Card = ({ toy }) => {
  const shortDescription =
    toy.description.split(" ").slice(0, 15).join(" ") + "...";

  return (
    <div className="bg-white p-4 flex flex-col justify-between h-full gap-3 rounded-2xl shadow-lg hover:shadow-lg transition-shadow">
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

      <Link
        to={`/toys/${toy.toyId}`}
        className="font-semibold text-[20px] hover:text-[#559BD7] cursor-pointer text-black"
      >
        {toy.toyName}
      </Link>

      <p className="text-[#54576B] text-[14px]">
        {shortDescription}{" "}
        <Link
          to={`/toys/${toy.toyId}`}
          className="text-blue-500 cursor-pointer hover:underline"
        >
          See More
        </Link>
      </p>

      <p className="text-[18px] text-black">${toy.price}</p>

      <button className="w-full bg-[#FBC270] p-2 rounded-2xl shadow-md text-[#00000088] cursor-pointer font-semibold text-[20px] hover:bg-[#4178a1] transition-colors hover:text-white">
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
