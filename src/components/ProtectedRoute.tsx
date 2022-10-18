import React from "react";
import { Navigate } from "react-router-dom";
import useLogged from "../utils/hooks/useLogged";

interface Props {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: Props) {
  const isLogged = useLogged();

  if (!isLogged) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
