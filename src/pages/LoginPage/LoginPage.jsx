import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { loginThunk } from 'redux/Auth/AuthOperations';
import { loginUser } from 'services/contactsService';

import css from './LoginPage.module.css';

export const LoginPage = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = event => {
    const { value, name } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };
  console.log('values :>> ', values);

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await loginUser(values);
      await dispatch(loginThunk(values)).unwrap();
      navigate('/contacts', { replace: true });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={css.container}>
      <form
        // action="#"
        className="css.registerForm"
        onSubmit={handleSubmit}
      >
        <h1 className={css.title}>Please Log In</h1>

        <div className={css.inputWrapper}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="username"
            value={values.email}
            onChange={handleChange}
            className={css.inputValue}
          />
          <label htmlFor="email">Email address</label>
        </div>

        <div className={css.inputWrapper}>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            value={values.password}
            onChange={handleChange}
            className={css.inputValue}
          />
          <label htmlFor="password">Password</label>
        </div>

        <Link to="/join" className={css.formLink}>
          Dont have account?
        </Link>

        <button className={css.formButton} type="submit">
          Log In
        </button>
      </form>
    </div>
  );
};
