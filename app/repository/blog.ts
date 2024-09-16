import { API } from "~/utils/api";
import { Fetch } from "~/utils/Fetch";

export const GetAllBlog = async () => {
  try {
    const response = await Fetch.get(`/blog`);
    return response.data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error;
  }
};

export const GetByIdBlog = async (id: string) => {
  try {
    const response = await Fetch.get(`/blog/${id}`);
    return response.data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error;
  }
};

export const DeleteBlog = async (id: string) => {
  try {
    const response = await Fetch.delete(`/blog/${id}`);
    return response.data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error;
  }
};
