import { ITodo } from "./Todo";

export interface ISortedTodos {
  all: ITodo[];
  progress: ITodo[];
  completed: ITodo[];
}
