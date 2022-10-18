import React from "react";
import Atoms from "../atoms";
import Organisms from "../organisms";

interface Props {
  children: React.ReactNode;
}

export default function Auth({ children }: Props) {
  return (
    <Atoms.AuthContainer>
      <section>
        <img src="/images/notepad.png" alt="notepad" />
        <Atoms.Div width={"50%"} minWidth={240}>
          <Atoms.Title1 textAlign={"center"} fontWeight={700} color={"#ffffff"}>
            Stop thinking about it
            <br />
            Just Do it
          </Atoms.Title1>
        </Atoms.Div>
      </section>
      <Atoms.AuthWrapper>
        <Organisms.AuthHeader />
        <main>{children}</main>
      </Atoms.AuthWrapper>
    </Atoms.AuthContainer>
  );
}
