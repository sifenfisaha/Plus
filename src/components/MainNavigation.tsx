import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Moon, Search, Sun } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { toggleTheme } from "../features/ui/uiSlice";
import Menu from "./ui/Menu";
import { AnimatePresence } from "motion/react";

const MainNavigation: React.FC = () => {
  const { theme } = useAppSelector((s) => s.ui);
  const { isAuthenticated, user } = useAppSelector((s) => s.auth);
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useAppDispatch();

  return (
    <header className="flex px-40 py-3 dark:bg-black shadow-sm items-center justify-between">
      <Link to="/">
        <h1 className="dark:text-white font-bold font-logo text-2xl">Plus</h1>
      </Link>
      <div className="min-w-96 shadow rounded-full dark:bg-neutral-700/40 px-3 flex justify-between items-center py-2 gap-4 ">
        <Search className="text-gray-400 text-xs" />
        <input
          className="bg-transparent dark:text-white dark:placeholder:text-neutral-400 w-full outline-none border-none"
          placeholder="search article, author or topics..."
          type="text"
        />
      </div>
      <div className="flex items-center justify-center gap-6">
        <button
          onClick={() => dispatch(toggleTheme())}
          className="w-7 h-7 transition-all duration-300 ease-in-out flex items-center justify-center rounded-sm"
        >
          {theme === "light" ? (
            <Moon className="dark:text-white w-5 cursor-pointer" />
          ) : (
            <Sun className="dark:text-white w-5 cursor-pointer" />
          )}
        </button>
        {!isAuthenticated && (
          <>
            <Link className="dark:text-white capitalize" to="/auth/signin">
              sign in
            </Link>
            <Link
              className="text-white capitalize dark:bg-white bg-black px-4 py-2 rounded-lg dark:text-black"
              to="/auth/signup"
            >
              get started
            </Link>
          </>
        )}
        {isAuthenticated && (
          <div className="relative">
            {" "}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-8 h-8 bg-black text-white rounded-full dark:bg-neutral-700 cursor-pointer dark:text-white font-bold"
            >
              {user?.first_name[0]}
            </button>
            <AnimatePresence>
              {isOpen && <Menu onClose={() => setIsOpen(false)} />}
            </AnimatePresence>
          </div>
        )}
      </div>
    </header>
  );
};

export default MainNavigation;
