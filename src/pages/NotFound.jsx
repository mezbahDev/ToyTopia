import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-right from-[#FFDEE9] via-[#B5FFFC] to-[#E6E6FA] px-4">
      <h1 className="text-[150px] font-extrabold text-[#FF6B6B] sm:text-[200px]">
        404
      </h1>

      <h2 className="text-3xl sm:text-5xl font-bold text-gray-800 mt-4">
        Oops! Page Not Found
      </h2>

      <p className="text-center text-gray-600 mt-4 max-w-xl">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      <button
        onClick={() => navigate("/")}
        className="mt-8 px-8 py-3 bg-[#FF6B6B] cursor-pointer text-white font-semibold rounded-2xl shadow-lg hover:bg-[#FF3B3B] transition-colors"
      >
        Go Back Home
      </button>

      <img
        src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
        alt="Lost illustration"
        className="w-64 mt-10 animate-bounce"
      />
    </div>
  );
};

export default NotFound;
