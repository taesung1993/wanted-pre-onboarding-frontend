import { Link } from "react-router-dom";

export default function Login() {
  return (
    <article>
      <section>
        <form action="">
          <label htmlFor="email">이메일</label>
          <input type="email" id="email" />
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="password" />
          <button>로그인</button>
        </form>
      </section>
      <section>
        <Link to="../join" relative="path">
          회원가입하기
        </Link>
      </section>
    </article>
  );
}