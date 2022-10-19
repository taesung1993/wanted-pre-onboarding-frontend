import axios from "axios";
import { IAccessToken } from "../models/interfaces/Token";
import LocalStorageService from "./LocalStorage.service";

class AuthService {
  accessToken: string | null = null;
  limitTime = 60 * 60 * 1000;

  login(body: { email: string; password: string }) {
    return axios.post<IAccessToken>(
      `https://pre-onboarding-selection-task.shop/auth/signin`,
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  join(body: { email: string; password: string }) {
    return axios.post<IAccessToken>(
      `https://pre-onboarding-selection-task.shop/auth/signup`,
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

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
