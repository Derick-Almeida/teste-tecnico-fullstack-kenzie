import styled from "styled-components";

export const Container = styled.div`
  > .extraInputs {
    display: flex;
    align-items: center;
    position: relative;

    > span {
      position: absolute;
      right: calc(-1vh + -1vw);
      font-size: calc(0.8vh + 0.8vw + 0.5vmin);
      font-weight: bold;
      color: var(--pink-1);

      &:hover {
        color: var(--pink-2);
        cursor: pointer;
      }
    }
  }

  > div {
    margin-bottom: calc(1vh + 1vw);
  }

  > p {
    color: var(--pink-1);
    text-align: right;
    margin: calc(-0.7vh + -0.7vw) 0 0 0;
    font-size: calc(0.7vh + 0.7vw + 0.2vmin);
  }

  > span {
    cursor: pointer;
    background: var(--pink-1);
    color: var(--white);
    padding: calc(0.3vh + 0.3vw);
    border-radius: calc(0.3vh + 0.3vw);
    float: right;
    margin-top: calc(-0.8vh + -0.8vw);
    font-size: calc(0.6vh + 0.6vw + 0.4vmin);

    &:hover {
      background: var(--pink-2);
    }
  }
`;
