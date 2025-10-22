import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const Signin = () => {
  const navigate = useNavigate();
  const { login, googleLogin } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    setError("");
    setLoading(true);

    try {
      await login(formData.email, formData.password);
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
      setError(
        error.message || "Failed to sign in. Please check your credentials."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError("");
    setLoading(true);

    try {
      const googleProvider = new GoogleAuthProvider();
      await googleLogin(googleProvider);
      navigate("/");
    } catch (error) {
      console.error("Google login failed:", error);
      setError("Google sign-in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGithubSignIn = async () => {
    setError("");
    setLoading(true);

    try {
      const githubProvider = new GithubAuthProvider();
      await googleLogin(githubProvider);
      navigate("/");
    } catch (error) {
      console.error("GitHub login failed:", error);
      setError("GitHub sign-in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex justify-center items-center min-h-[80vh]">
      <div className="bg-white rounded-2xl p-10 w-[90%] max-w-[500px] shadow-2xl">
        <h1
          className="text-[#FF616B] text-4xl text-center mb-10"
          style={{ fontFamily: "Fredoka One" }}
        >
          Sign In
        </h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4">
            {error}
          </div>
        )}

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
              disabled={loading}
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
              disabled={loading}
              className="outline-none flex-1 bg-transparent text-gray-700"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-[#FBC270] text-[#00000088] shadow-md font-semibold py-3 rounded-full hover:bg-[#4178a1] hover:text-white transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-1  bg-gray-300"></div>
          <p className="px-4 text-gray-500 text-sm">Or sign in with</p>
          <div className="flex-1  bg-gray-300"></div>
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="flex items-center justify-center gap-2 px-5 py-3 shadow-xl rounded-full cursor-pointer transition disabled:opacity-50 hover:scale-[1.1]"
          >
            <FaGoogle className="text-red-500" />
            <p className="text-black">Google</p>
          </button>

          <button
            onClick={handleGithubSignIn}
            disabled={loading}
            className="flex items-center justify-center gap-2 px-5 py-3 shadow-xl rounded-full cursor-pointer transition disabled:opacity-50 hover:scale-[1.1]"
          >
            <FaGithub className="text-gray-700" />
            <p className="text-black">Github</p>
          </button>
        </div>

        <div className="text-center mt-6 text-gray-600">
          <p>
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-[#FF616B] font-semibold hover:underline"
            >
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
