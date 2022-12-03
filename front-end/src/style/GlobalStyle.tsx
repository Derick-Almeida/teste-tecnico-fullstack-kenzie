import { createGlobalStyle } from "styled-components";

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
    }
    body{
        background: var(--white);
        min-height: 100vh;
        min-width: 100%;
    }
    button {
        cursor: pointer;
        outline: none;
    }
    input{
        outline: none;
    }
`;
