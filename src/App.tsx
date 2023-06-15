import React, { useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./landing/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Hospitals from "./hospital/Hospitals";
import { ErrorFallback } from "./components/Errorboundary/ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";
import { AuthContext } from "./context/AuthContext";

import { auth, signOut, signInWithGoogle } from "./firebase";
import Navbar from "./navigation/Navbar";

function App() {
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  let count = localStorage.getItem("page_views");
  if (count === null) {
    count = "1";
  } else {
    count = (parseInt(count) + 1).toString();
  }
  localStorage.setItem("page_views", count);

  // Google Signup
  const signIn = () => {
    signInWithGoogle();
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

  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Navbar signOut={signOutUser} user={currentUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin signIn={signIn} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/hospitals" element={<Hospitals />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
