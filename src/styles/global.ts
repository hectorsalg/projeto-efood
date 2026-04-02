import styled, { createGlobalStyle } from 'styled-components';

export const colors = {
  primary : '#E66767',
  secondary: '#FFEBD9',
  tertiary: '#FFF8F2',
  white: '#FFFFFF'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: ${colors.tertiary};
    color: ${colors.primary};
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;

export const MainContainer = styled.main`
  max-width: 1024px;
  margin: 56px auto 120px;
  padding: 0 20px;
`;
