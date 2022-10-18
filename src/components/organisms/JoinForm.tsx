import { ChangeEvent, FormEvent, useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { emailRegex, passwordRegex } from "../../utils/constants/regex";
import { IToken } from "../../utils/models/interfaces/Token";
import AuthService from "../../utils/services/Auth.service";
import LocalStorageService from "../../utils/services/LocalStorage.service";
import Atoms from "../atoms";
import Molecules from "../molecules";

export default function JoinForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [joinError, setJoinError] = useState<string | null>(null);

  const error = useMemo(() => {
    const errors = {
      email: "",
      password: "",
      confirmPassword: "",
    };

    if (!email || emailRegex.test(email)) {
      errors["email"] = "";
    } else {
      errors["email"] = "이메일 형식으로 입력해주세요.";
    }

    if (!password) {
      errors["password"] = "";
    } else {
      if (passwordRegex.test(password) && password === confirmPassword) {
        errors["password"] = "";
      } else {
        if (!passwordRegex.test(password)) {
          errors["password"] =
            "8자 이상의 숫자 + 대소문자로 구성된 비밀번호를 입력해주세요.";
        }
      }
    }

    if (confirmPassword && password !== confirmPassword) {
      errors["confirmPassword"] = "비밀번호가 일치하지 않습니다.";
    }

    return errors;
  }, [email, password, confirmPassword]);

  const isSubmitted = useMemo(() => {
    return !!(
      !email ||
      !password ||
      !confirmPassword ||
      error["email"] ||
      error["password"] ||
      error["confirmPassword"]
    );
  }, [email, password, confirmPassword, error]);

  const handleInput = useCallback((e: ChangeEvent, inputId: string) => {
    const { value } = e.target as HTMLInputElement;
    switch (inputId) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
    }
  }, []);

  const onSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      try {
        const {
          data: { access_token: accessToken },
        } = await AuthService.join({
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
        setJoinError("회원가입에 실패하였습니다");
      }
    },
    [email, navigate, password]
  );

  return (
    <section>
      <Atoms.Form onSubmit={onSubmit}>
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
        <Molecules.FormInput
          id="confirmPassword"
          type="password"
          title="비밀번호 확인"
          error={error["confirmPassword"]}
          onChange={handleInput}
        />
        <Atoms.Button disabled={isSubmitted} width="100%">
          로그인
        </Atoms.Button>
      </Atoms.Form>
      {joinError && (
        <Molecules.Modal
          type="error"
          title="회원가입 에러"
          message={joinError}
          onClose={() => setJoinError(null)}
        />
      )}
    </section>
  );
}
