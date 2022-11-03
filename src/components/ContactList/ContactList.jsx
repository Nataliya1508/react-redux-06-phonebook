import { React } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';
import styles from './ContactList.module.css';
import { removeContact } from 'redux/slice';
import {getContacts} from 'redux/selectors'



export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilteredContacts);
  
    const filtersContacts = (contacts, filter) => {
      if (!filter) {
        return contacts;
      }
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  
  // const value = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
    
     const contactsList = filtersContacts(contacts, filter);


    return (
    <div className={styles.contacts}>
      <h2>Contacts</h2>
      <ul>
        {contacts.length === 0 ? false : (
          <>
            {contactsList.map(contact => {
              return (
                <li key={contact.id}>
                  <p>
                    <span>{contact.name} : </span>
                    {contact.number}
                  </p>
                  <button type='button'
                    onClick={() => 
                      dispatch(removeContact(contact.id))}>
                    X
                  </button>
                </li>
              );
      })}
          </>
        )}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)),
    // onRemove: PropTypes.func.isRequired,
}

export default ContactList;