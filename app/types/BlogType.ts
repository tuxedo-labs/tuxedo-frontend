import React from "react";
export interface BlogSectionType {
  children: React.ReactNode;
}

export interface Author {
  ID: number;
  name: string;
  email: string;
}

export interface BlogData {
  ID: string;
  title: string;
  description: string;
  thumbnail: string;
  author: Author;
  createdAt: string;
  updatedAt: string;
}

export interface BlogResponse {
  data: BlogData[];
}

