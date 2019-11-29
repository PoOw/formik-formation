import styled from 'styled-components';
import { Form } from 'formik';

export default {
  Container: styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    input:not([type='radio']),
    textarea,
    select {
      padding: 0.5rem;
      margin-bottom: 5px;
      font-size: 16px;
      width: 100%;
      display: block;
      border-radius: 4px;
      border: 1px solid #ccc;
      background-color: white;
      box-sizing: border-box;
    }

    input:focus,
    textarea:focus,
    select:focus {
      border-color: #007eff;
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
        0 0 0 3px rgba(0, 126, 255, 0.1);
      outline: none;
    }

    input.error,
    textarea.error,
    select.error {
      border-color: red;
    }

    label {
      margin-top: 20px;
      font-weight: bold;
      display: block;
      margin-bottom: 0.5rem;
    }

    .input-feedback {
      color: red;
      margin-top: 0.25rem;
    }

    button {
      max-width: 150px;
      margin: 20px 0;
      padding: 12px 20px;
      border-style: none;
      border-radius: 5px;
      background-color: #08c;
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
      font-size: 17px;
      font-weight: 500;
      color: #fff;
      cursor: pointer;
      outline: none;
      -webkit-appearance: none;
    }

    button.outline {
      background-color: #eee;
      border: 1px solid #aaa;
      color: #555;
    }
  `,
  FormContainer: styled(Form)`
    width: 500px;
  `,
  RadioLabel: styled.span`
    margin-right: 20px;
    margin-left: 5px;
  `,
  ButtonContainer: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `
};
