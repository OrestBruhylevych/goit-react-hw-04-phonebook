export const ContactsItem = ({ contacts }) => {
  const contactsItems = contacts.map(({ name, id }) => {
    return (
      <li key={id} name={name}>
        {name}
      </li>
    );
  });
  return <>{contactsItems}</>;
};
