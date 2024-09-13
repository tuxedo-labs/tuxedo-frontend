import { useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import { API } from "~/utils/api";
import { jwtDecode } from "jwt-decode";

export const useAuth = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState<"admin" | "member" | null>(null);

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`${API}/users/profile`, {
          headers: {
            "Content-Type": "application/json",
            "x-token": token,
          },
        });
        const decoded: any = jwtDecode(token);
        const userRole = decoded.role;
        setRole(userRole === "admin" ? "admin" : "member");
        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    verifyToken();
  }, []);

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate("/auth/logout");
    }
  }, [loading, isAuthenticated, navigate]);

  return { isAuthenticated, loading, role };
};
