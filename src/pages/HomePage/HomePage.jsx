// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from 'redux/operations';
// import { selectError, selectIsLoading } from 'redux/selectors';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import { Outlet } from 'react-router-dom';
import css from './HomePage.module.css';

// const dispatch = useDispatch();
// const isLoading = useSelector(selectIsLoading);
// const error = useSelector(selectError);
// useEffect =
//   (() => {
//     dispatch(fetchContacts());
//   },
//   [dispatch]);

export const HomePage = () => {
  return (
    <div className={css.container}>
      <p className={css.main}>Phonebook</p>
      <ContactForm />
      <p className={css.title}>Contacts</p>
      {/* {isLoading && !error && <b>Request in progress...</b>} */}
      <Filter />
      <Contacts />
      <Outlet />
    </div>
  );
};
