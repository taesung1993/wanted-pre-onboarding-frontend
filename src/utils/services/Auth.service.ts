import axios from "axios";
import { IAccessToken } from "../models/interfaces/Token";

class AuthService {
  accessToken: string | null = null;

  login(body: { email: string; password: string }) {
    return axios.post<IAccessToken>(
      `${process.env.REACT_APP_API_URL}/auth/signin`,
      body
    );
  }

  async join() {}
}

export default new AuthService();
