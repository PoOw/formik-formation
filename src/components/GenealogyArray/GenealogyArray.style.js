import styled from 'styled-components';

export default {
  Container: styled.div`
    .array-line {
      display: flex;
      margin-bottom: 5px;

      input:not([type='radio']),
      select,
      button  {
        margin: 0;
        border-radius: 0;
      }

      button {
        margin-left: 5px;
        box-shadow: unset;
        border: solid 1px #fa5555;
        color: #fa5555;
        background-color: #fff;
      }
    }

    button.add-item {
      margin: 0;
      max-width: none;
      width: 100%;
      border: solid 1px #00915a;
      color: #00915a;
      background-color: #fff;
    }
  `
};
