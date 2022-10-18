import { NavLink, useLocation } from "react-router-dom";
import Atoms from "../atoms";

export default function AuthHeader() {
  const { hash } = useLocation();

  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink
              to="#login"
              className={() =>
                !hash || hash === "#login" ? "active" : undefined
              }
            >
              <Atoms.Title2 color="inherit">로그인</Atoms.Title2>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#join"
              className={() => (hash === "#join" ? "active" : undefined)}
            >
              <Atoms.Title2 color="inherit">회원가입</Atoms.Title2>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
