import React from "react";
import { useForm } from "react-hook-form";
import { signupSchema, type SignupInput } from "../../utils/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignup } from "../../features/auth/hooks";
import AuthInput from "./AuthInput";

const SignupForm: React.FC = () => {
  const signupMutation = useSignup();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupInput>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: SignupInput) => {
    signupMutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <AuthInput
        label="First Name"
        {...register("first_name")}
        error={errors.first_name}
        placeholder="Abebe"
      />
      <AuthInput
        label="Last Name"
        {...register("last_name")}
        error={errors.last_name}
        placeholder="Beso"
      />
      <AuthInput
        label="Email"
        type="email"
        {...register("email")}
        error={errors.email}
        placeholder="you@exaple.com"
      />
      <AuthInput
        label="Password"
        type="password"
        {...register("password")}
        error={errors.password}
        placeholder="secure"
      />

      <button
        type="submit"
        disabled={signupMutation.isPending}
        className="w-full cursor-pointer  bg-black dark:bg-white dark:text-black text-white py-2 mt-4 rounded-lg"
      >
        {signupMutation.isPending ? "Signing up..." : "Sign Up"}
      </button>

      {signupMutation.error && (
        <p className="text-red-500 text-base">
          {signupMutation.error.response.data.message}
        </p>
      )}
    </form>
  );
};

export default SignupForm;
