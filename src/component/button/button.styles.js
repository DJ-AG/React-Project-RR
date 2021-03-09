import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const normalWidth = css`
  max-width: 200px;
`;

const smallWidth = css`
  max-width: 160px;
`;

const getButtonStyles = (props) => {
  if (props.isSmall) {
    return smallWidth;
  }
  return normalWidth;
};

const Primary = css`
  background: ${({ primary }) => (primary ? "#000d1a" : "CD853F")};
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 100px;
  ${getButtonStyles}
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display:flex;
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => (big ? "16px 40px" : "14px 24px")};
  color: ${({ primary }) => (primary ? "#fff" : "#000d1a")};
  font-size: ${({ big }) => (big ? "20px" : "14px")};
`;

const Secondary = css`
  background-color: #c69963;
  color: #fff;
  border: none;
  border-radius: 0;
  font-size: 1.2rem;
  text-transform: uppercase;
  padding: 1.8rem 3rem;
  cursor: pointer;
  transition: all 0.2s;
  text-align: center;
  text-decoration: none;
`;
const ButtonStyle = (props) => {
  if (props.primary) {
    return Primary;
  }
  if (props.secondary) {
    return Secondary;
  }
};

export const Btn = styled(Link)`
  ${ButtonStyle}

  &:hover {
    transform: translateY(-2px);
  }
`;
