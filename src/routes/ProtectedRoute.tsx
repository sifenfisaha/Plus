import React, { type ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface Props {
  children: ReactNode;
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const token = null;
  if (token) {
    <Navigate to={"/"} replace />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
