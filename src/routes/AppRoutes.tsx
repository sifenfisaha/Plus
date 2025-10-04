import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AuthenticationPage from "../pages/Authentication";
import RootLayout from "../pages/RootLayout";
import ProfilePage from "../pages/ProfilePage";
import ProtectedRoute from "./ProtectedRoute";
import Feeds from "../pages/Blogs";
import BlogDetails from "../pages/BlogDetails";
import BlogPost from "../pages/BlogPost";
import EditBlog from "../pages/EditBlog";
import Dashboard from "../pages/Dashboard";

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
      { path: "blogs", element: <Feeds /> },
      { path: "blogs/:id", element: <BlogDetails /> },
      {
        path: "new",
        element: (
          <ProtectedRoute>
            <BlogPost />
          </ProtectedRoute>
        ),
      },
      { path: "edit/:id", element: <EditBlog /> },
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
    ],
  },
  { path: "/auth/:mode", element: <AuthenticationPage /> },
]);
