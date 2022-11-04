import { removeContact } from 'redux/slice';
import { useDispatch } from 'react-redux';
import styles from './ContactListItem.module.css';
import PropTypes from 'prop-types';

const ContactListItem = ({ id, number, name }) => {
  const dispatch = useDispatch();
    return (
      <div className={styles.contacts}>
     <li key={id}>
                  <p>
                    <span>{name} : </span>
                    {number}
                  </p>
                  <button type='button'
                    onClick={() =>
                      dispatch(removeContact(id))}>
                     
                    X
                  </button>
            </li>
            </div>
  );
};

ContactListItem.protoTypes = {
  id: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  removeContact: PropTypes.func.isRequired,
};

export default ContactListItem;