import { createContext, useEffect, useMemo, useState } from "react";
import { ISortedTodos } from "../../utils/models/interfaces/SortedTodos";
import { ITodo } from "../../utils/models/interfaces/Todo";
import { ITodosContextValue } from "../../utils/models/interfaces/TodosContextValue";
import { AsyncData } from "../../utils/models/types/AsyncData";
import TodosService from "../../utils/services/Todos.service";
import Organisms from "../organisms";
import ProtectedRoute from "../ProtectedRoute";
import Templates from "../templates";

export const TodosContext = createContext<ITodosContextValue | null>(null);

export default function Todos() {
  const [update, setUpdate] = useState<boolean>(false);
  const [todos, setTodos] = useState<AsyncData<ITodo[]>>({
    status: "loading",
    data: null,
  });
  const [initialLoad, setInitialLoad] = useState<boolean>(true);

  const sortedTodos = useMemo(() => {
    const result: ISortedTodos = {
      all: [],
      progress: [],
      completed: [],
    };

    if (todos.status === "success") {
      for (let i = 0; i < todos.data.length; i++) {
        const todo = todos.data[i];
        result.all.push(todo);
        if (todo.isCompleted) {
          result.completed.push(todo);
        } else {
          result.progress.push(todo);
        }
      }
    }

    return { ...result };
  }, [todos]);

  useEffect(() => {
    async function updateTodos() {
      try {
        const { data: todoList } = await TodosService.get(initialLoad);
        setTodos({
          status: "success",
          data: todoList,
        });
        if (initialLoad) {
          setInitialLoad(false);
        }
      } catch (error) {
        console.log(error);
        setTodos({
          status: "error",
          data: "에러가 발생하였습니다.",
        });
      }
    }

    updateTodos();
  }, [update]);

  return (
    <ProtectedRoute>
      <Templates.Todos>
        <TodosContext.Provider
          value={{ sortedTodos, onUpdate: () => setUpdate(!update) }}
        >
          <Organisms.TodoForm />
          <section>
            <Organisms.TodosSort />
          </section>
          <section style={{ flex: 1 }}>
            <Organisms.TodoList {...todos} />
          </section>
        </TodosContext.Provider>
      </Templates.Todos>
    </ProtectedRoute>
  );
}
