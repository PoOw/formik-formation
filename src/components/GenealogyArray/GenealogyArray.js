import React from 'react';
import { Field } from 'formik';

import { RELATIONS } from 'constants.js';
import Style from './GenealogyArray.style.js';

const GenealogyArray = ({ form, push, remove }) => (
  <Style.Container>
    {form.values.genealogy.map((relation, index) => (
      <div key={index} className="array-line">
        <Field name={`genealogy[${index}].name`} placeholder="Name" />
        <Field name={`genealogy.${index}.age`} placeholder="Age" />
        <Field name={`genealogy.${index}.relation`} component="select">
          <option key="" disabled value="">
            Relation type
          </option>
          {RELATIONS.map(relation => (
            <option key={relation.value} value={relation.value}>
              {relation.label}
            </option>
          ))}
        </Field>
        <button type="button" onClick={() => remove(index)}>
          -
        </button>
      </div>
    ))}
    <button
      className="add-item"
      type="button"
      onClick={() => push({ name: '', age: '', relation: '' })}
    >
      Add an relation
    </button>
  </Style.Container>
);

export default GenealogyArray;
