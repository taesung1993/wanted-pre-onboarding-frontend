import axios from "axios";
import { IAccessToken } from "../models/interfaces/Token";
import LocalStorageService from "./LocalStorage.service";

class AuthService {
  accessToken: string | null = null;
  limitTime = 60 * 60 * 1000;

  login(body: { email: string; password: string }) {
    return axios.post<IAccessToken>(
      `${process.env.REACT_APP_API_URL}/auth/signin`,
      body
    );
  }

  join() {}

  isExpired(expiredTime: number) {
    const diff = Date.now() - expiredTime;
    if (diff > this.limitTime) {
      LocalStorageService.remove("token");
      return false;
    }
    return true;
  }
}

export default new AuthService();
