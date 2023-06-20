import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

import css from './RegisterPage.module.css';
import { loginThunk } from 'redux/Auth/AuthOperations';
import { createNewUser } from 'services/contactsService';

export const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialState = {
    name: '',
    email: '',
    password: '',
  };
  const [values, setValues] = useState(initialState);

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await createNewUser(values);

      await dispatch(
        loginThunk({
          name: values.name,
          email: values.email,
          password: values.password,
        })
      ).unwrap();
      navigate('/', { replace: true });
    } catch (error) {
      error(console.log(error.message));
    }
    setIsLoading(true);
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className={css.container}>
      <form
        // action="#"
        className={css.registerForm}
        onSubmit={handleSubmit}
      >
        <h1 className={css.formTitle}>Please Sign In</h1>

        <div className={css.inputWrapper}>
          <input
            id="name"
            name="name"
            type="name"
            autoComplete="off"
            value={values.name}
            onChange={handleChange}
            className={css.inputValue}
          />
          <label htmlFor="name">Name</label>
        </div>

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

        <Link to="/login" className={css.formLink}>
          Already has account?
        </Link>

        <button className={css.formButton} disabled={isLoading} type="submit">
          {isLoading ? 'Loading ....' : 'Sign In'}
        </button>
      </form>
    </div>
  );
};
