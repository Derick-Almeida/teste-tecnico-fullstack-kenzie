import styled from "styled-components";

export const ThemeDashboard = styled.main`
  min-height: 100vh;
  min-width: 100%;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  > nav {
    position: absolute;
    right: calc(10vh + 10vw);
    top: calc(2vh + 2vw);

    > button {
      width: fit-content;
      padding: calc(0.2vh + 0.2vw) calc(0.4vh + 0.4vw);
    }
  }
`;

export const ThemeList = styled.div`
  min-width: 40%;
  min-height: 55vh;

  > h2 {
    font-size: calc(1.3vh + 1.3vw + 1vmin);
    color: var(--pink-1);
    text-shadow: calc(0.05vh + 0.05vw) 0 calc(0.1vh + 0.1vw) var(--pink-2),
      0 calc(0.05vh + 0.05vw) calc(0.1vh + 0.1vw) var(--pink-2),
      calc(-0.05vh + -0.05vw) 0 calc(0.1vh + 0.1vw) var(--pink-2),
      0 calc(-0.05vh + -0.05vw) calc(0.1vh + 0.1vw) var(--pink-2),
      calc(-0.15vh + -0.15vw) calc(0.15vh + 0.15vw) calc(0.25vh + 0.25vw) var(--black);
    text-align: center;
    margin-bottom: calc(1.5vh + 1.5vw);
  }

  > ul {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    gap: calc(1vh + 1vw);

    max-height: 60vh;
    overflow-y: auto;
    padding-top: calc(0.3vh + 0.3vw);
    padding-bottom: calc(1vh + 1vw);

    &::-webkit-scrollbar {
      width: calc(0.5vh + 0.5vw);
    }

    &::-webkit-scrollbar-thumb {
      background: var(--pink-1);
      border-radius: calc(1vh + 1vw);

      &:hover {
        background: var(--pink-2);
      }
    }

    > li {
      width: 90%;
      display: flex;
      align-items: center;
      padding-left: calc(0.5vh + 0.5vw);

      > span {
        font-size: calc(0.8vh + 0.8vw + 0.5vmin);
        font-weight: bold;
        padding: 0 calc(0.3vh + 0.3vw);
        margin-left: calc(0.5vh + 0.5vw);

        border-radius: 50%;
        background: var(--pink-1);
        color: var(--white);
        cursor: pointer;

        &:hover {
          background: var(--pink-2);
        }
      }
    }
  }
`;
