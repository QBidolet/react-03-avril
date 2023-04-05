import { createContext, useState } from 'react';

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const deleteContact = (index) => {
    setContacts(contacts.filter((_, i) => i !== index));
  };

  const searchContacts = (searchTerm) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <ContactContext.Provider
      value={{ contacts, addContact, deleteContact, searchContacts }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactContext;
