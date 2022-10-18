import { NavLink, useLocation } from "react-router-dom";

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
              <span>로그인</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#join"
              className={() => (hash === "#join" ? "active" : undefined)}
            >
              <span>회원가입</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
