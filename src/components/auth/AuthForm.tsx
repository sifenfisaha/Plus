import React from "react";
import { Link, useParams } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const AuthForm: React.FC = () => {
  const { mode } = useParams();
  const isLogin = mode === "signin";

  return (
    <>
      <div className="mb-4">
        <Link className="" to="/">
          <h1 className="dark:text-white text-center mb-4 font-bold font-logo  text-3xl">
            Plus
          </h1>
        </Link>
        <p className="text-base text-gray-400 mb-4">
          {isLogin
            ? "Welcome back! Please sign in to your account."
            : "Join our community of writers and readers."}
        </p>
      </div>
      <div className="w-lg mx-auto p-6 border border-gray-100 dark:border-gray-700/50 rounded-xl shadow-sm ">
        <h1 className="text-xl dark:text-white font-semibold">
          {isLogin ? "Login" : "Create Account"}
        </h1>
        <p className="text-base text-gray-400 mb-4">
          {isLogin
            ? "Enter your email and password to access your account"
            : "Enter your information to create a new account"}
        </p>

        {isLogin ? <LoginForm /> : <SignupForm />}
        <p className="text-base flex items-center justify-center pt-4 w-full text-gray-400">
          {isLogin ? (
            <p>
              Don't have an account?{" "}
              <Link
                to={"/auth/signup"}
                className="text-black dark:text-white underline cursor-pointer"
              >
                Sign up
              </Link>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <Link
                to={"/auth/signin"}
                className="text-black underline dark:text-white cursor-pointer"
              >
                Sign in
              </Link>
            </p>
          )}
        </p>
      </div>
    </>
  );
};

export default AuthForm;
