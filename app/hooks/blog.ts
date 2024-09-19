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
        setLoading(true);
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
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);
  const [loading, setLoading] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setLoading(true);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchQuery) {
        const filtered = blogs.filter((blog) =>
          blog.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        //console.log(searchQuery);
        setFilteredBlogs(filtered);
      } else {
        setFilteredBlogs(blogs);
      }
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchQuery, blogs]);

  return {
    searchQuery,
    handleSearch,
    filteredBlogs,
    loading, // Return the loading state
  };
};
