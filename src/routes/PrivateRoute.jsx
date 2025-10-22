import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (!user) {
    return (
      <Navigate
        to="/signin"
        state={{
          from: location,
          message: "Please sign in first to view the cart",
        }}
        replace
      />
    );
  }

  return children;
};

export default PrivateRoute;
