import { useState } from "react";
import { Navigate, NavLink, useLocation, useParams } from "react-router-dom";
import useLogged from "../../utils/hooks/useLogged";
import Organisms from "../organisms";
import PublicRoute from "../PublicRoute";

export default function Auth() {
  const isLogged = useLogged();
  const { hash } = useLocation();

  if (isLogged) {
    return <Navigate to="/todo" replace />;
  }

  return (
    <PublicRoute>
      <article>
        <Organisms.AuthHeader />
        <main>
          {!hash || hash === "#login" ? (
            <Organisms.LoginForm />
          ) : (
            <Organisms.JoinForm />
          )}
        </main>
      </article>
    </PublicRoute>
  );
}
