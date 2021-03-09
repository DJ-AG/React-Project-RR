import React from "react";
import {
  ImageSliderSection,
  ImageSliderWrapper,
  ImageSlider,
  ImageSlide,
  ImageContent,
  Arrow,
  Center
} from "./ImageSlider.styles";

import Button from "../button/button.component";

const ImageSlides = ({ data, toggle }) => {
  const { price, title, path, label } = data;
  console.log(data);

  return (
    <div>
      <ImageSliderSection>
        <ImageSliderWrapper>
          <ImageSlide>
            <ImageSlider>
              <div className={`pic${data} init`}>
                <div className="front"></div>
                <div className="back"></div>
              </div>
              <ImageContent>
                <h1>{title}</h1>
                <p>{price}</p>
              </ImageContent>
            </ImageSlider>
          </ImageSlide>
        </ImageSliderWrapper>
      </ImageSliderSection>
      <Center hide={toggle}>
      <Button to={path} primary="true">
      {label}
      <Arrow />
    </Button>
      </Center>
    </div>
  );
};

export default ImageSlides;
