import React from 'react';
import { Field } from 'formik';

import { COATS } from 'constants.js';

import Style from './Form.style.js';

const HorseSellingForm = ({ values, setFieldValue }) => (
  <Style.Container>
    <h1>Sell your horse</h1>
    <Style.FormContainer>
      <label htmlFor="name">Name</label>
      <Field name="name" />

      <label htmlFor="sex">Sex</label>
      <Field name="sex" type="radio" value="male" />
      <Style.RadioLabel>Male</Style.RadioLabel>
      <Field name="sex" type="radio" value="female" />
      <Style.RadioLabel>Female</Style.RadioLabel>

      <label htmlFor="birthdate">Date of birth</label>
      <Field name="birthdate" type="date" />

      <label htmlFor="description">Description</label>
      <Field name="description" component="textarea" />

      <label htmlFor="coat">Coat</label>
      <Field component="select" name="coat">
        <option key="" disabled value="">
          -- select an option --
        </option>
        {COATS.map(coat => (
          <option key={coat.value} value={coat.value}>
            {coat.label}
          </option>
        ))}
      </Field>

      <Style.ButtonContainer>
        <button type="save">Submit</button>
      </Style.ButtonContainer>
    </Style.FormContainer>
  </Style.Container>
);

export default HorseSellingForm;
