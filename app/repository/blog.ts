import { API } from "~/utils/api";

export const GetAllBlog = async () => {
  try {
    const response = await fetch(`${API}/blog`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error;
  }
};

export const GetByIdBlog = async (id: string) => {
  try {
    const response = await fetch(`${API}/blog/${id}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error;
  }
};

export const DeleteBlog = async (id: string) => {
  try {
    const response = await fetch(`${API}/blog/${id}`, {
      method: "DELETE",
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error;
  }
};
