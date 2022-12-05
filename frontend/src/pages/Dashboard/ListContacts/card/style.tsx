import styled from "styled-components";

export const ThemeCard = styled.div`
  border-radius: calc(0.5vh + 0.5vw);
  border: calc(0.05vh + 0.05vw) solid var(--pink-2);
  background: var(--white);

  display: flex;
  flex-direction: column;

  transition: 0.4s;
  width: 100%;
  padding: calc(0.3vh + 0.3vw);
  text-align: center;

  &:hover {
    cursor: pointer;
    box-shadow: calc(-0.2vh + -0.2vw) calc(0.2vh + 0.2vw) calc(0.6vh + 0.6vw) var(--pink-1),
      1px 1px 1px var(--pink-2) inset;
    transform: scale(1.02);
  }

  > h3 {
    color: var(--pink-2);
    font-size: calc(1vh + 1vw + 1vmin);
    margin-bottom: calc(0.3vh + 0.3vw);
  }

  > p {
    font-size: calc(0.6vh + 0.6vw + 0.5vmin);
    font-weight: 400;
    color: var(--black);
  }
`;
