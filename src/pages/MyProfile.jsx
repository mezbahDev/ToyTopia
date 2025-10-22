import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { auth } from "../firebase/firebase.config";
import {
  updateProfile,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const MyProfile = () => {
  const { user, loading, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [photo, setPhoto] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setMobile(user.phoneNumber || "");
      setPhoto(user.photoURL || null);
    }
  }, [user]);

  useEffect(() => {
    document.title = "My Profile | ToyTopia";
  }, []);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("Name cannot be empty");
      return;
    }
    if (password && password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setSaving(true);
    try {
      const currentUser = auth.currentUser;
      if (!currentUser) throw new Error("No authenticated user.");

      await updateProfile(currentUser, {
        displayName: name.trim(),
        photoURL: photo || null,
      });

      if (password) {
        const credential = EmailAuthProvider.credential(
          currentUser.email,
          prompt("Please enter your current password to confirm changes:")
        );
        await reauthenticateWithCredential(currentUser, credential);
        await updatePassword(currentUser, password);
      }

      toast.success("Profile updated successfully!");
      navigate("/");
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Update failed");
    } finally {
      setSaving(false);
      setPassword("");
      setConfirmPassword("");
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out");
      navigate("/signin");
    } catch (err) {
      console.error(err);
      toast.error("Logout failed");
    }
  };

  if (loading) {
    return (
      <div className="w-full min-h-[60vh] flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="w-full min-h-[60vh] flex items-center justify-center">
        <p className="text-gray-600">
          You must be logged in to view this page.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center px-4 py-12 bg-[#67D4E0] text-black">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6">
        <h2 className="text-2xl font-semibold text-center mb-4">My Profile</h2>

        <div className="flex flex-col items-center mb-6">
          <img
            src={photo || "https://via.placeholder.com/120?text=Avatar"}
            alt="avatar"
            className="w-28 h-28 rounded-full object-cover border mb-3"
          />
          <label className="cursor-pointer bg-[#FBC270] text-black px-4 py-2 rounded-full hover:opacity-90 transition">
            Choose File
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="hidden"
            />
          </label>
        </div>

        <form onSubmit={handleSave} className="flex flex-col gap-4">
          <div className="flex items-center gap-3 rounded-full px-5 py-3 shadow-md focus-within:ring-2 focus-within:ring-[#FBC270]">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              className="outline-none flex-1 bg-transparent text-black"
            />
          </div>

          <div className="flex items-center gap-3 rounded-full px-5 py-3 shadow-md focus-within:ring-2 focus-within:ring-[#FBC270]">
            <input
              type="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Mobile"
              className="outline-none flex-1 bg-transparent text-black"
            />
          </div>

          <div className="flex items-center gap-3 rounded-full px-5 py-3 shadow-md focus-within:ring-2 focus-within:ring-[#FBC270]">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="New Password"
              className="outline-none flex-1 bg-transparent text-black"
            />
          </div>

          <div className="flex items-center gap-3 rounded-full px-5 py-3 shadow-md focus-within:ring-2 focus-within:ring-[#FBC270]">
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className="outline-none flex-1 bg-transparent text-black"
            />
          </div>

          <div className="flex gap-3 mt-4">
            <button
              type="submit"
              disabled={saving}
              className="bg-[#FBC270] text-black font-semibold px-6 py-2 rounded-full hover:opacity-90 transition disabled:opacity-60"
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>

            <button
              type="button"
              onClick={handleLogout}
              className="border border-gray-300 text-black px-6 py-2 rounded-full hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
