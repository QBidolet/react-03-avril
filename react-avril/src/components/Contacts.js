import { useState } from 'react';
import { ContactProvider } from './ContactContext';
import ContactList from './ContactList';
import AddContact from './AddContact';
import SearchContact from './SearchContact';
import ErrorBoundary from './ErrorBoundary';

function Contacts() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div>
      <ContactProvider>
        <ErrorBoundary>
          <h1>Gestionnaire de contacts</h1>
          <AddContact />
          <SearchContact onSearch={setSearchResults} />
          {searchResults.length > 0 ? (
            <div>
              <h2>Résultats de recherche :</h2>
              <ul>
                {searchResults.map((contact, index) => (
                  <li key={index}>
                    {contact.name} - {contact.email} - {contact.phone}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <ContactList />
          )}
        </ErrorBoundary>
      </ContactProvider>
    </div>
  );
}

export default Contacts;
