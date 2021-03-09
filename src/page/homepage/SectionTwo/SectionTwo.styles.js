import styled, { css } from "styled-components";

const pic = css`
  -webkit-animation: in 3s 0s;
  animation: in 3s 0s;
`;

export const Root = styled.div`
  & .front,
  & .back {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  & .front {
    z-index: 2;
    opacity: 0;
  }
  & .back {
    z-index: 1;
    opacity: 1;
  }
  & ${pic} .front,
  & ${pic} .front {
    -webkit-animation: in 5s 0s;
    animation: in 5s 0s;
  }
  @-webkit-keyframes in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
