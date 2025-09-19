import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { Toaster } from "react-hot-toast";
import {
  notifyError,
  notifySuccess,
  toggleTheme,
} from "../features/ui/uiSlice";

const Home: React.FC = () => {
  const { theme } = useAppSelector((s) => s.ui);
  const dispatch = useAppDispatch();
  return (
    <>
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
    </>
  );
};

export default Home;
