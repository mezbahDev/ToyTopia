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
  GithubAuthProvider,
} from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setUser(result.user);
      return result.user;
    } finally {
      setLoading(false);
    }
  };

  const register = async (email, password, displayName, photoURL) => {
    setLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(result.user, { displayName, photoURL });
      setUser(result.user);
      return result.user;
    } finally {
      setLoading(false);
    }
  };

  const socialLogin = async (providerName) => {
    setLoading(true);
    let provider;
    if (providerName === "google") provider = new GoogleAuthProvider();
    if (providerName === "github") provider = new GithubAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      return result.user;
    } catch (error) {
      if (error.code === "auth/account-exists-with-different-credential") {
        throw new Error(
          "An account already exists with this email but a different sign-in method."
        );
      }
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const googleLogin = () => socialLogin("google");

  const logout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        setUser,
        login,
        register,
        socialLogin,
        googleLogin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
