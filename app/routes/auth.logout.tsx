import { useEffect } from "react";
import { Navigate } from "@remix-run/react";

export default function AuthLogout() {
  useEffect(() => {
    localStorage.removeItem("accessToken");
  }, []);
  return <Navigate to="/auth/login" />;
}

