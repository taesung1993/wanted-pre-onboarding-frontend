import React, { useCallback } from "react";
import Atoms from "../atoms";
import { FaUnlockAlt } from "react-icons/fa";
import LocalStorageService from "../../utils/services/LocalStorage.service";

interface Props {
  children: React.ReactNode;
}

export default function Todos({ children }: Props) {
  const onLogout = useCallback(() => {
    LocalStorageService.remove("token");
    window.location.href = "/";
  }, []);

  return (
    <Atoms.TodosContainer>
      <section>
        <header>
          <Atoms.Div
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Atoms.Heading1>오늘의 할일 정하기</Atoms.Heading1>
            <Atoms.CircleButton
              width="32px"
              height="32px"
              color="#fff"
              backgroundColor="#ee2554"
              onClick={() => onLogout()}
            >
              <FaUnlockAlt />
            </Atoms.CircleButton>
          </Atoms.Div>
        </header>
        <main>{children}</main>
      </section>
    </Atoms.TodosContainer>
  );
}
