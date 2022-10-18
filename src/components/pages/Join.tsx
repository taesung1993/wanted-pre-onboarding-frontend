import { Link } from "react-router-dom";
import PublicRoute from "../PublicRoute";

export default function Join() {
  return (
    <PublicRoute>
      <article>
        <section>
          <form action="">
            <div>
              <label htmlFor="email">이메일</label>
              <input type="email" id="email" />
            </div>
            <div>
              <label htmlFor="password">비밀번호</label>
              <input type="password" id="password" />
            </div>
            <div>
              <label htmlFor="passwordConfirm">비밀번호 확인</label>
              <input type="password" id="passwordConfirm" />
            </div>
            <button>회원가입</button>
          </form>
        </section>
        <section>
          <Link to="../login" relative="path">
            로그인하기
          </Link>
        </section>
      </article>
    </PublicRoute>
  );
}
