import { Component } from 'react';
import { ContactsList } from './ContactsList/ContactsList';
import { MyForm } from './Form/MyForm';

export class App extends Component {
  state = {
    contacts: [
      {
        name: 'Orest Br',
        id: 1,
      },
    ],
    name: '',
  };

  addConntacts = value => {
    this.setState(pS => {
      const { contacts } = pS;
      const newContacts = contacts.filter(
        contact => contact.name === value.name
      );
      return {
        contacts:
          newContacts.length === 0 ? [...pS.contacts, value] : [...pS.contacts],
      };
    });
  };

  render() {
    const { contacts } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>

        <MyForm onSubmit={this.addConntacts} />

        <h2>Contacts</h2>

        <ContactsList contacts={contacts} />
      </div>
    );
  }
}
