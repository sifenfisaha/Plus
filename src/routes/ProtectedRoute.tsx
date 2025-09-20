import React, { type ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

interface Props {
  children: ReactNode;
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const { token } = useAppSelector((s) => s.auth);
  if (!token) {
    return <Navigate to={"/auth/signin"} replace />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
