import { useContext } from "react";
import { AuthContext } from "../../context/auth-context";

export const useAuth = () => {
  const auth = useContext(AuthContext);

  return {
    isLoggedIn: auth?.isLoggedIn,
    isAdmin: auth?.isAdmin,
    handleSignIn: auth?.handleSignIn,
    handleSignOut: auth?.handleSignOut,
  };
};
