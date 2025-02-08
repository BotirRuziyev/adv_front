import { useState } from "react";
import "../styles/auth.css";
import DataInput from "../components/data-input.jsx";
import { label } from "../components/data.js";
import useLoginForm from "../hooks/user-login-val.js";
import ErrorMessage from "../components/errors-mes.jsx";
import useLogin from "../hooks/useAuth.js"; // Подключаем хук авторизации

function LoginPage() {
  const { values, errors, handleChange, handleSubmit } = useLoginForm(
    { email: "", password: "" },
    false // Вход (без валидации пароля)
  );

  const { login, loading, serverError } = useLogin();

  const onFormSubmit = async (formData) => {
    const result = await login(formData);
    if (result.success) {
      alert("Авторизация успешна!");
      window.location.href = "/dashboard"; // Перенаправляем в личный кабинет
    }
  };

  document.title = "Авторизация";

  return (
    <>
      <div className="container">
        <div className="label-container">
          <p className="label-element">Вход</p>
          <button className="label-element" id="close">X</button>
        </div>
        <form className="auth-block" onSubmit={(e) => handleSubmit(e, onFormSubmit)}>
          <DataInput
            type="email"
            text={label[0].text}
            input={{
              name: "email",
              value: values.email,
              onChange: handleChange,
              placeholder: label[0].input,
            }}
          />
          <ErrorMessage message={errors.email} />

          <DataInput
            type="password"
            text={label[1].text}
            input={{
              name: "password",
              value: values.password,
              onChange: handleChange,
              placeholder: label[1].input,
            }}
          />
          <ErrorMessage message={errors.password} />

          <div className="error-container">
            {serverError && <p className="error">{serverError}</p>}
          </div>
          <button type="submit" id="sign-in" disabled={loading}>
            {loading ? "Загрузка..." : "Войти"}
          </button>
          <div id="reg-label">Нет аккаунта? <a href="/auth/register"> Зарегистрироваться</a></div>
        </form>
      </div>
      <div className="dark-back"></div>
    </>
  );
}

export default LoginPage;
