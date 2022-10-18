import { Navigate, useLocation } from "react-router-dom";
import useLogged from "../../utils/hooks/useLogged";
import Organisms from "../organisms";
import PublicRoute from "../PublicRoute";
import Templates from "../templates";

export default function Auth() {
  const isLogged = useLogged();
  const { hash } = useLocation();

  if (isLogged) {
    return <Navigate to="/todo" replace />;
  }

  return (
    <PublicRoute>
      <Templates.Auth>
        {!hash || hash === "#login" ? (
          <Organisms.LoginForm />
        ) : (
          <Organisms.JoinForm />
        )}
      </Templates.Auth>
    </PublicRoute>
  );
}
