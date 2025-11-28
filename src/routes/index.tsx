import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./route";

export const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <h1>Home</h1>,
  },
  {
    path: ROUTES.login,
    element: <h1>Login</h1>,
  },
  {
    path: ROUTES.dashboard,
    element: <h1>Dashboard</h1>,
  },
  {
    path: ROUTES.user,
    element: <h1>User</h1>,
  },
]);
