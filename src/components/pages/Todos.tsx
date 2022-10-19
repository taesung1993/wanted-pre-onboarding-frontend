import ProtectedRoute from "../ProtectedRoute";
import Templates from "../templates";

export default function Todos() {
  return (
    <ProtectedRoute>
      <Templates.Todos>
        <div>Todos</div>
      </Templates.Todos>
    </ProtectedRoute>
  );
}
