import React from "react";
import Atoms from "../atoms";

interface Props {
  children: React.ReactNode;
}

export default function Todos({ children }: Props) {
  return (
    <Atoms.TodosContainer>
      <section>
        <header>
          <Atoms.Heading1>오늘의 할일 정하기</Atoms.Heading1>
        </header>
        <main>{children}</main>
      </section>
    </Atoms.TodosContainer>
  );
}
