import styled from "styled-components";

export const ThemeButton = styled.button`
  border: calc(0.1vh + 0.1vw) solid var(--pink-2);
  border-radius: calc(0.3vh + 0.3vw);
  width: 50%;
  padding: calc(0.5vh + 0.5vw);
  background: var(--white);
  font-size: calc(1vh + 1vw);
  transition: background 0.4s;

  &:hover,
  &:focus {
    background: var(--pink-2);
    color: var(--white);
  }
`;
