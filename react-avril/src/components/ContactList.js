import { useContext } from 'react';
import ContactContext from './ContactContext';

const ContactList = () => {
  const { contacts, deleteContact } = useContext(ContactContext);

  return (
    <ul>
      {contacts.map((contact, index) => (
        <li key={index}>
          {contact.name} - {contact.email} - {contact.phone}
          <button onClick={() => deleteContact(index)}>Supprimer</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
