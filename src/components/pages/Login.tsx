import { FormEvent, useCallback } from "react";
import { Link } from "react-router-dom";
import { IToken } from "../../utils/models/interfaces/Token";
import AuthService from "../../utils/services/Auth.service";
import LocalStorageService from "../../utils/services/LocalStorage.service";
import PublicRoute from "../PublicRoute";

export default function Login() {
  const onSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault();

    try {
      const {
        data: { access_token: accessToken },
      } = await AuthService.login({
        email: "cheonyulin@gmail.com",
        password: "135246asd@",
      });

      const token = {
        value: accessToken,
        expiredTime: Date.now(),
      };

      LocalStorageService.set<IToken>("token", token);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <PublicRoute>
      <article>
        <section>
          <form onSubmit={onSubmit}>
            <div>
              <label htmlFor="email">이메일</label>
              <input type="email" id="email" />
            </div>
            <div>
              <label htmlFor="password">비밀번호</label>
              <input type="password" id="password" />
            </div>
            <button>로그인</button>
          </form>
        </section>
        <section>
          <Link to="../join" relative="path">
            회원가입하기
          </Link>
        </section>
      </article>
    </PublicRoute>
  );
}
