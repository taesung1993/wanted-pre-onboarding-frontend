import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Todos({ children }: Props) {
  return (
    <article>
      <section>
        <header>
          <h1>오늘의 할일 정하기</h1>
        </header>
        <main>{children}</main>
      </section>
    </article>
  );
}
