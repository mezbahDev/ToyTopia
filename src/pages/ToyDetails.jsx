import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";

const ToyDetails = () => {
  const { id } = useParams();
  const [toy, setToy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const foundToy = data.find((t) => t.toyId === parseInt(id));
        setToy(foundToy);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen text-xl text-gray-500">
        Loading...
      </div>
    );

  if (!toy)
    return (
      <div className="flex justify-center items-center min-h-screen text-xl text-gray-500">
        Toy not found
      </div>
    );

  const handleIncrease = () => {
    if (quantity < toy.availableQuantity) setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  return (
    <div className="flex items-center text-black px-20 w-10/12 mx-auto">

      <div className="flex items-center gap-10 bg-white p-5 rounded-2xl mx-auto justify-center shadow-lg">
        <img
          src={toy.pictureURL}
          alt={toy.toyName}
          className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-[#67D4E0] rounded-2xl object-cover"
        />

        <div className="flex flex-col gap-5">
          <h2 className="text-4xl font-semibold">{toy.toyName}</h2>
          <p className="text-[18px] text-gray-700">{toy.description}</p>

          <div className="flex items-center gap-2">
            <span className="text-xl">Category :</span>
            <p className="font-semibold text-[18px]">{toy.category}</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xl">Price :</span>
            <p className="font-semibold text-[18px]">${toy.price}</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xl">Available :</span>
            <p className="font-semibold text-[18px]">{toy.availableQuantity}</p>
          </div>

          <div className="flex gap-2 text-xl items-center">
            <button
              onClick={handleDecrease}
              className="flex justify-center items-center w-12 h-12 rounded-xl bg-[#F4F2F0] cursor-pointer shadow-md hover:bg-[#e0e0e0]"
            >
              -
            </button>

            <span className="flex justify-center items-center w-12 h-12 rounded-xl bg-[#FBC270] text-[#00000088] font-semibold text-[20px]">
              {quantity}
            </span>

            <button
              onClick={handleIncrease}
              className={`flex justify-center items-center w-12 h-12 rounded-xl cursor-pointer shadow-md transition-colors ${
                quantity < toy.availableQuantity
                  ? "bg-[#F4F2F0] hover:bg-[#e0e0e0]"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
              disabled={quantity >= toy.availableQuantity}
            >
              +
            </button>
          </div>

          <button
            className={`w-2/5 px-2 py-3 rounded-4xl font-semibold text-[20px] transition-colors ${
              quantity === 0
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-[#FBC270] text-[#00000088] hover:bg-[#4178a1] hover:text-white"
            }`}
            disabled={quantity === 0}
          >
            Add to Cart
          </button>

          <div className="flex gap-5 mt-2">
            <p className="text-[18px]">Share this product</p>
            <div className="flex gap-4">
              <FiFacebook className="text-[30px] cursor-pointer hover:scale-[1.5] transition-transform" />
              <FaInstagram className="text-[30px] cursor-pointer hover:scale-[1.5] transition-transform" />
              <RiTwitterXFill className="text-[30px] cursor-pointer hover:scale-[1.5] transition-transform" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1>Product Details</h1>
        <p>
          description
        </p>
      </div>
    </div>
  );
};

export default ToyDetails;
