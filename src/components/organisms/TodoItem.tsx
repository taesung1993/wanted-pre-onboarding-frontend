import React from "react";
import { ITodo } from "../../utils/models/interfaces/Todo";
import Atoms from "../atoms";
import { FaCheck } from "react-icons/fa";
import { TbPencil, TbTrash } from "react-icons/tb";
import { useCallback, useContext, useState } from "react";
import TodosService from "../../utils/services/Todos.service";
import { TodosContext } from "../pages/Todos";
import Molecules from "../molecules";
import Organisms from ".";

interface Props {
  todo: ITodo;
}

function TodoItem({ todo }: Props) {
  const { onUpdate } = useContext(TodosContext)!;
  const [editMode, setEditMode] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);

  const onComplete = useCallback(async () => {
    try {
      await TodosService.update(todo.id, {
        isCompleted: !todo.isCompleted,
        todo: todo.todo,
      });
      onUpdate();
    } catch (e) {
      console.log(e);
    }
  }, [onUpdate, todo]);

  const onDelete = useCallback(async () => {
    try {
      await TodosService.delete(todo.id);
      onUpdate();
    } catch (e) {
      console.log(e);
    }
  }, [onUpdate, todo]);

  return (
    <Atoms.TodoItem>
      {editMode ? (
        <>
          <Organisms.EditTodoForm
            todo={todo}
            onClose={() => setEditMode(false)}
          />
        </>
      ) : (
        <>
          <Atoms.Div display="flex" alignItems="center" gap="4px">
            <Atoms.Button
              color={todo.isCompleted ? "#28c76f" : "#ccc"}
              onClick={onComplete}
            >
              <FaCheck />
            </Atoms.Button>
            <Atoms.Body2>{todo.todo}</Atoms.Body2>
          </Atoms.Div>

          <Atoms.Div display="flex" alignItems="center" gap="4px">
            <Atoms.CircleButton
              width="32px"
              height="32px"
              backgroundColor="#ff7f00"
              color="#fff"
              onClick={() => setEditMode(true)}
            >
              <TbPencil />
            </Atoms.CircleButton>

            <Atoms.CircleButton
              width="32px"
              height="32px"
              backgroundColor="#ee2554"
              color="#fff"
              onClick={() => setOpenConfirm(true)}
            >
              <TbTrash />
            </Atoms.CircleButton>
          </Atoms.Div>
        </>
      )}
      {openConfirm && (
        <Molecules.ConfirmModal
          title="할일 지우기"
          message="해당 할 일을 지우시겠습니까?"
          onConfirm={() => onDelete()}
          onClose={() => setOpenConfirm(false)}
        />
      )}
    </Atoms.TodoItem>
  );
}

export default React.memo(TodoItem);
