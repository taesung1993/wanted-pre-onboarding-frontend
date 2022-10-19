import { useContext, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { ITodo } from "../../utils/models/interfaces/Todo";
import Atoms from "../atoms";
import { TodosContext } from "../pages/Todos";

interface Props {
  todos: ITodo[];
}

export default function EmptyTodos() {
  const { hash } = useLocation();
  const { sortedTodos } = useContext(TodosContext)!;
  const message = useMemo(() => {
    let data = "생성된 할 일이 없어요. 빨리 추가해주세요 ㅠㅠ..";
    const { all, completed, progress } = sortedTodos;

    if (all.length) {
      switch (hash) {
        case "#progress":
          if (all.length === completed.length) {
            data = "오늘 하루 정말 알차게 보내셨네요. 훌륭합니다.";
          }
          break;
        case "#completed":
          if (all.length === progress.length) {
            data = "바쁘게 움직이셔야 해요.";
          }
          break;
      }
    }
    return data;
  }, [hash, sortedTodos]);
  return (
    <Atoms.EmptyMessage>
      <Atoms.Body2 color="#999">{message}</Atoms.Body2>
    </Atoms.EmptyMessage>
  );
}
