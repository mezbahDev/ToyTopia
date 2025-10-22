import React, { useContext } from "react";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="bg-[#C1E5FF] flex items-center justify-between px-[80px] py-2 w-full shadow-md fixed top-0 left-0 z-50">
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

        {user ? (
          <div className="flex items-center gap-4">
            {/* User Profile */}
            <div className="flex items-center gap-2">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={user.displayName || "User"}
                  className="w-10 h-10 rounded-full object-cover border-2 border-[#FBC270]"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-[#FBC270] flex items-center justify-center text-white font-bold">
                  {user.displayName ? user.displayName[0].toUpperCase() : "U"}
                </div>
              )}
              <span className="text-[#464D4D] font-semibold hidden md:block">
                {user.displayName || "User"}
              </span>
            </div>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="bg-[#FF616B] py-3 px-6 rounded-full shadow-md text-white font-semibold cursor-pointer hover:bg-[#ff4757] transition-colors"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/signin"
            className="bg-[#FBC270] py-3 px-6 rounded-full shadow-md text-[#00000088] font-semibold cursor-pointer hover:bg-[#4178a1] transition-colors hover:text-white"
          >
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
