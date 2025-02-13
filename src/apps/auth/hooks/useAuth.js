import { useState } from "react";
import axiosInstance from "../../../api/AuthInstanse.js";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(null);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post("/auth/login", { email, password });

      if (response.data?.token) {
        localStorage.setItem("token", response.data.token);
        return { success: true, user: response.data.user };
      }
    } catch (error) {
      setServerError("Ошибка авторизации");
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, serverError };
};

export default useLogin;
