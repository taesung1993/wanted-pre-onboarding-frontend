import { useContext, useMemo } from "react";
import { useLocation } from "react-router-dom";
import Organisms from ".";
import { ITodo } from "../../utils/models/interfaces/Todo";
import { AsyncData } from "../../utils/models/types/AsyncData";
import Atoms from "../atoms";
import Molecules from "../molecules";
import { TodosContext } from "../pages/Todos";
type Props = AsyncData<ITodo[]>;

export default function TodoList({ status, data }: Props) {
  const { hash } = useLocation();
  const { sortedTodos } = useContext(TodosContext)!;
  const todos = useMemo(() => {
    if (status === "success") {
      switch (hash) {
        case "#progress":
          return sortedTodos.progress;
        case "#completed":
          return sortedTodos.completed;
        default:
          return sortedTodos.all;
      }
    }
    return [];
  }, [status, hash, data]);

  if (status === "loading") {
    return (
      <Atoms.TodoList>
        <Atoms.TodoItemSkeleton />
        <Atoms.TodoItemSkeleton />
        <Atoms.TodoItemSkeleton />
        <Atoms.TodoItemSkeleton />
        <Atoms.TodoItemSkeleton />
        <Atoms.TodoItemSkeleton />
        <Atoms.TodoItemSkeleton />
      </Atoms.TodoList>
    );
  }

  if (status === "error") {
    return <Molecules.TodosError />;
  }

  if (todos.length === 0) {
    return <Molecules.EmptyTodos />;
  }

  return (
    <Atoms.TodoList>
      {todos.map((td) => (
        <Organisms.TodoItem key={td.id} todo={td} />
      ))}
    </Atoms.TodoList>
  );
}
