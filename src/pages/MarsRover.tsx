import React, { useEffect, useState } from "react";
import {
  MainSection,
  SecondarySection,
  Titles,
  PrimaryTitle,
  SecondaryTitle,
  Img,
} from ".././styling/Main";
import {
  ImgInfoSection,
  ImgBtns,
  DownloadBtn,
  NextBtn,
} from "../styling/RoverInfo";
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
        <SecondaryTitle>The Mars Rover</SecondaryTitle>
      </Titles>
      <MainSection>
        <ImgInfoSection>
          <div>Rover Name: dsdsd</div>
          <div>Rover Camera: dsdsd</div>
        </ImgInfoSection>
        <SecondarySection>
          <Img>
            <img src="http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044630930405190E01_DXXX.jpg" />
          </Img>
          <ImgBtns>
            <div></div>
          </ImgBtns>
        </SecondarySection>

        <ImgBtns>
          <DownloadBtn>
            <button>Download Image</button>
          </DownloadBtn>
          <NextBtn>
            <button>Next Photo</button>
          </NextBtn>
        </ImgBtns>
      </MainSection>
    </div>
  );
};

export default MarsRover;
