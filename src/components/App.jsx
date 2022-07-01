import { Component } from 'react';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { MyForm } from './Form/MyForm';

export class App extends Component {
  state = {
    contacts: [
      { name: 'Orest Br', id: '1', number: '459-12-56' },
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addConntacts = value => {
    this.setState(pS => {
      const { contacts } = pS;
      const newContacts = contacts.filter(
        contact => contact.name === value.name
      );

      if (newContacts.length !== 0) {
        window.alert(`${value.name} is already in contacts.`);
      }

      return {
        contacts:
          newContacts.length === 0 ? [...pS.contacts, value] : [...pS.contacts],
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
      <div>
        <h1>Phonebook</h1>

        <MyForm onSubmit={this.addConntacts} />

        <h2>Contacts</h2>

        <Filter value={filter} onChange={this.changeFilter} />

        <ContactsList
          contacts={visibleContacts}
          remuveContact={this.remuveContact}
        />
      </div>
    );
  }
}
