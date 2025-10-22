import React, { useContext } from "react";
import { MdShoppingCart } from "react-icons/md";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const goToProfile = () => {
    if (user) {
      navigate("/myprofile");
    }
  };

  return (
    <div className="bg-[#C1E5FF] flex items-center justify-between px-[80px] py-2 w-full shadow-md fixed top-0 left-0 z-50">
      <h1
        className="text-[#FF616B] text-4xl font-extrabold"
        style={{ fontFamily: "Fredoka One" }}
      >
        <Link to="/">ToyTopia</Link>
      </h1>

      <ul className="list-none text-[#464D4D] flex gap-10 font-bold">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#FF616B] font-bold" : "hover:text-[#1f1f1f]"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "text-[#FF616B] font-bold" : "hover:text-[#1f1f1f]"
            }
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/aboutus"
            className={({ isActive }) =>
              isActive ? "text-[#FF616B] font-bold" : "hover:text-[#1f1f1f]"
            }
          >
            About Us
          </NavLink>
        </li>
      </ul>

      <div className="flex items-center gap-5">
        <Link to="/cart">
          <MdShoppingCart className="text-4xl text-black cursor-pointer" />
        </Link>

        {user ? (
          <div className="flex items-center gap-4">
            <div
              className="relative group cursor-pointer"
              title={user.displayName || "User"}
              onClick={goToProfile}
            >
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

              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                {user.displayName || "User"}
              </span>
            </div>

            <button
              onClick={handleLogout}
              className="bg-[#FF616B] py-2 px-5 rounded-full cursor-pointer shadow-md text-white font-semibold hover:bg-[#ff4757] transition-colors"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/signin"
            className="bg-[#FBC270] py-2 px-5 rounded-full shadow-md text-[#00000088] font-semibold hover:bg-[#4178a1] transition-colors hover:text-white"
          >
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
