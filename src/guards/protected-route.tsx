import { Navigate, Outlet } from "react-router-dom";
import { useUserAuthStore } from "@/store/user-auth-store";

export default function ProtectedRoute() {
  const { isLoggedIn } = useUserAuthStore();

  const authenticated = isLoggedIn;

  return authenticated ? <Outlet /> : <Navigate to="/" replace />;
}
