import React from "react";
import { AuthFormType } from "~/types/Elemtents";

export const AuthForm: React.FC<AuthFormType> = ({ onSubmit, children }) => {
  return (
    <form className="mt-8 space-y-6" onSubmit={onSubmit}>
      {children}
    </form>
  );
};

