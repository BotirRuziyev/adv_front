import { useState } from 'react';
import '../styles/auth.css';
import DataInput from '../components/data-input.jsx';
import { label } from '../components/data.js';
import useLoginForm from '../hooks/user-login-val.js';
import ErrorMessage from '../components/errors-mes.jsx';

function App() {
  const { values, errors, handleChange, handleSubmit } = useLoginForm(
    { email: '', password: '' },  // initialValues
    false  // isRegisterForm (вход, без валидации пароля)
  );

  const onFormSubmit = (formData) => {
    console.log('Данные формы:', formData);
  };

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
              name: 'email',
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
              name: 'password',
              value: values.password,
              onChange: handleChange,
              placeholder: label[1].input,
            }}
          />

          <button type="submit" id="sign-in">Войти</button>
          <div id="reg-label">Нет аккаунта? <a href="/register"> Зарегистрироваться</a></div>
        </form>
      </div>
      <div className="dark-back"></div>
    </>
  );
}

export default App;
