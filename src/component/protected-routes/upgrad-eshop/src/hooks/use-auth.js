// src/hooks/use-auth.js

import { useState, useEffect } from "react";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // On mount, read token + user from localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userJson = localStorage.getItem("user"); // assume you store user info as JSON
    if (token) {
      setIsLoggedIn(true);

      // Example: if you saved { role: "admin", ... } in localStorage under "user"
      if (userJson) {
        try {
          const user = JSON.parse(userJson);
          setIsAdmin(user.role === "admin");
        } catch {
          setIsAdmin(false);
        }
      }
    } else {
      setIsLoggedIn(false);
      setIsAdmin(false);
    }
  }, []);

  const handleSignOut = () => {
    // Remove token & user info, then re‐compute state
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  return {
    isLoggedIn,
    isAdmin,
    handleSignOut,
  };
};
