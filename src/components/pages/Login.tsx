import { FormEvent, useCallback, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import useLogged from "../../utils/hooks/useLogged";
import { IToken } from "../../utils/models/interfaces/Token";
import AuthService from "../../utils/services/Auth.service";
import LocalStorageService from "../../utils/services/LocalStorage.service";
import Organisms from "../organisms";
import PublicRoute from "../PublicRoute";

export default function Login() {
  const isLogged = useLogged();
  const [navItem, setNavItem] = useState("login");

  if (isLogged) {
    return <Navigate to="/todo" replace />;
  }

  return (
    <PublicRoute>
      <article>
        <header>
          <nav>
            <ul>
              <li>
                <button onClick={() => setNavItem("login")}>로그인</button>
              </li>
              <li>
                <button onClick={() => setNavItem("join")}>회원가입</button>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          {navItem === "login" ? (
            <Organisms.LoginForm />
          ) : (
            <Organisms.JoinForm />
          )}
        </main>
      </article>
    </PublicRoute>
  );
}
