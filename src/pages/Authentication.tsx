import React from "react";
import AuthForm from "../components/auth/AuthForm";

const AuthenticationPage: React.FC = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <AuthForm />
    </div>
  );
};

export default AuthenticationPage;
