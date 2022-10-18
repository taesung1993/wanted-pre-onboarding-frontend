import axios from "axios";
import { ChangeEvent, FormEvent, useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { emailRegex, passwordRegex } from "../../utils/constants/regex";
import { IToken } from "../../utils/models/interfaces/Token";
import AuthService from "../../utils/services/Auth.service";
import LocalStorageService from "../../utils/services/LocalStorage.service";
import Molecules from "../molecules";

export default function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState<string | null>(null);
  const error = useMemo(() => {
    const errors = {
      email: "",
      password: "",
    };

    if (!email || emailRegex.test(email)) {
      errors["email"] = "";
    } else {
      errors["email"] = "이메일 형식으로 입력해주세요.";
    }

    if (!password || passwordRegex.test(password)) {
      errors["password"] = "";
    } else {
      errors["password"] =
        "8자 이상의 숫자 + 대소문자로 구성된 비밀번호를 입력해주세요.";
    }
    return errors;
  }, [email, password]);

  const isSubmitted = useMemo(() => {
    return !!(!email || !password || error["email"] || error["password"]);
  }, [email, password, error]);

  const handleInput = useCallback((e: ChangeEvent, inputId: string) => {
    const { value } = e.target as HTMLInputElement;
    switch (inputId) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
    }
  }, []);

  const onSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      try {
        const {
          data: { access_token: accessToken },
        } = await AuthService.login({
          email: email,
          password: password,
        });

        const token = {
          value: accessToken,
          expiredTime: Date.now(),
        };

        LocalStorageService.set<IToken>("token", token);
        navigate("/todo", {
          replace: true,
        });
      } catch (error) {
        console.log(error);
        setLoginError("로그인에 실패하였습니다.");
      }
    },
    [email, navigate, password]
  );

  return (
    <section>
      <form onSubmit={onSubmit}>
        <Molecules.FormInput
          id="email"
          type="email"
          title="이메일"
          error={error["email"]}
          onChange={handleInput}
        />
        <Molecules.FormInput
          id="password"
          type="password"
          title="비밀번호"
          error={error["password"]}
          onChange={handleInput}
        />
        <button disabled={isSubmitted}>로그인</button>
      </form>
      <dialog open={!!loginError}>
        <p>{loginError}</p>
        <button onClick={() => setLoginError(null)}>닫기</button>
      </dialog>
    </section>
  );
}
