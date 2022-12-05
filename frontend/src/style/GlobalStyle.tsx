import { createGlobalStyle } from "styled-components";
import bg from "../assets/background.jpg";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root{
        --white: #ffffff;
        --black: #000000;
        --pink-1: #ffa5be;
        --pink-2: #ff506f;
        --background-modal: #00000060;
    }
    body{
        background: var(--white);
        min-height: 100vh;
        min-width: 100%;
        background: var(--white) url(${bg}) no-repeat center;
  background-size: cover;
    }
    button {
        cursor: pointer;
        outline: none;
    }
    input{
        outline: none;
    }
`;
