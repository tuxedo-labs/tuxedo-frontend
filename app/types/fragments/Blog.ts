import React from "react";
export interface BlogSectionType {
  children: React.ReactNode;
}

export interface Author {
  ID: number;
  name: string;
  email: string;
  avatar: string;
}

export interface BlogData {
  ID: string;
  title: string;
  description: string;
  thumbnail: string;
  author: Author;
  content?: string;
  createdAt: string;
  updatedAt: string;
}

export interface BlogResponse {
  data: BlogData[];
}
export interface BlogDetailResponse {
  data: BlogData;
}

export interface BlogDetailSectionType {
  description: string;
  content: React.ReactNode;
  thumbnail: string;
}
