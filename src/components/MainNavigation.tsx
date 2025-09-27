import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Moon, Search, Sun, X } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { toggleTheme } from "../features/ui/uiSlice";
import Menu from "./ui/Menu";
import { AnimatePresence } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { searchSchema, type searchInput } from "../utils/validationSchemas";
import { setQuery } from "../features/blogs/blogSlice";

const MainNavigation: React.FC = () => {
  const { theme } = useAppSelector((s) => s.ui);
  const { isAuthenticated, user } = useAppSelector((s) => s.auth);
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useAppDispatch();
  const location = useLocation();
  const naviate = useNavigate();

  const showSearch = location.pathname === "/blogs";

  const { register, handleSubmit, reset } = useForm<searchInput>({
    resolver: zodResolver(searchSchema),
  });

  const onSubmit = (data: searchInput) => {
    if (data.query === "") {
      naviate(`/blogs`);
    } else {
      naviate(`/blogs?search=${encodeURIComponent(data.query)}`);
    }
    dispatch(setQuery(data.query));
  };

  const onClick = () => {
    naviate("/blogs");
    reset();
    dispatch(setQuery(""));
  };

  return (
    <header className="flex gap-3 sticky top-0 bg-white/30 backdrop-blur-lg md:px-40 sm:px-20 px-5 py-5 dark:bg-neutral-800/30 z-10 items-center justify-between">
      <Link to="/">
        <h1 className="dark:text-white font-bold font-logo text-2xl">Plus</h1>
      </Link>
      {showSearch && (
        <div
          className={`max-w-96 w-full shadow rounded-full dark:bg-neutral-700/40 px-3 flex justify-between items-center py-2 gap-4 ${
            isAuthenticated ? "" : "hidden md:flex"
          } `}
        >
          <form
            className="items-center flex gap-3 justify-between w-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Search className="text-neutral-400 w-5" />
            <input
              autoComplete="off"
              {...register("query")}
              className="bg-transparent dark:text-white dark:placeholder:text-neutral-700 w-full outline-none border-none"
              placeholder="search article, author or topics..."
              type="text"
            />
            <X
              onClick={onClick}
              className="w-5 cursor-pointer text-neutral-400"
            />
          </form>
        </div>
      )}
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
              className="text-white capitalize dark:bg-white bg-black px-4 py-2 rounded-full dark:text-black"
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
