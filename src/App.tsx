import React from "react";
import ReactDOM from "react-dom";
import MarsRover from "./pages/MarsRover";
import { createGlobalStyle } from "styled-components";
import { MainSection } from "./styling/Main";

const Universal = createGlobalStyle`
  body {
    padding: .3rem;
    box-sizing: none;
    margin: 0;
    background-color: black;
    font-family: "Segoe UI";
    input {
      font-family: "Segoe UI"; 
    }
  }
`;

const App = () => {
  return (
    <div>
      <Universal />
      <MarsRover />
    </div>
  );
};

export default App;
