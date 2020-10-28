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
  const [sol, setSol] = useState<string>("");
  const [camera, setCamera] = useState<string>("");
  useEffect(() => {
    generatePhoto();
  }, []);

  const generatePhoto = async () => {
    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };

      let num = Math.floor(Math.random() * Math.max(1000));

      const res = await axios.get(
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol= " +
          num +
          "&api_key=KZX9PpEIMHEif2zp8lSwraPyImPQFV9VqgtaPHxE"
      );

      const count = Math.floor(
        Math.random() * Math.max(res.data.photos.length)
      );

      const rover = res.data.photos[count];
      console.log(rover);

      await setImg(rover.img_src);
      await setCamera(rover.camera.full_name);
      await setSol(`Sol Day: ${rover.sol}`);
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
          <div>The Curiosity Rover</div>
          <div>{camera}</div>
          <div>{sol}</div>
        </ImgInfoSection>
        <SecondarySection>
          <Img>
            <img src={UIimg} />
          </Img>
        </SecondarySection>

        <ImgBtns>
          <DownloadBtn>
            <button>Download Image</button>
          </DownloadBtn>
          <NextBtn>
            <button onClick={generatePhoto}>Next Photo</button>
          </NextBtn>
        </ImgBtns>
      </MainSection>
    </div>
  );
};

export default MarsRover;
