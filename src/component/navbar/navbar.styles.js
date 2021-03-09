import styled, { css } from "styled-components";
import Bars from "../../images/bars.svg";

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;
const background = css`
  background-color: #c69963;
`;
const mobileMenuAnimation = css`
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  position: fixed;
  top: 0;
  right: 0;
  background-image: radial-gradient(#c69963, #c69963);
  z-index: 100;
  transform:scale(50);
`;

const DropDownMenu = css`
display:flex;
z-index:500 ;
display: flex;
flex-direction: column;
z-index:500 ;
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%)
`
const DropDownMenuItems = css`
padding:50px;
font-size:30px;
`

const HideDropDownMenu = css`
display:none;
`
const DropDownItems = ({toggle}) => {
if(toggle){
  return DropDownMenuItems
}
}

const animation = ({ toggle }) => {
  if (toggle) {
    return mobileMenuAnimation;
  }
};
const check = ({ boolean }) => {
  if (boolean) {
    return background;
  }
};

const hide = ({toggle}) => {
  if(toggle) {
    return DropDownMenu
  }
  return HideDropDownMenu
}

export const DropDown = styled.div`
  ${animation}
`;

export const Nav = styled.nav`
   height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  ${check};
`;

export const Logo = styled.a`
  ${NavLink}
  font-style:italic;
`;

export const MenuBars = styled.i`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    background-image: url(${Bars});
    background-size: contain;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
    z-index: 1000;
  }
`;
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
   ${hide}
  }
`;

export const NavMenuLinks = styled.a`
  ${NavLink}
  transition: 0.2 ease-in-out;
  ${DropDownItems}

  &:hover {
    color: #000d1a;
  }
`;

export const NavBtn = styled.div`
  align-items: center;
  margin-right: 24px;
  z-index: 100;
`;
