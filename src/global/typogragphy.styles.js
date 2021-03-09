import styled, { css } from "styled-components";

const headingExtended = css`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 400;
`;

export const Heading1 = styled.h3`
  ${headingExtended}
  font-size: 4.5rem;
  color: #f9f7f6;
  line-height: 1;
`;
export const Heading2 = styled.h3`
  ${headingExtended}
  font-size: 4rem;
  font-style: italic;
  line-height: 1;
`;

export const Heading3 = styled.h3`
  ${headingExtended}
  font-size: 1.6rem;
  color: $color-primary;
  text-transform: uppercase;
`;

export const Heading4 = styled.h3`
  ${headingExtended}
  font-size: 1.9rem;
`;
