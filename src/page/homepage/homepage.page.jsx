import React, {useState} from 'react'
import SectionOne from "./SectionOne/SectionOne.component";
import SectionTwo from "./SectionTwo/SectionTwo.component";
import SectionThree from './SectionThree/SectionThree.component'
import GlobalSettings from "../../global/global.styles";
import NavBar from "../../component/navbar/navbar.component";
import SectionFour from "./SectionFour/SectionFour.component";
import SectionFive from "./SectionFive/SectionFive.component";

const HomePage = () => {
  const [toggle, setToggle] = useState(false);

  const toggleChange = () => {
    setToggle(!toggle)
  }
  console.log(toggle)
  return (
    <div>
      <GlobalSettings />
      <NavBar  toggleChange={()=> toggleChange()} toggle={toggle}/>
      <SectionOne toggle={toggle}/>
      <SectionTwo />
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
    </div>
  );
};

export default HomePage;
