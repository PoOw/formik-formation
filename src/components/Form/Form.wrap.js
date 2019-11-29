// @flow
import { withFormik } from 'formik';
import Form from './Form';

const initialValues = {
  name: '',
  sex: '',
  birthdate: '',
  description: '',
  coat: '',
  subcoat: '',
  genealogy: []
};

export default withFormik({
  mapPropsToValues: () => initialValues,
  handleSubmit: (values, { props }) => {
    console.log(values);
    alert('Your form was correctly submitted');
  }
})(Form);
