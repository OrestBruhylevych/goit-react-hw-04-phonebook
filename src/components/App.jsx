import { useState } from 'react';

import { Box, StyledTitle } from './StyledComponent';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { MyForm } from './Form/MyForm';

import { useLocalStorage } from '../hooks/useLocalStorage';

const contactsDefault = [
  { id: 'id-1', name: 'Rosie Simpson', number: '+459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '+443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '+645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '+227-91-26' },
];
const LS_KEY = 'contacts';

export function App() {
  const [contacts, setContacts] = useLocalStorage(LS_KEY, contactsDefault);
  const [filter, setFilter] = useState('');

  const addConntacts = value => {
    const nameLowerCase = value.name.toLowerCase();

    setContacts(prevState => {
      const newContact = prevState.find(
        contact => contact.name.toLocaleLowerCase() === nameLowerCase
      );

      if (newContact) {
        window.alert(`${value.name} is already in contacts.`);
      }

      return newContact ? [...prevState] : [...prevState, value];
    });
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return visibleContacts;
  };

  const remuveContact = id => {
    const newContacts = contacts.filter(contact => contact.id !== id);

    setContacts([...newContacts]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  return (
    <Box as="main" p={4}>
      <StyledTitle>Phonebook</StyledTitle>

      <MyForm onSubmit={addConntacts} />

      <StyledTitle as="h2">Contacts</StyledTitle>

      <Filter value={filter} onChange={changeFilter} />

      <ContactsList
        contacts={getVisibleContacts()}
        remuveContact={remuveContact}
      />
    </Box>
  );
}
