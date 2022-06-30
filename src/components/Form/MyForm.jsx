import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const validationSchema = Yup.object({
  // name: Yup.string().email('Invalid email address').required('Required'),
  // password: Yup.string()
  //   .min(6, 'Минимум 6 символов')
  //   .max(20, 'Максимум 20 символов')
  //   .required('Обязательное поле'),
});

export const MyForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: '', id: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        values.id = nanoid();
        console.log(values);
        onSubmit(values);
        setSubmitting(false);
      }}
    >
      <Form autoComplete="off">
        <Field type="text" name="name" />
        <ErrorMessage name="name" />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
