

import { React } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';
import { changeFilter } from 'redux/slice';
// import PropTypes from 'prop-types';
import styles from './Filter.module.css';
import { nanoid } from 'nanoid';


  export const Filter = () => {
    // const filterId = nanoid();
    const dispatch = useDispatch();
    const filter = useSelector(state => state.contacts.filter);

    // const inputChange = e => {
    //   const changeValue = e.target.value;
    //   dispatch(changeFilter(changeValue));
    // };
    const inputChange = e => {
  dispatch(changeFilter(e.currentTarget.value))
}

 const filterId = nanoid();
    return (
      <div className={styles.filterInput}>
    <label htmlFor={filterId}>Find contacts by name</label>
    <input className={styles.filter} id={filterId} type="text" name="filter" value={filter} onChange={inputChange} placeholder='Enter name'/>
  </div>);
};

// Filter.propTypes = {
//   // value: PropTypes.string.isRequired,
//   changeFilter: PropTypes.func.isRequired,
// }