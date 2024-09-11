import { useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import { API } from "~/utils/api";

export const useAuth = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

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

  return { isAuthenticated, loading };
};
