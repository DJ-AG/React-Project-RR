import styled, { css } from "styled-components";

const paragraph = css`
  font-size: 1.5rem;
  margin-left: 2rem;
  display: flex;
  align-items: center;
`;

export const HomeWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding:100px;
  @media only screen and (max-width: 1300px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 1rem 7rem 1rem;
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: unset;
  }
`;
export const HomeFlex = styled.div`
  display: flex;
  max-width:33.33%;
  padding: 20px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
`;

export const HomeItem = styled.div`
  background-color: #f9f7f6;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 3.5rem;
  text-align: center;
  z-index: 1;
`;

export const HomeTitle = styled.h3`
  grid-row: 1 / 2;
  grid-column: 1 / -1;
  justify-self: center;
  align-self: end;
  z-index: 3;
  width: 80%;
  font-size: 1.3rem;
  text-align: center;
  padding: 1.25rem;
  background-color: black;
  color: #fff;
  font-weight: 400;
  transform: translateY(50%);
`;

export const HomeImage = styled.img`
  width: 100%;
  grid-row: 1 / 2;
  grid-column: 1 / -1;
  z-index: 1;
`;
export const Location = styled.p`
  margin-top: 2.5rem;
  ${paragraph}
`;
export const Rooms = styled.p`
  margin-top: 2.5rem;
  ${paragraph}
`;

export const Area = styled.p`
  ${paragraph}
`;

export const Price = styled.p`
  ${paragraph}
`;
