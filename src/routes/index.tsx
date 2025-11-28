import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./route";
import PublicViewLayouts from "../layouts/public-view-layouts";
import HomePage from "../features/home-page";
import LoginPage from "@/features/login";
import DashboardViewLayout from "@/layouts/dashboard-view-layout";
import DashboardPage from "@/features/dashboard-page";
import ProtectedRoute from "@/guards/protected-route";
import UserProfilePage from "@/features/user-profile-page";

export const router = createBrowserRouter([
  {
    element: <PublicViewLayouts />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.login,
        element: <LoginPage />,
      },
    ],
  },

  {
    path: ROUTES.dashboard,
    element: <ProtectedRoute />,
    children: [
      {
        element: <DashboardViewLayout />,
        children: [
          {
            index: true,
            element: <DashboardPage />,
          },
          {
            path: ROUTES.user,
            element: <UserProfilePage />,
          },
        ],
      },
    ],
  },
]);
