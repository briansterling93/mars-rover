import React, { useContext } from "react";
import { StateContext } from "../context/StateContext";
import axios from "axios";

const RoverStatus: React.FC = () => {
  const { state } = useContext<any>(StateContext);
  const { rover_status, landing_date } = state;
  return (
    <div>
      <div>Mission Status: {rover_status}</div>
      <div>{`Landing Date: ${landing_date}`}</div>
    </div>
  );
};

export default RoverStatus;
