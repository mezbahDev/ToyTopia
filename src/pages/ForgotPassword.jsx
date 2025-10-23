import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const ForgotPassword = () => {
  const location = useLocation();
  const initialEmail = location.state?.email || "";
  const [email, setEmail] = useState(initialEmail);

  const handleReset = () => {
    if (!email) {
      Swal.fire("Error", "Please enter your email", "error");
      return;
    }

    window.open(`https://mail.google.com/mail/?view=cm&to=${email}`, "_blank");
    Swal.fire(
      "Success",
      "Redirecting to Gmail to reset your password!",
      "success"
    );
  };

  return (
    <div className="w-full flex justify-center items-center min-h-[80vh]">
      <div className="bg-white rounded-2xl p-10 w-[90%] max-w-[500px] shadow-2xl">
        <h1
          className="text-[#FF616B] text-4xl text-center mb-10"
          style={{ fontFamily: "Fredoka One" }}
        >
          Reset Password
        </h1>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 border rounded-full px-5 py-3 shadow-sm bg-white focus-within:ring-2 focus-within:ring-[#FBC270]">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="outline-none flex-1 text-gray-700 bg-transparent"
            />
          </div>

          <button
            onClick={handleReset}
            disabled={!email}
            className="bg-[#FBC270] text-[#00000088] shadow-md font-semibold py-3 rounded-full hover:bg-[#4178a1] hover:text-white transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
