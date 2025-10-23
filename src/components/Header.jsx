import React from "react";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-[#C1E5FF] flex items-center justify-between px-[80px] py-2">
      <h1
        className="text-[#FF616B] text-4xl"
        style={{ fontFamily: "Fredoka One" }}
      >
        <Link to="/">ToyTopia</Link>
      </h1>

      <ul className="list-none text-[#464D4D] flex gap-10 font-bold">
        <li>
          <Link to="/" className="hover:text-[#1f1f1f]">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="hover:text-[#1f1f1f]">
            Products
          </Link>
        </li>
        <li>
          <Link to="/aboutus" className="hover:text-[#1f1f1f]">
            About Us
          </Link>
        </li>
      </ul>

      <div className="flex items-center gap-5">
        <Link to="/cart">
          <MdShoppingCart className="text-4xl text-black cursor-pointer" />
        </Link>
        <Link to="/login" className="btn btn-neutral btn-outline">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Header;
