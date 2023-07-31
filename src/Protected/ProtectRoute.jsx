import React from "react";
import { Navigate } from "react-router-dom";

const ProtectRoute = ({ children, isLoggedIn }) => {
  console.log(isLoggedIn);
  if (isLoggedIn) {
    return children;
  }
  return <Navigate to="/login" replace />;
};

export default ProtectRoute;
