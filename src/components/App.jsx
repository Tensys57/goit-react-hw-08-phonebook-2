// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from 'redux/operations';

// import { selectError, selectIsLoading } from 'redux/selectors';

import { Navigate, Route, Routes } from 'react-router-dom';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { HomePage } from 'pages/HomePage/HomePage';
import { Layout } from './Layout/Layout';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';
import { useSelector } from 'react-redux';
import { selectIsAuth } from 'redux/Auth/AuthSelectors';

export const App = () => {
  const IsAuth = useSelector(selectIsAuth);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="*" element={<NotFoundPage />} />
        <Route index element={<Navigate to="/contacts" />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};
