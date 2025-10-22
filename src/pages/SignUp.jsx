import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const SignUp = () => {
  const navigate = useNavigate();
  const { register, googleLogin } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullName, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    setError("");
    setLoading(true);

    try {
      await register(email, password, fullName, "");
      navigate("/");
    } catch (error) {
      console.error("Signup error:", error);
      let errorMessage = "Failed to create account. Please try again.";

      if (error.code === "auth/email-already-in-use") {
        errorMessage =
          "This email is already registered. Please sign in instead.";
      } else if (error.code === "auth/weak-password") {
        errorMessage = "Password is too weak. Use at least 6 characters.";
      } else if (error.code === "auth/invalid-email") {
        errorMessage = "Invalid email address.";
      }

      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setError("");
    setLoading(true);

    try {
      const googleProvider = new GoogleAuthProvider();
      await googleLogin(googleProvider);
      navigate("/");
    } catch (error) {
      console.error("Google login failed:", error);
      setError("Google sign-up failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGithubSignUp = async () => {
    setError("");
    setLoading(true);

    try {
      const githubProvider = new GithubAuthProvider();
      await googleLogin(githubProvider);
      navigate("/");
    } catch (error) {
      console.error("GitHub login failed:", error);
      setError("GitHub sign-up failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex justify-center items-center min-h-[80vh]">
      <div className="bg-white rounded-2xl shadow-2xl p-10 w-[90%] max-w-[500px]">
        <h2
          className="text-4xl text-center text-[#FF616B] mb-10"
          style={{ fontFamily: "Fredoka One" }}
        >
          Create an Account
        </h2>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex items-center gap-3 border rounded-full px-5 py-3 shadow-sm focus-within:ring-2 focus-within:ring-[#FBC270]">
            <FaUser className="text-gray-400 text-xl" />
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              disabled={loading}
              className="outline-none flex-1 bg-transparent text-gray-700"
            />
          </div>

          <div className="flex items-center gap-3 border rounded-full px-5 py-3 shadow-sm focus-within:ring-2 focus-within:ring-[#FBC270]">
            <FaEnvelope className="text-gray-400 text-xl" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={loading}
              className="outline-none flex-1 bg-transparent text-gray-700"
            />
          </div>

          <div className="flex items-center gap-3 border rounded-full px-5 py-3 shadow-sm focus-within:ring-2 focus-within:ring-[#FBC270]">
            <FaLock className="text-gray-400 text-xl" />
            <input
              type="password"
              name="password"
              placeholder="Password (min 6 characters)"
              value={formData.password}
              onChange={handleChange}
              required
              disabled={loading}
              className="outline-none flex-1 bg-transparent text-gray-700"
            />
          </div>

          <div className="flex items-center gap-3 border rounded-full px-5 py-3 shadow-sm focus-within:ring-2 focus-within:ring-[#FBC270]">
            <FaLock className="text-gray-400 text-xl" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              disabled={loading}
              className="outline-none flex-1 bg-transparent text-gray-700"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-[#FBC270] shadow-md text-gray-700 font-semibold py-3 rounded-full hover:bg-[#4178a1] hover:text-white transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-1 bg-gray-300"></div>
          <p className="px-4 text-gray-500 text-sm">Or sign up with</p>
          <div className="flex-1  bg-gray-300"></div>
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={handleGoogleSignUp}
            disabled={loading}
            className="flex items-center justify-center gap-2 px-5 py-3 shadow-xl rounded-full cursor-pointer transition disabled:opacity-50 hover:scale-[1.1]"
          >
            <FaGoogle className="text-red-500" />
            Google
          </button>

          <button
            onClick={handleGithubSignUp}
            disabled={loading}
            className="flex items-center justify-center gap-2 px-5 py-3 shadow-xl rounded-full cursor-pointer transition disabled:opacity-50 hover:scale-[1.1]"
          >
            <FaGithub className="text-gray-700" />
            GitHub
          </button>
        </div>

        <div className="text-center mt-6 text-gray-600">
          <p>
            Already have an account?{" "}
            <Link
              to="/signin"
              className="text-[#FF616B] font-semibold hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
