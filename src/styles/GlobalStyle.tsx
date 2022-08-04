import { css, Global } from '@emotion/react';

const GlobalStyle = () => (
  <Global
    styles={css`
      html,
      body,
      #root {
        font-size: 16px;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
      }
      * {
        box-sizing: inherit;
      }
    `}
  />
);

export default GlobalStyle;
