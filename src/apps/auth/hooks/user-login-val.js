import { useState } from 'react';

const useLoginForm = (initialValues, isRegisterForm = false) => {  // Добавляем параметр isRegisterForm
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const validate = (name, value) => {
    if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      return ['Некорректный email'];
    }

    // Проверка пароля только в случае регистрации
    if (isRegisterForm && name === 'password') {
      const errors = [];

      if (value.length < 6) {
        errors.push('Пароль должен быть не менее 6 символов');
      }
      if (!/[A-Z]/.test(value)) {
        errors.push('Пароль должен содержать хотя бы одну заглавную букву');
      }
      if (!/[a-z]/.test(value)) {
        errors.push('Пароль должен содержать хотя бы одну строчную букву');
      }
      if (!/[0-9]/.test(value)) {
        errors.push('Пароль должен содержать хотя бы одну цифру');
      }

      return errors.length > 0 ? errors : null;  // Возвращаем ошибки, если есть
    }

    return null;  // Нет ошибок
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

    const error = validate(name, value);
    setErrors({ ...errors, [name]: error });  // Сохраняем ошибки (или null, если их нет)
  };

  const handleSubmit = (e, callback) => {
    e.preventDefault();

    let formValid = true;
    const newErrors = {};

    Object.keys(values).forEach((key) => {
      if (!values[key]) {
        formValid = false;
        newErrors[key] = ['Поле не может быть пустым'];
      } else {
        const error = validate(key, values[key]);
        if (error) {
          formValid = false;
          newErrors[key] = error;
        }
      }
    });

    setErrors(newErrors);

    if (formValid && callback) {
      callback(values);
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useLoginForm;
