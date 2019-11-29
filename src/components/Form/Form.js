import React from 'react';
import { Field } from 'formik';

import Style from './Form.style.js';

const HorseSellingForm = ({ values, setFieldValue }) => (
  <Style.Container>
    <h1>Sell your horse</h1>
    <Style.FormContainer>
      <label htmlFor="name">Name</label>
      <Field name="name" />

      <Style.ButtonContainer>
        <button type="save">Submit</button>
      </Style.ButtonContainer>
    </Style.FormContainer>
  </Style.Container>
);

export default HorseSellingForm;
