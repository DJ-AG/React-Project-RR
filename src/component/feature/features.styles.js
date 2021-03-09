import styled from "styled-components";

import { Heading4 } from '../../global/typogragphy.styles'

export const FeatureContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 25px;
  grid-row-gap: 25px;
  padding:50px 15rem 10rem 15rem;
  width:100%;
  @media only screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 1rem 7rem 1rem;
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 1rem 7rem 1rem;
  }
`;


export const Text = styled.p`
font-family: 'Josefin Sans', sans-serif;
margin-top:20px;
`
export const FeatureBox = styled.div`
max-width:100%;
`
export const H4 = styled.h4`
${Heading4}
`