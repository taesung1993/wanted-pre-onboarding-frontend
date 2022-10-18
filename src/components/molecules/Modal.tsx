import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Atoms from "../atoms";

interface Props {
  type: "success" | "error";
  title: string;
  message: string;
  onClose: () => void;
}

function Portal({ children }: { children: React.ReactNode }) {
  return createPortal(children, document.getElementById("modals")!);
}

export default function Modal({ type, title, message, onClose }: Props) {
  return (
    <Portal>
      <Atoms.ModalContainer>
        <section>
          <section className="modal-body">
            <header>
              <Atoms.Title2>{title}</Atoms.Title2>
            </header>
            <main>
              <Atoms.Body2 color="#999">{message}</Atoms.Body2>
            </main>
            <footer>
              <Atoms.Button
                width="100%"
                height="48px"
                backgroundColor={type === "success" ? "#28c76f" : "#ee2554"}
                color="#fff"
                fontSize="14px"
                borderRadius="5px"
                onClick={onClose}
              >
                닫기
              </Atoms.Button>
            </footer>
          </section>
          <section className="backdrop" onClick={onClose}></section>
        </section>
      </Atoms.ModalContainer>
    </Portal>
  );
}
