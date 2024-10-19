import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup'; // Импорт Yup для валидации
import './Reg.scss';

const App = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  // Схема валидации для регистрации
  const signupSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters long')
      .required('Password is required'),
  });

  // Схема валидации для входа
  const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters long')
      .required('Password is required'),
  });

  // React Hook Form для регистрации
  const {
    register: registerSignup,
    handleSubmit: handleSignupSubmit,
    formState: { errors: signupErrors },
    reset: resetSignupForm,
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  // React Hook Form для входа
  const {
    register: registerLogin,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors },
    reset: resetLoginForm,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const toggleForm = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  const onSignupSubmit = (data) => {
    console.log('Signup Successful', data);
    resetSignupForm(); // Очищаем поля после успешной регистрации
  };

  const onLoginSubmit = (data) => {
    console.log('Login Successful', data);
    resetLoginForm(); // Очищаем поля после успешного входа
  };

  return (
    <div className="form-structor">
      <div className={`signup ${isLoginVisible ? 'slide-up' : ''}`}>
        <h2 className="form-title" id="signup" onClick={toggleForm}>
          <span>or</span>Sign up
        </h2>
        <form onSubmit={handleSignupSubmit(onSignupSubmit)} className="form-holder">
          <input
            type="text"
            className="input"
            placeholder="Name"
            {...registerSignup('name')}
          />
          {signupErrors.name && <p className="error">{signupErrors.name.message}</p>}

          <input
            type="email"
            className="input"
            placeholder="Email"
            {...registerSignup('email')}
          />
          {signupErrors.email && <p className="error">{signupErrors.email.message}</p>}

          <input
            type="password"
            className="input"
            placeholder="Password"
            {...registerSignup('password')}
          />
          {signupErrors.password && <p className="error">{signupErrors.password.message}</p>}

          <button className="submit-btn" type="submit">Sign up</button>
        </form>
      </div>

      <div className={`login ${isLoginVisible ? '' : 'slide-up'}`}>
        <div className="center">
          <h2 className="form-title" id="login" onClick={toggleForm}>
            <span>or</span>Log in
          </h2>
          <form onSubmit={handleLoginSubmit(onLoginSubmit)} className="form-holder">
            <input
              type="email"
              className="input"
              placeholder="Email"
              {...registerLogin('email')}
            />
            {loginErrors.email && <p className="error">{loginErrors.email.message}</p>}

            <input
              type="password"
              className="input"
              placeholder="Password"
              {...registerLogin('password')}
            />
            {loginErrors.password && <p className="error">{loginErrors.password.message}</p>}

            <button className="submit-btn" type="submit">Log in</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
