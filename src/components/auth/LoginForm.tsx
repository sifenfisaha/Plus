import React from "react";
import { useForm } from "react-hook-form";
import { loginSchema, type LoginInput } from "../../utils/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "../../features/auth/hooks";
import AuthInput from "./AuthInput";

const LoginForm: React.FC = () => {
  const loginMutation = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });
  if (loginMutation.error) {
    console.log(loginMutation.error.response.data);
  }

  const onSubmit = (data: LoginInput) => {
    loginMutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex flex-col">
      <AuthInput
        label="Email"
        type="email"
        {...register("email")}
        error={errors.email}
        placeholder="you@example.com"
      />

      <AuthInput
        label="Password"
        type="password"
        {...register("password")}
        error={errors.password}
        placeholder="password"
      />

      <button
        type="submit"
        disabled={loginMutation.isPending}
        className="w-full mt-4 py-2  bg-black dark:bg-white dark:text-black text-white rounded-lg"
      >
        {loginMutation.isPending ? "Logging in..." : "Login"}
      </button>

      {loginMutation.error && (
        <p className="text-red-500 text-base">
          {loginMutation.error.response.data.message}
        </p>
      )}
    </form>
  );
};

export default LoginForm;
