import styled, { keyframes } from "styled-components";

const showModal = keyframes`
from {
    transform: scale(0);
    opacity: 0;
}
to {
    transform: scale(1);
    opacity: 1;
}
`;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  position: fixed;
  background: var(--background-modal);
  z-index: 999;

  display: flex;
  justify-content: center;
  align-items: center;

  > .modalBox {
    position: relative;
    background: var(--white);
    border-radius: calc(0.5vw + 0.5vh);
    overflow: hidden;
    text-align: center;
    width: calc(25vw + 25vh);
    padding: calc(1.5vw + 1.5vh);

    animation: ${showModal} 0.3s linear;
    transition: 0.3s;

    > svg {
      position: absolute;
      right: calc(0.5vw + 0.5vh);
      top: calc(0.5vw + 0.5vh);
      color: var(--pink-1);
      font-size: calc(1vw + 1vh + 0.5vmin);

      &:hover {
        cursor: pointer;
        color: var(--pink-2);
      }
    }

    > h2 {
      margin-bottom: calc(1.2vh + 1.2vw);
      font-size: calc(1.3vh + 1.3vw + 1vmin);
      color: var(--pink-1);
      text-shadow: calc(0.05vh + 0.05vw) 0 calc(0.1vh + 0.1vw) var(--pink-2),
        0 calc(0.05vh + 0.05vw) calc(0.1vh + 0.1vw) var(--pink-2),
        calc(-0.05vh + -0.05vw) 0 calc(0.1vh + 0.1vw) var(--pink-2),
        0 calc(-0.05vh + -0.05vw) calc(0.1vh + 0.1vw) var(--pink-2),
        calc(-0.15vh + -0.15vw) calc(0.15vh + 0.15vw) calc(0.25vh + 0.25vw) var(--black);
    }

    > div {
      margin: 0 auto;
    }
  }
`;
