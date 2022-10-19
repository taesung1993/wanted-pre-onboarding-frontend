import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useContext,
  useState,
} from "react";
import Atoms from "../atoms";
import Molecules from "../molecules";
import { FaPlus } from "react-icons/fa";
import TodosService from "../../utils/services/Todos.service";
import { TodosContext } from "../pages/Todos";

export default function TodoForm() {
  const [todo, setTodo] = useState<string>("");
  const { onUpdate } = useContext(TodosContext)!;

  const handleInput = useCallback((e: ChangeEvent, inputId: string) => {
    const { value } = e.target as HTMLInputElement;
    setTodo(value);
  }, []);

  const onSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      const target = e.target as HTMLFormElement;
      const input = target.querySelector("input") as HTMLInputElement;
      try {
        await TodosService.create(todo!);
        input.value = "";
        onUpdate();
      } catch (error) {
        console.log(error);
      }
    },
    [onUpdate, todo, setTodo]
  );

  return (
    <form onSubmit={onSubmit}>
      <Atoms.Div display="flex" alignItems="center" gap="10px">
        <Molecules.FormInput
          id="todo"
          type="text"
          placeholder="할 일을 입력하세요."
          onChange={handleInput}
          value={todo}
        />

        <Atoms.Button
          width="56px"
          border="1px solid #ddd"
          borderRadius="5px"
          backgroundColor="#28c76f"
          color="#fff"
        >
          <FaPlus />
        </Atoms.Button>
      </Atoms.Div>
    </form>
  );
}
