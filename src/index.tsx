import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/AuthContext";



const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
 
  <BrowserRouter>
  <AuthContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </AuthContextProvider>
  </BrowserRouter>
 

);
