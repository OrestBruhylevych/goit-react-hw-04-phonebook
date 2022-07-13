import PropTypes from 'prop-types';

export const ContactsItem = ({ name, id, number, remuveContact }) => {
  return (
    <li id={id} name={name}>
      {name}: {number}
      <button type="button" onClick={() => remuveContact(id)}>
        Delete
      </button>
    </li>
  );
};

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  remuveContact: PropTypes.func.isRequired,
};
