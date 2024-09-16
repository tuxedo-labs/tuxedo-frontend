import { Fetch } from "~/utils/Fetch";
import axios from "axios";

export const authRegister = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const response = await Fetch.post("/auth/register", {
      name,
      email,
      password,
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || "Registration failed");
    } else {
      console.error("There was a problem with the request:", error);
      throw error;
    }
  }
};

export const authLogin = async (email: string, password: string) => {
  try {
    const response = await Fetch.post("/auth/login", {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || "Login failed");
    } else {
      console.error("There was a problem with the request:", error);
      throw error;
    }
  }
};

export const verifyToken = async (token: string) => {
  try {
    const response = await Fetch.post("/auth/verify-token", {
      token,
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        error.response.data.message || "Token verification failed"
      );
    } else {
      console.error("There was a problem with the request:", error);
      throw error;
    }
  }
};
