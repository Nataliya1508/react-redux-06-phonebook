import { React } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/slice';
import styles from './Filter.module.css';



  export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.contacts.filter);

    const inputChange = e => {
      const changeValue = e.target.value;
      dispatch(changeFilter(changeValue));
    };

    return (
      <div className={styles.filterInput}>
    <label>Find contacts by name</label>
    <input className={styles.filter} type="text" name="number" value={filter} onChange={inputChange} placeholder='Enter name'/>
  </div>);
};
