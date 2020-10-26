import React, { useEffect, useState } from "react";
import {
  MainSection,
  SecondarySection,
  Titles,
  PrimaryTitle,
  SecondaryTitle,
  Img,
} from ".././styling/Main";
import { ImgInfoSection } from "../styling/RoverInfo";
import axios from "axios";

const MarsRover: React.FC = () => {
  const [UIimg, setImg] = useState<string>("");
  useEffect(() => {
    console.log(1);
  }, []);

  const generatePhoto = async () => {
    try {
    } catch (error) {}
  };
  return (
    <div>
      <Titles>
        <PrimaryTitle>NASA</PrimaryTitle>
        <SecondaryTitle>Welcome to the Mars Rover</SecondaryTitle>
      </Titles>
      <MainSection>
        <SecondarySection>
          <ImgInfoSection>
            <div></div>
          </ImgInfoSection>
          <Img>
            <img src="http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631300503690C00_DXXX.jpg" />
          </Img>
          <ImgInfoSection>
            <div></div>
          </ImgInfoSection>
        </SecondarySection>
      </MainSection>
    </div>
  );
};

export default MarsRover;
