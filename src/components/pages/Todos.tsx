import ProtectedRoute from "../ProtectedRoute";

export default function Todos() {
  console.log("todos");
  return (
    <ProtectedRoute>
      <article>Todos</article>
    </ProtectedRoute>
  );
}
