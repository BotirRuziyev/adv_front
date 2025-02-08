import { useState } from "react";
import "../styles/auth.css";
import DataInput from "../components/data-input.jsx";
import { label } from "../components/data.js";
import useLoginForm from "../hooks/user-login-val.js";
import ErrorMessage from "../components/errors-mes.jsx";
import useRegister from "../hooks/useRegister";

function RegisterPage() {
  const { values, errors, handleChange, handleSubmit } = useLoginForm(
    { email: "", password: "" },
    true // Регистрация (с валидацией пароля)
  );

  const { register, loading, serverError } = useRegister();

  const onFormSubmit = async (formData) => {
    const result = await register(formData);
    if (result.success) {
      alert("Регистрация успешна! Теперь войдите в аккаунт.");
      window.location.href = "/login"; // Перенаправляем на страницу входа
    }
  };

  document.title = "Регистрация";

  return (
    <>
      <div className="container">
        <div className="label-container">
          <p className="label-element">Регистрация</p>
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
            {loading ? "Загрузка..." : "Зарегистрироваться"}
          </button>
        </form>
      </div>
      <div className="dark-back"></div>
    </>
  );
}

export default RegisterPage;
