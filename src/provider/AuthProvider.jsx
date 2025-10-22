// src/provider/AuthProvider.jsx
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import {
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Auth state observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Email & password login
  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  // Email & password registration
  const register = (email, password, displayName, photoURL) =>
    createUserWithEmailAndPassword(auth, email, password).then((result) =>
      updateProfile(result.user, { displayName, photoURL })
    );

  // Google login
  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      return result.user;
    } catch (error) {
      if (error.code === "auth/account-exists-with-different-credential") {
        throw new Error(
          "An account already exists with the same email but different sign-in method. Please use the original method."
        );
      }
      throw error;
    }
  };

  const githubLogin = async () => {
    const provider = new GithubAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      return result.user;
    } catch (error) {
      if (error.code === "auth/account-exists-with-different-credential") {
        throw new Error(
          "An account already exists with the same email but different sign-in method. Please use the original method."
        );
      }
      throw error;
    }
  };

  // Logout
  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        setUser,
        login,
        register,
        googleLogin,
        githubLogin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
