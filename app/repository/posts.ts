import { API } from "~/utils/api";

export const GetAllPosts = async () => {
  try {
    const response = await fetch(`${API}/posts`)
    const result = response.json();
    return result;
  } catch (error) {
    console.log(error) 
    throw error;
  }
};
