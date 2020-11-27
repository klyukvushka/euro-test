import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { Theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    box-sizing: border-box;
  }
  *:active, *:focus {
    outline: 0;
  }

  body {
    color: ${(props: Theme) => props.theme.colors.text};
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 24px;
    background-color: #ffffff;
  }

  a, .link {
    font-size: 16px;
    line-height: 24px;
    text-decoration: none;
    cursor: pointer;
  }

  ul {
    padding-left: 0; 
    margin: 0;
    list-style: none
  }
`;
