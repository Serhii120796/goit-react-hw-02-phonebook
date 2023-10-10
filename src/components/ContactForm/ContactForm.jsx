import { Formik } from 'formik';
import * as yup from 'yup';
import { StyleForm, FormWraper, InputTitle, FieldWraper, StyleField, StyleErrorMessage} from './ContactForm.styled';
import { Button } from '../ContactItem/ContactItem.styled';

const schema = yup.object().shape({
  name: yup.string().min(2, 'Enter a name').required("Enter a name"),
  number: yup.number().min(9, 'Enter a name').required('Enter a phone number'),
});

export const ContactForm = ({addContact}) => {

  const handleSubmit = (values, { resetForm }) => {
    addContact(values)
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <StyleForm autoComplete="off">
        <FormWraper>
          <label>
            <InputTitle>Name</InputTitle>
            <FieldWraper>
              <StyleField type="text" name="name" />
              <StyleErrorMessage name="name" component="div" />
            </FieldWraper>
            
          </label>
          <label>
            <InputTitle>Number</InputTitle>
            <FieldWraper>
              <StyleField type="tel" name="number" />
            <StyleErrorMessage name="number" component="div" />
            </FieldWraper>
          </label>
          <Button type="submit">Add contact</Button>
        </FormWraper>
      </StyleForm>
    </Formik>
  );
};
