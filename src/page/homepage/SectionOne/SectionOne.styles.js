import styled, { css } from "styled-components";
import image1 from "../../../images/luxery-in-bali.jpg";
import image2 from "../../../images/luxery-in-england.jpg";
import image3 from "../../../images/luxery-in-mexico.jpg";
import image4 from "../../../images/luxery-in-panama.jpg";

const pic = css`
  -webkit-animation: in 3s 0s;
  animation: in 3s 0s;
`;

const imageFormat = css`
background-repeat:no-repeat;
background-size:cover;
background-position:center;
`

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
    ${imageFormat};
    background-image:url(${image1});
    -webkit-animation: in 5s 0s;
    animation: in 5s 0s;
  }
  & .pic1 .front,
  & .pic2 .back {
    ${imageFormat};
    background-image: url(${image1});
  }
  & .pic1.init .back {
    background-image: none;
  }
  & .pic2 .front,
  & .pic3 .back {
    ${imageFormat};
    background-image: url(${image2});
  }
  & .pic3 .front,
  & .pic4 .back {
    ${imageFormat};
    background-image: url(${image3});
  }
  & .pic4 .front,
  & .pic1 .back {
    ${imageFormat};
    background-image: url(${image4});
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
