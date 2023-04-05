import { useState, useContext } from 'react';
import ContactContext from './ContactContext';

const SearchContact = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { searchContacts } = useContext(ContactContext);

  const handleSearch = () => {
    const results = searchContacts(searchTerm);
    onSearch(results);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Rechercher un contact"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Rechercher</button>
    </div>
  );
};

export default SearchContact;
