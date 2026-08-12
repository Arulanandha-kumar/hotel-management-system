import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

type ProtectedRouteProps = {
  children: ReactNode;
  role?: string;
};

const ProtectedRoute = ({ children, role }: ProtectedRouteProps) => {
  const userRole = localStorage.getItem("role");

  if (!userRole) return <Navigate to="/login" />;

  if (role && userRole !== role) return <Navigate to="/login" />;

  return children;
};

export default ProtectedRoute;