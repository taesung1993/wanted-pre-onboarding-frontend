import React, { useMemo } from "react";
import { Navigate } from "react-router-dom";
import { IToken } from "../utils/models/interfaces/Token";
import LocalStorageService from "../utils/services/LocalStorage.service";

interface Props {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: Props) {
  const token = LocalStorageService.get<IToken>("token");
  const isLogged = useMemo(() => {
    if (token) {
      const EXPIRED_TIME = 60 * 60 * 1000;
      if (Date.now() - token.expiredTime > EXPIRED_TIME) {
        return false;
      }
      return true;
    }

    return false;
  }, [token]);

  if (!isLogged) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
