import { ISortedTodos } from "./SortedTodos";

export interface ITodosContextValue {
  sortedTodos: ISortedTodos;
  onUpdate: () => void;
}
