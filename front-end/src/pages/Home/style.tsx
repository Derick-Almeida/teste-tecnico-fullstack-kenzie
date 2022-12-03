import styled from "styled-components";
import bg from "../../assets/background.jpg";

interface IProps {
  formActive?: boolean;
}

export const ThemeHome = styled.main`
  min-width: 100%;
  min-height: 100vh;
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--white) url(${bg}) no-repeat center;
  background-size: cover;
`;

export const Container = styled.div`
  box-shadow: calc(-0.2vh + -0.2vw) calc(0.2vh + 0.2vw) calc(0.6vh + 0.6vw) var(--pink-1),
    1px 1px 1px var(--pink-2) inset;
  overflow: hidden;
  border-radius: calc(0.5vh + 0.5vw);
  border: calc(0.05vh + 0.05vw) solid var(--pink-2);
  width: fit-content;
  overflow: hidden;
  max-height: 80vh;

  > .buttons {
    display: flex;
    width: calc(20vw + 20vh);

    > button {
      border: none;
      border-bottom: calc(0.07vh + 0.07vw) solid var(--pink-2);
      border-radius: 0;

      &:nth-child(1) {
        background: ${({ formActive }: IProps) => (formActive ? "var(--pink-1)" : "var(--white)")};
        color: ${({ formActive }: IProps) => (formActive ? "var(--white)" : "var(--black)")};
      }

      &:nth-child(2) {
        background: ${({ formActive }: IProps) => (!formActive ? "var(--pink-1)" : "var(--white)")};
        color: ${({ formActive }: IProps) => (!formActive ? "var(--white)" : "var(--black)")};
      }

      &:hover {
        background: var(--pink-2);
        color: var(--white);
      }
    }
  }
`;

export const ThemeForm = styled.div`
  min-height: calc(15vw + 15vh);
  max-height: 70vh;
  width: calc(20vw + 20vh);

  text-align: center;
  overflow-y: auto;
  background: var(--white);
  padding: calc(1.4vh + 1.4vw);

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

  > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: calc(1vh + 1vw);

    > div:nth-child(3) {
      margin-top: calc(-0.8vh + -0.8vw);
    }
  }
`;
