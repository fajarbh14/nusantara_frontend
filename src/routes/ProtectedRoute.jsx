import React from "react";
// import useAuth from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ role }) {
  // const { getUser } = useAuth();
  const hasLoggedIn = localStorage.getItem("BUKUQU");
  if (!hasLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
