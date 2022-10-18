import { useMemo } from "react";
import { IToken } from "../models/interfaces/Token";
import AuthService from "../services/Auth.service";
import LocalStorageService from "../services/LocalStorage.service";

export default function useLogged() {
  const token = LocalStorageService.get<IToken>("token");
  const isLogged = useMemo(() => {
    if (token) {
      return AuthService.isExpired(token.expiredTime);
    }

    return false;
  }, [token]);

  return isLogged;
}
