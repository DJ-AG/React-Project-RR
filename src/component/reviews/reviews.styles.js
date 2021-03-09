import styled from "styled-components";
import backgroundimage from "../../images/back.jpg";
import { Heading3, Heading2 } from "../../global/typogragphy.styles";

export const Story = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        @media only screen and (max-width: 50em) {
          flex-direction:column}
`;

export const Text = styled.p`
  font-size: 1.5rem;
  font-style: italic;
  margin-bottom: 4rem;
`;

export const StoryImageOne = styled.img`
  width: 100%;
  grid-row: 2 / 6;
  grid-column: 2 / 6;
  box-shadow: 0 2rem 5rem rgba(#000, 0.1);

  @media only screen and (max-width: 768px) {
    grid-column: 1 / 5;
    grid-row: 1 / -1;
    width: 150%;
  }
`;

export const StoryImageTwo = styled.img`
  width: 115%;
  grid-row: 4 / 6;
  grid-column: 4 / 7;
  z-index: 20;
  box-shadow: 0 2rem 5rem rgba(#000, 0.2);

  @media only screen and (max-width: 768px) {
    grid-row: 1 / -1;
    width: 150%;
  }
`;
export const StoryPicture = styled.div`
  background-color: #c69963;
  background-image: linear-gradient(
          rgba(198, 153, 99, 0.5), 
          rgba(198, 153, 99, 0.5)
          ),url(${backgroundimage});
  background-size: cover;

  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: repeat(6, 1fr);
  align-items: center;

  @media only screen and (max-width: 768px) {
    grid-column: 1 / -1;
    padding: 6rem;
  }
`;

export const StoryContent = styled.div`
  background-color: #f9f7f6;
  grid-column: col-start 5 / full-end;
  padding: 6rem 8vw;
  display: grid;
  align-content: center;
  justify-items: start;

  @media only screen and (max-width: 768px) {
    grid-column: 1 / -1;
    grid-row: 5 / 6;
  }
`;
export const H3 = styled.h3`
  ${Heading3}
`;

export const H2 = styled.h2`
  ${Heading2}
`;
