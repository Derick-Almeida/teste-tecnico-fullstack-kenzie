import styled from "styled-components";

export const ThemeMenu = styled.nav`
  display: flex;
  align-items: center;
  gap: calc(1vh + 1vw);

  > p {
    color: var(--pink-2);
    font-weight: 600;
    font-size: calc(1vh + 1vw + 0.5vmin);
    border-bottom: calc(0.1vh + 0.1vw) solid transparent;

    &:hover {
      cursor: pointer;
      border-bottom: calc(0.1vh + 0.1vw) solid var(--pink-2);
    }
  }

  > div {
    top: 0;
    left: 0;
  }
`;
