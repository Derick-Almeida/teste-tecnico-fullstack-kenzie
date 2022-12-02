import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root{
        --white: #ffffff;
        --black: #000000;
        --pink: #ff506f;
    }
    body{}
`;

export const ThemeForm = styled.div`
  /* background: #008f3b; */

  display: flex;
  flex-direction: column;
  gap: 20px;
`;
