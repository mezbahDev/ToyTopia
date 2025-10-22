import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import {
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // এখানে setUser রাখুন
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const register = (email, password, displayName, photoURL) => {
    return createUserWithEmailAndPassword(auth, email, password).then(
      (result) => {
        return updateProfile(result.user, { displayName, photoURL });
      }
    );
  };

  const googleLogin = (provider) => signInWithPopup(auth, provider);

  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider
      value={{ user, setUser, loading, login, register, googleLogin, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
