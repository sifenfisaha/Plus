import type React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./queryClient";
import { RouterProvider } from "react-router-dom";
import { router } from "../routes/AppRoutes";
import { useAppSelector } from "./hooks";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useLogout } from "../features/auth/hooks";

const ThemeHandler: React.FC = () => {
  useLogout();
  const { theme } = useAppSelector((s) => s.ui);
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        style: {
          background: theme === "dark" ? "#000" : "#fff",
          color: theme === "dark" ? "#fff" : "#000",
          border: `1px solid ${theme === "dark" ? "#333" : "#ddd"}`,
        },
        success: {
          iconTheme: {
            primary: theme === "dark" ? "#fff" : "#000",
            secondary: theme === "dark" ? "#000" : "#fff",
          },
        },
        error: {
          iconTheme: {
            primary: theme === "dark" ? "#fff" : "#000",
            secondary: theme === "dark" ? "#000" : "#fff",
          },
        },
      }}
    />
  );
};

export const AppProviders: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeHandler />
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  );
};
