import { useState } from "react";
import axiosInstance from "../../../api/AuthInstanse.js";

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(null);

  const login = async (formData) => {
    setLoading(true);
    setServerError(null);
    try {
      const response = await axiosInstance.post("/auth/login", formData);
      localStorage.setItem("token", response.data.token); // Сохраняем токен
      return { success: true, message: "Авторизация успешна!" };
    } catch (error) {
      setServerError(error.response?.data?.message || "Ошибка входа");
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, serverError };
};

export default useAuth;
