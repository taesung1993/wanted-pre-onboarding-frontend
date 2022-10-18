import ProtectedRoute from "../ProtectedRoute";

export default function Todos() {
  return (
    <ProtectedRoute>
      <article>Todos</article>
    </ProtectedRoute>
  );
}
