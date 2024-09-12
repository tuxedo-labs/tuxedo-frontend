import { useEffect, useState } from "react";
import { BlogData, BlogDetailResponse, BlogResponse } from "~/types/BlogType";
import { GetAllBlog, GetByIdBlog } from "~/repository/blog";
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

export const useBlogGetById = (id: string) => {
  const [blog, setBlog] = useState<BlogData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response: BlogDetailResponse = await GetByIdBlog(id);
        console.log(id);
        console.table(response.data);
        setBlog(response.data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBlog();
    }
  }, [id]);

  return {
    blog,
    loading,
    error,
  };
};
