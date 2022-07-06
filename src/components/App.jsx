import { Component } from 'react';

import { Box, StyledTitle } from './StyledComponent';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { MyForm } from './Form/MyForm';

const LS_KEY = 'contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    try {
      const contacts = JSON.parse(localStorage.getItem(LS_KEY));
      if (contacts) {
        this.setState({ contacts });
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentDidUpdate(pP, pS) {
    if (pS.contacts !== this.state.contacts) {
      const contactsJSON = JSON.stringify(this.state.contacts);
      localStorage.setItem(LS_KEY, contactsJSON);
    }
  }

  addConntacts = value => {
    const nameLowerCase = value.name.toLowerCase();

    this.setState(pS => {
      const { contacts } = pS;

      const isName = ({ name }) => {
        return name.toLowerCase() === nameLowerCase;
      };

      const newContacts = contacts.find(isName);

      if (newContacts) {
        window.alert(`${value.name} is already in contacts.`);
      }

      return {
        contacts: newContacts ? [...pS.contacts] : [...pS.contacts, value],
      };
    });
  };

  remuveContact = id => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);

    this.setState({ contacts: [...newContacts] });
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return visibleContacts;
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Box as="main" p={4}>
        <StyledTitle>Phonebook</StyledTitle>

        <MyForm onSubmit={this.addConntacts} />

        <StyledTitle as="h2">Contacts</StyledTitle>

        <Filter value={filter} onChange={this.changeFilter} />

        <ContactsList
          contacts={visibleContacts}
          remuveContact={this.remuveContact}
        />
      </Box>
    );
  }
}
