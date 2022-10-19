import axios from "axios";
import { IToken } from "../models/interfaces/Token";
import LocalStorageService from "./LocalStorage.service";

class TodosService {
  create(todo: string) {
    const { value: accessToken } = LocalStorageService.get<IToken>("token");
    const body = { todo };
    return axios.post(`${process.env.REACT_APP_API_URL}/todos`, body, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  get() {
    const { value: accessToken } = LocalStorageService.get<IToken>("token");
    return axios.get(`${process.env.REACT_APP_API_URL}/todos`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  update(id: number, payload: { todo?: string; isCompleted?: boolean }) {
    const { value: accessToken } = LocalStorageService.get<IToken>("token");
    return axios.put(`${process.env.REACT_APP_API_URL}/todos/${id}`, payload, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  delete(id: number) {
    const { value: accessToken } = LocalStorageService.get<IToken>("token");
    return axios.delete(`${process.env.REACT_APP_API_URL}/todos/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }
}

export default new TodosService();
