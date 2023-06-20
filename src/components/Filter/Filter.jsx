import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contactsSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <>
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          className={css.filterInput}
          value={filter}
          onChange={event => dispatch(changeFilter(event.target.value))}
        />
      </label>
    </>
  );
};
