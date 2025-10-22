import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User signed in:", formData);
  };

  return (
    <div className="w-full flex justify-center items-center min-h-[80vh] ">
      <div className="bg-white rounded-2xl p-10 w-[90%] max-w-[500px] shadow-2xl">
        <h1
          className="text-[#FF616B] text-4xl text-center mb-10"
          style={{ fontFamily: "Fredoka One" }}
        >
          Sign In
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex items-center gap-3 border rounded-full px-5 py-3 shadow-sm focus-within:ring-2 focus-within:ring-[#FBC270]">
            <FaUser className="text-gray-400 text-xl" />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
              className="outline-none flex-1 bg-transparent text-gray-700"
            />
          </div>

          <div className="flex items-center gap-3 border rounded-full px-5 py-3 shadow-sm focus-within:ring-2 focus-within:ring-[#FBC270]">
            <FaLock className="text-gray-400 text-xl" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="outline-none flex-1 bg-transparent text-gray-700"
            />
          </div>

          <button
            type="submit"
            className="bg-[#FBC270] text-[#00000088] shadow-md font-semibold py-3 rounded-full hover:bg-[#4178a1] hover:text-white transition-colors cursor-pointer"
          >
            Sign In
          </button>
        </form>

        <div className="text-center mt-6 text-gray-600">
          <p>
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-[#FF616B] font-semibold hover:underline"
            >
              Create one
            </Link>
          </p>
          <p className="mt-2">
            <Link
              to="/forgot-password"
              className="text-[#4178a1] hover:underline"
            >
              Forgot password?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
