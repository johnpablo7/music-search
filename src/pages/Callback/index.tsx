import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";

export const Callback = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.slice(1));
    login(params.get("access_token") || "");
    navigate("/");
  }, [login, navigate]);

  return null;
};
