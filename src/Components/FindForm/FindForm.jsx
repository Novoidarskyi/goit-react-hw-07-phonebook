//Styles
import css from './FindForm.module.css';
//Utils
import { changeFilter } from 'redux/actions';
import { useSelector, useDispatch } from 'react-redux';

const FindForm = () => {
  const value = useSelector(s => s.filter);
  const dispatch = useDispatch();

  function onChange(event) {
    dispatch(changeFilter(event.target.value));
  }
  return (
    <>
      <h2 className={css.header}>Find by name</h2>
      <input
        className={css.input}
        type="text"
        onChange={onChange}
        value={value}
        placeholder="Enter to find"
      />
    </>
  );
};

export default FindForm;
