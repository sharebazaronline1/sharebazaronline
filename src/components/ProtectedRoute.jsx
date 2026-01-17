import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AuthLoadingScreen from "./AuthLoadingScreen";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <AuthLoadingScreen />;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
