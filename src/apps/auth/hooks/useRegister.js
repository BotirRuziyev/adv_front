import { useState } from "react";
import axiosInstance from "../../../api/AuthInstanse.js";

const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(null);

  const register = async (formData) => {
    setLoading(true);
    setServerError(null);
    try {
      const response = await axiosInstance.post("/auth/register", formData);
      return { success: true, message: "Регистрация успешна!" };
    } catch (error) {
      setServerError(error.response?.data?.message || "Ошибка регистрации");
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  return { register, loading, serverError };
};

export default useRegister;
