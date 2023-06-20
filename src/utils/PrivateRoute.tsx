// import { Route, Navigate, RouteProps, useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";

// type PrivateRouteProps = RouteProps

// export default function PrivateRoute(props: PrivateRouteProps) {
//   const { currentUser } = useAuth();
//   const navigate = useNavigate();

 

//   if (currentUser) {
//     return <Route {...props} />;
//   } else {
//     navigate("/signup"); // Redirect to the sign-in page
//     return <Navigate to="/signup" />;
//   }
// }


// function useAuth(): { currentUser: any; } {
//     throw new Error("Function not implemented.");
// }


import { Route, Navigate, RouteProps, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

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


// import React from 'react'
// import {useSelector} from "react-redux"
// import {Navigate, useLocation} from "react-router-dom"

// const PrivateRoute = ({children:}) => {
//     const user = useSelector((state) => state.user);
//     let location = useLocation();

//     if(!user.state.isAuthenticated) {
//         return <Navigate to="/login" state={{ from: location}} replace />
//     }
//  return children

// };

// export default PrivateRoute;

