import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Navigate to="/sign-in" />;
  }

  return children;
};
