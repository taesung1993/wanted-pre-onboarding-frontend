import { createPortal } from "react-dom";
import Atoms from "../atoms";

interface Props {
  title: string;
  message: string;
  onConfirm: () => void;
  onClose: () => void;
}

function Portal({ children }: { children: React.ReactNode }) {
  return createPortal(children, document.getElementById("modals")!);
}

export default function ConfirmModal({
  title,
  message,
  onClose,
  onConfirm,
}: Props) {
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
              <Atoms.Div display="flex" alignItems="center" gap="16px">
                <Atoms.Button
                  width="100%"
                  height="48px"
                  color="#fff"
                  backgroundColor="#ee2554"
                  fontSize="14px"
                  borderRadius="5px"
                  onClick={onClose}
                >
                  닫기
                </Atoms.Button>

                <Atoms.Button
                  width="100%"
                  height="48px"
                  color="#fff"
                  backgroundColor="#4B89DC"
                  fontSize="14px"
                  borderRadius="5px"
                  onClick={onConfirm}
                >
                  확인
                </Atoms.Button>
              </Atoms.Div>
            </footer>
          </section>
          <section className="backdrop" onClick={onClose}></section>
        </section>
      </Atoms.ModalContainer>
    </Portal>
  );
}
