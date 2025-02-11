import { css, Global, useTheme } from '@emotion/react';
import React from 'react';
import { Theme } from './theme';

const createGlobalStyles = (theme: Theme) => css`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Lato:wght@100;300;400;700;900&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body,
  html {
    height: 100%;
    font-family: ${theme.typography.fontFamily}, 'Lato', sans-serif;
  }

  body {
    background: linear-gradient(
        ${theme.colors.background},
        ${theme.colors.cardBackground}
      ),
      url('/background.png') no-repeat center center fixed;
    background-size: cover;
    color: ${theme.colors.text};
    line-height: 1.6;
    min-height: 100vh;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.2s ease;

    &:hover {
      color: ${theme.colors.primary};
    }
  }

  input,
  button {
    font-family: ${theme.typography.fontFamily};
  }

  button {
    cursor: pointer;
    transition: all 0.2s ease;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.7;
    }
  }
`;

const GlobalStyles: React.FC = () => {
  const theme = useTheme() as Theme;

  return <Global styles={createGlobalStyles(theme)} />;
};

export default GlobalStyles;
