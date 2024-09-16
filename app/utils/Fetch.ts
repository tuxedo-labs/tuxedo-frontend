import axios from "axios";
import { API } from "~/utils/api";

export const Fetch = axios.create({
  baseURL: API,
  headers: {
    "Content-Type": "application/json",
  },
});
