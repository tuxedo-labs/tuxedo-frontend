import React from "react";

export interface AuthFormType {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}

export interface DefaultInputType {
  type: "text" | "email" | "password" | "number" | "tel" | "date";
  required?: boolean;
  value?: string;
  label: string;
  //children: React.ReactNode;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface DefaultButtonProps {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
}

export interface ArticleCardType {
  date: string;
  title: string;
  description: string;
  authorName: string;
  authorAvatar: string;
  readMoreLink: string;
}

export interface ArticleHeaderType {
  name: string;
  time: string;
  title: string;
  avatar: string;
}
