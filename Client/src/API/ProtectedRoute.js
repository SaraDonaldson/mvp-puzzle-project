import React, { useEffect } from "react";
import LocalStorage from "./LocalStorage.js";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isLoggedIn = LocalStorage.getToken() !== "";
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, []);
  return children;
}
