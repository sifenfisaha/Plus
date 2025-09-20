import React from "react";
import type { FieldError } from "react-hook-form";

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError;
}

const AuthInput = React.forwardRef<HTMLInputElement, AuthInputProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div>
        <label className="block mb-1 dark:text-white">{label}</label>
        <input
          ref={ref}
          {...props}
          className={`w-full dark:border dark:border-neutral-700 border border-neutral-200 dark:bg-neutral-800 placeholder:text-neutral-600 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:focus:ring-neutral-700 dark:text-white px-3 py-1 rounded ${
            error ? "border-red-500" : "border-gray-300"
          }`}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
      </div>
    );
  }
);

AuthInput.displayName = "AuthInput";

export default AuthInput;
