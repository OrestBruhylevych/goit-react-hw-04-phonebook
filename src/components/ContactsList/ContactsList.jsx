import { ContactsItem } from './ContactsItem';
import { ContactsStyledList } from './ContactsList.styled';
import PropTypes from 'prop-types';

export const ContactsList = ({ contacts, remuveContact }) => {
  return (
    <ContactsStyledList>
      <ContactsItem contacts={contacts} remuveContact={remuveContact} />
    </ContactsStyledList>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape).isRequired,
  remuveContact: PropTypes.func.isRequired,
};
