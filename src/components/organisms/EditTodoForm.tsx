import Atoms from "../atoms";
import Molecules from "../molecules";
import { BsCheckLg, BsXLg } from "react-icons/bs";
import { ITodo } from "../../utils/models/interfaces/Todo";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import TodosService from "../../utils/services/Todos.service";
import { useContext } from "react";
import { TodosContext } from "../pages/Todos";

interface Props {
  todo: ITodo;
  onClose: () => void;
}

export default function EditTodoForm({ todo, onClose }: Props) {
  const { onUpdate } = useContext(TodosContext)!;
  const [todoValue, setTodoVaue] = useState(todo.todo);
  const handleInput = useCallback((e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    setTodoVaue(value);
  }, []);
  const onSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      try {
        await TodosService.update(todo.id, {
          isCompleted: todo.isCompleted,
          todo: todoValue,
        });
        onClose();
        onUpdate();
      } catch (e) {
        console.log(e);
      }
    },
    [todo, todoValue, onClose, onUpdate]
  );

  return (
    <>
      <form
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        onSubmit={onSubmit}
      >
        <Molecules.FormInput
          type="text"
          id={`${todo.id}-update`}
          onChange={handleInput}
          value={todoValue}
          initialFocus={true}
          style={{
            border: "none",
            height: "100%",
          }}
        />
        <Atoms.Div display="flex" alignItems="center" gap="4px">
          <Atoms.CircleButton
            width="32px"
            height="32px"
            backgroundColor="#4B89DC"
            color="#fff"
          >
            <BsCheckLg />
          </Atoms.CircleButton>
          <Atoms.CircleButton
            width="32px"
            height="32px"
            backgroundColor="#ee2554"
            color="#fff"
            onClick={onClose}
          >
            <BsXLg />
          </Atoms.CircleButton>
        </Atoms.Div>
      </form>
    </>
  );
}
