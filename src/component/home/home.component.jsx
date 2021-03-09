import React from "react";
import HomeData from "../../data/homeData";
import {
  HomeWrap,
  HomeItem,
  HomeTitle,
  HomeImage,
  HomeContainer,
  Location,
  Rooms,
  Area,
  Price,
  HomeFlex,
} from "./home.styles";
import Button from "../button/button.component";

const Home = () => (
  <HomeWrap>
    {HomeData.map((home, index) => {
      return (
        <HomeFlex key={index}>
          <HomeContainer>
            <HomeImage src={home.img} />
            <HomeTitle>{home.name}</HomeTitle>
            <HomeItem>
              <Location>{home.location}</Location>
              <Rooms>{home.rooms}</Rooms>
              <Area>{home.size}</Area>
              <Price>{home.price}</Price>
            </HomeItem>
            <Button secondary="true">Contact us</Button>
          </HomeContainer>
          </HomeFlex>
      );
    })}
  </HomeWrap>
);

export default Home;
