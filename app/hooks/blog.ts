import { useEffect, useState } from "react";
import { BlogData, BlogResponse } from "~/types/BlogType";
import { GetAllBlog } from "~/repository/blog";
export const useBlogGetAll = () => {
  const [blogs, setBlogs] = useState<BlogData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response: BlogResponse = await GetAllBlog();
        setBlogs(response.data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);
  return {
    blogs,
    loading,
    error,
  };
};
