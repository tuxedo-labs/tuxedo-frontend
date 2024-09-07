import React from "react"
import { AuthFormType } from "~/types/FormType"

export const AuthForm: React.FC<AuthFormType> = ({ onSubmit, children }) => {
  return (
    <form className="max-w-sm mx-auto" onSubmit={onSubmit}>
      {children}
    </form>
  )
}
