import { Component } from 'react';
import { ContactsItem } from './ContactsItem';
import { ContactsStyledList } from './ContactsList.styled';
import PropTypes from 'prop-types';

export class ContactsList extends Component {
  render() {
    const { contacts, remuveContact } = this.props;

    return (
      <ContactsStyledList>
        <ContactsItem contacts={contacts} remuveContact={remuveContact} />
      </ContactsStyledList>
    );
  }
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape).isRequired,
  remuveContact: PropTypes.func.isRequired,
};
