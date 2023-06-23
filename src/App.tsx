import React, { useEffect, useContext } from "react";
import { Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./landing/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Hospitals from "./hospital/Hospitals";
import { ErrorFallback } from "./components/Errorboundary/ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";
import { AuthContext } from "./context/AuthContext";
import HospitalDetails from "./hospital/HospitalDetails";
import HealthTips from "./pages/HealthTips";
// import PrivateRoute from "./utils/PrivateRoute";
import { auth, signOut, signInWithGoogle } from "./firebase";
import Navbar from "./navigation/Navbar";
import Doctors from "./pages/Doctors";
import NotFoundPage from "./components/NotFound";
import { useState } from "react";

function App() {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const [details, setDetails] = useState();

  let count = localStorage.getItem("page_views");
  if (count === null) {
    count = "1";
  } else {
    count = (parseInt(count) + 1).toString();
  }
  localStorage.setItem("page_views", count);

  // SET DETAILS
  const handleDetails = (details: any) => {
    setDetails(details);
  };

  // Google Signin
  const signIn = () => {
    signInWithGoogle();
  };

  // Google signup
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const signUp = () => {
    signUp();
  };

  // Google Signout
  const signOutUser = () => {
    signOut();
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const client = auth.currentUser;
        setCurrentUser(client);
      } else {
        setCurrentUser(null);
      }
    });
  }, [setCurrentUser]);

  // Protected Route
  const isAuthenticated = () => {
    if (currentUser) {
      return true;
    }
    return false;
  };

  const ProtectedRoute = ({ path, element }: any) => {
    return isAuthenticated() ? (
      <Route path={path} element={element} />
    ) : (
      <Navigate to="/signup" replace={true} />
    );
  };

  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Navbar signOut={signOutUser} user={currentUser} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin signIn={signIn} />} />
          <Route path="/signup" element={<Signup />} />;
          <Route
            path="/hospitals"
            element={
              <ProtectedRoute
                element={<Hospitals handleDetails={handleDetails} />}
              />
            }
          />
          <Route
            path="/hospitaldetails"
            element={
              <HospitalDetails
                name={""}
                status={""}
                rating={""}
                details={details}
                vicinity={""}
                opening_hours={false}
              />
            }
          />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/healthtips" element={<HealthTips />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
