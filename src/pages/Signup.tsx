import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import "./signin.css";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registered, setRegistered] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Perform registration logic
      console.log("Registration successful");
      setRegistered(true);
      navigate("/hospitals"); // Navigate to the "/hospitals" route
    } catch (error) {
      console.log("Registration failed:", error);
    }
  };

  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);
      // Perform registration logic
      console.log("Google sign-up successful");
      setRegistered(true);
      navigate("/hospitals"); // Navigate to the "/hospitals" route
    } catch (error) {
      console.log("Google sign-up failed:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("Logout successful");
      window.location.href = "/";
    } catch (error) {
      console.log("Logout failed:", error);
    }
  };

  return (
    <div className="registration-form-wrapper">
      {registered ? (
        <div>
          <h1>Welcome, {name}!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="registration-form">
          <h2>Registration Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button onClick={() => navigate("/hospitals")} type="submit">Register</button>

            <button onClick={handleGoogleSignUp}>
              <FaGoogle />
            </button>
          </form>
          <button onClick={() => navigate("/signin")}>Login</button>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;