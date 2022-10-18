import { Link } from "react-router-dom";

export default function Join() {
  return (
    <article>
      <section>
        <form action="">
          <label htmlFor="email">이메일</label>
          <input type="email" id="email" />
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="password" />
          <label htmlFor="passwordConfirm">비밀번호 확인</label>
          <input type="password" id="passwordConfirm" />
          <button>회원가입</button>
        </form>
      </section>
      <section>
        <Link to="../login" relative="path">
          로그인하기
        </Link>
      </section>
    </article>
  );
}
