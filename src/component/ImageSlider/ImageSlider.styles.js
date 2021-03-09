import styled from "styled-components";
import { IoMdArrowRoundForward } from "react-icons/io";

export const ImageSliderSection = styled.div`
  height: 100vh;
  max-height: 100%;
  position: relative;
  overflow: hidden;
`;
export const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0;
`;
export const ImageSliderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

export const ImageSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.9;
  }
`;

export const ImageSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ImageContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% - 100px);
  color: #fff;
  h1 {
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    text-align: left;
    margin-bottom: 0.8rem;
  }
  p {
    margin-bottom: 1.2rem;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  }
`;
export const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 0.5rem;
`;
export const Center = styled.div`
position:absolute;
top:55%;
left:3%;
z-index:100;
@media screen and (max-width: 768px) {
  top:60%;
  left:10%;
  z-index:20;
}
`