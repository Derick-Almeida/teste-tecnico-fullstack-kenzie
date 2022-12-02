import styled from "styled-components";

export const ThemeInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: calc(0.5vh + 0.5vw + 0vmin);
  position: relative;

  > p {
    /* color: var(--grey-3); */
    color: #000;
    font-size: calc(0.7vh + 0.8vw + 0vmin);
  }
  > div {
    display: flex;
    align-items: center;
    position: relative;

    > input {
      /* background: var(--grey-1); */
      background: #fff;
      /* border: calc(0.1vh + 0.1vw) solid var(--grey-2); */
      border: calc(0.1vh + 0.1vw) solid #000;
      border-radius: calc(0.3vh + 0.3vw);
      height: calc(4vh + 1vw);
      width: 100%;

      padding: calc(0.5vh + 1vw);
      font-size: calc(0.8vh + 0.8vw + 0.2vmin);
      color: var(--black);
      position: relative;

      &:focus {
        /* border: calc(0.1vh + 0.1vw) solid var(--); */
        border: calc(0.1vh + 0.1vw) solid #000;
        background: var(--white);
        /* outline: calc(0.1vh + 0.1vw) solid var(--); */
        outline: calc(0.1vh + 0.1vw) solid #000;
      }
      &::placeholder {
        /* color: var(--); */
        color: #000;
      }
    }
  }
`;
