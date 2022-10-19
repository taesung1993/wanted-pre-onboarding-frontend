import axios, { AxiosResponse } from "axios";
import { ITodo } from "../models/interfaces/Todo";
import { IToken } from "../models/interfaces/Token";
import LocalStorageService from "./LocalStorage.service";

class TodosService {
  create(todo: string) {
    const { value: accessToken } = LocalStorageService.get<IToken>("token");
    const body = { todo };

    return axios.post<ITodo>(
      `https://pre-onboarding-selection-task.shop/todos`,
      body,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
  }

  get(initialLoad?: boolean): Promise<AxiosResponse<ITodo[]>> {
    const { value: accessToken } = LocalStorageService.get<IToken>("token");

    return new Promise((resolve) => {
      setTimeout(
        () => {
          resolve(
            axios.get<ITodo[]>(
              `https://pre-onboarding-selection-task.shop/todos`,
              {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                  "Content-Type": "application/json",
                },
              }
            )
          );
        },
        initialLoad ? 1000 : 0
      );
    });
  }

  update(id: number, payload: { todo?: string; isCompleted?: boolean }) {
    const { value: accessToken } = LocalStorageService.get<IToken>("token");

    return axios.put<ITodo>(
      `https://pre-onboarding-selection-task.shop/todos/${id}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
  }

  delete(id: number) {
    const { value: accessToken } = LocalStorageService.get<IToken>("token");
    return axios.delete(
      `https://pre-onboarding-selection-task.shop/todos/${id}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
  }
}

export default new TodosService();
