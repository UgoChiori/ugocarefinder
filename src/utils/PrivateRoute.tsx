



import { Route, Navigate, RouteProps, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import React from "react";

type PrivateRouteProps = RouteProps;

export default function PrivateRoute(props: PrivateRouteProps) {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  if (currentUser) {
    return <Route {...props} />;
  } else {
    navigate("/signup"); // Redirect to the sign-in page
    return <Navigate to="/signup" />;
  }
}

function useAuth(): { currentUser: any } {
  // Implement your authentication logic here
  // For demonstration purposes, let's assume it returns a mock user
  const currentUser = { id: 1, name: "John Doe" };

  return { currentUser };
}




