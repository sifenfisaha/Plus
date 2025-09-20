import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AuthenticationPage from "../pages/Authentication";
import RootLayout from "../pages/RootLayout";
import ProfilePage from "../pages/ProfilePage";
import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
      },
    ],
  },
  { path: "/auth/:mode", element: <AuthenticationPage /> },
]);
