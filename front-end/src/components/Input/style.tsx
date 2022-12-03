import styled from "styled-components";

export const ThemeInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: calc(0.5vh + 0.5vw + 0vmin);
  position: relative;

  > div {
    display: flex;
    align-items: center;
    position: relative;

    > svg {
      position: absolute;
      z-index: 9;
      left: calc(0.5vh + 0.5vw);

      color: var(--pink-2);
      font-size: calc(1vh + 1vw + 0.3vmin);
    }

    > input {
      background: var(--white);
      border: calc(0.1vh + 0.1vw) solid var(--pink-1);
      border-radius: calc(0.3vh + 0.3vw);
      height: calc(4vh + 1vw);
      width: 100%;

      padding: calc(0.5vh + 1vw);
      padding-left: calc(2vh + 2vw);
      font-size: calc(0.8vh + 0.8vw + 0.2vmin);
      color: var(--black);
      position: relative;

      &:focus {
        border: calc(0.1vh + 0.1vw) solid var(--pink-2);
        background: var(--white);
      }

      &::placeholder {
        color: var(--pink-1);
      }
    }
  }
`;
