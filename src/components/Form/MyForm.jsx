import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  number: Yup.string().required('Number is required'),
});

export const MyForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: '', id: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        values.id = nanoid();
        console.log(values);
        onSubmit(values);
        setSubmitting(false);
      }}
    >
      <Form autoComplete="off">
        <Field
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <ErrorMessage name="name" />

        <Field
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <ErrorMessage name="number" />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
