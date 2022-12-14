import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset} 
  * {
    box-sizing: border-box;
    outline: none;
    border: none;
  }
  body {
    color: #000;
    background-color:#F4F4F4;
  }
  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
