import React from "react";
import { Root } from './SectionTwo.styles'
import Info from "../../../component/info/info.component";
import {InfoData} from '../../../data/info.data'

class SectionTwo extends React.Component {
  state = {
    currentImageIndex: 0,
  };
  nextSlide() {
    const lastIndex = InfoData.length - 1;
    const { currentImageIndex } = this.state;
    const index = (currentImageIndex + 1) % (lastIndex + 1);

    const elm = document
      .getElementById("root")
      .querySelector('[class^="pic"],[class*=" pix"]');
    elm.className = `pic${index + 1}`;
    const newone = elm.cloneNode(true);
    elm.parentNode.replaceChild(newone, elm);

    this.setState({
      currentImageIndex: index,
    });
  }

  next(){
    this.nextSlide()
  }

  render() {

    return (
      <section id='page-2'>
        <Root>
          <Info click={()=>this.next()} data={InfoData[this.state.currentImageIndex]} />
        </Root>
      </section>
    );
  }
}

export default SectionTwo;
