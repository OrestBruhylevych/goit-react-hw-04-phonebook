export const ContactsItem = ({ contacts, remuveContact }) => {
  const contactsItems = contacts.map(({ name, id, number }) => {
    return (
      <li key={id} name={name}>
        {name}
        {`: ${number}`}
        <button type="button" onClick={() => remuveContact(id)}>
          Delete
        </button>
      </li>
    );
  });
  return <>{contactsItems}</>;
};
