import { Component } from 'react';
import { ContactsItem } from './ContactsItem';

export class ContactsList extends Component {
  render() {
    const { contacts } = this.props;

    return (
      <ul>
        <ContactsItem contacts={contacts} />
      </ul>
    );
  }
}
