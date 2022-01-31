import { css } from "@emotion/react";

export const GlobalStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    min-height: 100vh;
    min-width: 100vw;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
  }
`;
