import { useEffect, useState } from "react";
import {
  BlogData,
  BlogResponse,
  BlogDetailResponse,
} from "~/types/fragments/Blog";
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
        //console.log(response);
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

export const useSearchBlog = (blogs: BlogData[]) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return {
    searchQuery,
    handleSearch,
    filteredBlogs,
  };
};
