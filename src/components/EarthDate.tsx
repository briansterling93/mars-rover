import React, { useContext } from "react";
import { StateContext } from "../context/StateContext";
import axios from "axios";

const EarthDate: React.FC = () => {
  const { state } = useContext<any>(StateContext);
  const { earth_date, launch_date } = state;
  return (
    <div>
      <div>{`Earth Date: ${earth_date}`}</div>
      <div>{`Launch Date: ${launch_date}`}</div>
    </div>
  );
};

export default EarthDate;
