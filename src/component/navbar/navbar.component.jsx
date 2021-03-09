import React, { useState } from "react";
import { menuData } from "../../data/menu.data";
import Button from "../button/button.component";
import {
  NavBtn,
  Nav,
  Logo,
  MenuBars,
  NavMenu,
  NavMenuLinks,
  DropDown
} from "./navbar.styles";

const Navbar = ({toggleChange, toggle}) => {
  const [navbar, setNavBar] = useState(true);

  const changeBackground = () => {
    if (window.scrollY >= 800) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <Nav boolean={navbar}>
      <Logo href="#page-1">ROYALTY RETREAT</Logo>
      <MenuBars onClick={()=> toggleChange()} />
      <DropDown toggle={toggle}>
      
      </DropDown>
      <NavMenu toggle={toggle}>
        {menuData.map((data, index) => {
          return (
            <NavMenuLinks  toggle={toggle} href={data.link} key={index}>
              {data.title}
            </NavMenuLinks>
          );
        })}
        <NavBtn>
          <Button to="/contact" children="Contact Us" primary="true" toggle={toggle}/>
        </NavBtn>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
