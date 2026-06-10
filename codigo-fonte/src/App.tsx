import { Navigate, Route, Routes } from "react-router-dom";
import { useStore } from "@/store/AppStore";
import { Login } from "@/pages/Login";
import { Register } from "@/pages/Register";

/** Redireciona usuários autenticados para fora das páginas públicas. */
function PublicOnly({ children }: { children: React.ReactNode }) {
  const { currentUser } = useStore();
  if (currentUser) return <Navigate to="/" replace />;
  return <>{children}</>;
}

export function App() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <PublicOnly>
            <Login />
          </PublicOnly>
        }
      />
      <Route
        path="/register"
        element={
          <PublicOnly>
            <Register />
          </PublicOnly>
        }
      />

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
