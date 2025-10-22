import React, { useEffect, useState, useRef, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";

const ToyDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const [toy, setToy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(0);
  const detailsRef = useRef(null);

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

  const scrollToDetails = () => {
    if (detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(toy, quantity); 
      toast.success(`${quantity} x ${toy.toyName} added to cart!`, {
        autoClose: 2000,
      });
      setQuantity(0); 
    }
  };

  return (
    <div className="flex flex-col items-center text-black px-4 md:px-20 w-full md:w-10/12 mx-auto gap-20">
      <div className="flex flex-col md:flex-row items-center gap-10 bg-white p-5 rounded-2xl mx-auto justify-center shadow-lg">
        <img
          src={toy.pictureURL}
          alt={toy.toyName}
          className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-[#67D4E0] rounded-2xl object-cover"
        />
        <div className="flex flex-col gap-5">
          <h2 className="text-4xl font-semibold">{toy.toyName}</h2>
          <p className="text-[18px] text-gray-700">
            {toy.description.split(" ").slice(0, 15).join(" ")}...{" "}
            <span
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={scrollToDetails}
            >
              See More
            </span>
          </p>

          <div className="flex items-center gap-2">
            <span className="text-xl">Price :</span>
            <p className="font-semibold text-[18px]">${toy.price}</p>
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
            onClick={handleAddToCart}
            disabled={quantity === 0}
            className={`w-2/5 px-2 py-3 cursor-pointer rounded-4xl font-semibold text-[20px] transition-colors ${
              quantity === 0
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-[#FBC270] text-[#00000088] hover:bg-[#4178a1] hover:text-white"
            }`}
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

      <div
        ref={detailsRef}
        className="flex flex-col gap-15 items-center w-full"
      >
        <h1
          className="text-[70px] text-[#FAFAFA]"
          style={{ fontFamily: "Fredoka One" }}
        >
          Product Details
        </h1>
        <p className="shadow-xl bg-white px-10 py-6 rounded-2xl text-[20px]">
          {toy.description}
        </p>
      </div>
    </div>
  );
};

export default ToyDetails;
