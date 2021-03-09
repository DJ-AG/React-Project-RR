import styled from "styled-components";

export const FooterWrapper = styled.div`
  background-color: #c69963;
  padding: 8rem;
  @media only screen and (max-width: 50em) {
    padding:4rem;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
  flex-direction:column;
  }
`;
export const FooterButton = styled.p`
  margin-left: 4rem;
  @media only screen and (max-width: 768px) {
    margin-left:unset;
    padding-bottom:5px;
  }
`;
export const CopyRight = styled.p`
  font-size: 1.4rem;
  color: whitesmoke;
  margin-top: 6rem;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  width: 70%;
  @media only screen and (max-width: 50em) {
    font-size: .8rem;
    width:100%;
  }
`;
