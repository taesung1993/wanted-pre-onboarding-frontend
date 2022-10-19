import { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Atoms from "../atoms";
import { TodosContext } from "../pages/Todos";

export default function TodosSort() {
  const { hash } = useLocation();
  const {
    sortedTodos: { all, progress, completed },
  } = useContext(TodosContext)!;

  return (
    <Atoms.TodoSortWrapper>
      <ul>
        <li>
          <NavLink
            to="#all"
            className={() => (!hash || hash === "#all" ? "active" : undefined)}
          >
            <Atoms.Title2 color="inherit">전체({all.length})</Atoms.Title2>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="#progress"
            className={() => (hash === "#progress" ? "active" : undefined)}
          >
            <Atoms.Title2 color="inherit">
              진행 중({progress.length})
            </Atoms.Title2>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="#completed"
            className={() => (hash === "#completed" ? "active" : undefined)}
          >
            <Atoms.Title2 color="inherit">
              완료 됨({completed.length})
            </Atoms.Title2>
          </NavLink>
        </li>
      </ul>
    </Atoms.TodoSortWrapper>
  );
}
