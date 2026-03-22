import React from "react";
import useAuthStore from "../store/useAuthStore";
import { Navigate } from "react-router";

function PrivateRoutes({ children, usersTypes }) {
  const { user } = useAuthStore();
  if (!user) {
    alert('plase login')
    return <Navigate to={"/"} />;
  }
  if (!usersTypes.includes(user?.user_type)) {
    alert('You are NOT Admin')
    return <Navigate to={"/home"} />;
  }
  return children;
}

export default PrivateRoutes;
