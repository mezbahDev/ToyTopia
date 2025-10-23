import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  fetchSignInMethodsForEmail,
} from "firebase/auth";

const SignUp = () => {
  const navigate = useNavigate();
  const { register } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    photoURL: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validatePassword = (password) => {
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasLength = password.length >= 6;
    if (!hasUpper)
      return (
        Swal.fire(
          "Error",
          "Password must have at least one uppercase letter.",
          "error"
        ),
        false
      );
    if (!hasLower)
      return (
        Swal.fire(
          "Error",
          "Password must have at least one lowercase letter.",
          "error"
        ),
        false
      );
    if (!hasLength)
      return (
        Swal.fire(
          "Error",
          "Password must be at least 6 characters long.",
          "error"
        ),
        false
      );
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullName, email, password, confirmPassword, photoURL } = formData;

    if (password !== confirmPassword)
      return Swal.fire("Error", "Passwords do not match!", "error");

    if (!validatePassword(password)) return;

    setLoading(true);
    try {
      await register(email, password, fullName, photoURL);
      Swal.fire("Success", "Account created successfully!", "success");
      navigate("/");
    } catch (err) {
      console.error("Signup error:", err);
      if (err.code === "auth/email-already-in-use") {
        Swal.fire(
          "Error",
          "This email is already registered. Please sign in instead.",
          "error"
        );
      } else {
        Swal.fire(
          "Error",
          "Failed to create account. Please try again.",
          "error"
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setLoading(true);
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const email = result.user.email;
      const methods = await fetchSignInMethodsForEmail(auth, email);

      if (methods.length > 0) {
        await result.user.delete();
        Swal.fire(
          "Error",
          "An account already exists with this email. Please sign in instead.",
          "error"
        );
        return;
      }

      Swal.fire("Success", "Signed up successfully with Google!", "success");
      navigate("/");
    } catch (err) {
      console.error("Google signup failed:", err);
      Swal.fire("Error", "Google sign-up failed. Please try again.", "error");
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
            <FaUser className="text-gray-400 text-xl" />
            <input
              type="text"
              name="photoURL"
              placeholder="Photo URL (optional)"
              value={formData.photoURL}
              onChange={handleChange}
              disabled={loading}
              className="outline-none flex-1 bg-transparent text-gray-700"
            />
          </div>

          <div className="flex items-center gap-3 border rounded-full px-5 py-3 shadow-sm focus-within:ring-2 focus-within:ring-[#FBC270]">
            <FaLock className="text-gray-400 text-xl" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              disabled={loading}
              className="outline-none flex-1 bg-transparent text-gray-700"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="cursor-pointer text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="flex items-center gap-3 border rounded-full px-5 py-3 shadow-sm focus-within:ring-2 focus-within:ring-[#FBC270]">
            <FaLock className="text-gray-400 text-xl" />
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              disabled={loading}
              className="outline-none flex-1 bg-transparent text-gray-700"
            />
            <span
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="cursor-pointer text-gray-500"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
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
          <div className="flex-1 bg-gray-300"></div>
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={handleGoogleSignUp}
            disabled={loading}
            className="flex items-center justify-center gap-2 px-5 py-3 shadow-xl rounded-full cursor-pointer transition disabled:opacity-50 hover:scale-[1.1]"
          >
            <FaGoogle className="text-red-500" />
            <p className="text-black">Google</p>
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
