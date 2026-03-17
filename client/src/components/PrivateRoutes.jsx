import React from "react";
import useAuthStore from "../store/useAuthStore";
import { Navigate } from "react-router";

function PrivateRoutes({ children, usersTypes }) {
  const { user } = useAuthStore();
  if (!user) {
    return <Navigate to={"/"} />;
  }
  if (!usersTypes.includes(user?.user_type)) {
    return <Navigate to={"/home"} />;
  }
  return children;
}

export default PrivateRoutes;
