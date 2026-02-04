import React from "react";
import { Navigate, Outlet } from "react-router-dom";

/**
 * @param {Array} allowedRoles - roles allowed to access route
 * Example: ["admin"], ["teacher"], ["student"]
 */
const ProtectedRoute = ({ allowedRoles }) => {
  const authData = JSON.parse(localStorage.getItem("authUser"));

  // ❌ Not logged in
  if (!authData || !authData.token) {
    return <Navigate to="/login" replace />;
  }

  // ❌ Role not allowed
  if (
    allowedRoles &&
    allowedRoles.length > 0 &&
    !allowedRoles.includes(authData.role)
  ) {
    return <Navigate to="/unauthorized" replace />;
  }

  // ✅ Authorized
  return <Outlet />;
};

export default ProtectedRoute;
