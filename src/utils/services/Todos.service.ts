import axios, { AxiosResponse } from "axios";
import { ITodo } from "../models/interfaces/Todo";
import { IToken } from "../models/interfaces/Token";
import LocalStorageService from "./LocalStorage.service";

class TodosService {
  create(todo: string) {
    const { value: accessToken } = LocalStorageService.get<IToken>("token");
    const body = { todo };

    return axios.post<ITodo>(`/todos`, body, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  get(initialLoad?: boolean): Promise<AxiosResponse<ITodo[]>> {
    const { value: accessToken } = LocalStorageService.get<IToken>("token");

    return new Promise((resolve) => {
      setTimeout(
        () => {
          resolve(
            axios.get<ITodo[]>(`/todos`, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            })
          );
        },
        initialLoad ? 1000 : 0
      );
    });
  }

  update(id: number, payload: { todo?: string; isCompleted?: boolean }) {
    const { value: accessToken } = LocalStorageService.get<IToken>("token");

    return axios.put<ITodo>(`/todos/${id}`, payload, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  delete(id: number) {
    const { value: accessToken } = LocalStorageService.get<IToken>("token");
    return axios.delete(`/todos/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }
}

export default new TodosService();
