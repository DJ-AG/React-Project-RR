import React from "react";
import { Root } from "./SectionOne.styles";
import ImageSlides from "../../../component/ImageSlider/ImageSlider.component";
import { imageData } from "../../../data/imageData";

class SectionOne extends React.Component {
  state = {
    currentImageIndex: 0,
  };
  nextSlide() {
    const lastIndex = imageData.length - 1;
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

  componentDidMount() {
    this.interval = setInterval(() => {
      this.nextSlide(); //this function change the index state.
    }, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <section id='page-1'>
        <Root>
          <ImageSlides toggle={this.props.toggle}data={imageData[this.state.currentImageIndex]} />
        </Root>
      </section>
    );
  }
}

export default SectionOne;
