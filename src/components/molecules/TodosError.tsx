import Atoms from "../atoms";
import { FaRegSadTear } from "react-icons/fa";

export default function TodosError() {
  return (
    <Atoms.ErrorMessage>
      <Atoms.Div display="flex" alignItems="center" gap="8px">
        <FaRegSadTear fontSize={28} />
        <Atoms.Heading1>앗! 에러가 발생했네요.</Atoms.Heading1>
      </Atoms.Div>
      <Atoms.Div display="flex" flexDirection="column" gap="10px">
        <Atoms.Body2 color="#999">
          죄송합니다. 할 일 목록을 가져오는 도중에 무언가가 잘못되었네요...
          <br />
          관리자께 문의해주시기 바랍니다.
        </Atoms.Body2>
        <Atoms.Div>
          <a
            href="/"
            style={{
              textDecoration: "none",
              color: "#ee2554",
            }}
          >
            새로고침 하기
          </a>
        </Atoms.Div>
      </Atoms.Div>
    </Atoms.ErrorMessage>
  );
}
