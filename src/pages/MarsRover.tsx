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
  RoverName,
  CameraName,
  SolName,
} from "../styling/RoverInfo";
import axios from "axios";
import { saveAs } from "file-saver";
const FileSaver = require("file-saver");

const MarsRover: React.FC = () => {
  const [UIimg, setImg] = useState<any>();
  const [sol, setSol] = useState<string>("");
  const [camera, setCamera] = useState<string>("");
  const [roverName, setRoverName] = useState<string>("");
  const [ImgSrc, setImgSrc] = useState<string>("");
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

      let roverOptions = ["curiosity", "spirit", "opportunity"];

      let roverSelect = Math.floor(
        Math.random() * Math.max(roverOptions.length)
      );

      let selectedRover = roverOptions[roverSelect];

      const res = await axios.get(
        "https://api.nasa.gov/mars-photos/api/v1/rovers/" +
          selectedRover +
          "/photos?sol=" +
          num +
          "&api_key=KZX9PpEIMHEif2zp8lSwraPyImPQFV9VqgtaPHxE"
      );

      const count = Math.floor(
        Math.random() * Math.max(res.data.photos.length)
      );

      const rover = res.data.photos[count];

      console.log(rover);

      setImgSrc(rover.img_src);
      setRoverName(`The ${rover.rover.name} Rover`);
      setImg(<img src={rover.img_src} />);
      setCamera(`Lens: ${rover.camera.full_name}`);
      setSol(`Sol Day: ${rover.sol}`);

      console.log(ImgSrc);
    } catch (error) {}
  };

  const imgDownload = () => {
    let path = ImgSrc;
    let fileName = "rover img";

    saveAs(path, fileName);
  };
  return (
    <div>
      <Titles>
        <PrimaryTitle>NASA</PrimaryTitle>
        <SecondaryTitle>The Mars Rover</SecondaryTitle>
      </Titles>
      <MainSection>
        <ImgInfoSection>
          <RoverName>{roverName}</RoverName>
          <CameraName>{camera}</CameraName>
          <SolName>{sol}</SolName>
        </ImgInfoSection>
        <SecondarySection>
          <Img>{UIimg}</Img>
        </SecondarySection>

        <ImgBtns>
          <DownloadBtn>
            <button onClick={imgDownload}>Download</button>
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
