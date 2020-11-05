import React, { useEffect, useState, useContext } from "react";
import {
  MainSection,
  SecondarySection,
  Titles,
  PrimaryTitle,
  SecondaryTitle,
  Img,
} from ".././styling/Main";
import {
  StateContext,
  initialState,
  APP_ACTIONS,
} from "../context/StateContext";
import {
  ImgInfoSection,
  ImgInfoSection2,
  ImgBtns,
  DownloadBtn,
  NextBtn,
  RoverName,
  CameraName,
  SolName,
} from "../styling/RoverInfo";
import axios from "axios";
import { saveAs } from "file-saver";
import EarthDate from "../components/EarthDate";
import RoverStatus from "../components/RoverStatus";

const MarsRover: React.FC = () => {
  const [UIimg, setImg] = useState<any>();
  const [sol, setSol] = useState<string>("");
  const [camera, setCamera] = useState<string>("");
  const [roverName, setRoverName] = useState<string>("");
  const [ImgSrc, setImgSrc] = useState<string>("");
  const { state, dispatch } = useContext<any>(StateContext);
  const { apiUrl } = state;
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

      // update earth date component (earth date)
      await dispatch({
        type: APP_ACTIONS.UPDATE_EARTH_DATE,
        payload: rover.earth_date,
      });

      // update rover info component (landing date)
      await dispatch({
        type: APP_ACTIONS.UPDATE_LANDING_DATE,
        payload: rover.rover.landing_date,
      });

      // update rover info component (landing date)
      await dispatch({
        type: APP_ACTIONS.UPDATE_LAUNCH_DATE,
        payload: rover.rover.launch_date,
      });

      // update rover info component (rover current status)
      await dispatch({
        type: APP_ACTIONS.UPDATE_ROVER_STATUS,
        payload: rover.rover.status,
      });

      setImgSrc(rover.img_src);
      setRoverName(`The ${rover.rover.name} Rover`);
      setImg(<img src={rover.img_src} />);
      setCamera(`Lens: ${rover.camera.full_name}`);
      setSol(`Sol Day: ${rover.sol}`);
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
        <ImgInfoSection2>
          <EarthDate />

          <RoverStatus />
        </ImgInfoSection2>
        <SecondarySection>
          <Img>{UIimg}</Img>
        </SecondarySection>

        <ImgBtns>
          <DownloadBtn>
            <button onClick={imgDownload}>Download</button>
          </DownloadBtn>
          <NextBtn>
            <button onClick={generatePhoto}>Next</button>
          </NextBtn>
        </ImgBtns>
      </MainSection>
    </div>
  );
};

export default MarsRover;
