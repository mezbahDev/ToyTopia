import React from "react";

import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div
      className="flex justify-between items-start px-[80px] mt-30 p-10"
      style={{
        boxShadow:
          "0 -4px 6px -1px rgba(0,0,0,0.1), 0 4px 6px -1px rgba(0,0,0,0.1)",
      }}
    >
      <div className="flex flex-col gap-5 w-1/3">
        <h1
          className="text-[#FF616B] text-5xl"
          style={{ fontFamily: "Fredoka One" }}
        >
          <Link to="/">ToyTopia</Link>
        </h1>
        <p className="text-[18px]">
          Welcome to our world of imagination and play! At Sarah's Toy Emporium,
          we believe in creating magical experiences for children and igniting
          their joy.
        </p>
        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-[20px]" />
          <p className="text-[18px]">+8801521559029</p>
        </div>
        <div className="flex items-center gap-2">
          <IoMdMail className="text-[20px]" />
          <p className="text-[18px]">mezbahuddin9029@gmail.com</p>
        </div>
      </div>

      <div className="w-full flex flex-col items-center gap-4">
        <h1
          className="text-3xl font-semibold"
          style={{ fontFamily: "Fredoka One" }}
        >
          Subscribe to our Newsletter
        </h1>

        <div className="w-7/12 relative">
          <svg
            className="h-[1em] absolute left-3 top-1/2 -translate-y-1/2 opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
          <input
            type="email"
            placeholder="mail@site.com"
            required
            className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <button className="w-7/12 bg-[#FBC270] py-3 cursor-pointer rounded-full text-[#00000088] font-semibold text-[20px] hover:bg-[#4178a1] hover:text-white transition-colors">
          Subscribe
        </button>

        <div className="flex items-center gap-4 mt-2 text-2xl text-white">
          <FiFacebook className="text-[30px] cursor-pointer hover:scale-[1.5]" />
          <FaInstagram className="text-[30px] cursor-pointer hover:scale-[1.5]" />
          <RiTwitterXFill className="text-30px] cursor-pointer hover:scale-[1.5]" />
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-semibold">Important Links</h1>
        <ul className="list-none flex flex-col gap-2 mt-4">
          <li>
            <Link to="/" className="hover:text-[#1f1f1f] font-[20px] ">
              Home
            </Link>
          </li>
          <li>
            <Link to="/cart" className="hover:text-[#1f1f1f] font-[20px]">
              Cart
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-[#1f1f1f] font-[20px]">
              Products
            </Link>
          </li>
          <li>
            <Link to="/aboutus" className="hover:text-[#1f1f1f] font-[50px]">
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
