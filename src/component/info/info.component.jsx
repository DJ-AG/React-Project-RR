import React from "react";
import Button from "../button/button.component";

import { Container, ColumLeft, ColumRight, Section } from "./info.styles";

const InfoSections = ({ data, click }) => {
  const { heading, paragraphFirst, paragraphSecond, buttonLabel, image } = data;
  return (
    <Section>
      <div className={`pic${data} init`}>
        <Container>
          <ColumLeft>
            <h1>{heading}</h1>
            <p>{paragraphFirst}</p>
            <p>{paragraphSecond}</p>
            <Button onClick={click} primary="true">
              {buttonLabel}
            </Button>
          </ColumLeft>
          <ColumRight>
            <img src={image} alt="house" />
          </ColumRight>
        </Container>
        <div className="front"></div>
        <div className="back"></div>
      </div>
    </Section>
  );
};

export default InfoSections;
