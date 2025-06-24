import { createContext, useState, useEffect } from "react";

// Create an Auth Context outside of the hook
export const AuthContext = createContext({
  isLoggedIn: false,
  isAdmin: false,
  handleSignIn: () => {},
  handleSignOut: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const savedIsLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const savedIsAdmin = localStorage.getItem("isAdmin") === "true";
    setIsLoggedIn(savedIsLoggedIn);
    setIsAdmin(savedIsAdmin);
  }, []);

  useEffect(() => {
    // if (!isLoggedIn) {
    localStorage.setItem("isLoggedIn", isLoggedIn);
    localStorage.setItem("isAdmin", isAdmin);
    // }
  }, [isLoggedIn, isAdmin]);

  // Sign in function to update state
  const handleSignIn = (admin = false) => {
    setIsLoggedIn(true);
    setIsAdmin(admin);
  };

  // Sign out function to update state
  const handleSignOut = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("isAdmin");
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, isAdmin, handleSignIn, handleSignOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
